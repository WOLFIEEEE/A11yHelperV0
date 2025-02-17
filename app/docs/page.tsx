import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const docs = [
  {
    title: "Getting Started",
    description: "Learn how to use A11yHelper tools and integrate them into your workflow.",
    link: "/docs/getting-started",
  },
  {
    title: "Color Contrast Guide",
    description: "Understanding WCAG color contrast requirements and how to meet them.",
    link: "/docs/color-contrast-guide",
  },
  {
    title: "Writing Effective Alt Text",
    description: "Best practices for writing descriptive and meaningful alternative text.",
    link: "/docs/alt-text",
  },
  {
    title: "Keyboard Navigation",
    description: "Ensuring your website is fully navigable using only a keyboard.",
    link: "/docs/keyboard-navigation",
  },
]

export default function DocsPage() {
  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Documentation</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {docs.map((doc, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{doc.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{doc.description}</CardDescription>
              <Link href={doc.link} className="text-primary hover:underline mt-2 inline-block">
                Read more
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

