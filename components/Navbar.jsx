import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
      
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="text-sm font-semibold tracking-tight">
          Dhiraj.dev
        </a>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-1 md:flex">
            <Button variant="ghost" className="text-sm" asChild>
              <a href="#skills">Skills</a>
            </Button>
            <Button variant="ghost" className="text-sm" asChild>
              <a href="#projects">Projects</a>
            </Button>
            <Button variant="ghost" className="text-sm" asChild>
              <a href="#contact">Contact</a>
            </Button>
            <Button className="text-sm" asChild>
              <a href="/DhirajAcharyaCV.pdf" target="_blank" rel="noreferrer">
                Resume
              </a>
            </Button>
          </div>

          <ModeToggle />
        </div>
      </div>

    </nav>
  )
}