"use client"

import { useI18n } from "@/lib/i18n"

export function Stats() {
  const { t } = useI18n()

  return (
    <section id="stats" className="py-24 md:py-32 relative">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {t.stats.items.map((stat, index) => (
            <div
              key={index}
              className="p-6 border border-border bg-background/50 backdrop-blur-sm text-center"
              style={{
                clipPath:
                  "polygon(12px 0, calc(100% - 12px) 0, 100% 12px, 100% calc(100% - 12px), calc(100% - 12px) 100%, 12px 100%, 0 calc(100% - 12px), 0 12px)",
              }}
            >
              <p className="text-4xl md:text-5xl font-sentient text-primary mb-2">{stat.value}</p>
              <p className="text-foreground/60 text-sm font-mono uppercase">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
