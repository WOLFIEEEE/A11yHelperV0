"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { InfoIcon } from "lucide-react"

type ScoreCategory = {
  name: string
  score: number
  description: string
}

type AccessibilityScoreCardProps = {
  overallScore: number
  categories: ScoreCategory[]
}

export function AccessibilityScoreCard({ overallScore, categories }: AccessibilityScoreCardProps) {
  const getScoreColor = (score: number) => {
    if (score >= 90) return "bg-green-500"
    if (score >= 70) return "bg-yellow-500"
    if (score >= 50) return "bg-orange-500"
    return "bg-red-500"
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Accessibility Score Card</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Overall Score</h3>
          <div className="flex items-center">
            <Progress value={overallScore} className="flex-grow mr-4" />
            <span
              className={`text-2xl font-bold ${getScoreColor(overallScore)} text-white rounded-full w-12 h-12 flex items-center justify-center`}
            >
              {overallScore}
            </span>
          </div>
        </div>
        <div className="space-y-4">
          {categories.map((category, index) => (
            <div key={index}>
              <div className="flex items-center justify-between mb-1">
                <h4 className="text-sm font-medium">{category.name}</h4>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <InfoIcon className="w-4 h-4 text-muted-foreground" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="max-w-xs">{category.description}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <Progress value={category.score} className={getScoreColor(category.score)} />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

