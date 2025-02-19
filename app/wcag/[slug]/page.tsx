import { notFound } from "next/navigation"
import wcagData from "@/data/wcag-checklist.json"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle, Book, FileText, LinkIcon, AlertTriangle } from "lucide-react"
import Link from "next/link"

interface SuccessCriterion {
  ref_id: string
  title: string
  description: string
  level: "A" | "AA" | "AAA"
  url: string
  wcag_version: string
  special_cases?: Array<{
    type: string
    title: string
    description?: string
  }>
  notes?: Array<{ content: string }>
  references?: Array<{
    title: string
    url: string
  }>
}

export default function WCAGCriterionPage({ params }: { params: { slug: string } }) {
  const criterion = wcagData
    .flatMap((principle) => principle.guidelines)
    .flatMap((guideline) => guideline.success_criteria)
    .find((criterion) => criterion.ref_id === params.slug)

  if (!criterion) {
    notFound()
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <Alert variant="warning" className="mb-8">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Development Phase</AlertTitle>
          <AlertDescription>
            This site is currently in development. Many features are experimental and may change. We appreciate your
            patience and feedback.
          </AlertDescription>
        </Alert>

        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">
            {criterion.ref_id} {criterion.title}
          </h1>
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="secondary" className="text-lg py-1 px-3">
              Level {criterion.level}
            </Badge>
            <Badge variant="outline" className="text-lg py-1 px-3">
              {criterion.wcag_version}
            </Badge>
          </div>
          <p className="text-xl text-muted-foreground">{criterion.description}</p>
        </div>

        <Tabs defaultValue="overview" className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="special-cases">Special Cases</TabsTrigger>
            <TabsTrigger value="notes">Notes</TabsTrigger>
            <TabsTrigger value="references">References</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <Card>
              <CardHeader>
                <CardTitle>Overview</CardTitle>
                <CardDescription>Key information about this success criterion</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div>
                    <h3 className="font-semibold mb-2">Description</h3>
                    <p>{criterion.description}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">How to Meet</h3>
                    <p>
                      To meet this criterion, ensure that your web content satisfies the requirements outlined in the
                      description. Consider the special cases and notes for a comprehensive understanding.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Benefits</h3>
                    <p>
                      Implementing this criterion improves accessibility for users with various disabilities and
                      enhances the overall user experience for all visitors.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="special-cases">
            <Card>
              <CardHeader>
                <CardTitle>Special Cases</CardTitle>
                <CardDescription>Exceptions and specific scenarios to consider</CardDescription>
              </CardHeader>
              <CardContent>
                {criterion.special_cases && criterion.special_cases.length > 0 ? (
                  <ul className="space-y-4">
                    {criterion.special_cases.map((specialCase, index) => (
                      <li key={index} className="bg-muted p-4 rounded-md">
                        <h3 className="font-semibold mb-2">{specialCase.title}</h3>
                        <p>{specialCase.description}</p>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No special cases are specified for this criterion.</p>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notes">
            <Card>
              <CardHeader>
                <CardTitle>Notes</CardTitle>
                <CardDescription>Additional information and clarifications</CardDescription>
              </CardHeader>
              <CardContent>
                {criterion.notes && criterion.notes.length > 0 ? (
                  <ul className="space-y-4">
                    {criterion.notes.map((note, index) => (
                      <li key={index} className="flex items-start">
                        <AlertCircle className="w-5 h-5 mr-2 mt-1 flex-shrink-0 text-blue-500" />
                        <p>{note.content}</p>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No additional notes are provided for this criterion.</p>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="references">
            <Card>
              <CardHeader>
                <CardTitle>References</CardTitle>
                <CardDescription>Related resources and documentation</CardDescription>
              </CardHeader>
              <CardContent>
                {criterion.references && criterion.references.length > 0 ? (
                  <ul className="space-y-4">
                    {criterion.references.map((reference, index) => (
                      <li key={index} className="flex items-center">
                        <LinkIcon className="w-5 h-5 mr-2 text-blue-500" />
                        <Link
                          href={reference.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline"
                        >
                          {reference.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No specific references are provided for this criterion.</p>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="flex justify-between items-center">
          <Link href="/wcag-checklist" className="text-blue-500 hover:underline flex items-center">
            <FileText className="w-5 h-5 mr-2" />
            Back to WCAG Checklist
          </Link>
          <Link
            href={criterion.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline flex items-center"
          >
            <Book className="w-5 h-5 mr-2" />
            Official WCAG Documentation
          </Link>
        </div>
      </div>
    </div>
  )
}

