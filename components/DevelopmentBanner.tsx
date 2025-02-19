"use client"

import React, { useState, useEffect } from "react"

const DevelopmentBanner = () => {
  const [isVisible, setIsVisible] = useState(true)

  // Check localStorage on mount to see if the banner was previously closed
  useEffect(() => {
    const bannerClosed = localStorage.getItem("developmentBannerClosed")
    if (bannerClosed === "true") {
      setIsVisible(false)
    }
  }, [])

  const handleClose = () => {
    if (
      window.confirm(
        "Are you sure you want to remove this warning banner ? "
      )
    ) {
      setIsVisible(false)
      localStorage.setItem("developmentBannerClosed", "true")
    }
  }

  if (!isVisible) return null

  return (
    <div className="w-full bg-yellow-100 text-yellow-800 border-b border-yellow-200 p-2 text-center relative">
      <p className="text-sm font-medium">
        Notice: This website is currently in{" "}
        <strong>development</strong>. Some features may be experimental.
      </p>
      <button
        onClick={handleClose}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-yellow-800 hover:text-yellow-900 focus:outline-none"
        aria-label="Close warning banner"
      >
        <svg
          className="h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  )
}

export default DevelopmentBanner