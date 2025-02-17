import { Suspense } from "react"
import ExploreIssuesContent from "./ExploreIssuesContent"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ExploreIssuesPage() {
  return (
    <div className="container py-12">
      <Suspense fallback={<LoadingCard />}>
        <ExploreIssuesContent />
      </Suspense>
    </div>
  )
}

function LoadingCard() {
  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Loading...</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="animate-pulse flex space-x-4">
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-slate-200 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                <div className="h-2 bg-slate-200 rounded col-span-1"></div>
              </div>
              <div className="h-2 bg-slate-200 rounded"></div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

