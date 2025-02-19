import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Web Accessibility Blog - A11yHelper",
  description:
    "Stay up-to-date with the latest web accessibility trends, WCAG guidelines, and best practices for creating inclusive digital experiences.",
  keywords: ["web accessibility blog", "WCAG updates", "accessibility best practices", "inclusive design", "a11y tips"],
}

const blogPosts = [
  {
    title: "Understanding WCAG 2.2: What's New and How to Prepare",
    description:
      "Explore the latest updates in WCAG 2.2 and learn how to implement these new guidelines in your web projects.",
    date: "2023-07-15",
    readTime: "8 min read",
    slug: "understanding-wcag-2-2",
  },
  {
    title: "The Role of AI in Improving Web Accessibility",
    description:
      "Discover how artificial intelligence is revolutionizing web accessibility testing and implementation.",
    date: "2023-07-02",
    readTime: "6 min read",
    slug: "ai-in-web-accessibility",
  },
  {
    title: "Creating Accessible Forms: A Comprehensive Guide",
    description:
      "Learn the best practices for designing and implementing accessible web forms that comply with WCAG guidelines.",
    date: "2023-06-20",
    readTime: "10 min read",
    slug: "creating-accessible-forms",
  },
  {
    title: "Color Contrast in Web Design: Beyond the Basics",
    description:
      "Dive deep into color contrast ratios, tools, and techniques to ensure your web designs are both beautiful and accessible.",
    date: "2023-06-05",
    readTime: "7 min read",
    slug: "color-contrast-web-design",
  },
]

export default function BlogPage() {
  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">A11yHelper Blog</h1>
      <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
        Stay up-to-date with the latest accessibility trends, tips, and best practices. Our blog covers everything from
        WCAG guidelines to practical implementation strategies.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {blogPosts.map((post, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
              <CardDescription>
                {post.date} • {post.readTime}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{post.description}</p>
              <Button asChild>
                <Link href={`/blog/${post.slug}`}>Read More</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="text-center mt-12">
        <Button asChild size="lg">
          <Link href="/blog/archive">View All Blog Posts</Link>
        </Button>
      </div>
    </div>
  )
}

