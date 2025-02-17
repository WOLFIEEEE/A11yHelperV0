import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Palette, Type, Code, CheckCircle, Grid } from "lucide-react"
import Link from "next/link"

const tools = [
  {
    icon: Palette,
    title: "Color Contrast Checker",
    description: "Ensure your color combinations meet WCAG standards for readability.",
    status: "enabled",
    link: "/tools/color-contrast-checker",
  },
  {
    icon: Grid,
    title: "Color Palette Generator",
    description: "Create accessible and harmonious color palettes for your designs.",
    status: "enabled",
    link: "/tools/color-palette-generator",
  },
  {
    icon: Type,
    title: "Alt Text Generator",
    description: "AI-powered tool to generate descriptive alt text for your images.",
    status: "coming-soon",
  },
  {
    icon: Code,
    title: "Accessibility Code Snippets",
    description: "Get ready-to-use code snippets to improve your site's accessibility.",
    status: "coming-soon",
  },
  {
    icon: CheckCircle,
    title: "Accessibility Score",
    description: "Get an instant accessibility score for your webpage and improvement suggestions.",
    status: "coming-soon",
  },
]

export default function ToolsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 lg:py-32">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">A11yHelper Tools</h1>
      <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
        Our suite of accessibility tools is designed to help developers and designers create more inclusive web
        experiences. We're continuously working on expanding our toolset to provide you with powerful accessibility
        tools.
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
    </div>
  )
}

