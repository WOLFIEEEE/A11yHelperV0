import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AccessibilityStatementPage() {
  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
        Accessibility Statement
      </h1>
      <div className="max-w-3xl mx-auto space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Our Commitment to Accessibility</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              A11yHelper is committed to ensuring digital accessibility for people with disabilities. We are continually
              improving the user experience for everyone and applying the relevant accessibility standards to achieve
              this.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Conformance Status</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to
              improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level
              AA, and Level AAA.
            </p>
            <p className="mt-4">
              A11yHelper is partially conformant with WCAG 2.2 level AA. Partially conformant means that some parts of
              the content do not fully conform to the accessibility standard.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Accessibility Features</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>Semantic HTML structure for better navigation and understanding of content</li>
              <li>ARIA attributes to enhance accessibility for users of assistive technologies</li>
              <li>Color contrast ratios that meet WCAG 2.2 AA standards</li>
              <li>Keyboard navigation support throughout the site</li>
              <li>Alt text for all informative images</li>
              <li>Resizable text without loss of functionality</li>
              <li>Clear and consistent navigation</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Known Limitations</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Despite our best efforts to ensure accessibility of A11yHelper, there may be some limitations. Below is a
              description of known limitations, and potential solutions. Please contact us if you observe an issue not
              listed below.
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>
                Some older PDF documents are not fully accessible: We are working on replacing these with accessible
                HTML pages.
              </li>
              <li>
                Some video content lacks closed captions: We are in the process of adding captions to all video content.
              </li>
              <li>
                Some interactive demos may be challenging for keyboard-only users: We are continuously improving these
                to ensure full keyboard accessibility.
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Feedback and Contact Information</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              We welcome your feedback on the accessibility of A11yHelper. Please let us know if you encounter
              accessibility barriers on our website:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>Phone: [Your phone number]</li>
              <li>E-mail: accessibility@a11yhelper.com</li>
              <li>Visitor Address: [Your physical address]</li>
            </ul>
            <p className="mt-4">We try to respond to feedback within 2 business days.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Assessment Approach</CardTitle>
          </CardHeader>
          <CardContent>
            <p>A11yHelper assessed the accessibility of this website by the following approaches:</p>
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>Self-evaluation</li>
              <li>External evaluation by accessibility experts</li>
              <li>User testing with assistive technologies</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Formal Approval of This Accessibility Statement</CardTitle>
          </CardHeader>
          <CardContent>
            <p>This Accessibility Statement is approved by:</p>
            <p className="mt-4 font-semibold">
              A11yHelper Management
              <br />
              A11yHelper Inc.
            </p>
          </CardContent>
        </Card>

        <div className="text-center">
          <Button asChild>
            <Link href="/contact">Report an Accessibility Issue</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

