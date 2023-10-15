"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { siteConfig } from "@/data/site"
import { cn } from "@/lib/utils"
import { Icons } from "./icons"
import { useTheme } from "next-themes"

export function MainNav() {
  const pathname = usePathname()
  const { theme } = useTheme()

  return (
    <div className="mr-4 md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Icons.logo className=""/>
      </Link>
      {/* <nav className="flex items-center space-x-6 text-sm font-medium">
        <Link
          href="/blog"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/blog" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Blog
        </Link>
        <Link
          href="/me"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/me"
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Me
        </Link>
        
      </nav> */}
    </div>
  )
}