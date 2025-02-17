import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://a11yhelper.com"

  const routes = [
    "",
    "/tools",
    "/tools/color-contrast-checker",
    "/tools/color-palette-generator",
    "/docs",
    "/docs/accessibility-guide",
    "/docs/color-contrast-guide",
    "/docs/keyboard-navigation",
    "/docs/alt-text",
    "/community",
    "/blog",
    "/blog/understanding-wcag-2-2",
    "/blog/ai-in-web-accessibility",
    "/blog/creating-accessible-forms",
    "/blog/color-contrast-web-design",
    "/about",
    "/contact",
    "/accessibility-statement",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }))

  return routes
}

