"use client"

import type { Metadata } from "next"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CodeBlock } from "@/components/CodeBlock"
import { SaveIcon, Loader2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Accessible Buttons - A11yHelper",
  description:
    "Learn how to create fully accessible and customizable buttons for various use cases, following WCAG guidelines and best practices.",
  keywords: [
    "accessible buttons",
    "WCAG compliant buttons",
    "keyboard accessible buttons",
    "button best practices",
    "aria buttons",
  ],
}

const frameworks = [
  { name: "React", language: "tsx" },
  { name: "Vue", language: "html" },
  { name: "Angular", language: "typescript" },
  { name: "Svelte", language: "html" },
]

export default function AccessibleButtonsPage() {
  const [framework, setFramework] = useState(frameworks[0])
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = () => {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 2000)
  }

  return (
    <div className="container py-12 md:py-24 lg:py-32 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-8 text-center">
        Accessible Buttons
      </h1>
      <p className="text-xl mb-12 text-center max-w-3xl mx-auto">
        Discover how to create fully accessible and customizable buttons that enhance user experience and comply with
        WCAG guidelines.
      </p>

      <Card className="mb-12">
        <CardHeader>
          <CardTitle className="text-2xl">Interactive Demo</CardTitle>
          <CardDescription>Experience fully accessible buttons in action</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-4">
            <Button onClick={handleClick} disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please wait
                </>
              ) : (
                "Click me"
              )}
            </Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button disabled>Disabled</Button>
            <Button aria-label="Save document">
              <SaveIcon className="w-4 h-4 mr-2" />
              Save
            </Button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Try using these buttons with your keyboard (Tab to focus, Enter or Space to activate) or a screen reader to
            experience their accessibility features.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-12">
        <CardHeader>
          <CardTitle className="text-2xl">Code Example</CardTitle>
          <CardDescription>View implementation in different frameworks</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue={framework.name} className="mb-6">
            <TabsList>
              {frameworks.map((fw) => (
                <TabsTrigger key={fw.name} value={fw.name} onClick={() => setFramework(fw)}>
                  {fw.name}
                </TabsTrigger>
              ))}
            </TabsList>
            {frameworks.map((fw) => (
              <TabsContent key={fw.name} value={fw.name}>
                <CodeBlock code={getCodeForFramework(fw.name)} language={fw.language} />
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>

      <Card className="mb-12">
        <CardHeader>
          <CardTitle className="text-2xl">Key Accessibility Features</CardTitle>
          <CardDescription>Essential aspects for creating accessible buttons</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Use semantic HTML elements (<code>&lt;button&gt;</code> for actions, <code>&lt;a&gt;</code> for links)
            </li>
            <li>Provide clear, descriptive, and concise text labels</li>
            <li>Ensure sufficient color contrast (4.5:1 for normal text, 3:1 for large text)</li>
            <li>Make buttons keyboard accessible and operable</li>
            <li>Use ARIA attributes when necessary (e.g., for custom buttons or to provide additional context)</li>
            <li>Ensure proper focus management and visible focus indicators</li>
            <li>Provide feedback for button states (hover, focus, active, disabled)</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Testing Accessibility</CardTitle>
          <CardDescription>Ensure your buttons meet accessibility standards</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">To ensure your buttons are fully accessible, perform the following tests:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Keyboard testing: Verify that all buttons can be focused and activated using only the keyboard.</li>
            <li>
              Screen reader testing: Use popular screen readers (e.g., NVDA, JAWS, VoiceOver) to ensure buttons are
              properly announced and provide sufficient context.
            </li>
            <li>
              Color contrast: Use tools like the WebAIM Color Contrast Checker to verify sufficient contrast ratios.
            </li>
            <li>Resize text: Ensure buttons remain functional and legible when text is resized up to 200%.</li>
            <li>Touch target size: Verify that buttons meet the minimum size requirements on mobile devices.</li>
            <li>Automated testing: Use tools like axe-core or WAVE to catch common accessibility issues.</li>
          </ul>
        </CardContent>
      </Card>

      <div className="text-center mt-12">
        <Button asChild size="lg">
          <Link href="/components">Back to Components</Link>
        </Button>
      </div>
    </div>
  )
}

function getCodeForFramework(framework: string) {
  switch (framework) {
    case "React":
      return `
import React, { useState } from 'react';
import { Button } from './Button';
import { SaveIcon, Loader2Icon } from 'lucide-react';

export function AccessibleButtons() {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="space-y-4">
      <Button onClick={handleClick} disabled={isLoading}>
        {isLoading ? (
          <>
            <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
            Please wait
          </>
        ) : (
          "Click me"
        )}
      </Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button disabled>Disabled</Button>
      <Button aria-label="Save document">
        <SaveIcon className="w-4 h-4 mr-2" />
        Save
      </Button>
    </div>
  );
}
      `
    case "Vue":
      return `
<template>
  <div class="space-y-4">
    <button @click="handleClick" :disabled="isLoading" class="btn btn-primary">
      <template v-if="isLoading">
        <loader-2-icon class="mr-2 h-4 w-4 animate-spin" />
        Please wait
      </template>
      <template v-else>
        Click me
      </template>
    </button>
    <button class="btn btn-secondary">Secondary</button>
    <button class="btn btn-outline">Outline</button>
    <button class="btn btn-ghost">Ghost</button>
    <button class="btn" disabled>Disabled</button>
    <button class="btn btn-primary" aria-label="Save document">
      <save-icon class="w-4 h-4 mr-2" />
      Save
    </button>
  </div>
</template>

<script>
import { ref } from 'vue';
import { SaveIcon, Loader2Icon } from 'lucide-vue';

export default {
  components: { SaveIcon, Loader2Icon },
  setup() {
    const isLoading = ref(false);

    const handleClick = () => {
      isLoading.value = true;
      setTimeout(() => isLoading.value = false, 2000);
    };

    return { isLoading, handleClick };
  }
};
</script>
      `
    case "Angular":
      return `
import { Component } from '@angular/core';

@Component({
  selector: 'app-accessible-buttons',
  template: \`
    <div class="space-y-4">
      <button (click)="handleClick()" [disabled]="isLoading" class="btn btn-primary">
        <ng-container *ngIf="isLoading; else notLoading">
          <svg class="mr-2 h-4 w-4 animate-spin" ... ></svg>
          Please wait
        </ng-container>
        <ng-template #notLoading>Click me</ng-template>
      </button>
      <button class="btn btn-secondary">Secondary</button>
      <button class="btn btn-outline">Outline</button>
      <button class="btn btn-ghost">Ghost</button>
      <button class="btn" disabled>Disabled</button>
      <button class="btn btn-primary" aria-label="Save document">
        <svg class="w-4 h-4 mr-2" ... ></svg>
        Save
      </button>
    </div>
  \`
})
export class AccessibleButtonsComponent {
  isLoading = false;

  handleClick() {
    this.isLoading = true;
    setTimeout(() => this.isLoading = false, 2000);
  }
}
      `
    case "Svelte":
      return `
<script>
  import { SaveIcon, Loader2Icon } from 'lucide-svelte';
  let isLoading = false;

  function handleClick() {
    isLoading = true;
    setTimeout(() => isLoading = false, 2000);
  }
</script>

<div class="space-y-4">
  <button on:click={handleClick} disabled={isLoading} class="btn btn-primary">
    {#if isLoading}
      <Loader2Icon class="mr-2 h-4 w-4 animate-spin" />
      Please wait
    {:else}
      Click me
    {/if}
  </button>
  <button class="btn btn-secondary">Secondary</button>
  <button class="btn btn-outline">Outline</button>
  <button class="btn btn-ghost">Ghost</button>
  <button class="btn" disabled>Disabled</button>
  <button class="btn btn-primary" aria-label="Save document">
    <SaveIcon class="w-4 h-4 mr-2" />
    Save
  </button>
</div>
      `
    default:
      return "Code example not available for this framework."
  }
}

