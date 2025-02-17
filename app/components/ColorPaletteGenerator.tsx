"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import chroma from "chroma-js"

type ColorSwatch = {
  color: string
  contrastWithWhite: number
  contrastWithBlack: number
}

export function ColorPaletteGenerator() {
  const [baseColor, setBaseColor] = useState("#3b82f6")
  const [paletteSize, setPaletteSize] = useState(5)
  const [palette, setPalette] = useState<ColorSwatch[]>([])

  const generatePalette = () => {
    const scale = chroma.scale([baseColor, "white"]).mode("lch").colors(paletteSize)
    const newPalette = scale.map((color) => ({
      color,
      contrastWithWhite: chroma.contrast(color, "white").toFixed(2),
      contrastWithBlack: chroma.contrast(color, "black").toFixed(2),
    }))
    setPalette(newPalette)
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Accessible Color Palette Generator</CardTitle>
        <CardDescription>Generate an accessible color palette based on WCAG guidelines</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <Label htmlFor="baseColor">Base Color</Label>
            <div className="flex space-x-2">
              <Input
                id="baseColor"
                type="color"
                value={baseColor}
                onChange={(e) => setBaseColor(e.target.value)}
                className="w-12 h-12 p-1"
              />
              <Input
                type="text"
                value={baseColor}
                onChange={(e) => setBaseColor(e.target.value)}
                className="flex-grow"
              />
            </div>
          </div>
          <div>
            <Label htmlFor="paletteSize">Palette Size</Label>
            <Slider
              id="paletteSize"
              min={3}
              max={10}
              step={1}
              value={[paletteSize]}
              onValueChange={(value) => setPaletteSize(value[0])}
            />
            <span className="text-sm text-muted-foreground">{paletteSize} colors</span>
          </div>
          <Button onClick={generatePalette}>Generate Palette</Button>
        </div>
        {palette.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Generated Palette</h3>
            <div className="grid grid-cols-2 gap-4">
              {palette.map((swatch, index) => (
                <div key={index} className="space-y-1">
                  <div className="w-full h-12 rounded" style={{ backgroundColor: swatch.color }}></div>
                  <p className="text-sm font-medium">{swatch.color}</p>
                  <p className="text-xs text-muted-foreground">Contrast with white: {swatch.contrastWithWhite}</p>
                  <p className="text-xs text-muted-foreground">Contrast with black: {swatch.contrastWithBlack}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

