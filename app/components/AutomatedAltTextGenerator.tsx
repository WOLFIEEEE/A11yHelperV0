"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

export function AutomatedAltTextGenerator() {
  const [imageUrl, setImageUrl] = useState("")
  const [generatedAltText, setGeneratedAltText] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const generateAltText = async () => {
    setIsLoading(true)
    // In a real implementation, this would call an AI service to generate alt text
    // For this demo, we'll use a mock response
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setGeneratedAltText(
      "A person standing on a mountain peak overlooking a scenic valley with a sunset in the background.",
    )
    setIsLoading(false)
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Automated Alt Text Generator</CardTitle>
        <CardDescription>Generate appropriate alt text for images using AI</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <Label htmlFor="imageUrl">Image URL</Label>
            <Input
              id="imageUrl"
              type="url"
              placeholder="https://example.com/image.jpg"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </div>
          <Button onClick={generateAltText} disabled={!imageUrl || isLoading}>
            {isLoading ? "Generating..." : "Generate Alt Text"}
          </Button>
          {imageUrl && (
            <div>
              <img src={imageUrl || "/placeholder.svg"} alt="Preview" className="max-w-full h-auto rounded-md" />
            </div>
          )}
          {generatedAltText && (
            <div>
              <Label htmlFor="altText">Generated Alt Text</Label>
              <Textarea
                id="altText"
                value={generatedAltText}
                onChange={(e) => setGeneratedAltText(e.target.value)}
                rows={3}
              />
              <p className="text-sm text-muted-foreground mt-2">
                You can edit the generated alt text to better suit your needs.
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

