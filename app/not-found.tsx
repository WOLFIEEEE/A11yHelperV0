import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <div>
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-xl mb-8">Oops! Looks like we've encountered an accessibility barrier.</p>
      </div>
      <div>
        <p className="text-lg mb-4">Why did the screen reader go to therapy? It had too many unresolved issues!</p>
        <p className="text-lg mb-8">
          Remember: Either you are on the wrong path, or we are on the path toward building this soon.
          <br />
          In web development, as in life, sometimes the most important paths are the ones we're still creating.
        </p>
      </div>
      <div>
        <Button asChild>
          <Link href="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  )
}

