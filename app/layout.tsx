import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { ThemeProvider } from "./components/ThemeProvider"
import { VercelAnalytics } from "./components/VercelAnalytics"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://a11yhelper.com"),
  title: {
    default: "A11yHelper - AI-Powered Web Accessibility Tools",
    template: "%s | A11yHelper",
  },
  description:
    "Empower your web development with AI-driven accessibility tools. Ensure WCAG compliance, check color contrast, and make your website inclusive for all users.",
  keywords: [
    "web accessibility",
    "WCAG compliance",
    "color contrast checker",
    "accessibility tools",
    "AI-powered accessibility",
    "inclusive design",
    "accessibility checker",
    "WCAG guidelines",
    "web development tools",
    "digital inclusion",
  ],
  authors: [{ name: "A11yHelper Team" }],
  creator: "A11yHelper",
  publisher: "A11yHelper Inc.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://a11yhelper.com",
    siteName: "A11yHelper",
    title: "A11yHelper - AI-Powered Web Accessibility Tools",
    description:
      "Empower your web development with AI-driven accessibility tools. Ensure WCAG compliance, check color contrast, and make your website inclusive for all users.",
    images: [
      {
        url: "https://a11yhelper.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "A11yHelper - AI-Powered Web Accessibility Tools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "A11yHelper - AI-Powered Web Accessibility Tools",
    description:
      "Empower your web development with AI-driven accessibility tools. Ensure WCAG compliance, check color contrast, and make your website inclusive for all users.",
    images: ["https://a11yhelper.com/twitter-image.jpg"],
    creator: "@a11yhelper",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  themeColor: "#3b82f6",
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
            <main className="flex-grow px-4 sm:px-6 lg:px-8">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
        <VercelAnalytics />
      </body>
    </html>
  )
}



import './globals.css'