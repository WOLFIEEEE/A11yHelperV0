"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

type GlossaryItem = {
  term: string
  definition: string
}

const glossaryItems: GlossaryItem[] = [
  { term: "ARIA", definition: "Accessible Rich Internet Applications - a set of attributes that define ways to make web content and applications more accessible to people with disabilities." },
  { term: "Alt Text", definition: "Alternative text that describes the content and function of an image." },
  { term: "Screen Reader", definition: "A software application that enables people with visual impairments to use a computer by reading aloud the content displayed on the screen." },
  { term: "WCAG", definition: "Web Content Accessibility Guidelines - a set of recommendations for making web content more accessible." },\
  { term: "Keyboard Navigation\", definition: \"The ability to access and interact with all parts of a
  { term: "Keyboard Navigation", definition: "The ability to access and interact with all parts of a website using only a keyboard." },
  { term: "Color Contrast", definition: "The difference in light between foreground (usually text) and background colors, which affects readability." },
  { term: "Focus Indicator", definition: "A visual cue that shows which element on a web page currently has keyboard focus." },
  { term: "Semantic HTML", definition: "Using HTML elements for their intended purpose, which helps convey the structure and meaning of web content." },
]

export function AccessibilityGlossary() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredItems = glossaryItems.filter(
    (item) =>
      item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.definition.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>Accessibility Glossary</CardTitle>
        <CardDescription>Search and learn about key accessibility terms</CardDescription>
      </CardHeader>
      <CardContent>
        <Input
          type="search"
          placeholder="Search terms..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mb-4"
        />
        <div className="space-y-4">
          {filteredItems.map((item, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold">{item.term}</h3>
              <p className="text-sm text-muted-foreground">{item.definition}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

