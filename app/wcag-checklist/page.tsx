import WCAGTable from "@/components/WCAGTable"

export default function WCAGChecklistPage() {
  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
        Comprehensive WCAG Checklist
      </h1>
      <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
        Explore and filter WCAG criteria from versions 2.0, 2.1, and 2.2. This comprehensive table helps you understand
        and implement web accessibility standards across all current WCAG versions.
      </p>
      <WCAGTable />
    </div>
  )
}

