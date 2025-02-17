import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Blog Archive - A11yHelper",
  description: "Browse our complete collection of web accessibility articles, tips, and best practices.",
  keywords: [
    "web accessibility archive",
    "a11y articles",
    "accessibility resources",
    "WCAG guidelines",
    "inclusive design",
  ],
}

const allBlogPosts = [
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
  {
    title: "Keyboard Navigation: Ensuring Full Accessibility",
    description: "Learn how to make your website fully navigable by keyboard, improving accessibility for all users.",
    date: "2023-04-28",
    readTime: "8 min read",
    slug: "keyboard-navigation-accessibility",
  },
  {
    title: "Accessible Rich Internet Applications (ARIA): A Comprehensive Guide",
    description: "Dive into ARIA attributes and learn how to use them effectively to enhance web accessibility.",
    date: "2023-04-15",
    readTime: "12 min read",
    slug: "aria-comprehensive-guide",
  },
  {
    title: "The Business Case for Web Accessibility",
    description:
      "Explore the economic, legal, and social benefits of prioritizing web accessibility in your organization.",
    date: "2023-04-01",
    readTime: "9 min read",
    slug: "business-case-web-accessibility",
  },
  {
    title: "Automated Accessibility Testing: Tools and Best Practices",
    description:
      "Discover the best tools and methodologies for integrating automated accessibility testing into your development workflow.",
    date: "2023-03-20",
    readTime: "10 min read",
    slug: "automated-accessibility-testing",
  },
]

export default function BlogArchivePage() {
  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Blog Archive</h1>
      <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
        Browse our complete collection of articles on web accessibility, WCAG guidelines, and inclusive design.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {allBlogPosts.map((post, index) => (
          <Card key={index} className="flex flex-col h-full">
            <CardHeader>
              <CardTitle className="text-xl">{post.title}</CardTitle>
              <CardDescription>
                {post.date} • {post.readTime}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="mb-4 text-sm">{post.description}</p>
              <Button asChild className="mt-auto" variant="outline">
                <Link href={`/blog/${post.slug}`}>Read Article</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="text-center mt-12">
        <Button asChild size="lg">
          <Link href="/blog">Back to Blog</Link>
        </Button>
      </div>
    </div>
  )
}

