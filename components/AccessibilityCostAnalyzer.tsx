"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { HelpCircle, Download } from "lucide-react"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import Link from "next/link"

const pageTypes = [
  { value: "basic", label: "Basic", description: "Simple static pages with minimal interactivity" },
  {
    value: "intermediate",
    label: "Intermediate",
    description: "Pages with some dynamic content and basic user interactions",
  },
  { value: "advanced", label: "Advanced", description: "Complex pages with rich interactivity and multimedia content" },
]

const techStacks = [
  { value: "wordpress", label: "WordPress" },
  { value: "react", label: "React" },
  { value: "angular", label: "Angular" },
  { value: "vue", label: "Vue.js" },
  { value: "html-css-js", label: "Custom HTML/CSS/JS" },
  { value: "other", label: "Other" },
]

const timelines = [
  { value: "standard", label: "Standard (4-6 weeks)", multiplier: 1 },
  { value: "expedited", label: "Expedited (2-3 weeks)", multiplier: 1.5 },
  { value: "urgent", label: "Urgent (1-2 weeks)", multiplier: 2 },
]

const services = [
  { id: "wcag-testing", label: "WCAG Compliance Testing", cost: 500 },
  { id: "remediation", label: "Accessibility Remediation", cost: 1000 },
  { id: "session", label: "Accessibility Consultation Session", cost: 300 },
  { id: "dev-session", label: "Accessibility Remediation Session for Developers", cost: 500 },
  { id: "training", label: "Accessibility Training Workshop", cost: 800 },
]

const AccessibilityCostAnalyzer: React.FC = () => {
  const [basicPages, setBasicPages] = useState<number>(1)
  const [intermediatePages, setIntermediatePages] = useState<number>(0) // Corrected typo
  const [advancedPages, setAdvancedPages] = useState<number>(0)
  const [techStack, setTechStack] = useState<string>("html-css-js")
  const [timeline, setTimeline] = useState<string>("standard")
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [totalCost, setTotalCost] = useState<number>(0)
  const [estimatedTime, setEstimatedTime] = useState<string>("")
  const [currency, setCurrency] = useState<string>("USD")
  const [exchangeRate, setExchangeRate] = useState<number>(1)

  useEffect(() => {
    calculateCost()
  }, [basicPages, intermediatePages, advancedPages, techStack, timeline, selectedServices, currency]) //Corrected useEffect dependency array and typo

  const calculateCost = () => {
    let baseCost = basicPages * 100 + intermediatePages * 200 + advancedPages * 300 // Corrected typo

    // Adjust for tech stack
    if (techStack === "react" || techStack === "angular" || techStack === "vue") {
      baseCost *= 1.2
    } else if (techStack === "other") {
      baseCost *= 1.3
    }

    // Adjust for timeline
    const selectedTimelineMultiplier = timelines.find((t) => t.value === timeline)?.multiplier || 1
    baseCost *= selectedTimelineMultiplier

    // Add costs for selected services
    selectedServices.forEach((service) => {
      const serviceCost = services.find((s) => s.id === service)?.cost || 0
      baseCost += serviceCost
    })

    setTotalCost(baseCost * exchangeRate)

    // Calculate estimated time
    const totalPages = basicPages + intermediatePages + advancedPages // Corrected typo
    let baseTime = totalPages * 2 // 2 days per page as a base
    if (timeline === "expedited") {
      baseTime *= 0.7
    } else if (timeline === "urgent") {
      baseTime *= 0.5
    }
    setEstimatedTime(`${Math.ceil(baseTime)} days`)
  }

  const handleServiceToggle = (serviceId: string) => {
    setSelectedServices((prev) =>
      prev.includes(serviceId) ? prev.filter((id) => id !== serviceId) : [...prev, serviceId],
    )
  }

  const handleCurrencyChange = async (newCurrency: string) => {
    setCurrency(newCurrency)
    if (newCurrency === "USD") {
      setExchangeRate(1)
    } else {
      try {
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/USD`)
        const data = await response.json()
        setExchangeRate(data.rates[newCurrency])
      } catch (error) {
        console.error("Failed to fetch exchange rate:", error)
        setExchangeRate(1)
      }
    }
  }

  const getCostBreakdown = () => {
    const baseCost = (basicPages * 100 + intermediatePages * 200 + advancedPages * 300) * exchangeRate // Corrected typo
    const techStackCost = baseCost * 0.2
    const timelineCost = baseCost * (timelines.find((t) => t.value === timeline)?.multiplier || 1 - 1)
    const servicesCost = selectedServices.reduce((total, service) => {
      return total + (services.find((s) => s.id === service)?.cost || 0) * exchangeRate
    }, 0)

    return [
      { name: "Base Cost", cost: baseCost },
      { name: "Tech Stack", cost: techStackCost },
      { name: "Timeline", cost: timelineCost },
      { name: "Services", cost: servicesCost },
    ]
  }

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Accessibility Cost Analyzer</CardTitle>
        <CardDescription>Estimate the cost of making your website accessible</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label>Number of Pages by Complexity</Label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {pageTypes.map((type) => (
              <div key={type.value} className="space-y-2">
                <Label htmlFor={`${type.value}-pages`}>{type.label}</Label>
                <Input
                  id={`${type.value}-pages`}
                  type="number"
                  min="0"
                  value={
                    type.value === "basic"
                      ? basicPages
                      : type.value === "intermediate"
                        ? intermediatePages
                        : advancedPages
                  } // Corrected typo
                  onChange={(e) => {
                    const value = Number.parseInt(e.target.value) || 0
                    if (type.value === "basic") setBasicPages(value)
                    else if (type.value === "intermediate")
                      setIntermediatePages(value) // Corrected typo
                    else setAdvancedPages(value)
                  }}
                />
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="sm" className="h-4 w-4 p-0">
                        <HelpCircle className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{type.description}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="tech-stack">Tech Stack</Label>
          <Select value={techStack} onValueChange={setTechStack}>
            <SelectTrigger id="tech-stack">
              <SelectValue placeholder="Select tech stack" />
            </SelectTrigger>
            <SelectContent>
              {techStacks.map((stack) => (
                <SelectItem key={stack.value} value={stack.value}>
                  {stack.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="timeline">Timeline</Label>
          <Select value={timeline} onValueChange={setTimeline}>
            <SelectTrigger id="timeline">
              <SelectValue placeholder="Select timeline" />
            </SelectTrigger>
            <SelectContent>
              {timelines.map((t) => (
                <SelectItem key={t.value} value={t.value}>
                  {t.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Additional Services</Label>
          {services.map((service) => (
            <div key={service.id} className="flex items-center space-x-2">
              <Checkbox
                id={service.id}
                checked={selectedServices.includes(service.id)}
                onCheckedChange={() => handleServiceToggle(service.id)}
              />
              <label
                htmlFor={service.id}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {service.label} (${service.cost})
              </label>
            </div>
          ))}
        </div>

        <div className="space-y-2">
          <Label htmlFor="currency">Currency</Label>
          <Select value={currency} onValueChange={handleCurrencyChange}>
            <SelectTrigger id="currency">
              <SelectValue placeholder="Select currency" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="USD">USD</SelectItem>
              <SelectItem value="EUR">EUR</SelectItem>
              <SelectItem value="GBP">GBP</SelectItem>
              <SelectItem value="JPY">JPY</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="p-4 bg-muted rounded-md">
          <h3 className="text-lg font-semibold mb-2">Estimated Total Cost</h3>
          <p className="text-3xl font-bold">
            {currency} {totalCost.toFixed(2)}
          </p>
          <p className="text-sm text-muted-foreground mt-2">Estimated Time: {estimatedTime}</p>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Cost Breakdown</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={getCostBreakdown()}>
              <XAxis dataKey="name" />
              <YAxis />
              <Bar dataKey="cost" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-yellow-100 dark:bg-yellow-900 p-4 rounded-md">
          <p className="text-sm text-yellow-800 dark:text-yellow-200">
            Note: This is an estimated cost and timeline. Actual costs and timelines may vary based on the specific
            requirements of your project. For a more accurate estimation, please use our detailed estimation form.
          </p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={() => console.log("Download report")}>
          <Download className="mr-2 h-4 w-4" /> Download Report
        </Button>
        <Button asChild>
          <Link href="/get-accurate-estimation">Get Accurate Estimation</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

export default AccessibilityCostAnalyzer

