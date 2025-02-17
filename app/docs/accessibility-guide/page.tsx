import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AccessibilityGuidePage() {
  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
        Accessibility Guide
      </h1>
      <div className="max-w-3xl mx-auto space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Introduction to Web Accessibility</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Web accessibility means that websites, tools, and technologies are designed and developed so that people
              with disabilities can use them. More specifically, people can perceive, understand, navigate, and interact
              with the Web.
            </CardDescription>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>WCAG Guidelines</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              The Web Content Accessibility Guidelines (WCAG) are developed through the W3C process in cooperation with
              individuals and organizations around the world, with a goal of providing a single shared standard for web
              content accessibility that meets the needs of individuals, organizations, and governments internationally.
            </CardDescription>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Key Principles of Accessibility</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                <li>
                  Perceivable: Information and user interface components must be presentable to users in ways they can
                  perceive.
                </li>
                <li>Operable: User interface components and navigation must be operable.</li>
                <li>Understandable: Information and the operation of user interface must be understandable.</li>
                <li>
                  Robust: Content must be robust enough that it can be interpreted reliably by a wide variety of user
                  agents, including assistive technologies.
                </li>
              </ul>
            </CardDescription>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Common Accessibility Issues and Solutions</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                <li>Insufficient color contrast: Use our Color Contrast Checker to ensure readability.</li>
                <li>Missing alternative text: Provide descriptive alt text for images.</li>
                <li>Keyboard inaccessibility: Ensure all interactive elements are keyboard accessible.</li>
                <li>Lack of semantic structure: Use proper heading levels and ARIA landmarks.</li>
              </ul>
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

