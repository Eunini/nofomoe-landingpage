import type React from "react"
import Link from "next/link"
import { cn } from "@/lib"

interface NavLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  active?: boolean
}

export function NavLink({ href, children, className, active }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={cn("text-sm font-medium transition-colors hover:text-primary", active && "text-primary", className)}
    >
      {children}
    </Link>
  )
}

