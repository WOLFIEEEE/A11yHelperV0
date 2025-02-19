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
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-xl md:text-2xl text-center">Interactive Accessibility Demos</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="visual" className="w-full">
          <TabsList className="flex flex-col sm:flex-row w-full space-y-2 sm:space-y-0 sm:space-x-2 mb-6">
            <TabsTrigger value="visual" className="w-full">
              Visual
            </TabsTrigger>
            <TabsTrigger value="keyboard" className="w-full">
              Keyboard
            </TabsTrigger>
            <TabsTrigger value="screenreader" className="w-full">
              Screen Reader
            </TabsTrigger>
            <TabsTrigger value="cognitive" className="w-full">
              Cognitive
            </TabsTrigger>
          </TabsList>
          <TabsContent value="visual">
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                <Label htmlFor="high-contrast">High Contrast</Label>
                <Switch id="high-contrast" checked={highContrast} onCheckedChange={setHighContrast} />
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                <Label htmlFor="large-text">Large Text</Label>
                <Switch id="large-text" checked={largeText} onCheckedChange={setLargeText} />
              </div>
              <div
                className={`p-4 rounded-md transition-all ${
                  highContrast ? "bg-black text-white" : "bg-gray-100 text-black"
                } ${largeText ? "text-xl" : "text-base"}`}
              >
                <p className="mb-4">This text demonstrates high contrast and large text options.</p>
                <Button>Sample Button</Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="keyboard">
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                <Label htmlFor="keyboard-focus">Enhanced Keyboard Focus</Label>
                <Switch id="keyboard-focus" checked={keyboardFocus} onCheckedChange={setKeyboardFocus} />
              </div>
              <div className="space-y-4">
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
                  className={`w-full transition-all duration-200 ${
                    keyboardFocus
                      ? "focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      : "focus:ring-1 focus:ring-gray-200"
                  }`}
                >
                  Submit
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Try navigating the form using your keyboard with Tab and Shift+Tab.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="screenreader">
            <div className="space-y-6">
              <div className="flex flex-col space-y-2">
                <Label htmlFor="alt-text">Enter alt text for the image:</Label>
                <Input
                  id="alt-text"
                  value={altText}
                  onChange={(e) => setAltText(e.target.value)}
                  placeholder="Describe the image"
                />
              </div>
              <div className="border p-4 rounded-md flex justify-center">
                <img
                  src="https://images.unsplash.com/photo-1517849845537-4d257902454a"
                  alt={altText || "A close-up of a dog's face with a humorous expression"}
                  className="w-40 h-40 object-cover rounded-md"
                />
              </div>
              <p className="text-sm text-muted-foreground">
                Use a screen reader to hear how the alt text describes the image.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="cognitive">
            <div className="space-y-6">
              <div className="flex flex-col space-y-2">
                <Label htmlFor="font-size">Adjust Font Size</Label>
                <Slider
                  id="font-size"
                  min={12}
                  max={24}
                  step={1}
                  value={[fontSize]}
                  onValueChange={(value) => setFontSize(value[0])}
                />
              </div>
              <div style={{ fontSize: `${fontSize}px` }}>
                <p className="mb-2">This text can be adjusted for easier reading.</p>
                <p className="mb-2">Current size: {fontSize}px</p>
                <p>Larger text can help users with cognitive disabilities or visual impairments.</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

