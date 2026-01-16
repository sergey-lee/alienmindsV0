"use client"

import dynamic from "next/dynamic"
import { Pill } from "./pill"
import { Button } from "./ui/button"
import { useState } from "react"
import { useI18n } from "@/lib/i18n"

const GL = dynamic(() => import("./gl").then((mod) => mod.GL), {
  ssr: false,
})

export function Hero() {
  const [hovering, setHovering] = useState(false)
  const { t } = useI18n()

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="flex flex-col h-svh justify-between">
      <GL hovering={hovering} />

      <div className="pb-16 mt-auto text-center relative">
        <Pill className="mb-6">{t.hero.pill}</Pill>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-sentient">
          {t.hero.title1} <br />
          <i className="font-light">{t.hero.title2}</i> {t.hero.title3}
        </h1>
        <p className="font-mono text-sm sm:text-base text-foreground/60 text-balance mt-8 max-w-[500px] mx-auto">
          {t.hero.description}
        </p>

        <a className="contents max-sm:hidden" href="#contact" onClick={handleClick}>
          <Button className="mt-14" onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
            {t.hero.cta}
          </Button>
        </a>
        <a className="contents sm:hidden" href="#contact" onClick={handleClick}>
          <Button
            size="sm"
            className="mt-14"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            {t.hero.cta}
          </Button>
        </a>
      </div>
    </div>
  )
}
