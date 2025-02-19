"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

type AccessibilityIssue = {
  type: string
  description: string
  impact: "minor" | "moderate" | "serious" | "critical"
  helpUrl: string
  nodes: {
    html: string
    target: string[]
  }[]
}

const impactColors = {
  minor: "bg-yellow-500",
  moderate: "bg-orange-500",
  serious: "bg-red-500",
  critical: "bg-red-700",
}

export default function ExploreIssuesContent() {
  const params = useParams()
  const url = params.url
  const [issues, setIssues] = useState<AccessibilityIssue[]>([])
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const response = await fetch("/api/accessibility-check", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ url }),
        })
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        setIssues(data.issues)
      } catch (error) {
        setError("Failed to fetch accessibility issues.")
        console.error("Error fetching issues:", error)
      } finally {
        setLoading(false)
      }
    }
    if (url) {
      fetchIssues()
    }
  }, [url])

  if (loading) return <p>Loading...</p>
  if (error) return <p className="text-red-500">{error}</p>

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Accessibility Issues for {url}</h2>
      {issues.length === 0 ? (
        <p>No accessibility issues found!</p>
      ) : (
        <Accordion type="single" collapsible className="w-full">
          {issues.map((issue, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>
                <div className="flex items-center space-x-2">
                  <Badge className={`${impactColors[issue.impact]} text-white`}>{issue.impact}</Badge>
                  <span>{issue.type}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  <p>{issue.description}</p>
                  <a
                    href={issue.helpUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Learn more about this issue
                  </a>
                  <h4 className="font-semibold mt-4">Affected Elements:</h4>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>HTML</TableHead>
                        <TableHead>Selector</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {issue.nodes.map((node, nodeIndex) => (
                        <TableRow key={nodeIndex}>
                          <TableCell>{node.html}</TableCell>
                          <TableCell>{node.target.join(", ")}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      )}
    </div>
  )
}

