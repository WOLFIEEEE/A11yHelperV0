import Link from "next/link"
import { ModeToggle } from "./ModeToggle"
import Logo from "./Logo"
import { Menu, CheckSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const Header = () => {
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/tools", label: "Tools" },
    { href: "/docs", label: "Docs" },
    { href: "/blog", label: "Blog" },
    { href: "/community", label: "Community" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-14 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <div className="w-8 h-8">
              <Logo />
            </div>
            <span className="font-bold text-xl hidden sm:inline-block">A11yHelper</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center space-x-2">
          <Link href="/wcag-checklist">
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <CheckSquare className="mr-2 h-4 w-4" />
              WCAG Checklist
            </Button>
          </Link>
          <ModeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" className="px-0 text-base hover:bg-transparent focus:ring-0 md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="transition-colors hover:text-foreground/80 text-foreground/60"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link href="/wcag-checklist" className="transition-colors hover:text-foreground/80 text-foreground/60">
                  WCAG Checklist
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

export default Header

