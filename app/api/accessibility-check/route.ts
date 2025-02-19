import { NextResponse } from "next/server"
import puppeteer from "puppeteer"

interface AccessibilityViolation {
  id: string
  help: string
  impact: string
  helpUrl: string
  nodes: Array<{
    html: string
    target: string[]
  }>
}

interface AccessibilityResult {
  passes: any[]
  violations: AccessibilityViolation[]
}

interface AccessibilityResponse {
  score: number
  issuesCount: number
  issues: Array<{
    type: string
    description: string
    impact: string
    helpUrl: string
    nodes: Array<{
      html: string
      target: string[]
    }>
  }>
}

export async function POST(request: Request) {
  let browser = null

  try {
    const body = await request.json()

    if (!body || !body.url) {
      return NextResponse.json({ error: "URL is required" }, { status: 400 })
    }

    const { url } = body

    if (!isValidUrl(url)) {
      return NextResponse.json({ error: "Invalid URL format" }, { status: 400 })
    }

    browser = await puppeteer.launch({
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
      headless: "new",
    })

    const page = await browser.newPage()
    await page.setViewport({ width: 1280, height: 720 })
    await page.setDefaultNavigationTimeout(30000)

    await page.goto(url, { waitUntil: "networkidle0" })

    await page.addScriptTag({
      url: "https://cdnjs.cloudflare.com/ajax/libs/axe-core/4.7.0/axe.min.js",
    })

    await page.waitForFunction(() => {
      return typeof (window as any).axe !== "undefined"
    })

    const axeResults: AccessibilityResult = await page.evaluate(() => {
      return (window as any).axe.run(document, {
        runOnly: {
          type: "tag",
          values: ["wcag2a", "wcag2aa"],
        },
      })
    })

    const issues = axeResults.violations.map((violation) => ({
      type: violation.id,
      description: violation.help,
      impact: violation.impact,
      helpUrl: violation.helpUrl,
      nodes: violation.nodes.map((node) => ({
        html: node.html,
        target: node.target,
      })),
    }))

    const score = calculateAccessibilityScore(axeResults)

    return NextResponse.json({
      score,
      issuesCount: issues.length,
      issues,
    })
  } catch (error: any) {
    console.error("Accessibility check error:", error)
    return NextResponse.json(
      {
        error: error.message || "An error occurred during the accessibility check",
      },
      { status: 500 },
    )
  } finally {
    if (browser) {
      await browser.close().catch(console.error)
    }
  }
}

function calculateAccessibilityScore(results: AccessibilityResult): number {
  const totalChecks = results.passes.length + results.violations.length
  if (totalChecks === 0) return 0
  const passedChecks = results.passes.length
  return Math.round((passedChecks / totalChecks) * 100)
}

function isValidUrl(urlString: string): boolean {
  try {
    const url = new URL(urlString)
    return url.protocol === "http:" || url.protocol === "https:"
  } catch {
    return false
  }
}

