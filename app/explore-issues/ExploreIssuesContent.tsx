"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

type AccessibilityIssue = {
  type: string
  count: number
  impact: "minor" | "moderate" | "serious" | "critical"
  locations: {
    element: string
    code: string
    line: number
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
        const response = await fetch(`/api/accessibility-check?url=${url}`)
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
      <h2 className="text-2xl font-semibold mb-4">Accessibility Issues</h2>
      {issues.length === 0 ? (
        <p>No accessibility issues found!</p>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Issue Type</TableHead>
              <TableHead>Impact</TableHead>
              <TableHead>Count</TableHead>
              <TableHead>Locations</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {issues.map((issue) => (
              <TableRow key={issue.type}>
                <TableCell>{issue.type}</TableCell>
                <TableCell>
                  <Badge className={`${impactColors[issue.impact]} text-white`}>{issue.impact}</Badge>
                </TableCell>
                <TableCell>{issue.count}</TableCell>
                <TableCell>
                  {issue.locations.map((location, index) => (
                    <div key={index}>
                      <p>Element: {location.element}</p>
                      <pre>{location.code}</pre>
                      <p>Line: {location.line}</p>
                    </div>
                  ))}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  )
}

