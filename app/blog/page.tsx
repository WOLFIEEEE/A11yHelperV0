import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const blogPosts = [
  {
    title: "Introduction to Web Accessibility",
    description: "Learn the basics of web accessibility and why it's important for all developers.",
    date: "2023-05-15",
    readTime: "5 min read",
    slug: "intro-to-web-accessibility",
  },
  {
    title: "ARIA Attributes Explained",
    description: "A comprehensive guide to using ARIA attributes to improve web accessibility.",
    date: "2023-06-02",
    readTime: "8 min read",
    slug: "aria-attributes-explained",
  },
  {
    title: "Creating Accessible Forms",
    description: "Best practices for designing and implementing accessible web forms.",
    date: "2023-06-20",
    readTime: "6 min read",
    slug: "creating-accessible-forms",
  },
  {
    title: "The Importance of Semantic HTML",
    description: "Discover how semantic HTML can improve accessibility and SEO.",
    date: "2023-07-10",
    readTime: "7 min read",
    slug: "importance-of-semantic-html",
  },
]

export default function BlogPage() {
  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">A11yHelper Blog</h1>
      <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
        Stay up-to-date with the latest accessibility trends, tips, and best practices.
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
    </div>
  )
}

