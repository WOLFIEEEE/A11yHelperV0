import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const communityContent = [
  {
    title: "Blog",
    description: "Read our latest blog posts on web accessibility, best practices, and industry news.",
    action: "Read Blog",
    link: "/blog",
  },
  {
    title: "Events",
    description: "Participate in our webinars, workshops, and conferences on web accessibility.",
    action: "View Events",
    link: "/events",
  },
  {
    title: "Resources",
    description: "Access our curated list of accessibility resources, guides, and tools.",
    action: "Explore Resources",
    link: "/resources",
  },
]

export default function CommunityPage() {
  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
        A11yHelper Community
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {communityContent.map((item, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-4">{item.description}</CardDescription>
              <Button asChild>
                <Link href={item.link}>{item.action}</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

