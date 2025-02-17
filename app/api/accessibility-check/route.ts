import { NextResponse } from "next/server"
import * as cheerio from "cheerio"

type AccessibilityIssue = {
  type: string
  count: number
  impact: "minor" | "moderate" | "serious" | "critical"
  locations: {
    element: string
    code: string
    line: number
  }[]
}

export async function POST(req: Request) {
  const { url } = await req.json()

  try {
    const response = await fetch(url)
    const html = await response.text()
    const $ = cheerio.load(html)

    const issues: AccessibilityIssue[] = [
      { type: "Missing alt text on images", count: 0, impact: "serious", locations: [] },
      { type: "Empty links", count: 0, impact: "moderate", locations: [] },
      { type: "Missing form labels", count: 0, impact: "serious", locations: [] },
      { type: "Missing lang attribute", count: 0, impact: "moderate", locations: [] },
      { type: "Insufficient color contrast", count: 0, impact: "serious", locations: [] },
      { type: "Missing ARIA labels", count: 0, impact: "moderate", locations: [] },
      { type: "Improper heading structure", count: 0, impact: "moderate", locations: [] },
      { type: "Missing skip to content link", count: 0, impact: "moderate", locations: [] },
    ]

    // Check for missing alt text on images
    $("img").each((i, elem) => {
      if (!$(elem).attr("alt")) {
        issues[0].count++
        issues[0].locations.push({
          element: "img",
          code: $.html(elem),
          line: getLineNumber(html, $.html(elem)),
        })
      }
    })

    // Check for empty links
    $("a").each((i, elem) => {
      if (!$(elem).text().trim() && !$(elem).find("img[alt]").length) {
        issues[1].count++
        issues[1].locations.push({
          element: "a",
          code: $.html(elem),
          line: getLineNumber(html, $.html(elem)),
        })
      }
    })

    // Check for missing form labels
    $("input, select, textarea").each((i, elem) => {
      const id = $(elem).attr("id")
      if (id && !$(`label[for="${id}"]`).length) {
        issues[2].count++
        issues[2].locations.push({
          element: elem.tagName,
          code: $.html(elem),
          line: getLineNumber(html, $.html(elem)),
        })
      }
    })

    // Check for missing lang attribute on html tag
    if (!$("html").attr("lang")) {
      issues[3].count++
      issues[3].locations.push({
        element: "html",
        code: $.html($("html").get(0)),
        line: 1,
      })
    }

    // Check for insufficient color contrast (this is a simplified check)
    $("*").each((i, elem) => {
      const color = $(elem).css("color")
      const bgColor = $(elem).css("background-color")
      if (color && bgColor && !hasGoodContrast(color, bgColor)) {
        issues[4].count++
        issues[4].locations.push({
          element: elem.tagName,
          code: $.html(elem),
          line: getLineNumber(html, $.html(elem)),
        })
      }
    })

    // Check for missing ARIA labels
    $("[role]").each((i, elem) => {
      if (!$(elem).attr("aria-label") && !$(elem).attr("aria-labelledby")) {
        issues[5].count++
        issues[5].locations.push({
          element: elem.tagName,
          code: $.html(elem),
          line: getLineNumber(html, $.html(elem)),
        })
      }
    })

    // Check for improper heading structure
    let lastHeadingLevel = 0
    $("h1, h2, h3, h4, h5, h6").each((i, elem) => {
      const currentLevel = Number.parseInt(elem.tagName[1])
      if (currentLevel - lastHeadingLevel > 1) {
        issues[6].count++
        issues[6].locations.push({
          element: elem.tagName,
          code: $.html(elem),
          line: getLineNumber(html, $.html(elem)),
        })
      }
      lastHeadingLevel = currentLevel
    })

    // Check for missing skip to content link
    if (!$("a[href^='#']:contains('Skip')").length) {
      issues[7].count++
      issues[7].locations.push({
        element: "body",
        code: "<body> (Skip to content link should be at the beginning of the body)",
        line: getLineNumber(html, "<body"),
      })
    }

    const totalIssues = issues.reduce((sum, issue) => sum + issue.count, 0)
    const score = calculateAccessibilityScore(issues)

    return NextResponse.json({ score, issuesCount: totalIssues, issues })
  } catch (error) {
    console.error("Error checking accessibility:", error)
    return NextResponse.json({ error: "Failed to check accessibility" }, { status: 500 })
  }
}

function hasGoodContrast(color1: string, color2: string): boolean {
  // This is a placeholder function. In a real implementation, you would use a proper
  // color contrast calculation algorithm here.
  return Math.random() > 0.5
}

function calculateAccessibilityScore(issues: AccessibilityIssue[]): number {
  const weights = {
    minor: 1,
    moderate: 2,
    serious: 3,
    critical: 4,
  }

  const maxScore = issues.length * 10
  let deductions = 0

  for (const issue of issues) {
    const weight = weights[issue.impact]
    deductions += issue.count * weight
  }

  const score = Math.max(0, 100 - (deductions / maxScore) * 100)
  return Math.round(score)
}

function getLineNumber(html: string, snippet: string): number {
  const lines = html.split("\n")
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes(snippet)) {
      return i + 1
    }
  }
  return -1
}

