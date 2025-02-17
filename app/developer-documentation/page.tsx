import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const components = [
  {
    name: "Header",
    description: "The main navigation component for the application.",
    slug: "header"
  },
  {
    name: "Footer",
    description: "The footer component containing links and copyright information.",
    slug: "footer"
  },
  {
    name: "Logo",
    description: "The logo component used in the header and footer.",
    slug: "logo"
  },
  {
    name: "ModeToggle",
    description: "A component that allows users to switch between light and dark modes.",
    slug: "mode-toggle"
  },
  {
    name: "ColorContrastChecker",
    description: "A component that checks the contrast ratio between two colors.",
    slug: "color-contrast-checker"
  },
  {
    name: "AccessibilityScoreCalculator",
    description: "A component that simulates calculating an accessibility score for a website.",
    slug: "accessibility-score-calculator"
  },
  {
    name: "WCAGTable",
    description: "A component that displays WCAG criteria in a searchable and filterable table.",
    slug: "wcag-table"
  },
  {
    name: "AccessibilityChecker",
    description: "A component that simulates checking a website's accessibility and provides a score and issues list.",
    slug: "accessibility-checker"
  },
  {
    name: "AccessibilityCostAnalyzer",
    description: "A component that estimates the cost of making a website accessible based on various factors.",
    slug: "accessibility-cost-analyzer"
  },
  {
    name: "AnimatedBackground",
    description: "A component that creates an animated particle background.",
    slug: "animated-background"
  }
]

export default function DeveloperDocumentationPage() {
  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
        Developer Documentation
      </h1>
      <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
        Comprehensive documentation for A11yHelper components and their usage. Click on a component to view its detailed documentation.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {components.map((component) => (
          <Card key={component.slug}>
            <CardHeader>
              <CardTitle>
                <Link href={`/developer-documentation/${component.slug}`} className="hover:underline">
                  {component.name}
                </Link>
              </CardTitle>
              <CardDescription>{component.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Link
                href={`/developer-documentation/${component.slug}`}
                className="text-primary hover:underline"
              >
                View Documentation
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

