import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { createServer } from 'node:http'
import { chromium } from 'playwright'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT_DIR = resolve(__dirname, '..')
const DIST_DIR = resolve(ROOT_DIR, 'dist')

const STATIC_ROUTES = [
  '/',
  '/services',
  '/pricing',
  '/ai-readiness',
  '/schema-audit',
  '/blog',
  '/faq',
  '/about',
  '/glossary',
  '/contact',
  '/legal',
]

function extractSlugsFromArticlesFile() {
  const articlesPath = resolve(ROOT_DIR, 'src/data/articles.ts')
  const content = readFileSync(articlesPath, 'utf-8')
  const slugRegex = /slug:\s*['"]([^'"]+)['"]/g
  const slugs = []
  let match
  while ((match = slugRegex.exec(content)) !== null) {
    slugs.push(match[1])
  }
  return slugs
}

function createStaticServer(port) {
  const indexHtml = readFileSync(resolve(DIST_DIR, 'index.html'), 'utf-8')

  const server = createServer((req, res) => {
    const url = new URL(req.url, `http://localhost:${port}`)
    let filePath = resolve(DIST_DIR, url.pathname.slice(1))

    try {
      const stat = readFileSync(filePath)
      const ext = filePath.split('.').pop()
      const mimeTypes = {
        html: 'text/html',
        js: 'application/javascript',
        css: 'text/css',
        json: 'application/json',
        png: 'image/png',
        jpg: 'image/jpeg',
        svg: 'image/svg+xml',
        ico: 'image/x-icon',
        woff2: 'font/woff2',
        woff: 'font/woff',
      }
      res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' })
      res.end(stat)
    } catch {
      // SPA fallback: serve index.html for all routes
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.end(indexHtml)
    }
  })

  return new Promise((resolve) => {
    server.listen(port, () => resolve(server))
  })
}

async function prerenderRoute(page, route, baseUrl) {
  const url = `${baseUrl}${route}`
  console.log(`  Prerendering ${route}...`)

  await page.goto(url, { waitUntil: 'networkidle' })
  // Wait for React useEffect hooks (SEO meta tags, JSON-LD, animations)
  await page.waitForTimeout(800)

  const html = await page.content()

  // Determine output path: / -> dist/index.html, /blog -> dist/blog/index.html
  const outputDir = route === '/'
    ? DIST_DIR
    : resolve(DIST_DIR, route.slice(1))

  mkdirSync(outputDir, { recursive: true })
  writeFileSync(resolve(outputDir, 'index.html'), html, 'utf-8')
}

async function main() {
  const articleSlugs = extractSlugsFromArticlesFile()
  const blogRoutes = articleSlugs.map((slug) => `/blog/${slug}`)
  const allRoutes = [...STATIC_ROUTES, ...blogRoutes]

  console.log(`\nPrerendering ${allRoutes.length} routes...\n`)

  const PORT = 4173
  const baseUrl = `http://localhost:${PORT}`
  const server = await createStaticServer(PORT)

  let browser
  try {
    browser = await chromium.launch()
    const context = await browser.newContext()
    const page = await context.newPage()

    for (const route of allRoutes) {
      try {
        await prerenderRoute(page, route, baseUrl)
      } catch (err) {
        console.warn(`  Warning: Failed to prerender ${route}: ${err.message}`)
      }
    }

    await browser.close()
  } catch (err) {
    console.error(`Prerender error: ${err.message}`)
    if (browser) await browser.close()
  }

  server.close()
  console.log(`\nPrerendering complete. ${allRoutes.length} routes processed.\n`)
}

main()
