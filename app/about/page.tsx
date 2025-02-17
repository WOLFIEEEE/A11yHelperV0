import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle, ArrowRight } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4">About A11yHelper</h1>
        <p className="text-xl text-muted-foreground">
          Empowering developers and businesses to create inclusive digital experiences through AI-driven accessibility
          solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <Card>
          <CardHeader>
            <CardTitle>Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              At A11yHelper, we're on a mission to make the web accessible to everyone. We believe that digital
              inclusivity is not just a legal requirement, but a fundamental right. Our AI-powered tools and expert
              guidance empower developers, designers, and businesses to create websites and applications that are truly
              accessible to all users, regardless of their abilities.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Our Approach</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              We combine cutting-edge AI technology with human expertise to provide comprehensive accessibility
              solutions. From automated audits to manual testing and remediation, we offer a holistic approach to web
              accessibility. Our team of experts stays up-to-date with the latest WCAG guidelines and accessibility best
              practices to ensure your digital products are compliant and user-friendly.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "AI-Powered Accessibility Checks",
              description: "Automated audits with instant feedback on accessibility issues.",
            },
            {
              title: "WCAG Compliance Testing",
              description: "Comprehensive testing against WCAG 2.1 guidelines.",
            },
            {
              title: "Remediation Support",
              description: "Expert guidance on fixing accessibility issues.",
            },
            {
              title: "Accessibility Cost Analyzer",
              description: "Estimate the cost of making your website accessible.",
            },
            {
              title: "Detailed Estimation Service",
              description: "Get accurate, personalized project estimations.",
            },
            {
              title: "Educational Resources",
              description: "Extensive documentation and tutorials on web accessibility.",
            },
          ].map((feature, index) => (
            <Card key={index}>
              <CardContent className="flex items-start p-6">
                <CheckCircle className="w-6 h-6 mr-4 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Accessibility Cost Analyzer</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Our Accessibility Cost Analyzer is a powerful tool designed to help you estimate the investment required
              to make your website fully accessible. By considering factors such as the number of pages, complexity of
              your site, and desired level of compliance, we provide you with a comprehensive cost breakdown and
              timeline estimation.
            </p>
            <Button asChild>
              <Link href="/cost-analyzer">
                Try Cost Analyzer <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="mb-16">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Get Accurate Estimation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              For a more detailed and personalized estimation, our Accurate Estimation service takes into account the
              specific nuances of your project. By providing information about your website's authentication,
              third-party integrations, and current accessibility level, we can offer a tailored quote and project
              timeline that aligns perfectly with your needs.
            </p>
            <Button asChild>
              <Link href="/get-accurate-estimation">
                Request Detailed Estimation <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose A11yHelper?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            "Cutting-edge AI technology",
            "Comprehensive accessibility solutions",
            "Expert human oversight",
            "Up-to-date with latest WCAG guidelines",
            "Tailored approach for each project",
            "Ongoing support and education",
          ].map((item, index) => (
            <Card key={index}>
              <CardContent className="flex items-center p-4">
                <CheckCircle className="w-6 h-6 mr-4 text-green-500" />
                <p>{item}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to make your website accessible?</h2>
        <p className="text-xl text-muted-foreground mb-8">Start your journey towards digital inclusivity today.</p>
        <Button asChild size="lg">
          <Link href="/contact">
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

