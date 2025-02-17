import AccessibilityCostAnalyzer from "@/components/AccessibilityCostAnalyzer"

export default function CostAnalyzerPage() {
  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
        Accessibility Cost Analyzer
      </h1>
      <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
        Estimate the cost of making your website accessible and understand the factors that influence accessibility
        implementation.
      </p>
      <AccessibilityCostAnalyzer />
      <div className="mt-12 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Why Invest in Accessibility?</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Expand your audience and reach more potential customers</li>
          <li>Improve user experience for all visitors, not just those with disabilities</li>
          <li>Enhance your brand reputation as an inclusive and socially responsible organization</li>
          <li>Reduce legal risks associated with accessibility lawsuits</li>
          <li>Potentially improve your search engine rankings</li>
        </ul>
      </div>
    </div>
  )
}

