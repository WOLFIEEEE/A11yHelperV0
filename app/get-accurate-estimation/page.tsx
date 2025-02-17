"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast"

export default function GetAccurateEstimationPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyName: "",
    websiteUrl: "",
    isAuthenticated: "no",
    testUsername: "",
    testPassword: "",
    thirdPartyIntegrations: "no",
    integrationDetails: "",
    currentAccessibilityLevel: "",
    targetAccessibilityLevel: "",
    timeline: "",
    additionalComments: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log(formData)
    toast({
      title: "Estimation Request Submitted",
      description: "We'll get back to you with a detailed estimation within 48 hours.",
    })
  }

  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
        Get Accurate Accessibility Estimation
      </h1>

      <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
        Please fill out the form below to receive a detailed and accurate estimation for your accessibility project.
        We'll get back to you within 48 hours.
      </p>

      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle>Detailed Estimation Form</CardTitle>
          <CardDescription>Provide us with more information about your project for an accurate quote</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="companyName">Company Name</Label>
              <Input id="companyName" name="companyName" value={formData.companyName} onChange={handleInputChange} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="websiteUrl">Website URL</Label>
              <Input
                id="websiteUrl"
                name="websiteUrl"
                type="url"
                value={formData.websiteUrl}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="isAuthenticated">Is the site authenticated?</Label>
              <Select
                name="isAuthenticated"
                value={formData.isAuthenticated}
                onValueChange={(value) => handleSelectChange("isAuthenticated", value)}
              >
                <SelectTrigger id="isAuthenticated">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {formData.isAuthenticated === "yes" && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="testUsername">Test Username</Label>
                  <Input
                    id="testUsername"
                    name="testUsername"
                    value={formData.testUsername}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="testPassword">Test Password</Label>
                  <Input
                    id="testPassword"
                    name="testPassword"
                    type="password"
                    value={formData.testPassword}
                    onChange={handleInputChange}
                  />
                </div>
              </>
            )}

            <div className="space-y-2">
              <Label htmlFor="thirdPartyIntegrations">Are there third-party integrations that need to be tested?</Label>
              <Select
                name="thirdPartyIntegrations"
                value={formData.thirdPartyIntegrations}
                onValueChange={(value) => handleSelectChange("thirdPartyIntegrations", value)}
              >
                <SelectTrigger id="thirdPartyIntegrations">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {formData.thirdPartyIntegrations === "yes" && (
              <div className="space-y-2">
                <Label htmlFor="integrationDetails">Please provide details about the third-party integrations</Label>
                <Textarea
                  id="integrationDetails"
                  name="integrationDetails"
                  value={formData.integrationDetails}
                  onChange={handleInputChange}
                />
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="currentAccessibilityLevel">Current Accessibility Level</Label>
              <Select
                name="currentAccessibilityLevel"
                value={formData.currentAccessibilityLevel}
                onValueChange={(value) => handleSelectChange("currentAccessibilityLevel", value)}
              >
                <SelectTrigger id="currentAccessibilityLevel">
                  <SelectValue placeholder="Select current level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">No accessibility measures in place</SelectItem>
                  <SelectItem value="partial">Partial accessibility</SelectItem>
                  <SelectItem value="wcag-a">WCAG 2.1 Level A</SelectItem>
                  <SelectItem value="wcag-aa">WCAG 2.1 Level AA</SelectItem>
                  <SelectItem value="wcag-aaa">WCAG 2.1 Level AAA</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="targetAccessibilityLevel">Target Accessibility Level</Label>
              <Select
                name="targetAccessibilityLevel"
                value={formData.targetAccessibilityLevel}
                onValueChange={(value) => handleSelectChange("targetAccessibilityLevel", value)}
              >
                <SelectTrigger id="targetAccessibilityLevel">
                  <SelectValue placeholder="Select target level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="wcag-a">WCAG 2.1 Level A</SelectItem>
                  <SelectItem value="wcag-aa">WCAG 2.1 Level AA</SelectItem>
                  <SelectItem value="wcag-aaa">WCAG 2.1 Level AAA</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="timeline">Desired Timeline</Label>
              <Select
                name="timeline"
                value={formData.timeline}
                onValueChange={(value) => handleSelectChange("timeline", value)}
              >
                <SelectTrigger id="timeline">
                  <SelectValue placeholder="Select desired timeline" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="standard">Standard (4-6 weeks)</SelectItem>
                  <SelectItem value="expedited">Expedited (2-3 weeks)</SelectItem>
                  <SelectItem value="urgent">Urgent (1-2 weeks)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="additionalComments">Additional Comments or Requirements</Label>
              <Textarea
                id="additionalComments"
                name="additionalComments"
                value={formData.additionalComments}
                onChange={handleInputChange}
              />
            </div>

            <Button type="submit">Submit Estimation Request</Button>
          </form>
        </CardContent>
      </Card>

      <div className="mt-12 text-center">
        <p className="text-sm text-muted-foreground">
          We'll review your information and get back to you with a detailed estimation within 48 hours. If you have any
          questions, please contact us at{" "}
          <a href="mailto:support@a11yhelper.com" className="text-primary hover:underline">
            support@a11yhelper.com
          </a>
          .
        </p>
      </div>
    </div>
  )
}

