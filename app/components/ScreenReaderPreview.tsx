"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Play, Pause, SkipBack, SkipForward } from "lucide-react"

export function ScreenReaderPreview() {
  const [content, setContent] = useState("")
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [words, setWords] = useState<string[]>([])

  useEffect(() => {
    setWords(content.split(" ").filter((word) => word.trim() !== ""))
  }, [content])

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isPlaying && currentIndex < words.length) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          if (prevIndex + 1 >= words.length) {
            setIsPlaying(false)
            return prevIndex
          }
          return prevIndex + 1
        })
      }, 500) // Adjust speed as needed
    }
    return () => clearInterval(interval)
  }, [isPlaying, currentIndex, words])

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const restart = () => {
    setCurrentIndex(0)
    setIsPlaying(true)
  }

  const skipForward = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 5, words.length - 1))
  }

  const skipBackward = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 5, 0))
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Screen Reader Preview</CardTitle>
        <CardDescription>Simulate how a screen reader would interpret your content</CardDescription>
      </CardHeader>
      <CardContent>
        <Textarea
          placeholder="Enter your content here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={5}
          className="mb-4"
        />
        <div className="space-y-4">
          <div className="flex justify-center space-x-2">
            <Button onClick={skipBackward} disabled={currentIndex === 0}>
              <SkipBack className="w-4 h-4" />
            </Button>
            <Button onClick={togglePlayPause}>
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </Button>
            <Button onClick={skipForward} disabled={currentIndex >= words.length - 1}>
              <SkipForward className="w-4 h-4" />
            </Button>
            <Button onClick={restart}>Restart</Button>
          </div>
          <div className="text-center p-4 bg-muted rounded-md min-h-[100px] flex items-center justify-center">
            <p className="text-2xl font-bold">{words[currentIndex] || "No content"}</p>
          </div>
          <div className="text-sm text-muted-foreground text-center">
            Word {currentIndex + 1} of {words.length}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

