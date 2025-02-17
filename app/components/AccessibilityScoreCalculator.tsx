"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { motion } from "framer-motion"

export default function AccessibilityScoreCalculator() {
  const [score, setScore] = useState(0)
  const [calculating, setCalculating] = useState(false)

  const calculateScore = () => {
    setCalculating(true)
    let currentScore = 0
    const interval = setInterval(() => {
      currentScore += Math.random() * 5
      if (currentScore > 100) {
        currentScore = 100
        clearInterval(interval)
        setCalculating(false)
      }
      setScore(Math.round(currentScore))
    }, 100)
  }

  return (
    <div className="p-6 border rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold mb-4">Accessibility Score Calculator</h3>
      <p className="mb-4">Click the button to calculate a simulated accessibility score for your website.</p>
      <div className="mb-4">
        <Progress value={score} className="w-full" />
      </div>
      <p className="text-xl font-semibold mb-4">Score: {score}%</p>
      <Button onClick={calculateScore} disabled={calculating}>
        {calculating ? "Calculating..." : "Calculate Score"}
      </Button>
      {score > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-4"
        >
          <p>
            {score < 50
              ? "There's room for improvement. Check out our tools to boost your site's accessibility!"
              : score < 80
                ? "Good start! Use our tools to take your site's accessibility to the next level."
                : "Great job! Your site is on its way to being highly accessible. Keep it up!"}
          </p>
        </motion.div>
      )}
    </div>
  )
}

