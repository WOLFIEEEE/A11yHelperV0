"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"

export default function InteractiveDemo() {
  const [highContrast, setHighContrast] = useState(false)
  const [largeText, setLargeText] = useState(false)
  const [keyboardFocus, setKeyboardFocus] = useState(false)
  const [altText, setAltText] = useState("")
  const [fontSize, setFontSize] = useState(16)

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-xl sm:text-2xl">Interactive Accessibility Demos</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="visual" className="w-full">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 mb-4">
            <TabsTrigger value="visual">Visual</TabsTrigger>
            <TabsTrigger value="keyboard">Keyboard</TabsTrigger>
            <TabsTrigger value="screenreader">Screen Reader</TabsTrigger>
            <TabsTrigger value="cognitive">Cognitive</TabsTrigger>
          </TabsList>
          <TabsContent value="visual">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="high-contrast" className="text-sm sm:text-base">
                  High Contrast
                </Label>
                <Switch id="high-contrast" checked={highContrast} onCheckedChange={setHighContrast} />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="large-text" className="text-sm sm:text-base">
                  Large Text
                </Label>
                <Switch id="large-text" checked={largeText} onCheckedChange={setLargeText} />
              </div>
              <div
                className={`p-4 rounded-md transition-all ${
                  highContrast ? "bg-black text-white" : "bg-gray-100 text-black"
                } ${largeText ? "text-lg sm:text-xl" : "text-sm sm:text-base"}`}
              >
                <p className="mb-4">This text demonstrates high contrast and large text options.</p>
                <Button>Sample Button</Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="keyboard">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="keyboard-focus" className="text-sm sm:text-base">
                  Enhanced Keyboard Focus
                </Label>
                <Switch id="keyboard-focus" checked={keyboardFocus} onCheckedChange={setKeyboardFocus} />
              </div>
              <div className="space-y-2">
                <Input
                  placeholder="First Name"
                  className={`transition-all duration-200 ${
                    keyboardFocus
                      ? "focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      : "focus:ring-1 focus:ring-gray-200"
                  }`}
                />
                <Input
                  placeholder="Last Name"
                  className={`transition-all duration-200 ${
                    keyboardFocus
                      ? "focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      : "focus:ring-1 focus:ring-gray-200"
                  }`}
                />
                <Button
                  className={`transition-all duration-200 ${
                    keyboardFocus
                      ? "focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      : "focus:ring-1 focus:ring-gray-200"
                  }`}
                >
                  Submit
                </Button>
              </div>
              <p className="text-xs sm:text-sm">Try navigating the form using your keyboard with Tab and Shift+Tab.</p>
            </div>
          </TabsContent>
          <TabsContent value="screenreader">
            <div className="space-y-4">
              <Label htmlFor="alt-text" className="text-sm sm:text-base">
                Enter alt text for the image:
              </Label>
              <Input
                id="alt-text"
                value={altText}
                onChange={(e) => setAltText(e.target.value)}
                placeholder="Describe the image"
              />
              <div className="border p-4 rounded-md">
                <img
                  src="/placeholder.svg"
                  alt={altText || "Placeholder image"}
                  width="200"
                  height="200"
                  className="max-w-full h-auto"
                />
              </div>
              <p className="text-xs sm:text-sm">Use a screen reader to hear how the alt text describes the image.</p>
            </div>
          </TabsContent>
          <TabsContent value="cognitive">
            <div className="space-y-4">
              <Label htmlFor="font-size" className="text-sm sm:text-base">
                Adjust Font Size
              </Label>
              <Slider
                id="font-size"
                min={12}
                max={24}
                step={1}
                value={[fontSize]}
                onValueChange={(value) => setFontSize(value[0])}
              />
              <div style={{ fontSize: `${fontSize}px` }}>
                <p className="mb-2">This text can be adjusted for easier reading. Current size: {fontSize}px</p>
                <p className="text-xs sm:text-sm">
                  Larger text can help users with cognitive disabilities or visual impairments.
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

