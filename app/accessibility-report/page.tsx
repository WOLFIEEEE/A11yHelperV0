import { AccessibilityScoreCard } from "@/components/AccessibilityScoreCard"

export default function AccessibilityReportPage() {
  const accessibilityData = {
    overallScore: 78,
    categories: [
      {
        name: "Perceivable",
        score: 85,
        description:
          "Information and user interface components must be presentable to users in ways they can perceive.",
      },
      { name: "Operable", score: 72, description: "User interface components and navigation must be operable." },
      {
        name: "Understandable",
        score: 90,
        description: "Information and the operation of user interface must be understandable.",
      },
      {
        name: "Robust",
        score: 65,
        description:
          "Content must be robust enough that it can be interpreted by a wide variety of user agents, including assistive technologies.",
      },
    ],
  }

  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Accessibility Report</h1>
      <AccessibilityScoreCard overallScore={accessibilityData.overallScore} categories={accessibilityData.categories} />
      {/* Add more content or components related to the accessibility report here */}
    </div>
  )
}

