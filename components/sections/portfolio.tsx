"use client"

import { Pill } from "@/components/pill"
import { Smartphone, Bot, Sparkles } from "lucide-react"
import { useI18n } from "@/lib/i18n"

const icons = [Smartphone, Bot, Sparkles]

export function Portfolio() {
  const { t } = useI18n()

  return (
    <section id="portfolio" className="py-24 md:py-32 relative">
      <div className="container">
        <div className="text-center mb-16">
          <Pill className="mb-6">{t.portfolio.pill}</Pill>
          <h2 className="text-4xl md:text-5xl font-sentient">
            {t.portfolio.title1} <i className="font-light">{t.portfolio.title2}</i>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {t.portfolio.items.map((project, index) => {
            const Icon = icons[index]
            return (
              <div
                key={index}
                className="group p-6 border border-border bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-colors duration-300"
                style={{
                  clipPath:
                    "polygon(12px 0, calc(100% - 12px) 0, 100% 12px, 100% calc(100% - 12px), calc(100% - 12px) 100%, 12px 100%, 0 calc(100% - 12px), 0 12px)",
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <Icon className="size-10 text-primary" />
                  <span className="px-3 py-1 text-xs font-mono text-primary border border-primary/30 bg-primary/10 rounded">
                    {project.tag}
                  </span>
                </div>
                <h3 className="text-lg font-mono uppercase text-foreground mb-3">{project.title}</h3>
                <p className="text-foreground/60 text-sm leading-relaxed">{project.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
