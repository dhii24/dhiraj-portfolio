"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

export const Toggle = React.forwardRef(function Toggle(
  { className, pressed, defaultPressed, onPressedChange, disabled, ...props },
  ref
) {
  const [internal, setInternal] = React.useState(!!defaultPressed)
  const isControlled = typeof pressed === "boolean"
  const isPressed = isControlled ? pressed : internal

  function set(next) {
    if (!isControlled) setInternal(next)
    onPressedChange?.(next)
  }

  return (
    <button
      ref={ref}
      type="button"
      role="switch"
      aria-checked={isPressed}
      disabled={disabled}
      data-state={isPressed ? "on" : "off"}
      onClick={() => set(!isPressed)}
      className={cn(
        "relative inline-flex h-9 w-[52px] items-center rounded-full border border-border bg-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
        "data-[state=on]:bg-accent",
        className
      )}
      {...props}
    >
      <span
        className={cn(
          "pointer-events-none absolute left-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-foreground text-background shadow-sm transition-transform",
          isPressed ? "translate-x-[22px]" : "translate-x-0"
        )}
      />
    </button>
  )
})

