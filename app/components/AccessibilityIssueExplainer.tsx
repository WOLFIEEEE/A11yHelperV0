"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

type AccessibilityIssue = {
  name: string
  description: string
  impact: "low" | "medium" | "high"
  wcagCriteria: string
  howToFix: string
}

const accessibilityIssues: AccessibilityIssue[] = [
  {
    name: "Missing Alt Text",
    description: "Images are missing alternative text, making them inaccessible to screen reader users.",
    impact: "high",
    wcagCriteria: "1.1.1 Non-text Content (Level A)",
    howToFix:
      "Add descriptive alt text to all images that convey meaning. Use empty alt text (alt='') for decorative images.",
  },
  {
    name: "Low Color Contrast",
    description:
      "The color contrast between text and background is insufficient, making it difficult to read for some users.",
    impact: "medium",
    wcagCriteria: "1.4.3 Contrast (Minimum) (Level AA)",
    howToFix:
      "Ensure that the contrast ratio between text and background is at least 4.5:1 for normal text and 3:1 for large text.",
  },
  {
    name: "Keyboard Inaccessible Elements",
    description: "Some interactive elements cannot be accessed or operated using a keyboard alone.",
    impact: "high",
    wcagCriteria: "2.1.1 Keyboard (Level A)",
    howToFix:
      "Ensure all interactive elements can be reached and operated using only a keyboard. Use native HTML elements or add appropriate ARIA roles and keyboard event handlers.",
  },
]

export function AccessibilityIssueExplainer() {
  const [selectedIssue, setSelectedIssue] = useState<AccessibilityIssue>(accessibilityIssues[0])

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "low":
        return "bg-yellow-500"
      case "medium":
        return "bg-orange-500"
      case "high":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>Accessibility Issue Explainer</CardTitle>
        <CardDescription>Learn about common accessibility issues and how to fix them</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Select
            onValueChange={(value) =>
              setSelectedIssue(accessibilityIssues.find((issue) => issue.name === value) || accessibilityIssues[0])
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Select an issue" />
            </SelectTrigger>
            <SelectContent>
              {accessibilityIssues.map((issue, index) => (
                <SelectItem key={index} value={issue.name}>
                  {issue.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <div>
            <h3 className="text-lg font-semibold mb-2">{selectedIssue.name}</h3>
            <Badge className={`${getImpactColor(selectedIssue.impact)} text-white`}>
              {selectedIssue.impact.charAt(0).toUpperCase() + selectedIssue.impact.slice(1)} Impact
            </Badge>
            <p className="mt-2">{selectedIssue.description}</p>
          </div>
          <div>
            <h4 className="font-semibold">WCAG Criteria:</h4>
            <p>{selectedIssue.wcagCriteria}</p>
          </div>
          <div>
            <h4 className="font-semibold">How to Fix:</h4>
            <p>{selectedIssue.howToFix}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

