import { Button } from "@/components/ui/button"
import Image from "next/image"
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import { SiLeetcode } from "react-icons/si"

export default function Hero() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-72px)] max-w-6xl flex-col items-center justify-center px-6 text-center">
      <div className="mb-6">
        <div className="relative flex flex-col items-center">
          <div className="mb-4 inline-flex items-center rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm">
            Full‑stack developer
          </div>

          <div className="relative h-28 w-28 overflow-hidden rounded-full border border-border bg-muted shadow-sm">
          <Image
            src="/profile.png"
            alt="Dhiraj profile photo"
            fill
            priority
            sizes="112px"
            className="object-cover"
          />
        </div>

          <span
            className="absolute bottom-1 right-1 h-4 w-4 rounded-full bg-emerald-500 ring-2 ring-background"
            aria-hidden="true"
          />
        </div>
      </div>

      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
        Hi, I&apos;m Dhiraj
      </h1>

      <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
      Backend Engineer | Node.js, APIs & Scalable Systems
      </p>
      <p className="mt-0 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
      Building production-ready APIs and integrating AI into real-world applications
      </p>

      <div className="mt-6 flex items-center justify-center gap-3">
        <a
          href="https://github.com/dhii24"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-background text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          <FaGithub className="h-5 w-5" aria-hidden="true" />
        </a>
        <a
          href="https://www.linkedin.com/in/dhirajacharya/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-background text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          <FaLinkedin className="h-5 w-5" aria-hidden="true" />
        </a>
        <a
          href="https://leetcode.com/u/dhiiii24/"
          target="_blank"
          rel="noreferrer"
          aria-label="LeetCode"
          className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-background text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          <SiLeetcode className="h-5 w-5" aria-hidden="true" />
        </a>
        <a
          href="https://www.instagram.com/dhii__24/"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
          className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-background text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          <FaInstagram className="h-5 w-5" aria-hidden="true" />
        </a>
      </div>

      <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
        <Button asChild>
          <a href="#projects">View projects</a>
        </Button>

        <Button variant="outline" asChild>
          <a href="#contact">Contact</a>
        </Button>
      </div>
    </section>
  );
}
