"use client"
import { useState, useEffect} from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { NavLink } from "@/components/ui/nav-link"
import { Menu, X } from "lucide-react"

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  return (
    <header className="sticky top-0 z-[9999] w-full bg-white ">
      <div className="container flex h-14 items-center justify-between">
        {/* Logo */}
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
          <span className="font-bold text-lg text-black">NOFOMOE</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center sm:space-x-6">
          <NavLink href="/" active className="text-blue">
            HOME
          </NavLink>
          <NavLink href="/about" className="text-black">ABOUT US</NavLink>
          <NavLink href="/courses" className="text-black">COURSES</NavLink>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center sm:space-x-4">
          <Button variant="ghost" asChild>
            <Link href="/sign-in">Sign In</Link>
          </Button>
          <Button asChild>
            <Link href="/sign-up">Sign Up</Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6 text-black" /> : <Menu className="w-6 h-6 text-black" />}
        </button>
      </div>

      {/* Mobile Navigation (Animated) */}
      <motion.nav
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? "0%" : "100%" }}
        transition={{ type: "tween", duration: 0.3 }}
        className={`fixed top-0 left-0 h-screen w-screen bg-black/90 backdrop-blur-lg shadow-xl p-6 flex flex-col space-y-6 md:hidden ${
          isOpen ? "block" : "hidden"
        }`}
      >
        
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-white"
          onClick={() => setIsOpen(false)}
        >
          <X className="w-6 h-6" />
        </button>

        {/* Mobile Links */}
        <div onClick={() => setIsOpen(false)}>
          <NavLink href="/" className="text-white">
            HOME
          </NavLink>
        </div>
        <div onClick={() => setIsOpen(false)}>
          <NavLink href="/about" className="text-white">
            ABOUT US
          </NavLink>
        </div>
        <div onClick={() => setIsOpen(false)}>
          <NavLink href="/courses" className="text-white">
            COURSES
          </NavLink>
        </div>

        {/* Mobile Buttons */}
        <div className="mt-auto flex flex-col space-y-3">
          <Button variant="ghost" asChild className="text-white border-white/30">
            <Link href="/sign-in">Sign In</Link>
          </Button>
          <Button asChild className="bg-green-500 text-white">
            <Link href="/sign-up">Sign Up</Link>
          </Button>
        </div>
      </motion.nav>
    </header>
  )
}
