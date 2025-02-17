import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function GettingStartedPage() {
  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Getting Started</h1>
      <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
        Welcome to A11yHelper! This guide will help you get started with our accessibility tools and resources.
      </p>
      <div className="space-y-8 max-w-3xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>1. Explore Our Tools</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>Start by exploring our suite of accessibility tools:</CardDescription>
            <ul className="mt-2 space-y-1 list-disc list-inside">
              <li>
                <Link href="/tools/color-contrast-checker" className="text-primary hover:underline">
                  Color Contrast Checker
                </Link>
              </li>
              <li>
                <Link href="/tools/color-palette-generator" className="text-primary hover:underline">
                  Color Palette Generator
                </Link>
              </li>
              <li>Alt Text Generator (Coming Soon)</li>
              <li>Accessibility Code Snippets (Coming Soon)</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>2. Read the Documentation</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>Familiarize yourself with key accessibility concepts:</CardDescription>
            <ul className="mt-2 space-y-1 list-disc list-inside">
              <li>
                <Link href="/docs/color-contrast-guide" className="text-primary hover:underline">
                  Color Contrast Guide
                </Link>
              </li>
              <li>
                <Link href="/docs/alt-text" className="text-primary hover:underline">
                  Writing Effective Alt Text
                </Link>
              </li>
              <li>
                <Link href="/docs/keyboard-navigation" className="text-primary hover:underline">
                  Keyboard Navigation
                </Link>
              </li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>3. Join the Community</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>Connect with other accessibility enthusiasts:</CardDescription>
            <ul className="mt-2 space-y-1 list-disc list-inside">
              <li>
                <Link href="/community/forum" className="text-primary hover:underline">
                  Join Our Forum
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-primary hover:underline">
                  Read Our Blog
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-primary hover:underline">
                  Attend Events
                </Link>
              </li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>4. Stay Updated</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>Keep up with the latest in web accessibility:</CardDescription>
            <ul className="mt-2 space-y-1 list-disc list-inside">
              <li>Subscribe to our newsletter</li>
              <li>Follow us on social media</li>
              <li>Check our blog regularly for new articles</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

