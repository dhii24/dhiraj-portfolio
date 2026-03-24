"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { LuMoon, LuSun } from "react-icons/lu"

import { Toggle } from "@/components/ui/toggle"

export function ModeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const current = theme === "system" ? resolvedTheme : theme
  const isDark = current === "dark"

  return (
    <div className="flex items-center gap-2">
      <LuSun className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
      <Toggle
        aria-label="Toggle dark mode"
        pressed={isDark}
        onPressedChange={(next) => setTheme(next ? "dark" : "light")}
      />
      <LuMoon className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
    </div>
  )
}

