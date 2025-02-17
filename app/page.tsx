import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Zap, Type, Users, Globe, BarChart, Shield, CheckCircle } from "lucide-react"
import TestimonialCarousel from "./components/TestimonialCarousel"
import InteractiveDemo from "./components/InteractiveDemo"
import AccessibilityChecker from "./components/AccessibilityChecker"

export const metadata: Metadata = {
  title: "AI-Powered Web Accessibility Tools for Inclusive Design",
  description:
    "Discover A11yHelper's suite of AI-driven accessibility tools. Ensure WCAG compliance, optimize color contrast, and create inclusive web experiences for all users.",
  keywords: [
    "web accessibility tools",
    "AI accessibility checker",
    "WCAG compliance",
    "inclusive design",
    "color contrast tool",
    "accessibility cost analyzer",
  ],
}

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <section className="w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-primary/10 to-background">
        <div className="container px-4 md:px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none mb-6">
            AI-Powered Web Accessibility Tools
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground text-lg sm:text-xl md:text-2xl mb-8">
            Empower your web development with A11yHelper. Our AI-driven solutions simplify accessibility implementation
            and testing, ensuring inclusive digital experiences for all users.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="#check-accessibility">
                Check Your Website Accessibility <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild size="lg">
              <Link href="/tools">Explore Our Tools</Link>
            </Button>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-16" />

      <section className="w-full py-16 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
            Key Accessibility Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "AI-Powered Accessibility Checks",
                description: "Automated audits with instant feedback on WCAG compliance and accessibility issues.",
              },
              {
                icon: Type,
                title: "Smart Content Generation",
                description: "AI-assisted creation of accessible content, including alt text and ARIA attributes.",
              },
              {
                icon: Users,
                title: "Inclusive Design Tools",
                description:
                  "Color contrast checkers, keyboard navigation testers, and more to ensure universal usability.",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="bg-background border-none shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardHeader>
                  <feature.icon className="w-10 h-10 mb-2 text-primary" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-16" />

      <section className="w-full py-16 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
            Experience Accessibility in Action
          </h2>
          <p className="text-xl text-center mb-8 max-w-2xl mx-auto">
            Interact with our demos to understand how different accessibility features impact user experience. These
            examples showcase WCAG 2.2 compliant implementations.
          </p>
          <InteractiveDemo />
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-16" />

      <section
        id="check-accessibility"
        className="w-full py-24 md:py-32 lg:py-40 bg-gradient-to-r from-primary/5 to-primary/10"
      >
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
                Check Your Site's Accessibility
              </h2>
              <p className="text-xl mb-8 text-muted-foreground">
                Our AI-powered accessibility checker analyzes your website in real-time, providing instant feedback on
                WCAG compliance and potential accessibility issues. Get a comprehensive report and actionable insights
                to improve your site's inclusivity.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Instant WCAG 2.1 compliance check",
                  "Detailed accessibility score breakdown",
                  "Prioritized list of issues to address",
                  "Actionable recommendations for improvement",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="w-6 h-6 mr-2 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/tools/accessibility-checker">
                  Learn More About Our Checker <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="bg-background p-8 rounded-lg shadow-xl">
              <AccessibilityChecker />
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-16" />

      <section className="w-full py-16 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
            Why Web Accessibility Matters
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Globe,
                title: "Inclusive Digital Experiences",
                description:
                  "Create websites that cater to all users, regardless of their abilities, ensuring equal access to information and services.",
              },
              {
                icon: Users,
                title: "Wider Audience Reach",
                description:
                  "Expand your potential user base by making your content accessible to people with disabilities and older users.",
              },
              {
                icon: BarChart,
                title: "Improved SEO and User Experience",
                description:
                  "Accessibility improvements often lead to better search engine rankings and an enhanced overall user experience.",
              },
              {
                icon: Shield,
                title: "Legal Compliance and Risk Reduction",
                description:
                  "Meet legal requirements for web accessibility, reducing the risk of lawsuits and demonstrating corporate social responsibility.",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="bg-background border-none shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardHeader>
                  <CardTitle className="flex items-center text-primary">
                    <item.icon className="w-6 h-6 mr-2" />
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/docs/accessibility-guide">
                Learn More About Web Accessibility <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-16" />

      <section className="w-full py-16 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
            What Our Users Say About A11yHelper
          </h2>
          <TestimonialCarousel />
        </div>
      </section>
    </div>
  )
}

