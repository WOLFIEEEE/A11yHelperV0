import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CodeBlock } from "../CodeBlock"
import { ChevronRight, Mail, Menu } from "lucide-react"

const ButtonsPage = () => {
  const codeExample = `
import React from 'react'
import { Button } from "@/components/ui/button"
import { ChevronRight, Mail, Menu } from 'lucide-react'

export const AccessibleButtons = () => {
  return (
    <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
      <Button>Default Button</Button>
      <Button variant="outline">
        <Mail className="mr-2 h-4 w-4" /> Email Us
      </Button>
      <Button variant="ghost" size="sm">
        Learn More <ChevronRight className="ml-2 h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        aria-label="Open menu"
      >
        <Menu className="h-4 w-4" />
      </Button>
    </div>
  )
}
`

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Accessible Buttons</h1>
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="examples">Examples</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Accessible Button Design</CardTitle>
              <CardDescription>Key features for creating accessible buttons</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Accessible buttons are crucial for ensuring all users can interact with your website effectively. Here
                are the key features:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Use semantic HTML: Prefer <code>&lt;button&gt;</code> elements for clickable buttons.
                </li>
                <li>Provide clear labels: Use descriptive text that explains the button's action.</li>
                <li>Ensure keyboard accessibility: Buttons should be focusable and operable with a keyboard.</li>
                <li>
                  Maintain sufficient color contrast: Text and background colors should have a contrast ratio of at
                  least 4.5:1.
                </li>
                <li>
                  Use ARIA attributes when necessary: For example, <code>aria-label</code> for icon-only buttons.
                </li>
                <li>Indicate focus: Provide a visible focus indicator for keyboard users.</li>
                <li>Consider button size: Ensure buttons are large enough to be easily clickable on touch devices.</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="examples">
          <Card>
            <CardHeader>
              <CardTitle>Button Examples</CardTitle>
              <CardDescription>Interactive examples of accessible buttons</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Button>Default Button</Button>
                <Button variant="outline">
                  <Mail className="mr-2 h-4 w-4" /> Email Us
                </Button>
                <Button variant="ghost" size="sm">
                  Learn More <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" aria-label="Open menu">
                  <Menu className="h-4 w-4" />
                </Button>
              </div>
              <div className="space-y-2">
                <p className="font-semibold">Key Accessibility Features:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Clear, descriptive labels</li>
                  <li>Keyboard focusable and operable</li>
                  <li>Visible focus indicators</li>
                  <li>Appropriate use of ARIA labels for icon-only buttons</li>
                  <li>Sufficient size for touch interactions</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="code">
          <Card>
            <CardHeader>
              <CardTitle>Code Example</CardTitle>
              <CardDescription>Accessible button implementation</CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock code={codeExample} language="tsx" />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Accessibility Considerations</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>When implementing accessible buttons, consider the following:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Semantic HTML:</strong> Use <code>&lt;button&gt;</code> elements for actions that don't navigate
              to a new page. For links, use <code>&lt;a&gt;</code> elements styled as buttons.
            </li>
            <li>
              <strong>Keyboard Accessibility:</strong> Ensure buttons can be focused and activated using the keyboard
              (Tab to focus, Enter or Space to activate).
            </li>
            <li>
              <strong>Focus Indicators:</strong> Provide clear visual focus indicators. Don't remove the default focus
              outline unless you're replacing it with a clearly visible alternative.
            </li>
            <li>
              <strong>Color Contrast:</strong> Maintain a color contrast ratio of at least 4.5:1 for normal text and 3:1
              for large text between the button text and its background.
            </li>
            <li>
              <strong>Button Text:</strong> Use clear, action-oriented text that describes what the button does.
            </li>
            <li>
              <strong>Icon-only Buttons:</strong> Always provide an accessible name using <code>aria-label</code> or{" "}
              <code>aria-labelledby</code> for buttons that only contain icons.
            </li>
            <li>
              <strong>Touch Target Size:</strong> Ensure buttons are at least 44x44 pixels on touch devices to
              accommodate users with motor impairments.
            </li>
            <li>
              <strong>Button State:</strong> Clearly indicate button states (hover, focus, active, disabled) through
              visual changes.
            </li>
            <li>
              <strong>Loading State:</strong> If a button triggers an action that takes time, indicate the loading state
              visually and via ARIA attributes.
            </li>
            <li>
              <strong>Grouping Buttons:</strong> Use <code>role="group"</code> and <code>aria-label</code> to group
              related buttons and provide a description for the group.
            </li>
          </ul>
        </CardContent>
      </Card>
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Testing Accessibility</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>To ensure your buttons are fully accessible, perform the following tests:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Keyboard Navigation: Verify that all buttons can be focused and activated using only the keyboard.</li>
            <li>
              Screen Reader Testing: Use screen readers (like NVDA, JAWS, or VoiceOver) to ensure buttons are properly
              announced and can be activated.
            </li>
            <li>
              Color Contrast: Use tools like the WebAIM Color Contrast Checker to verify sufficient contrast ratios.
            </li>
            <li>
              Touch Target Size: Ensure buttons are large enough for comfortable touch interaction on mobile devices.
            </li>
            <li>Automated Testing: Use tools like axe-core or WAVE to catch common accessibility issues.</li>
            <li>
              User Testing: Conduct usability tests with users who have various disabilities to get real-world feedback.
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

export default ButtonsPage

