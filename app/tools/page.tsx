import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Palette, Type, Code, CheckCircle, Grid } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Web Accessibility Tools - A11yHelper",
  description:
    "Explore A11yHelper's suite of web accessibility tools. From color contrast checkers to WCAG compliance testers, find everything you need for inclusive web design.",
  keywords: [
    "web accessibility tools",
    "color contrast checker",
    "WCAG compliance tester",
    "alt text generator",
    "accessibility code snippets",
    "accessibility score calculator",
  ],
}

const tools = [
  {
    icon: Palette,
    title: "Color Contrast Checker",
    description: "Ensure your color combinations meet WCAG standards for readability and accessibility.",
    status: "enabled",
    link: "/tools/color-contrast-checker",
  },
  {
    icon: Grid,
    title: "Color Palette Generator",
    description:
      "Create accessible and harmonious color palettes for your web designs that comply with WCAG guidelines.",
    status: "enabled",
    link: "/tools/color-palette-generator",
  },
  {
    icon: Type,
    title: "Alt Text Generator",
    description: "AI-powered tool to generate descriptive and WCAG-compliant alt text for your images.",
    status: "coming-soon",
  },
  {
    icon: Code,
    title: "Accessibility Code Snippets",
    description: "Get ready-to-use, WCAG-compliant code snippets to improve your site's accessibility.",
    status: "coming-soon",
  },
  {
    icon: CheckCircle,
    title: "Accessibility Score Calculator",
    description: "Get an instant accessibility score for your webpage and WCAG-based improvement suggestions.",
    status: "coming-soon",
  },
]

export default function ToolsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 lg:py-32">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
        A11yHelper Accessibility Tools
      </h1>
      <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
        Our comprehensive suite of web accessibility tools is designed to help developers, designers, and content
        creators build more inclusive digital experiences. From color contrast checking to WCAG compliance testing,
        we've got you covered.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {tools.map((tool, index) => (
          <Card key={index}>
            <CardHeader>
              <tool.icon className="w-8 h-8 mb-2" />
              <CardTitle>{tool.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{tool.description}</CardDescription>
              {tool.status === "enabled" ? (
                <Button className="mt-4" asChild>
                  <Link href={tool.link}>Use Tool</Link>
                </Button>
              ) : (
                <Button className="mt-4" disabled>
                  Coming Soon
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Stay Tuned for More Tools</h2>
        <p className="mb-8">
          We're constantly working on expanding our toolset to provide you with even more powerful accessibility tools.
          Check back regularly for updates!
        </p>
        <Button asChild>
          <Link href="/docs">Learn More About Web Accessibility</Link>
        </Button>
      </div>
    </div>
  )
}

