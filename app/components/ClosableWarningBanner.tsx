"use client"

import { Button } from "@/components/ui/button"

import { useState, useEffect } from "react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertTriangle, X } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export function ClosableWarningBanner() {
  const [isVisible, setIsVisible] = useState(true)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  useEffect(() => {
    const bannerClosed = localStorage.getItem("warningBannerClosed")
    if (bannerClosed) {
      setIsVisible(false)
    }
  }, [])

  const openDialog = () => {
    setIsDialogOpen(true)
  }

  const closeDialog = () => {
    setIsDialogOpen(false)
  }

  const closeBanner = () => {
    setIsVisible(false)
    localStorage.setItem("warningBannerClosed", "true")
    closeDialog()
  }

  if (!isVisible) return null

  return (
    <>
      <Alert variant="warning" className="rounded-none border-x-0 border-t-0 relative pr-12">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Development Phase</AlertTitle>
        <AlertDescription>
          This site is currently in development. Many features are experimental and may change. We appreciate your
          patience and feedback.
        </AlertDescription>
        <button
          className="absolute top-1/2 right-2 -translate-y-1/2 p-1 hover:bg-accent hover:text-accent-foreground rounded-sm transition-colors"
          onClick={openDialog}
          aria-label="Close warning banner"
        >
          <X className="h-5 w-5" />
        </button>
      </Alert>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Closing Warning Banner</DialogTitle>
            <DialogDescription>
              Are you sure you want to close this warning banner? You won't see it again on future visits.
            </DialogDescription>
          </DialogHeader>
          <p>
            The information in this banner is important as it informs you about the current development status of our
            site. If you need to reference this information later, you can find it on our About page.
          </p>
          <DialogFooter>
            <Button variant="outline" onClick={closeDialog}>
              Cancel
            </Button>
            <Button onClick={closeBanner}>Confirm Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

