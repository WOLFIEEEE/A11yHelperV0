"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"

type FormField = {
  id: string
  type: "text" | "email" | "number" | "textarea" | "select"
  label: string
  required: boolean
  options?: string[] // for select fields
}

export function AccessibleFormBuilder() {
  const [fields, setFields] = useState<FormField[]>([])
  const [newField, setNewField] = useState<FormField>({
    id: "",
    type: "text",
    label: "",
    required: false,
  })

  const addField = () => {
    if (newField.label) {
      setFields([...fields, { ...newField, id: `field-${fields.length}` }])
      setNewField({ id: "", type: "text", label: "", required: false })
    }
  }

  const renderField = (field: FormField) => {
    switch (field.type) {
      case "text":
      case "email":
      case "number":
        return <Input type={field.type} id={field.id} placeholder={field.label} required={field.required} />
      case "textarea":
        return <Textarea id={field.id} placeholder={field.label} required={field.required} />
      case "select":
        return (
          <Select>
            <SelectTrigger>
              <SelectValue placeholder={field.label} />
            </SelectTrigger>
            <SelectContent>
              {field.options?.map((option, index) => (
                <SelectItem key={index} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )
      default:
        return null
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Accessible Form Builder</CardTitle>
        <CardDescription>Create accessible forms with proper labeling and ARIA attributes</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4 mb-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="fieldType">Field Type</Label>
              <Select value={newField.type} onValueChange={(value: any) => setNewField({ ...newField, type: value })}>
                <SelectTrigger id="fieldType">
                  <SelectValue placeholder="Select field type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="text">Text</SelectItem>
                  <SelectItem value="email">Email</SelectItem>
                  <SelectItem value="number">Number</SelectItem>
                  <SelectItem value="textarea">Textarea</SelectItem>
                  <SelectItem value="select">Select</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="fieldLabel">Field Label</Label>
              <Input
                id="fieldLabel"
                value={newField.label}
                onChange={(e) => setNewField({ ...newField, label: e.target.value })}
                placeholder="Enter field label"
              />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="required"
              checked={newField.required}
              onCheckedChange={(checked) => setNewField({ ...newField, required: checked })}
            />
            <Label htmlFor="required">Required</Label>
          </div>
          <Button onClick={addField}>Add Field</Button>
        </div>
        <div className="space-y-4">
          {fields.map((field) => (
            <div key={field.id} className="space-y-2">
              <Label htmlFor={field.id}>
                {field.label}
                {field.required && " *"}
              </Label>
              {renderField(field)}
            </div>
          ))}
        </div>
        {fields.length > 0 && <Button className="mt-4">Submit Form</Button>}
      </CardContent>
    </Card>
  )
}

