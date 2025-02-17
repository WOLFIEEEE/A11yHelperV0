"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

export function KeyboardNavigationTester() {
  const [url, setUrl] = useState("")
  const [navigationPath, setNavigationPath] = useState<string[]>([])
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data.type === "FOCUS_CHANGE") {
        setNavigationPath((prevPath) => [...prevPath, event.data.element])
      }
    }

    window.addEventListener("message", handleMessage)
    return () => window.removeEventListener("message", handleMessage)
  }, [])

  const injectScript = () => {
    const iframe = iframeRef.current
    if (iframe && iframe.contentWindow) {
      iframe.contentWindow.postMessage(
        {
          type: "INJECT_SCRIPT",
          script: `
          document.addEventListener('focusin', function(e) {
            window.parent.postMessage({
              type: 'FOCUS_CHANGE',
              element: e.target.tagName + (e.target.id ? '#' + e.target.id : '') + (e.target.className ? '.' + e.target.className.replace(/ /g, '.') : '')
            }, '*');
          });
        `,
        },
        "*",
      )
    }
  }

  const handleLoad = () => {
    injectScript()
  }

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Keyboard Navigation Tester</CardTitle>
        <CardDescription>Test and visualize the keyboard navigation flow of a website</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <Label htmlFor="url">Website URL</Label>
            <Input
              id="url"
              type="url"
              placeholder="https://example.com"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
          <Button onClick={() => setNavigationPath([])}>Start Test</Button>
          <div className="border rounded-md p-4">
            <iframe
              ref={iframeRef}
              src={url}
              className="w-full h-96 border-0"
              title="Website Preview"
              onLoad={handleLoad}
            ></iframe>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Navigation Path:</h3>
            <ol className="list-decimal list-inside">
              {navigationPath.map((element, index) => (
                <li key={index} className="text-sm">
                  {element}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

