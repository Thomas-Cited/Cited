import { readFileSync, writeFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT_DIR = resolve(__dirname, '..')

const BASE_URL = 'https://citedagency.com'

function extractArticlesFromFile() {
  const articlesPath = resolve(ROOT_DIR, 'src/data/articles.ts')
  const content = readFileSync(articlesPath, 'utf-8')

  const articleBlocks = content.split(/\n\s*\{[\s\n]*slug:/).slice(1)
  const articles = []

  for (const block of articleBlocks) {
    const slugMatch = block.match(/['"]([^'"]+)['"]/)
    const titleKeyMatch = block.match(/titleKey:\s*['"]blog\.article(\d+)Title['"]/)

    if (slugMatch && titleKeyMatch) {
      articles.push({ slug: slugMatch[1], num: titleKeyMatch[1] })
    }
  }

  if (articles.length === 0) {
    throw new Error('No articles found in src/data/articles.ts')
  }

  return articles
}

function extractTranslations() {
  const enPath = resolve(ROOT_DIR, 'src/i18n/en.ts')
  const content = readFileSync(enPath, 'utf-8')

  const translations = {}
  const regex = /'(blog\.article\d+(?:Title|Excerpt|Date))':\s*'([^']*)'/g
  let match

  while ((match = regex.exec(content)) !== null) {
    translations[match[1]] = match[2]
  }

  return translations
}

function escapeXml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

function generateRss(articles, translations) {
  const now = new Date().toUTCString()

  const items = articles.map(({ slug, num }) => {
    const title = translations[`blog.article${num}Title`] || slug
    const excerpt = translations[`blog.article${num}Excerpt`] || ''
    const dateStr = translations[`blog.article${num}Date`] || ''

    const pubDate = dateStr ? new Date(dateStr).toUTCString() : now

    return [
      '    <item>',
      `      <title>${escapeXml(title)}</title>`,
      `      <link>${BASE_URL}/blog/${slug}</link>`,
      `      <guid isPermaLink="true">${BASE_URL}/blog/${slug}</guid>`,
      `      <description>${escapeXml(excerpt)}</description>`,
      `      <pubDate>${pubDate}</pubDate>`,
      '    </item>',
    ].join('\n')
  })

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
    '  <channel>',
    `    <title>Cited. Blog</title>`,
    `    <link>${BASE_URL}/blog</link>`,
    `    <description>AI Visibility, GEO, and Generative Engine Optimization insights from Cited Agency.</description>`,
    `    <language>en</language>`,
    `    <lastBuildDate>${now}</lastBuildDate>`,
    `    <atom:link href="${BASE_URL}/feed.xml" rel="self" type="application/rss+xml" />`,
    ...items,
    '  </channel>',
    '</rss>',
    '',
  ].join('\n')
}

try {
  const articles = extractArticlesFromFile()
  const translations = extractTranslations()
  const rss = generateRss(articles, translations)
  const outputPath = resolve(ROOT_DIR, 'public/feed.xml')

  writeFileSync(outputPath, rss, 'utf-8')

  console.log(`RSS feed generated at ${outputPath}`)
  console.log(`  Articles: ${articles.length}`)
} catch (error) {
  console.error('Failed to generate RSS feed:', error.message)
  process.exit(1)
}
