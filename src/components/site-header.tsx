import Link from "next/link"
import { Button } from "@/components/ui/button"
import { NavLink } from "@/components/ui/nav-link"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 text-white"
            >
              <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" />
              <path d="M8 14L12 10L16 14" />
            </svg>
          </div>
          <span className="font-bold">NOFOMOE</span>
        </Link>
        <nav className="ml-6 flex items-center space-x-4 lg:space-x-6">
          <NavLink href="/" active>
            HOME
          </NavLink>
          <NavLink href="/about">ABOUT US</NavLink>
          <NavLink href="/courses">COURSES</NavLink>
        </nav>
        <div className="ml-auto flex items-center space-x-4">
          <Button variant="ghost" asChild>
            <Link href="/sign-in">Sign In</Link>
          </Button>
          |
          <Button asChild>
            <Link href="/sign-up">Sign Up</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

