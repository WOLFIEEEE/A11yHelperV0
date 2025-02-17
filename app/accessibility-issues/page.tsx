import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"

const accessibilityIssues = [
  {
    id: "alt-text",
    name: "Missing alt text on images",
    description: "Images without alternative text are not accessible to screen reader users.",
    impact: "serious",
    wcag: "1.1.1 Non-text Content (A)",
    howToFix: "Add descriptive alt text to all images that convey meaning. Use empty alt text for decorative images.",
  },
  {
    id: "color-contrast",
    name: "Insufficient color contrast",
    description: "Text with low contrast against its background is difficult to read for many users.",
    impact: "serious",
    wcag: "1.4.3 Contrast (Minimum) (AA)",
    howToFix: "Ensure text has a contrast ratio of at least 4.5:1 for normal text and 3:1 for large text.",
  },
  {
    id: "keyboard-navigation",
    name: "Lack of keyboard accessibility",
    description: "Interactive elements that can't be accessed or operated with a keyboard exclude many users.",
    impact: "critical",
    wcag: "2.1.1 Keyboard (A)",
    howToFix: "Ensure all interactive elements can be reached and operated using only a keyboard.",
  },
  {
    id: "form-labels",
    name: "Missing form labels",
    description: "Form inputs without associated labels are not properly described to screen reader users.",
    impact: "serious",
    wcag: "3.3.2 Labels or Instructions (A)",
    howToFix: "Add descriptive labels to all form inputs, either using the label element or aria-label attribute.",
  },
  {
    id: "heading-structure",
    name: "Improper heading structure",
    description: "Incorrectly structured headings make it difficult for screen reader users to navigate content.",
    impact: "moderate",
    wcag: "1.3.1 Info and Relationships (A)",
    howToFix: "Use heading levels (h1-h6) in a logical, hierarchical order. Don't skip levels.",
  },
  {
    id: "link-purpose",
    name: "Ambiguous link text",
    description: "Links with vague text like 'click here' don't provide enough context for all users.",
    impact: "moderate",
    wcag: "2.4.4 Link Purpose (In Context) (A)",
    howToFix: "Use descriptive link text that makes sense out of context. Avoid generic phrases like 'click here'.",
  },
  {
    id: "aria-attributes",
    name: "Incorrect use of ARIA attributes",
    description: "Misused ARIA attributes can create confusion and accessibility barriers.",
    impact: "serious",
    wcag: "4.1.2 Name, Role, Value (A)",
    howToFix: "Ensure ARIA attributes are used correctly and only when necessary. Test with assistive technologies.",
  },
  {
    id: "focus-indication",
    name: "Lack of focus indication",
    description: "Without visible focus indicators, keyboard users can't tell where they are on the page.",
    impact: "serious",
    wcag: "2.4.7 Focus Visible (AA)",
    howToFix: "Ensure all interactive elements have a clear visual indicator when they receive keyboard focus.",
  },
  {
    id: "page-title",
    name: "Missing or inadequate page title",
    description: "Page titles are crucial for orientation and should describe the page's purpose.",
    impact: "serious",
    wcag: "2.4.2 Page Titled (A)",
    howToFix: "Provide a unique, descriptive title for each page that accurately reflects its content and purpose.",
  },
  {
    id: "language",
    name: "Missing language declaration",
    description: "Without a declared language, screen readers may use the wrong pronunciation rules.",
    impact: "serious",
    wcag: "3.1.1 Language of Page (A)",
    howToFix: "Specify the primary language of the page using the lang attribute on the html element.",
  },
]

const impactColors = {
  minor: "bg-yellow-500",
  moderate: "bg-orange-500",
  serious: "bg-red-500",
  critical: "bg-red-700",
}

export default function AccessibilityIssuesPage() {
  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
        Common Accessibility Issues
      </h1>
      <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
        Explore the top 10 accessibility issues that our AI-powered tool checks for. Understanding these issues is
        crucial for creating inclusive web experiences.
      </p>

      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Issue Overview</CardTitle>
            <CardDescription>A quick look at the accessibility issues we check for</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Issue</TableHead>
                  <TableHead>Impact</TableHead>
                  <TableHead>WCAG Criterion</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {accessibilityIssues.map((issue) => (
                  <TableRow key={issue.id}>
                    <TableCell>{issue.name}</TableCell>
                    <TableCell>
                      <Badge className={`${impactColors[issue.impact as keyof typeof impactColors]} text-white`}>
                        {issue.impact}
                      </Badge>
                    </TableCell>
                    <TableCell>{issue.wcag}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {accessibilityIssues.map((issue) => (
          <Card key={issue.id}>
            <CardHeader>
              <CardTitle>{issue.name}</CardTitle>
              <CardDescription>{issue.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <strong>Impact:</strong>{" "}
                  <Badge className={`${impactColors[issue.impact as keyof typeof impactColors]} text-white`}>
                    {issue.impact}
                  </Badge>
                </div>
                <div>
                  <strong>WCAG Success Criterion:</strong> {issue.wcag}
                </div>
                <div>
                  <strong>How to Fix:</strong>
                  <p>{issue.howToFix}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        <Card>
          <CardHeader>
            <CardTitle>Need a Comprehensive Audit?</CardTitle>
            <CardDescription>
              Our AI-powered tool checks for these common issues, but a full accessibility audit can uncover more.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              For a detailed evaluation of your website's accessibility, including expert insights and custom solutions,
              reach out to our team for a comprehensive audit.
            </p>
            <Button asChild>
              <Link href="/contact">
                Request a Detailed Audit <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <div className="text-center">
          <p className="mb-4">Learn more about web accessibility standards:</p>
          <Button variant="outline" asChild>
            <Link href="https://www.w3.org/WAI/standards-guidelines/wcag/" target="_blank" rel="noopener noreferrer">
              WCAG Guidelines <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

