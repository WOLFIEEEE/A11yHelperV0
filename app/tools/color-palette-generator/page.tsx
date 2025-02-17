"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Clipboard, RefreshCw } from "lucide-react"
import chroma from "chroma-js"

function generateAccessiblePalette(baseColor: string, paletteSize = 5): string[] {
  const base = chroma(baseColor)
  const palette = [base.hex()]

  // Generate lighter shades
  for (let i = 1; i < Math.ceil(paletteSize / 2); i++) {
    palette.unshift(base.brighten(i).hex())
  }

  // Generate darker shades
  for (let i = 1; i < Math.floor(paletteSize / 2); i++) {
    palette.push(base.darken(i).hex())
  }

  return palette
}

function calculateContrastRatio(color1: string, color2: string): number {
  const l1 = chroma(color1).luminance()
  const l2 = chroma(color2).luminance()
  return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05)
}

export default function ColorPaletteGeneratorPage() {
  const [baseColor, setBaseColor] = useState("#3b82f6")
  const [paletteSize, setPaletteSize] = useState(5)
  const [palette, setPalette] = useState<string[]>(generateAccessiblePalette(baseColor, paletteSize))

  const regeneratePalette = () => {
    setPalette(generateAccessiblePalette(baseColor, paletteSize))
  }

  const copyPalette = () => {
    navigator.clipboard.writeText(palette.join(", "))
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter text-center mb-8">
        Accessible Color Palette Generator
      </h1>
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle>Generate Accessible Color Palette</CardTitle>
          <CardDescription>Create a harmonious and accessible color palette based on a single color.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <Label htmlFor="baseColor">Base Color</Label>
              <div className="flex items-center space-x-2 mt-2">
                <Input
                  id="baseColor"
                  type="color"
                  value={baseColor}
                  onChange={(e) => setBaseColor(e.target.value)}
                  className="h-10 w-20"
                />
                <Input
                  type="text"
                  value={baseColor}
                  onChange={(e) => setBaseColor(e.target.value)}
                  className="flex-grow"
                  placeholder="Hex color code"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="paletteSize">Palette Size</Label>
              <Slider
                id="paletteSize"
                min={3}
                max={9}
                step={2}
                value={[paletteSize]}
                onValueChange={(value) => setPaletteSize(value[0])}
                className="mt-2"
              />
              <p className="text-sm text-muted-foreground mt-1">Number of colors: {paletteSize}</p>
            </div>

            <Button onClick={regeneratePalette}>
              <RefreshCw className="w-4 h-4 mr-2" />
              Regenerate Palette
            </Button>

            <div>
              <h2 className="text-xl font-semibold mb-4">Generated Palette</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {palette.map((color, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="w-20 h-20 rounded-md shadow-md" style={{ backgroundColor: color }}></div>
                    <p className="mt-2 text-sm font-mono">{color}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Contrast Ratios</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {palette.map((color, index) => (
                  <div key={index}>
                    <p className="font-semibold">
                      {color} vs {chroma(color).luminance() > 0.5 ? "Black" : "White"}
                    </p>
                    <p>
                      Ratio:{" "}
                      {calculateContrastRatio(color, chroma(color).luminance() > 0.5 ? "#000000" : "#FFFFFF").toFixed(
                        2,
                      )}
                      :1
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <Button onClick={copyPalette}>
              <Clipboard className="w-4 h-4 mr-2" />
              Copy Palette
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-4">How to Use This Tool</h2>
        <p className="max-w-2xl mx-auto">
          1. Choose a base color using the color picker or enter a hex code.
          <br />
          2. Adjust the palette size using the slider.
          <br />
          3. Click "Regenerate Palette" to create a new palette based on your settings.
          <br />
          4. View the generated colors and their contrast ratios against black or white.
          <br />
          5. Copy the palette to use in your designs.
        </p>
      </div>
    </div>
  )
}

