"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Type, Users, Zap, Lightbulb, Globe, BarChart, Shield, Book, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import TestimonialCarousel from "./components/TestimonialCarousel"
import InteractiveDemo from "./components/InteractiveDemo"
import AccessibilityChecker from "./components/AccessibilityChecker"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-primary/10 via-background to-primary/10">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-2"
            >
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Make Your Web Accessible with AI-Powered Tools
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                A11yHelper empowers developers and testers to create inclusive digital experiences. Our AI-driven
                solutions simplify accessibility implementation and testing.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4 sm:space-x-4 sm:space-y-0"
            >
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/tools">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link href="/docs">Learn More</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Highlights Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "AI-Powered Checks",
                description: "Automated accessibility audits with instant feedback.",
              },
              {
                icon: Type,
                title: "Smart Content Generation",
                description: "AI-assisted creation of accessible content and alt text.",
              },
              {
                icon: Users,
                title: "Inclusive Design Tools",
                description: "Color contrast checkers, keyboard navigation testers, and more.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-background border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <feature.icon className="w-10 h-10 mb-2 text-primary" />
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Interactive Demo Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
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

      {/* Accessibility Checker Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
            Check Your Site's Accessibility
          </h2>
          <AccessibilityChecker />
        </div>
      </section>

      {/* Why Accessibility Matters Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
            Why Accessibility Matters
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Globe,
                title: "Inclusive Digital Experiences",
                description:
                  "Web accessibility is not just a legal requirement; it's a fundamental aspect of creating inclusive digital experiences that cater to all users, regardless of their abilities.",
              },
              {
                icon: Users,
                title: "Wider Audience Reach",
                description:
                  "By making your website accessible, you reach a wider audience, including people with disabilities, ensuring that your content and services are available to all.",
              },
              {
                icon: BarChart,
                title: "Improved SEO and User Experience",
                description:
                  "Accessible websites often have better SEO performance and provide an improved overall user experience, benefiting all visitors to your site.",
              },
              {
                icon: Shield,
                title: "Legal Compliance and Risk Reduction",
                description:
                  "Implementing accessibility measures helps demonstrate social responsibility, ethical business practices, and reduces legal risks associated with inaccessible websites.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-background border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
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
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/docs/accessibility-guide">
                Learn More About Accessibility <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
            What Our Users Say
          </h2>
          <TestimonialCarousel />
        </div>
      </section>

      {/* How A11yHelper Can Help Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
            How A11yHelper Can Help
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Zap,
                title: "Automated Accessibility Checks",
                description:
                  "Our AI-powered tools automate accessibility checks, providing instant feedback to help you identify and fix issues quickly.",
              },
              {
                icon: Type,
                title: "AI-Assisted Content Generation",
                description:
                  "Generate accessible content with AI assistance, ensuring your text, images, and other media meet accessibility standards.",
              },
              {
                icon: Book,
                title: "Comprehensive Documentation",
                description:
                  "Learn best practices through our extensive documentation, covering all aspects of web accessibility implementation.",
              },
              {
                icon: Lightbulb,
                title: "Stay Up-to-Date",
                description:
                  "Keep your knowledge current with the latest WCAG guidelines and emerging accessibility trends through our regularly updated resources.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-background border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
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
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/tools">
                Explore Our Tools <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Stay Updated</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Subscribe to our newsletter for the latest accessibility tips, tool updates, and industry insights.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <form className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                <Input type="email" placeholder="Enter your email" className="flex-grow" />
                <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Accessibility Statement Link */}
      <section className="w-full py-6 bg-background">
        <div className="container px-4 md:px-6 text-center">
          <Link href="/accessibility-statement" className="text-primary hover:underline">
            Read our Accessibility Statement
          </Link>
        </div>
      </section>
    </div>
  )
}

