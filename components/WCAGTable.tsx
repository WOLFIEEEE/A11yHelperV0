"use client"

import { useState, useMemo } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { ArrowUpDown } from "lucide-react"
import Link from "next/link"
import wcagData from "@/data/wcag-checklist.json"

interface SuccessCriterion {
  ref_id: string
  title: string
  description: string
  level: "A" | "AA" | "AAA"
  url: string
  wcag_version: string
  special_cases?: Array<{
    type: string
    title: string
    description?: string
  }>
  notes?: Array<{ content: string }>
}

interface Guideline {
  ref_id: string
  title: string
  description: string
  url: string
  success_criteria: SuccessCriterion[]
}

interface Principle {
  ref_id: string
  title: string
  description: string
  url: string
  guidelines: Guideline[]
}

type SortKey = "ref_id" | "title" | "level" | "wcag_version"

export default function WCAGTable({ centerContent = false, hideEmptyWCAGVersion = false }) {
  const [searchTerm, setSearchTerm] = useState("")
  const [levelFilter, setLevelFilter] = useState<"A" | "AA" | "AAA" | "all">("all")
  const [principleFilter, setPrincipleFilter] = useState<string>("all")
  const [sortKey, setSortKey] = useState<SortKey>("ref_id")
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc")

  const filteredAndSortedCriteria = useMemo(() => {
    return wcagData
      .flatMap((principle) =>
        principle.guidelines.flatMap((guideline) =>
          guideline.success_criteria.map((criterion) => ({
            ...criterion,
            principle: principle.title,
            guideline: guideline.title,
          })),
        ),
      )
      .filter((criterion) => {
        const matchesSearch =
          criterion.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          criterion.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          criterion.ref_id.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesLevel = levelFilter === "all" || criterion.level === levelFilter
        const matchesPrinciple = principleFilter === "all" || criterion.principle === principleFilter
        const matchesWCAGVersion = hideEmptyWCAGVersion || criterion.wcag_version
        return matchesSearch && matchesLevel && matchesPrinciple && matchesWCAGVersion
      })
      .sort((a, b) => {
        if (a[sortKey] < b[sortKey]) return sortDirection === "asc" ? -1 : 1
        if (a[sortKey] > b[sortKey]) return sortDirection === "asc" ? 1 : -1
        return 0
      })
  }, [searchTerm, levelFilter, principleFilter, sortKey, sortDirection, hideEmptyWCAGVersion])

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortKey(key)
      setSortDirection("asc")
    }
  }

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
        <Select value={principleFilter} onValueChange={setPrincipleFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by principle" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Principles</SelectItem>
            {wcagData.map((principle) => (
              <SelectItem key={principle.ref_id} value={principle.title}>
                {principle.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className={`w-[100px] ${centerContent ? "text-center" : ""}`}>
                <Button variant="ghost" onClick={() => handleSort("ref_id")}>
                  Criterion <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead className={centerContent ? "text-center" : ""}>
                <Button variant="ghost" onClick={() => handleSort("title")}>
                  Name <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead className="hidden md:table-cell">Description</TableHead>
              <TableHead className={`w-[100px] ${centerContent ? "text-center" : ""}`}>
                <Button variant="ghost" onClick={() => handleSort("level")}>
                  Level <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              {!hideEmptyWCAGVersion && (
                <TableHead className="w-[120px]">
                  <Button variant="ghost" onClick={() => handleSort("wcag_version")}>
                    WCAG Version <ArrowUpDown className="ml-2 h-4 w-4" />
                  </Button>
                </TableHead>
              )}
              <TableHead className="w-[100px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredAndSortedCriteria.map((criterion) => (
              <TableRow key={criterion.ref_id}>
                <TableCell className={centerContent ? "text-center" : ""}>{criterion.ref_id}</TableCell>
                <TableCell className={centerContent ? "text-center" : ""}>{criterion.title}</TableCell>
                <TableCell className="hidden md:table-cell">{criterion.description}</TableCell>
                <TableCell className={centerContent ? "text-center" : ""}>{criterion.level}</TableCell>
                {!hideEmptyWCAGVersion && <TableCell>{criterion.wcag_version}</TableCell>}
                <TableCell>
                  <Link href={`/wcag/${criterion.ref_id}`} passHref>
                    <Button variant="outline">Explore</Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

