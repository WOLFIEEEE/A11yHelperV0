"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, XCircle, AlertTriangle } from "lucide-react"

type ComplianceLevel = "A" | "AA" | "AAA"
type ComplianceStatus = "Pass" | "Fail" | "Partial"

type WCAGCriterion = {
  id: string
  description: string
  level: ComplianceLevel
  status: ComplianceStatus
}

const mockCriteria: WCAGCriterion[] = [
  { id: "1.1.1", description: "Non-text Content", level: "A", status: "Pass" },
  { id: "1.2.1", description: "Audio-only and Video-only (Prerecorded)", level: "A", status: "Fail" },
  { id: "1.3.1", description: "Info and Relationships", level: "A", status: "Partial" },
  { id: "2.1.1", description: "Keyboard", level: "A", status: "Pass" },
  { id: "2.4.3", description: "Focus Order", level: "A", status: "Fail" },
]

export function WCAGComplianceReport() {
  const [criteria, setCriteria] = useState<WCAGCriterion[]>(mockCriteria)

  const getStatusIcon = (status: ComplianceStatus) => {
    switch (status) {
      case "Pass":
        return <CheckCircle className="w-5 h-5 text-green-500" />
      case "Fail":
        return <XCircle className="w-5 h-5 text-red-500" />
      case "Partial":
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />
    }
  }

  const getLevelBadge = (level: ComplianceLevel) => {
    const colors = {
      A: "bg-blue-500",
      AA: "bg-purple-500",
      AAA: "bg-pink-500",
    }
    return <Badge className={colors[level]}>{level}</Badge>
  }

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>WCAG Compliance Report</CardTitle>
        <CardDescription>Detailed report of WCAG 2.1 compliance status</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Criterion</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Level</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {criteria.map((criterion) => (
              <TableRow key={criterion.id}>
                <TableCell>{criterion.id}</TableCell>
                <TableCell>{criterion.description}</TableCell>
                <TableCell>{getLevelBadge(criterion.level)}</TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(criterion.status)}
                    <span>{criterion.status}</span>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="mt-4">
          <Button>Generate Full Report</Button>
        </div>
      </CardContent>
    </Card>
  )
}

