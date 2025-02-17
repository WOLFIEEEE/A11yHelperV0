import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function ColorContrastGuidePage() {
  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
        Color Contrast Guide
      </h1>
      <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
        Understanding and implementing proper color contrast is crucial for creating accessible web content. This guide
        will help you ensure your designs meet WCAG standards.
      </p>
      <div className="space-y-8 max-w-3xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>What is Color Contrast?</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Color contrast refers to the difference in light between foreground (usually text) and background colors.
              Sufficient contrast ensures that text is readable for all users, including those with visual impairments.
            </CardDescription>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>WCAG Contrast Requirements</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              The Web Content Accessibility Guidelines (WCAG) define specific contrast ratios for different types of
              content:
            </CardDescription>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>
                <strong>Normal Text:</strong> Contrast ratio of at least 4.5:1
              </li>
              <li>
                <strong>Large Text (18pt+ or 14pt+ bold):</strong> Contrast ratio of at least 3:1
              </li>
              <li>
                <strong>UI Components and Graphical Objects:</strong> Contrast ratio of at least 3:1
              </li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>How to Check Contrast</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>Use our Color Contrast Checker tool to verify your color combinations:</CardDescription>
            <p className="mt-2">
              <Link href="/tools/color-contrast-checker" className="text-primary hover:underline">
                A11yHelper Color Contrast Checker
              </Link>
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Tips for Maintaining Good Contrast</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>Use dark text on light backgrounds or light text on dark backgrounds</li>
              <li>Avoid placing text on busy backgrounds or images</li>
              <li>Consider using our Color Palette Generator for accessible color schemes</li>
              <li>Test your designs in grayscale to ensure sufficient contrast</li>
              <li>Remember that thin fonts may require higher contrast ratios</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Common Misconceptions</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>High contrast doesn't always mean black and white</li>
              <li>Meeting contrast requirements doesn't guarantee overall readability</li>
              <li>
                Logos and decorative elements don't need to meet contrast requirements, but consider their visibility
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

