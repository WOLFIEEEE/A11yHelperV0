import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import React from "react"
import Logo from "./Logo"

const Footer = () => {
  return (
    <>
      <div className="w-full h-px bg-gray-200 dark:bg-gray-800"></div>
      <footer className="bg-background pt-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center space-x-2">
                <Logo />
                <h3 className="text-xl font-semibold">A11yHelper</h3>
              </div>
              <p className="text-sm text-muted-foreground text-center md:text-left">
                Empowering inclusive web experiences
              </p>
            </div>
            <nav className="flex flex-wrap justify-center md:justify-end">
              {[
                { href: "/tools", label: "Tools" },
                { href: "/docs", label: "Docs" },
                { href: "/blog", label: "Blog" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
                { href: "/accessibility-statement", label: "Accessibility" },
              ].map((item, index) => (
                <React.Fragment key={item.href}>
                  {index > 0 && <div className="mx-2 text-gray-300 dark:text-gray-700">|</div>}
                  <Link href={item.href} className="text-sm hover:text-primary transition-colors">
                    {item.label}
                  </Link>
                </React.Fragment>
              ))}
            </nav>
            <div className="flex space-x-4">
              <Link
                href="https://twitter.com/a11yhelper"
                aria-label="Twitter"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="https://facebook.com/a11yhelper"
                aria-label="Facebook"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://instagram.com/a11yhelper"
                aria-label="Instagram"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com/company/a11yhelper"
                aria-label="LinkedIn"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-muted-foreground/10 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} A11yHelper. All rights reserved.
            </p>
            <div className="flex mt-4 sm:mt-0 space-x-4">
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer

