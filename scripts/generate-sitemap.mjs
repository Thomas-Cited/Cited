import { readFileSync, writeFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT_DIR = resolve(__dirname, '..')

const BASE_URL = 'https://citedagency.com'

const STATIC_PAGES = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/services', priority: '0.9', changefreq: 'monthly' },
  { path: '/pricing', priority: '0.9', changefreq: 'monthly' },
  { path: '/ai-readiness', priority: '0.8', changefreq: 'monthly' },
  { path: '/schema-audit', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog', priority: '0.7', changefreq: 'weekly' },
  { path: '/faq', priority: '0.6', changefreq: 'monthly' },
  { path: '/contact', priority: '0.6', changefreq: 'monthly' },
  { path: '/about', priority: '0.6', changefreq: 'monthly' },
  { path: '/legal', priority: '0.3', changefreq: 'yearly' },
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

  if (slugs.length === 0) {
    throw new Error('No article slugs found in src/data/articles.ts')
  }

  return slugs
}

const TODAY = new Date().toISOString().split('T')[0]

function buildUrlEntry(loc, priority, changefreq) {
  return [
    '  <url>',
    `    <loc>${loc}</loc>`,
    `    <lastmod>${TODAY}</lastmod>`,
    `    <priority>${priority}</priority>`,
    `    <changefreq>${changefreq}</changefreq>`,
    '  </url>',
  ].join('\n')
}

function generateSitemap(slugs) {
  const staticEntries = STATIC_PAGES.map((page) =>
    buildUrlEntry(`${BASE_URL}${page.path}`, page.priority, page.changefreq)
  )

  const articleEntries = slugs.map((slug) =>
    buildUrlEntry(`${BASE_URL}/blog/${slug}`, '0.7', 'monthly')
  )

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...staticEntries,
    ...articleEntries,
    '</urlset>',
    '',
  ].join('\n')
}

try {
  const slugs = extractSlugsFromArticlesFile()
  const sitemap = generateSitemap(slugs)
  const outputPath = resolve(ROOT_DIR, 'public/sitemap.xml')

  writeFileSync(outputPath, sitemap, 'utf-8')

  console.log(`Sitemap generated at ${outputPath}`)
  console.log(`  Static pages: ${STATIC_PAGES.length}`)
  console.log(`  Article pages: ${slugs.length}`)
  console.log(`  Total URLs: ${STATIC_PAGES.length + slugs.length}`)
} catch (error) {
  console.error('Failed to generate sitemap:', error.message)
  process.exit(1)
}
