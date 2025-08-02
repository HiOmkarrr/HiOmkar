"use client"

import { useEffect } from "react"

const SEOHead = () => {
  useEffect(() => {
    // Update document title
    document.title = "Omkar Mondkar - Full Stack Developer | React, Node.js, Python Expert"

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Omkar Mondkar is a passionate Full Stack Developer specializing in React, Node.js, Python, and cloud technologies. View portfolio, projects, and get in touch for innovative web solutions.",
      )
    } else {
      const meta = document.createElement("meta")
      meta.name = "description"
      meta.content =
        "Omkar Mondkar is a passionate Full Stack Developer specializing in React, Node.js, Python, and cloud technologies. View portfolio, projects, and get in touch for innovative web solutions."
      document.head.appendChild(meta)
    }

    // Add comprehensive favicon support
    const addFavicon = (rel, type, sizes, href) => {
      // Remove existing favicon with same attributes
      const existing = document.querySelector(`link[rel="${rel}"][sizes="${sizes}"]`) || 
                      document.querySelector(`link[rel="${rel}"][href="${href}"]`)
      if (existing) existing.remove()
      
      const link = document.createElement("link")
      link.rel = rel
      if (type) link.type = type
      if (sizes) link.sizes = sizes
      link.href = href
      document.head.appendChild(link)
    }

    // Standard favicon
    addFavicon("icon", "image/x-icon", null, "/favicon.ico")
    
    // PNG favicons for different sizes
    addFavicon("icon", "image/png", "16x16", "/favicon-16x16.png")
    addFavicon("icon", "image/png", "32x32", "/favicon-32x32.png")
    
    // Apple Touch Icon
    addFavicon("apple-touch-icon", null, "180x180", "/apple-touch-icon.png")
    
    // Android Chrome icons
    addFavicon("icon", "image/png", "192x192", "/android-chrome-192x192.png")
    addFavicon("icon", "image/png", "512x512", "/android-chrome-512x512.png")
    
    // Web App Manifest
    const existingManifest = document.querySelector('link[rel="manifest"]')
    if (existingManifest) existingManifest.remove()
    const manifestLink = document.createElement("link")
    manifestLink.rel = "manifest"
    manifestLink.href = "/site.webmanifest"
    document.head.appendChild(manifestLink)

    // Add theme color for mobile browsers
    const addMetaTag = (name, content) => {
      const existing = document.querySelector(`meta[name="${name}"]`)
      if (existing) existing.remove()
      const meta = document.createElement("meta")
      meta.name = name
      meta.content = content
      document.head.appendChild(meta)
    }

    addMetaTag("theme-color", "#3B82F6")
    addMetaTag("msapplication-TileColor", "#1E293B")
    addMetaTag("msapplication-config", "/browserconfig.xml")

    // Add keywords meta tag
    const metaKeywords = document.querySelector('meta[name="keywords"]')
    if (metaKeywords) {
      metaKeywords.setAttribute(
        "content",
        "Omkar Mondkar, Full Stack Developer, React Developer, Node.js Developer, Python Developer, Web Developer, Portfolio, JavaScript, TypeScript, Cloud Computing, AWS, MongoDB, PostgreSQL",
      )
    } else {
      const meta = document.createElement("meta")
      meta.name = "keywords"
      meta.content =
        "Omkar Mondkar, Full Stack Developer, React Developer, Node.js Developer, Python Developer, Web Developer, Portfolio, JavaScript, TypeScript, Cloud Computing, AWS, MongoDB, PostgreSQL"
      document.head.appendChild(meta)
    }

    // Add Open Graph meta tags
    const ogTags = [
      { property: "og:title", content: "Omkar Mondkar - Full Stack Developer Portfolio" },
      {
        property: "og:description",
        content:
          "Passionate Full Stack Developer specializing in React, Node.js, Python, and cloud technologies. View my portfolio and projects.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: window.location.href },
      { property: "og:image", content: `${window.location.origin}/assets/profile-image2.jpg` },
      { property: "og:site_name", content: "Omkar Mondkar Portfolio" },
    ]

    ogTags.forEach((tag) => {
      const existingTag = document.querySelector(`meta[property="${tag.property}"]`)
      if (existingTag) {
        existingTag.setAttribute("content", tag.content)
      } else {
        const meta = document.createElement("meta")
        meta.setAttribute("property", tag.property)
        meta.content = tag.content
        document.head.appendChild(meta)
      }
    })

    // Add Twitter Card meta tags
    const twitterTags = [
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Omkar Mondkar - Full Stack Developer" },
      {
        name: "twitter:description",
        content: "Passionate Full Stack Developer specializing in React, Node.js, Python, and cloud technologies.",
      },
      { name: "twitter:image", content: `${window.location.origin}/assets/profile-image2.jpg` },
    ]

    twitterTags.forEach((tag) => {
      const existingTag = document.querySelector(`meta[name="${tag.name}"]`)
      if (existingTag) {
        existingTag.setAttribute("content", tag.content)
      } else {
        const meta = document.createElement("meta")
        meta.name = tag.name
        meta.content = tag.content
        document.head.appendChild(meta)
      }
    })

    // Add structured data (JSON-LD)
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Omkar Mondkar",
      jobTitle: "Full Stack Developer",
      description: "Passionate Full Stack Developer specializing in React, Node.js, Python, and cloud technologies",
      url: window.location.href,
      image: `${window.location.origin}/assets/profile-image2.jpg`,
      sameAs: [
        "https://www.linkedin.com/in/omkar-mondkar-83aa86255/",
        "https://github.com/HiOmkarrr/",
        "https://twitter.com/omkar_mondkar",
      ],
      knowsAbout: [
        "React",
        "Node.js",
        "Python",
        "JavaScript",
        "TypeScript",
        "Full Stack Development",
        "Cloud Computing",
        "AWS",
        "MongoDB",
        "PostgreSQL",
      ],
      alumniOf: "Pillai College of Engineering, New Panvel",
      workLocation: {
        "@type": "Place",
        name: "Remote/Global",
      },
    }

    const existingScript = document.querySelector('script[type="application/ld+json"]')
    if (existingScript) {
      existingScript.textContent = JSON.stringify(structuredData)
    } else {
      const script = document.createElement("script")
      script.type = "application/ld+json"
      script.textContent = JSON.stringify(structuredData)
      document.head.appendChild(script)
    }

    // Add canonical URL
    const canonicalLink = document.querySelector('link[rel="canonical"]')
    if (canonicalLink) {
      canonicalLink.setAttribute("href", window.location.href)
    } else {
      const link = document.createElement("link")
      link.rel = "canonical"
      link.href = window.location.href
      document.head.appendChild(link)
    }
  }, [])

  return null
}

export default SEOHead
