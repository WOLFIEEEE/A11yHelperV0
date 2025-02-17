import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="container py-12 md:py-24 lg:py-32 text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Blog Post Not Found</h1>
      <p className="text-xl mb-8">Sorry, the blog post you're looking for doesn't exist or has been moved.</p>
      <Button asChild>
        <Link href="/blog">Return to Blog</Link>
      </Button>
    </div>
  )
}

