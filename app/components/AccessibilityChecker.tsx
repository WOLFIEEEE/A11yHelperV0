"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { AlertCircle, CheckCircle, XCircle, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Link from "next/link"

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

type AccessibilityResult = {
  score: number
  issuesCount: number
  issues: AccessibilityIssue[]
}

const impactColors = {
  minor: "bg-yellow-500",
  moderate: "bg-orange-500",
  serious: "bg-red-500",
  critical: "bg-red-700",
}

export default function AccessibilityChecker() {
  const [url, setUrl] = useState("")
  const [result, setResult] = useState<AccessibilityResult | null>(null)
  const [loading, setLoading] = useState(false)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setResult(null)
    setLoadingProgress(0)

    const loadingInterval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 90) {
          clearInterval(loadingInterval)
          return 90
        }
        return prev + 10
      })
    }, 500)

    try {
      const response = await fetch("/api/accessibility-check", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      })

      if (!response.ok) {
        throw new Error("Failed to check accessibility")
      }

      const data = await response.json()
      setResult(data)
    } catch (err) {
      setError("An error occurred while checking accessibility. Please try again.")
    } finally {
      clearInterval(loadingInterval)
      setLoadingProgress(100)
      setTimeout(() => setLoading(false), 500) // Delay to show 100% briefly
    }
  }

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-500"
    if (score >= 70) return "text-yellow-500"
    return "text-red-500"
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-xl sm:text-2xl">Quick Accessibility Check</CardTitle>
        <CardDescription className="text-sm sm:text-base">
          Enter your website URL to get an instant accessibility analysis
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
            <Input
              type="url"
              placeholder="https://example.com"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              required
              aria-label="Website URL"
              className="flex-grow"
            />
            <Button type="submit" disabled={loading} className="w-full sm:w-auto">
              {loading ? "Analyzing..." : "Check Now"}
            </Button>
          </div>
          {loading && (
            <div className="space-y-2">
              <Progress value={loadingProgress} className="w-full" />
              <p className="text-sm text-center">{loadingProgress}% - Analyzing accessibility...</p>
            </div>
          )}
          {error && (
            <div className="flex items-center text-red-500">
              <AlertCircle className="w-4 h-4 mr-2" />
              <p className="text-sm">{error}</p>
            </div>
          )}
        </form>

        {result && (
          <div className="mt-8 space-y-6">
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">Accessibility Score</h3>
              <p className={`text-4xl sm:text-5xl font-bold ${getScoreColor(result.score)}`}>{result.score}%</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Based on {result.issuesCount} issue{result.issuesCount !== 1 ? "s" : ""} found
              </p>
            </div>

            <div>
              <h4 className="text-lg sm:text-xl font-semibold mb-4">Top Issues Found</h4>
              <div className="space-y-2">
                {result.issues.slice(0, 5).map((issue, index) => (
                  <div key={index} className="flex items-start space-x-2 p-2 bg-muted rounded-md">
                    <div className="mt-1 flex-shrink-0">
                      {issue.count > 0 ? (
                        <XCircle className={`w-5 h-5 ${impactColors[issue.impact]} text-white rounded-full`} />
                      ) : (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      )}
                    </div>
                    <div className="flex-grow">
                      <p className="font-medium text-sm sm:text-base">{issue.type}</p>
                      <div className="flex flex-wrap items-center space-x-2">
                        <Badge className={`${impactColors[issue.impact]} text-white text-xs sm:text-sm`}>
                          {issue.impact}
                        </Badge>
                        <p className="text-xs sm:text-sm text-muted-foreground">Count: {issue.count}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-muted p-4 rounded-md">
              <h4 className="text-base sm:text-lg font-semibold mb-2">Understanding Your Score</h4>
              <p className="text-xs sm:text-sm mb-2">
                Your accessibility score is calculated based on the number and severity of issues found:
              </p>
              <ul className="list-disc list-inside text-xs sm:text-sm space-y-1">
                <li>90-100: Excellent - Minor improvements may be needed</li>
                <li>70-89: Good - Some important issues need addressing</li>
                <li>50-69: Fair - Significant accessibility barriers present</li>
                <li>0-49: Poor - Major accessibility issues need urgent attention</li>
              </ul>
            </div>

            <Button asChild className="w-full sm:w-auto">
              <Link href={`/explore-issues?url=${encodeURIComponent(url)}`}>
                Explore Issues <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row justify-between space-y-2 sm:space-y-0">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm" className="w-full sm:w-auto">
                What We Check
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-xs sm:text-sm">
                We check for common issues like missing alt text, color contrast, and keyboard accessibility.
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <Button asChild className="w-full sm:w-auto">
          <Link href="/accessibility-issues">
            Learn About Common Issues <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

