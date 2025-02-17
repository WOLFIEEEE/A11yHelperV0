"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface WCAGCriterion {
  id: string
  name: string
  description: string
  level: "A" | "AA" | "AAA"
}

const wcagCriteria: WCAGCriterion[] = [
  {
    id: "1.1.1",
    name: "Non-text Content",
    description: "All non-text content has a text alternative",
    level: "A",
  },
  {
    id: "1.2.1",
    name: "Audio-only and Video-only (Prerecorded)",
    description: "Provide alternatives for time-based media",
    level: "A",
  },
  {
    id: "1.3.1",
    name: "Info and Relationships",
    description:
      "Information, structure, and relationships conveyed through presentation can be programmatically determined",
    level: "A",
  },
  {
    id: "2.1.1",
    name: "Keyboard",
    description: "All functionality is operable through a keyboard interface",
    level: "A",
  },
  {
    id: "2.4.3",
    name: "Focus Order",
    description: "Users can navigate sequentially through content and form controls in a meaningful order",
    level: "A",
  },
  {
    id: "2.5.8",
    name: "Target Size (Minimum)",
    description: "Ensure interactive elements are large enough to be easily activated",
    level: "AA",
  },
  {
    id: "3.2.6",
    name: "Consistent Help",
    description: "Ensure that help mechanisms are provided consistently",
    level: "A",
  },
  {
    id: "3.3.7",
    name: "Accessible Authentication",
    description: "Provide accessible options for user authentication",
    level: "A",
  },
  {
    id: "3.3.8",
    name: "Redundant Entry",
    description: "Allow users to reuse previously entered information",
    level: "A",
  },
  {
    id: "4.1.1",
    name: "Parsing",
    description: "Ensure that web pages can be parsed unambiguously",
    level: "A",
  },
]

export default function WCAGTable() {
  const [searchTerm, setSearchTerm] = useState("")
  const [levelFilter, setLevelFilter] = useState<"A" | "AA" | "AAA" | "all">("all")

  const filteredCriteria = wcagCriteria.filter((criterion) => {
    const matchesSearch =
      criterion.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      criterion.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      criterion.id.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesLevel = levelFilter === "all" || criterion.level === levelFilter
    return matchesSearch && matchesLevel
  })

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4">
        <Input
          placeholder="Search criteria..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow"
        />
        <Select value={levelFilter} onValueChange={(value) => setLevelFilter(value as "A" | "AA" | "AAA" | "all")}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Levels</SelectItem>
            <SelectItem value="A">Level A</SelectItem>
            <SelectItem value="AA">Level AA</SelectItem>
            <SelectItem value="AAA">Level AAA</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Criterion</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead className="w-[100px]">Level</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredCriteria.map((criterion) => (
            <TableRow key={criterion.id}>
              <TableCell>{criterion.id}</TableCell>
              <TableCell>{criterion.name}</TableCell>
              <TableCell>{criterion.description}</TableCell>
              <TableCell>{criterion.level}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

