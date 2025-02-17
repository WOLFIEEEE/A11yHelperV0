"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Progress } from "@/components/ui/progress"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { AlertCircle, CheckCircle, HelpCircle } from "lucide-react"

const AccessibilityExperience: React.FC = () => {
  const [highContrast, setHighContrast] = useState(false)
  const [largeText, setLargeText] = useState(false)
  const [keyboardFocus, setKeyboardFocus] = useState(false)
  const [altText, setAltText] = useState("")
  const [fontSize, setFontSize] = useState(16)
  const [score, setScore] = useState(0)
  const [activeTab, setActiveTab] = useState("visual")

  useEffect(() => {
    const newScore = calculateScore()
    setScore(newScore)
  }, []) // Only recalculate score when the calculateScore function changes

  const calculateScore = () => {
    let points = 0
    if (highContrast) points += 20
    if (largeText) points += 20
    if (keyboardFocus) points += 20
    if (altText.length > 10) points += 20
    if (fontSize >= 18) points += 20
    return points
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.ctrlKey || e.metaKey) {
      switch (e.key) {
        case "1":
          setActiveTab("visual")
          break
        case "2":
          setActiveTab("keyboard")
          break
        case "3":
          setActiveTab("screenreader")
          break
        case "4":
          setActiveTab("cognitive")
          break
      }
    }
  }

  return (
    <Card className="max-w-4xl mx-auto" onKeyDown={handleKeyDown}>
      <CardHeader>
        <CardTitle>Experience Accessibility in Action</CardTitle>
        <CardDescription>
          Interact with these demos to understand how different accessibility features impact user experience. Use
          keyboard shortcuts (Ctrl/Cmd + 1-4) to navigate between tabs.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="visual">Visual</TabsTrigger>
            <TabsTrigger value="keyboard">Keyboard</TabsTrigger>
            <TabsTrigger value="screenreader">Screen Reader</TabsTrigger>
            <TabsTrigger value="cognitive">Cognitive</TabsTrigger>
          </TabsList>
          <TabsContent value="visual">
            <Card>
              <CardHeader>
                <CardTitle>Visual Accessibility</CardTitle>
                <CardDescription>Explore how visual changes can improve accessibility.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="high-contrast">High Contrast</Label>
                  <Switch id="high-contrast" checked={highContrast} onCheckedChange={setHighContrast} />
                </div>
                <div className="flex items-center justify-between">
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
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="keyboard">
            <Card>
              <CardHeader>
                <CardTitle>Keyboard Accessibility</CardTitle>
                <CardDescription>Experience the importance of keyboard navigation.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="keyboard-focus">Enhanced Keyboard Focus</Label>
                  <Switch id="keyboard-focus" checked={keyboardFocus} onCheckedChange={setKeyboardFocus} />
                </div>
                <div className="space-y-2">
                  <Input
                    placeholder="First Name"
                    className={`transition-all duration-200 ${
                      keyboardFocus
                        ? "focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
                        : "focus:ring-2 focus:ring-gray-200"
                    }`}
                  />
                  <Input
                    placeholder="Last Name"
                    className={`transition-all duration-200 ${
                      keyboardFocus
                        ? "focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
                        : "focus:ring-2 focus:ring-gray-200"
                    }`}
                  />
                  <Button
                    className={`transition-all duration-200 ${
                      keyboardFocus
                        ? "focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
                        : "focus:ring-2 focus:ring-gray-200"
                    }`}
                  >
                    Submit
                  </Button>
                </div>
                <p>Try navigating the form using your keyboard with Tab and Shift+Tab.</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="screenreader">
            <Card>
              <CardHeader>
                <CardTitle>Screen Reader Accessibility</CardTitle>
                <CardDescription>Learn the importance of proper alt text for images.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Label htmlFor="alt-text">Enter alt text for the image:</Label>
                <Input
                  id="alt-text"
                  value={altText}
                  onChange={(e) => setAltText(e.target.value)}
                  placeholder="Describe the image"
                />
                <div className="border p-4 rounded-md">
                  <img src="/placeholder.svg" alt={altText || "Placeholder image"} width="200" height="200" />
                </div>
                <p>Use a screen reader to hear how the alt text describes the image.</p>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon">
                        <HelpCircle className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Good alt text should be concise, descriptive, and convey the purpose of the image.</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="cognitive">
            <Card>
              <CardHeader>
                <CardTitle>Cognitive Accessibility</CardTitle>
                <CardDescription>
                  Understand how adjusting text size can help users with cognitive disabilities.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Label htmlFor="font-size">Adjust Font Size</Label>
                <Slider
                  id="font-size"
                  min={12}
                  max={24}
                  step={1}
                  value={[fontSize]}
                  onValueChange={(value) => setFontSize(value[0])}
                />
                <div style={{ fontSize: `${fontSize}px` }}>
                  <p>This text can be adjusted for easier reading. Current size: {fontSize}px</p>
                  <p>Larger text can help users with cognitive disabilities or visual impairments.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-2">Accessibility Score</h3>
          <Progress value={score} className="w-full h-2" />
          <p className="mt-2">Your current score: {score}/100</p>
          {score === 100 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-4 p-4 bg-green-100 text-green-800 rounded-md flex items-center"
            >
              <CheckCircle className="mr-2" />
              Congratulations! You've achieved perfect accessibility in this demo.
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-4 p-4 bg-yellow-100 text-yellow-800 rounded-md flex items-center"
            >
              <AlertCircle className="mr-2" />
              Keep exploring the accessibility features to improve your score!
            </motion.div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export default AccessibilityExperience

