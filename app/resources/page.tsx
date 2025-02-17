import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

const resources = [
  {
    title: "Web Content Accessibility Guidelines (WCAG)",
    description: "The comprehensive guide to making web content accessible.",
    link: "https://www.w3.org/WAI/standards-guidelines/wcag/",
  },
  {
    title: "WebAIM",
    description: "Web Accessibility In Mind - articles, tools, and resources for web accessibility.",
    link: "https://webaim.org/",
  },
  {
    title: "The A11Y Project",
    description: "A community-driven effort to make web accessibility easier.",
    link: "https://a11yproject.com/",
  },
  {
    title: "Accessibility Developer Guide",
    description: "A comprehensive resource for developers to learn about web accessibility.",
    link: "https://www.accessibility-developer-guide.com/",
  },
  {
    title: "axe-core",
    description: "Accessibility testing engine for websites and other HTML-based user interfaces.",
    link: "https://github.com/dequelabs/axe-core",
  },
  {
    title: "Contrast Ratio Calculator",
    description: "A tool to calculate the contrast ratio between two colors.",
    link: "https://contrast-ratio.com/",
  },
  {
    title: "Color Oracle",
    description: "A free color blindness simulator for Windows, Mac and Linux.",
    link: "https://colororacle.org/",
  },
  {
    title: "NVDA Screen Reader",
    description: "A free screen reader for Windows to test your site's accessibility.",
    link: "https://www.nvaccess.org/download/",
  },
]

export default function ResourcesPage() {
  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
        Accessibility Resources
      </h1>
      <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
        Explore our curated list of essential accessibility resources to help you create more inclusive web experiences.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {resources.map((resource, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{resource.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-4">{resource.description}</CardDescription>
              <Button asChild>
                <Link href={resource.link} target="_blank" rel="noopener noreferrer">
                  Visit Resource <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

