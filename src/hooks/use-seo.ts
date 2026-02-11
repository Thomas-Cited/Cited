import { useEffect } from 'react'
import { BASE_URL } from '../constants/seo'

interface SeoProps {
  title: string
  description: string
  path: string
  noindex?: boolean
  breadcrumbs?: Array<{ name: string; path: string }>
}

export function useSeo({ title, description, path, noindex, breadcrumbs }: SeoProps) {
  useEffect(() => {
    document.title = title

    const fullUrl = `${BASE_URL}${path}`

    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', description)
    }

    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) {
      ogTitle.setAttribute('content', title)
    }

    const ogDescription = document.querySelector('meta[property="og:description"]')
    if (ogDescription) {
      ogDescription.setAttribute('content', description)
    }

    const ogUrl = document.querySelector('meta[property="og:url"]')
    if (ogUrl) {
      ogUrl.setAttribute('content', fullUrl)
    }

    const canonical = document.querySelector('link[rel="canonical"]')
    if (canonical) {
      canonical.setAttribute('href', fullUrl)
    }

    const twitterTitle = document.querySelector('meta[name="twitter:title"]')
    if (twitterTitle) {
      twitterTitle.setAttribute('content', title)
    }

    const twitterDescription = document.querySelector('meta[name="twitter:description"]')
    if (twitterDescription) {
      twitterDescription.setAttribute('content', description)
    }

    // Hreflang (en + x-default only — no server-side fr URLs)
    const hreflangValues = ['en', 'x-default']
    hreflangValues.forEach(lang => {
      const selector = `link[hreflang="${lang}"]`
      let tag = document.querySelector(selector) as HTMLLinkElement | null
      if (!tag) {
        tag = document.createElement('link')
        tag.rel = 'alternate'
        tag.hreflang = lang
        document.head.appendChild(tag)
      }
      tag.href = fullUrl
    })

    // Noindex
    let robotsMeta = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null
    if (noindex) {
      if (!robotsMeta) {
        robotsMeta = document.createElement('meta')
        robotsMeta.name = 'robots'
        document.head.appendChild(robotsMeta)
      }
      robotsMeta.content = 'noindex, nofollow'
    } else if (robotsMeta) {
      robotsMeta.remove()
    }

    let breadcrumbScript: HTMLScriptElement | null = null
    if (breadcrumbs && breadcrumbs.length > 0) {
      const items = breadcrumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name,
        item: `${BASE_URL}${crumb.path}`,
      }))

      breadcrumbScript = document.createElement('script')
      breadcrumbScript.type = 'application/ld+json'
      breadcrumbScript.textContent = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items,
      })
      document.head.appendChild(breadcrumbScript)
    }

    return () => {
      if (breadcrumbScript) {
        document.head.removeChild(breadcrumbScript)
      }
    }
  }, [title, description, path, noindex, breadcrumbs])
}
