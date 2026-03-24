"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"

import { cn } from "@/lib/utils"

const buttonVariants = {
  variant: {
    default:
      "bg-foreground text-background hover:opacity-90",
    outline:
      "border border-border bg-transparent hover:bg-accent hover:text-accent-foreground",
    ghost:
      "hover:bg-accent hover:text-accent-foreground",
    link:
      "underline-offset-4 hover:underline",
  },
  size: {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
    icon: "h-9 w-9 p-0",
  },
}

export const Button = React.forwardRef(function Button(
  { className, variant = "default", size = "default", asChild = false, type = "button", ...props },
  ref
) {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      ref={ref}
      type={asChild ? undefined : type}
      className={cn(
        "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
        buttonVariants.variant[variant],
        buttonVariants.size[size],
        className
      )}
      {...props}
    />
  )
})

