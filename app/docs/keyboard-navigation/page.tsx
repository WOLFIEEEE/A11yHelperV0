import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function KeyboardNavigationGuidePage() {
  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
        Keyboard Navigation Guide
      </h1>
      <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
        Ensuring your website is navigable by keyboard is crucial for accessibility. This guide will help you understand
        and implement proper keyboard navigation.
      </p>
      <div className="space-y-8 max-w-3xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Why is Keyboard Navigation Important?</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>Keyboard navigation is important for several reasons:</CardDescription>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>Essential for users with motor disabilities who can't use a mouse</li>
              <li>Beneficial for power users who prefer keyboard shortcuts</li>
              <li>Required for compliance with accessibility standards (WCAG)</li>
              <li>Improves overall usability and user experience</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Key Principles of Keyboard Navigation</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>Follow these key principles when implementing keyboard navigation:</CardDescription>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>All interactive elements should be focusable</li>
              <li>Focus order should be logical and intuitive</li>
              <li>Focus should be visible at all times</li>
              <li>Provide skip links for repetitive content</li>
              <li>Ensure custom components are keyboard accessible</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Implementing Keyboard Navigation</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>Follow these steps to implement keyboard navigation:</CardDescription>
            <ol className="list-decimal list-inside space-y-2 mt-2">
              <li>Use semantic HTML elements (e.g., &lt;button&gt;, &lt;a&gt;) for interactive components</li>
              <li>Ensure a logical tab order using proper HTML structure</li>
              <li>
                Use tabindex="0" to make custom interactive elements focusable, and tabindex="-1" for programmatic focus
              </li>
              <li>Implement visible focus styles that are distinct from hover styles</li>
              <li>Provide keyboard alternatives for actions typically done with a mouse (e.g., drag and drop)</li>
            </ol>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Testing Keyboard Navigation</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>To test your website's keyboard navigation:</CardDescription>
            <ol className="list-decimal list-inside space-y-2 mt-2">
              <li>Start by pressing Tab to move through the page</li>
              <li>Ensure all interactive elements can be reached and activated</li>
              <li>Check that the focus order is logical</li>
              <li>Verify that focus is always visible</li>
              <li>Test keyboard shortcuts and custom components thoroughly</li>
            </ol>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

