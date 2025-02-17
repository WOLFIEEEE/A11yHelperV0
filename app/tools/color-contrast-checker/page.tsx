"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Clipboard, Download, RefreshCw } from "lucide-react"
import { Slider } from "@/components/ui/slider"
import chroma from "chroma-js"

type ElementType = "decorative" | "largeText" | "smallText"
type ComplianceLevel = "AA" | "AAA" | "APCA"

function calculateContrastRatio(color1: string, color2: string) {
  const l1 = chroma(color1).luminance()
  const l2 = chroma(color2).luminance()
  return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05)
}

function getContrastLevel(ratio: number, elementType: ElementType, complianceLevel: ComplianceLevel) {
  if (elementType === "decorative") return "Exempt"
  if (complianceLevel === "APCA") {
    // APCA has different thresholds, this is a simplified version
    if (ratio >= 75) return "AAA"
    if (ratio >= 60) return "AA"
    return "Fail"
  }
  if (elementType === "largeText") {
    if (ratio >= 4.5) return "AAA"
    if (ratio >= 3) return "AA"
  } else {
    if (ratio >= 7) return "AAA"
    if (ratio >= 4.5) return "AA"
  }
  return "Fail"
}

function simulateColorBlindness(color: string, type: string) {
  // This is a simplified simulation. For accurate results, use a specialized library.
  const rgb = chroma(color).rgb()
  switch (type) {
    case "protanopia":
      return chroma(
        rgb[1] * 0.567 + rgb[2] * 0.433,
        rgb[1] * 0.558 + rgb[2] * 0.442,
        rgb[0] * 0.242 + rgb[1] * 0.043 + rgb[2] * 0.715,
      ).hex()
    case "deuteranopia":
      return chroma(rgb[0] * 0.625 + rgb[2] * 0.375, rgb[0] * 0.7 + rgb[2] * 0.3, rgb[0] * 0.3 + rgb[2] * 0.7).hex()
    case "tritanopia":
      return chroma(
        rgb[0] * 0.95 + rgb[1] * 0.05,
        rgb[0] * 0.433 + rgb[1] * 0.567,
        rgb[0] * 0.475 + rgb[1] * 0.525,
      ).hex()
    default:
      return color
  }
}

