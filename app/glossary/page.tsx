"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useState } from "react"

const glossaryTerms = [
  {
    term: "Accessibility",
    definition:
      "The practice of making websites usable by as many people as possible, including those with disabilities.",
  },
  {
    term: "ARIA",
    definition:
      "Accessible Rich Internet Applications - a set of attributes that define ways to make web content and applications more accessible to people with disabilities.",
  },
  {
    term: "Screen Reader",
    definition:
      "A software application that attempts to identify and interpret what is being displayed on the screen for visually impaired users.",
  },
  {
    term: "Alt Text",
    definition: "Alternative text that describes images for users who are unable to see them.",
  },
  {
    term: "Color Contrast",
    definition: "The difference in light between foreground and background colors, which affects readability.",
  },
  {
    term: "Keyboard Navigation",
    definition: "The ability to access and interact with all parts of a website using only a keyboard.",
  },
  {
    term: "WCAG",
    definition:
      "Web Content Accessibility Guidelines - a set of recommendations for making web content more accessible.",
  },
  {
    term: "Assistive Technology",
    definition:
      "Any item, piece of equipment, or system that is used to increase, maintain, or improve the functional capabilities of individuals with disabilities.",
  },
]

export default function GlossaryPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredTerms = glossaryTerms.filter(
    (item) =>
      item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.definition.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
        Accessibility Glossary
      </h1>
      <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
        A comprehensive list of accessibility terms to help you understand and implement web accessibility.
      </p>
      <div className="max-w-2xl mx-auto mb-8">
        <Input
          type="search"
          placeholder="Search terms..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="space-y-6">
        {filteredTerms.map((item, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{item.term}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{item.definition}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

