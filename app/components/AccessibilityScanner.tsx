"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { AlertCircle, XCircle } from "lucide-react"

type ScanResult = {
  score: number
  issues: {
    type: string
    description: string
    severity: "low" | "medium" | "high"
  }[]
}

export function AccessibilityScanner() {
  const [url, setUrl] = useState("")
  const [scanning, setScanning] = useState(false)
  const [result, setResult] = useState<ScanResult | null>(null)

  const handleScan = async () => {
    setScanning(true)
    // Simulating an API call to scan the website
    await new Promise((resolve) => setTimeout(resolve, 3000))
    setScanning(false)
    setResult({
      score: Math.floor(Math.random() * 100),
      issues: [
        { type: "Color contrast", description: "Insufficient color contrast on main header", severity: "high" },
        { type: "Alt text", description: "Missing alt text on logo image", severity: "medium" },
        { type: "Keyboard navigation", description: "Unable to access dropdown menu with keyboard", severity: "high" },
      ],
    })
  }

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case "low":
        return <AlertCircle className="w-5 h-5 text-yellow-500" />
      case "medium":
        return <AlertCircle className="w-5 h-5 text-orange-500" />
      case "high":
        return <XCircle className="w-5 h-5 text-red-500" />
      default:
        return null
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Accessibility Scanner</CardTitle>
        <CardDescription>Enter a URL to scan for accessibility issues</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-2 mb-4">
          <Input
            type="url"
            placeholder="https://example.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            disabled={scanning}
          />
          <Button onClick={handleScan} disabled={scanning || !url}>
            {scanning ? "Scanning..." : "Scan"}
          </Button>
        </div>
        {scanning && <Progress value={50} className="w-full" />}
        {result && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Scan Results</h3>
            <p className="mb-2">Accessibility Score: {result.score}%</p>
            <h4 className="font-semibold mb-2">Issues Found:</h4>
            <ul className="space-y-2">
              {result.issues.map((issue, index) => (
                <li key={index} className="flex items-start space-x-2">
                  {getSeverityIcon(issue.severity)}
                  <div>
                    <p className="font-medium">{issue.type}</p>
                    <p className="text-sm text-muted-foreground">{issue.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