export default function ColorContrastCheckerPage() {
  const [foreground, setForeground] = useState("#000000")
  const [background, setBackground] = useState("#FFFFFF")
  const [elementType, setElementType] = useState<ElementType>("smallText")
  const [complianceLevel, setComplianceLevel] = useState<ComplianceLevel>("AA")
  const [colorBlindness, setColorBlindness] = useState("normal")
  const [showColorBlindness, setShowColorBlindness] = useState(false)

  const [contrastRatio, setContrastRatio] = useState(21)
  const [contrastLevel, setContrastLevel] = useState("AAA")
  const [brightness, setBrightness] = useState(100)

  useEffect(() => {
    const ratio = calculateContrastRatio(foreground, background)
    setContrastRatio(ratio)
    setContrastLevel(getContrastLevel(ratio, elementType, complianceLevel))
  }, [foreground, background, elementType, complianceLevel])

  const getDetailedMessage = () => {
    if (elementType === "decorative") {
      return "This element is marked as decorative and is exempt from contrast requirements. However, consider ensuring some level of contrast for better user experience."
    }
    const messages = {
      AAA: `Excellent! The contrast ratio of ${contrastRatio.toFixed(2)}:1 meets the highest WCAG 2.1 level AAA standards for ${elementType === "largeText" ? "large" : "normal"} text.`,
      AA: `Good! The contrast ratio of ${contrastRatio.toFixed(2)}:1 meets WCAG 2.1 level AA standards for ${elementType === "largeText" ? "large" : "normal"} text.`,
      Fail: `The contrast ratio of ${contrastRatio.toFixed(2)}:1 does not meet WCAG 2.1 ${complianceLevel} standards for ${elementType === "largeText" ? "large" : "normal"} text. ${
        elementType === "largeText"
          ? "For AA compliance, aim for at least 3:1, and for AAA, aim for at least 4.5:1."
          : "For AA compliance, aim for at least 4.5:1, and for AAA, aim for at least 7:1."
      }`,
    }
    return messages[contrastLevel as keyof typeof messages]
  }

  const copyResults = () => {
    const message = `
Color Contrast Check Results:
Foreground Color: ${foreground}
Background Color: ${background}
Element Type: ${elementType}
Compliance Level: ${complianceLevel}
Contrast Ratio: ${contrastRatio.toFixed(2)}:1
WCAG Level: ${contrastLevel}

${getDetailedMessage()}
    `.trim()
    navigator.clipboard.writeText(message)
  }

  const exportReport = () => {
    const report = `
Color Contrast Accessibility Report

Date: ${new Date().toLocaleString()}

Test Configuration:
- Foreground Color: ${foreground}
- Background Color: ${background}
- Element Type: ${elementType}
- Compliance Level: ${complianceLevel}

Results:
- Contrast Ratio: ${contrastRatio.toFixed(2)}:1
- WCAG Level: ${contrastLevel}

Detailed Analysis:
${getDetailedMessage()}

Recommendations:
${getRecommendations()}

Color Blindness Simulation:
- Protanopia: Foreground ${simulateColorBlindness(foreground, "protanopia")}, Background ${simulateColorBlindness(background, "protanopia")}
- Deuteranopia: Foreground ${simulateColorBlindness(foreground, "deuteranopia")}, Background ${simulateColorBlindness(background, "deuteranopia")}
- Tritanopia: Foreground ${simulateColorBlindness(foreground, "tritanopia")}, Background ${simulateColorBlindness(background, "tritanopia")}

Note: This report is generated by the A11yHelper Color Contrast Checker tool. For more information, visit our documentation at https://a11yhelper.com/docs/color-contrast-checker
    `.trim()

    const blob = new Blob([report], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "color-contrast-report.txt"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const getRecommendations = () => {
    if (contrastLevel === "AAA")
      return "Your current color combination meets the highest accessibility standards. Great job!"

    const targetRatio =
      elementType === "largeText" ? (complianceLevel === "AAA" ? 4.5 : 3) : complianceLevel === "AAA" ? 7 : 4.5
    const lighterBackground = chroma(background).brighten().hex()
    const darkerForeground = chroma(foreground).darken().hex()

    return `
To improve contrast:
1. Try increasing the lightness of the background color. For example: ${lighterBackground}
2. Or, try darkening the foreground color. For example: ${darkerForeground}
3. Aim for a contrast ratio of at least ${targetRatio}:1 to meet ${complianceLevel} standards for ${elementType === "largeText" ? "large" : "normal"} text.
4. Consider using a color palette tool to find accessible color combinations that match your design.
    `.trim()
  }

  const adjustBrightness = (color: string, amount: number) => {
    return chroma(color)
      .brighten((amount - 100) / 100)
      .hex()
  }

  const randomizeColors = () => {
    setForeground(chroma.random().hex())
    setBackground(chroma.random().hex())
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter text-center mb-8">
        Advanced Color Contrast Checker
      </h1>
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle>Check Color Contrast</CardTitle>
          <CardDescription>
            Ensure your color combinations meet WCAG standards for readability and accessibility.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">Step 1: Choose Your Colors</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="foreground">Foreground Color</Label>
                  <div className="flex items-center space-x-2">
                    <Input
                      id="foreground"
                      type="color"
                      value={foreground}
                      onChange={(e) => setForeground(e.target.value)}
                      className="h-10 w-20"
                    />
                    <Input
                      type="text"
                      value={foreground}
                      onChange={(e) => setForeground(e.target.value)}
                      className="flex-grow"
                      placeholder="Hex, RGB, HSL, or CSS variable"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="background">Background Color</Label>
                  <div className="flex items-center space-x-2">
                    <Input
                      id="background"
                      type="color"
                      value={background}
                      onChange={(e) => setBackground(e.target.value)}
                      className="h-10 w-20"
                    />
                    <Input
                      type="text"
                      value={background}
                      onChange={(e) => setBackground(e.target.value)}
                      className="flex-grow"
                      placeholder="Hex, RGB, HSL, or CSS variable"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <Label htmlFor="brightness">Adjust Brightness</Label>
                <Slider
                  id="brightness"
                  min={0}
                  max={200}
                  step={1}
                  value={[brightness]}
                  onValueChange={(value) => setBrightness(value[0])}
                  className="mt-2"
                />
              </div>
              <Button onClick={randomizeColors} className="mt-4">
                <RefreshCw className="w-4 h-4 mr-2" />
                Randomize Colors
              </Button>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Step 2: Specify Element Type and Compliance Level</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="elementType">Element Type</Label>
                  <Select value={elementType} onValueChange={(value) => setElementType(value as ElementType)}>
                    <SelectTrigger id="elementType">
                      <SelectValue placeholder="Select element type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="decorative">Decorative Icon</SelectItem>
                      <SelectItem value="largeText">Large Text</SelectItem>
                      <SelectItem value="smallText">Small Text</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="complianceLevel">Compliance Level</Label>
                  <Select
                    value={complianceLevel}
                    onValueChange={(value) => setComplianceLevel(value as ComplianceLevel)}
                  >
                    <SelectTrigger id="complianceLevel">
                      <SelectValue placeholder="Select compliance level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="AA">WCAG AA</SelectItem>
                      <SelectItem value="AAA">WCAG AAA</SelectItem>
                      <SelectItem value="APCA">APCA</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Step 3: Preview</h2>
              <div
                className="p-6 rounded-md transition-all duration-300"
                style={{
                  color: adjustBrightness(
                    showColorBlindness ? simulateColorBlindness(foreground, colorBlindness) : foreground,
                    brightness,
                  ),
                  backgroundColor: adjustBrightness(
                    showColorBlindness ? simulateColorBlindness(background, colorBlindness) : background,
                    brightness,
                  ),
                }}
              >
                <h3 className="text-3xl font-bold mb-4">Sample Text</h3>
                <p className="text-lg mb-2">This is how your text will look with the selected color combination.</p>
                <p className="text-sm">Here's an example of smaller text for comparison.</p>
              </div>
              <div className="mt-4">
                <Label htmlFor="colorBlindness">Color Blindness Simulation</Label>
                <div className="flex items-center space-x-2 mt-2">
                  <Switch
                    id="color-blindness-switch"
                    checked={showColorBlindness}
                    onCheckedChange={setShowColorBlindness}
                  />
                  <Label htmlFor="color-blindness-switch">Enable</Label>
                </div>
                {showColorBlindness && (
                  <Select value={colorBlindness} onValueChange={setColorBlindness}>
                    <SelectTrigger id="colorBlindness">
                      <SelectValue placeholder="Select color blindness type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="normal">Normal Vision</SelectItem>
                      <SelectItem value="protanopia">Protanopia</SelectItem>
                      <SelectItem value="deuteranopia">Deuteranopia</SelectItem>
                      <SelectItem value="tritanopia">Tritanopia</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Step 4: Check Results</h2>

              <div className="space-y-2">
                <p className="text-2xl font-bold">
                  Contrast Ratio: <span className="text-primary">{contrastRatio.toFixed(2)}:1</span>
                </p>
                <p className="text-xl">
                  WCAG Level:{" "}
                  <span className={`font-semibold ${contrastLevel === "Fail" ? "text-destructive" : "text-primary"}`}>
                    {contrastLevel}
                  </span>
                </p>
                <p className="text-sm mt-4">{getDetailedMessage()}</p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Button onClick={copyResults} className="flex-grow sm:flex-grow-0">
                    <Clipboard className="w-4 h-4 mr-2" />
                    Copy Results
                  </Button>
                  <Button onClick={exportReport} className="flex-grow sm:flex-grow-0">
                    <Download className="w-4 h-4 mr-2" />
                    Export Report
                  </Button>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Recommendations</h2>
              <p className="text-sm whitespace-pre-wrap">{getRecommendations()}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Documentation</h2>
        <p>
          For more information on how to use this tool and contribute to its development, please visit our{" "}
          <a href="/docs/color-contrast-checker" className="text-primary hover:underline">
            Color Contrast Checker documentation
          </a>
          .
        </p>
      </div>
    </div>
  )
}

