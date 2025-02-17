import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Accessible Components - A11yHelper",
  description:
    "Explore our collection of fully accessible UI components with examples and best practices for web and mobile.",
  keywords: [
    "accessible components",
    "UI accessibility",
    "WCAG compliant",
    "inclusive design",
    "responsive components",
  ],
}

const components = [
  {
    name: "Accessible Buttons",
    description: "Learn how to create fully accessible and customizable buttons for various use cases.",
    slug: "buttons",
  },
  {
    name: "Form Inputs and Labels",
    description: "Discover best practices for creating accessible form inputs with proper labeling and error handling.",
    slug: "form-inputs",
  },
  {
    name: "Navigation Menus",
    description:
      "Explore techniques for building accessible navigation menus that work across devices and input methods.",
    slug: "navigation-menus",
  },
  {
    name: "Modal Dialogs",
    description: "Learn how to implement accessible modal dialogs that trap focus and provide keyboard navigation.",
    slug: "modal-dialogs",
  },
  {
    name: "Accordions and Disclosure Widgets",
    description:
      "Discover patterns for creating expandable content sections that are keyboard and screen reader friendly.",
    slug: "accordions",
  },
  {
    name: "Data Tables",
    description:
      "Explore techniques for building accessible and responsive data tables with proper headers and captions.",
    slug: "data-tables",
  },
  {
    name: "Tabs and Tabbed Interfaces",
    description: "Learn how to create accessible tab interfaces that work with both mouse and keyboard interactions.",
    slug: "tabs",
  },
  {
    name: "Tooltips and Popovers",
    description:
      "Discover best practices for implementing accessible tooltips and popovers that don't rely solely on hover.",
    slug: "tooltips",
  },
  {
    name: "Progress Indicators",
    description:
      "Explore techniques for creating accessible progress bars and loading indicators with proper ARIA attributes.",
    slug: "progress-indicators",
  },
  {
    name: "Carousels and Slideshows",
    description:
      "Learn how to build accessible image carousels and slideshows with keyboard controls and screen reader announcements.",
    slug: "carousels",
  },
]

export default function ComponentsPage() {
  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
        Accessible Components
      </h1>
      <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
        Explore our collection of fully accessible UI components with examples and best practices for web and mobile
        applications.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {components.map((component, index) => (
          <Card key={index} className="flex flex-col h-full">
            <CardHeader>
              <CardTitle className="text-xl">{component.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="mb-4 text-sm">{component.description}</p>
              <Button asChild className="mt-auto" variant="outline">
                <Link href={`/components/${component.slug}`}>View Component</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

