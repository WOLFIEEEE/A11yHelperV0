"use client"

import type React from "react"
import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CodeBlock } from "@/components/CodeBlock"

interface ComponentTemplateProps {
  title: string
  description: string
  keyFeatures: string[]
  demo: React.ReactNode
  codeExamples: {
    [key: string]: string
  }
  accessibilityGuidelines: string[]
  testingTips: string[]
}

export const ComponentTemplate: React.FC<ComponentTemplateProps> = ({
  title,
  description,
  keyFeatures,
  demo,
  codeExamples,
  accessibilityGuidelines,
  testingTips,
}) => {
  const [framework, setFramework] = useState("react")

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-6">{title}</h1>
      <p className="text-xl mb-8">{description}</p>

      <Tabs defaultValue="overview" className="mb-8">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="demo">Demo</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Key Accessibility Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                {keyFeatures.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="demo">
          <Card>
            <CardHeader>
              <CardTitle>Interactive Demo</CardTitle>
              <CardDescription>Try out the accessible {title.toLowerCase()} below:</CardDescription>
            </CardHeader>
            <CardContent>{demo}</CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="code">
          <Card>
            <CardHeader>
              <CardTitle>Code Example</CardTitle>
              <div className="flex space-x-2 mt-2">
                {Object.keys(codeExamples).map((fw) => (
                  <Button key={fw} variant={framework === fw ? "default" : "outline"} onClick={() => setFramework(fw)}>
                    {fw.charAt(0).toUpperCase() + fw.slice(1)}
                  </Button>
                ))}
              </div>
            </CardHeader>
            <CardContent>
              <CodeBlock code={codeExamples[framework]} language={framework} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Accessibility Guidelines</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2">
            {accessibilityGuidelines.map((guideline, index) => (
              <li key={index}>{guideline}</li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Testing for Accessibility</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2">
            {testingTips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

