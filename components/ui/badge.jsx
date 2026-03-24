"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

export const Badge = React.forwardRef(function Badge(
  { className, variant = "default", ...props },
  ref
) {
  const variants = {
    default: "border-border bg-muted text-foreground",
    subtle: "border-border/60 bg-background text-muted-foreground",
  }

  return (
    <span
      ref={ref}
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium",
        variants[variant] ?? variants.default,
        className
      )}
      {...props}
    />
  )
})

