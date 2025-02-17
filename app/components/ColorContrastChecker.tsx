"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

function hexToRgb(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: Number.parseInt(result[1], 16),
        g: Number.parseInt(result[2], 16),
        b: Number.parseInt(result[3], 16),
      }
    : null
}

function calculateContrastRatio(color1: string, color2: string) {
  const rgb1 = hexToRgb(color1)
  const rgb2 = hexToRgb(color2)

  if (!rgb1 || !rgb2) return null

  const luminance1 = calculateLuminance(rgb1)
  const luminance2 = calculateLuminance(rgb2)

  const contrast = (Math.max(luminance1, luminance2) + 0.05) / (Math.min(luminance1, luminance2) + 0.05)
  return Math.round(contrast * 100) / 100
}

function calculateLuminance(rgb: { r: number; g: number; b: number }) {
  const a = [rgb.r, rgb.g, rgb.b].map((v) => {
    v /= 255
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)
  })
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722
}

function getContrastLevel(ratio: number) {
  if (ratio >= 7) return "AAA"
  if (ratio >= 4.5) return "AA"
  if (ratio >= 3) return "AA Large"
  return "Fail"
}

export default function ColorContrastChecker() {
  const [foreground, setForeground] = useState("#000000")
  const [background, setBackground] = useState("#FFFFFF")
  const contrastRatio = calculateContrastRatio(foreground, background)
  const contrastLevel = contrastRatio ? getContrastLevel(contrastRatio) : null

  return (
    <Card>
      <CardHeader>
        <CardTitle>Color Contrast Checker</CardTitle>
        <CardDescription>Check if your color combination meets WCAG standards for readability.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="foreground">Foreground Color</Label>
            <Input
              id="foreground"
              type="color"
              value={foreground}
              onChange={(e) => setForeground(e.target.value)}
              className="h-12 w-full"
            />
          </div>
          <div>
            <Label htmlFor="background">Background Color</Label>
            <Input
              id="background"
              type="color"
              value={background}
              onChange={(e) => setBackground(e.target.value)}
              className="h-12 w-full"
            />
          </div>
        </div>
        <div className="mt-6 p-4 rounded-md" style={{ color: foreground, backgroundColor: background }}>
          <h3 className="text-2xl font-bold mb-2">Sample Text</h3>
          <p>This is how your text will look with the selected color combination.</p>
        </div>
        <div className="mt-6">
          <h3 className="text-xl font-bold mb-2">Results</h3>
          {contrastRatio && (
            <>
              <p>Contrast Ratio: {contrastRatio}:1</p>
              <p>WCAG Level: {contrastLevel}</p>
              <p className="mt-2">
                {contrastLevel === "AAA" &&
                  "Excellent! This color combination meets the highest accessibility standards."}
                {contrastLevel === "AA" && "Good! This color combination meets standard accessibility requirements."}
                {contrastLevel === "AA Large" && "Acceptable for large text. Consider improving for smaller text."}
                {contrastLevel === "Fail" &&
                  "This color combination does not meet accessibility standards. Please adjust your colors."}
              </p>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

