import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function JoinOurForumPage() {
  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Join Our Forum</h1>
      <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
        Connect with other developers, designers, and accessibility experts. Share your experiences, ask questions, and
        learn from others in our vibrant community.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Why Join Our Forum?</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              <ul className="list-disc list-inside space-y-2">
                <li>Get help with accessibility challenges</li>
                <li>Share your knowledge and experiences</li>
                <li>Stay updated on the latest accessibility trends</li>
                <li>Network with other professionals in the field</li>
                <li>Contribute to making the web more inclusive</li>
              </ul>
            </CardDescription>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Forum Guidelines</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              <ul className="list-disc list-inside space-y-2">
                <li>Be respectful and inclusive in your communications</li>
                <li>Stay on topic and contribute meaningfully to discussions</li>
                <li>Avoid sharing personal or sensitive information</li>
                <li>Report any inappropriate content or behavior</li>
                <li>Have fun and learn from each other!</li>
              </ul>
            </CardDescription>
          </CardContent>
        </Card>
      </div>
      <div className="text-center mt-12">
        <Button asChild size="lg">
          <Link href="https://forum.a11yhelper.com">Join the Forum</Link>
        </Button>
      </div>
    </div>
  )
}

