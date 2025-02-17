"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

type AccessibilityScore = {
  date: string
  score: number
}

export function AccessibilityProgressTracker() {
  const [scores, setScores] = useState<AccessibilityScore[]>([
    { date: "2023-01-01", score: 65 },
    { date: "2023-02-01", score: 70 },
    { date: "2023-03-01", score: 75 },
    { date: "2023-04-01", score: 80 },
    { date: "2023-05-01", score: 85 },
  ])

  const latestScore = scores[scores.length - 1].score

  const addRandomScore = () => {
    const newScore = Math.min(100, latestScore + Math.floor(Math.random() * 10))
    const newDate = new Date()
    setScores([...scores, { date: newDate.toISOString().split("T")[0], score: newScore }])
  }

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Accessibility Progress Tracker</CardTitle>
        <CardDescription>Track your website's accessibility improvements over time</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Current Accessibility Score</h3>
            <Progress value={latestScore} className="w-full h-4" />
            <p className="text-sm text-muted-foreground mt-2">
              {latestScore}% - Last updated on {scores[scores.length - 1].date}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Progress Over Time</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={scores}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Legend />
                <Bar dataKey="score" fill="#3b82f6" name="Accessibility Score" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <Button onClick={addRandomScore}>Add New Score (Demo)</Button>
        </div>
      </CardContent>
    </Card>
  )
}

