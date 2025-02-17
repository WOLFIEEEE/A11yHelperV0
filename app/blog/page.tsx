import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Web Accessibility Blog - A11yHelper",
  description:
    "Stay up-to-date with the latest web accessibility trends, WCAG guidelines, and best practices for creating inclusive digital experiences.",
  keywords: [
    "web accessibility blog",
    "WCAG updates",
    "accessibility best practices",
    "inclusive design",
    "a11y tips",
    "digital inclusion",
    "assistive technology",
    "accessibility testing",
  ],
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
  {
    title: "Accessibility and SEO: The Perfect Partnership",
    description: "Learn how improving your website's accessibility can also boost your search engine rankings.",
    date: "2023-05-22",
    readTime: "9 min read",
    slug: "accessibility-and-seo",
  },
  {
    title: "Mobile Accessibility: Best Practices for Inclusive Apps",
    description:
      "Discover key strategies for creating mobile applications that are accessible to all users, including those with disabilities.",
    date: "2023-05-10",
    readTime: "11 min read",
    slug: "mobile-accessibility-best-practices",
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
          <Card key={index} className="flex flex-col h-full">
            <CardHeader>
              <CardTitle className="text-2xl">{post.title}</CardTitle>
              <CardDescription>
                {post.date} • {post.readTime}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="mb-4">{post.description}</p>
              <Button asChild className="mt-auto">
                <Link href={`/blog/${post.slug}`}>Read More</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="flex justify-between items-center mt-12">
        <Button variant="outline" disabled>
          <ChevronLeft className="mr-2 h-4 w-4" /> Previous
        </Button>
        <Button variant="outline" asChild>
          <Link href="/blog/archive">View All Posts</Link>
        </Button>
        <Button variant="outline" disabled>
          Next <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

