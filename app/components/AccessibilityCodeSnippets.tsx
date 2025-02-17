"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type CodeSnippet = {
  name: string
  description: string
  html: string
  css: string
  js: string
}

const codeSnippets: CodeSnippet[] = [
  {
    name: "Accessible Modal",
    description: "A modal dialog that can be opened and closed with proper keyboard support and focus management.",
    html: `
<div id="modal" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription" class="modal">
  <h2 id="modalTitle">Modal Title</h2>
  <p id="modalDescription">This is the modal content.</p>
  <button id="closeModal">Close</button>
</div>
    `,
    css: `
.modal {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}
    `,
    js: `
const modal = document.getElementById('modal');
const closeButton = document.getElementById('closeModal');

closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal.style.display === 'block') {
    modal.style.display = 'none';
  }
});
    `,
  },
  {
    name: "Skip to Content Link",
    description: "A skip link that allows keyboard users to bypass repetitive navigation and jump to the main content.",
    html: `
<a href="#main-content" class="skip-link">Skip to main content</a>
<nav>
  <!-- Navigation items -->
</nav>
<main id="main-content">
  <!-- Main content -->
</main>
    `,
    css: `
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: #000;
  color: white;
  padding: 8px;
  z-index: 100;
}

.skip-link:focus {
  top: 0;
}
    `,
    js: ``,
  },
]

export function AccessibilityCodeSnippets() {
  const [selectedSnippet, setSelectedSnippet] = useState<CodeSnippet>(codeSnippets[0])

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Accessibility Code Snippets</CardTitle>
        <CardDescription>Pre-built, accessible code snippets for common UI patterns</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Select
            onValueChange={(value) =>
              setSelectedSnippet(codeSnippets.find((snippet) => snippet.name === value) || codeSnippets[0])
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Select a snippet" />
            </SelectTrigger>
            <SelectContent>
              {codeSnippets.map((snippet, index) => (
                <SelectItem key={index} value={snippet.name}>
                  {snippet.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <p className="text-sm text-muted-foreground">{selectedSnippet.description}</p>
          <Tabs defaultValue="html">
            <TabsList>
              <TabsTrigger value="html">HTML</TabsTrigger>
              <TabsTrigger value="css">CSS</TabsTrigger>
              <TabsTrigger value="js">JavaScript</TabsTrigger>
            </TabsList>
            <TabsContent value="html">
              <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                <code>{selectedSnippet.html}</code>
              </pre>
            </TabsContent>
            <TabsContent value="css">
              <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                <code>{selectedSnippet.css}</code>
              </pre>
            </TabsContent>
            <TabsContent value="js">
              <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                <code>{selectedSnippet.js}</code>
              </pre>
            </TabsContent>
          </Tabs>
          <Button>Copy Snippet</Button>
        </div>
      </CardContent>
    </Card>
  )
}

