import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { ThemeProvider } from "./components/ThemeProvider"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "A11yHelper - AI-driven Accessibility Tools",
    template: "%s | A11yHelper",
  },
  description: "Empower developers and testers with AI-driven accessibility tools for web development.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  themeColor: "#3b82f6",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://a11yhelper.com",
    siteName: "A11yHelper",
    title: "A11yHelper - AI-driven Accessibility Tools",
    description: "Empower developers and testers with AI-driven accessibility tools for web development.",
    images: [
      {
        url: "https://a11yhelper.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "A11yHelper - AI-driven Accessibility Tools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "A11yHelper - AI-driven Accessibility Tools",
    description: "Empower developers and testers with AI-driven accessibility tools for web development.",
    images: ["https://a11yhelper.com/twitter-image.jpg"],
    creator: "@a11yhelper",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'