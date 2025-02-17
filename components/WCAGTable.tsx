"use client"

import { useState, useEffect, useMemo } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { ArrowUpDown } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Skeleton } from "@/components/ui/skeleton"

interface WCAGCriterion {
  id: number
  criteria: string
  success_criterion_title: string
  level: "A" | "AA" | "AAA"
  requirement: string
  roles: string[]
  version: string
}

type SortKey = "criteria" | "success_criterion_title" | "level" | "version"

export default function WCAGTable() {
  const [wcagCriteria, setWcagCriteria] = useState<WCAGCriterion[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [levelFilter, setLevelFilter] = useState<"A" | "AA" | "AAA" | "all">("all")
  const [versionFilter, setVersionFilter] = useState<"2.0" | "2.1" | "2.2" | "all">("all")
  const [sortKey, setSortKey] = useState<SortKey>("criteria")
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch("/wcag-checklist.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        return response.json()
      })
      .then((data) => {
        setWcagCriteria(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error("Error loading WCAG data:", error)
        setError("Failed to load WCAG data. Please try again later.")
        setLoading(false)
      })
  }, [])

  const filteredAndSortedCriteria = useMemo(() => {
    return wcagCriteria
      .filter((criterion) => {
        const matchesSearch =
          criterion.success_criterion_title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          criterion.requirement.toLowerCase().includes(searchTerm.toLowerCase()) ||
          criterion.criteria.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesLevel = levelFilter === "all" || criterion.level === levelFilter
        const matchesVersion = versionFilter === "all" || criterion.version === versionFilter
        return matchesSearch && matchesLevel && matchesVersion
      })
      .sort((a, b) => {
        if (a[sortKey] < b[sortKey]) return sortDirection === "asc" ? -1 : 1
        if (a[sortKey] > b[sortKey]) return sortDirection === "asc" ? 1 : -1
        return 0
      })
  }, [wcagCriteria, searchTerm, levelFilter, versionFilter, sortKey, sortDirection])

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortKey(key)
      setSortDirection("asc")
    }
  }

  if (loading) {
    return <Skeleton className="w-full h-96" />
  }

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    )
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
        <Select
          value={versionFilter}
          onValueChange={(value) => setVersionFilter(value as "2.0" | "2.1" | "2.2" | "all")}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by version" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Versions</SelectItem>
            <SelectItem value="2.0">WCAG 2.0</SelectItem>
            <SelectItem value="2.1">WCAG 2.1</SelectItem>
            <SelectItem value="2.2">WCAG 2.2</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">
                <Button variant="ghost" onClick={() => handleSort("criteria")}>
                  Criterion <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>
                <Button variant="ghost" onClick={() => handleSort("success_criterion_title")}>
                  Name <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead className="hidden md:table-cell">Requirement</TableHead>
              <TableHead className="w-[100px]">
                <Button variant="ghost" onClick={() => handleSort("level")}>
                  Level <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead className="w-[100px]">
                <Button variant="ghost" onClick={() => handleSort("version")}>
                  Version <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredAndSortedCriteria.map((criterion) => (
              <TableRow key={criterion.id}>
                <TableCell>{criterion.criteria}</TableCell>
                <TableCell>{criterion.success_criterion_title}</TableCell>
                <TableCell className="hidden md:table-cell">{criterion.requirement}</TableCell>
                <TableCell>{criterion.level}</TableCell>
                <TableCell>{criterion.version}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

