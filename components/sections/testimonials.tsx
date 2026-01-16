"use client"

import { Pill } from "@/components/pill"
import { Quote } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export function Testimonials() {
  const { t } = useI18n()

  return (
    <section id="testimonials" className="py-24 md:py-32 relative">
      <div className="container">
        <div className="text-center mb-16">
          <Pill className="mb-6">{t.testimonials.pill}</Pill>
          <h2 className="text-4xl md:text-5xl font-sentient">
            {t.testimonials.title1} <i className="font-light">{t.testimonials.title2}</i>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {t.testimonials.items.map((item, index) => (
            <div
              key={index}
              className="p-6 border border-border bg-background/50 backdrop-blur-sm"
              style={{
                clipPath:
                  "polygon(12px 0, calc(100% - 12px) 0, 100% 12px, 100% calc(100% - 12px), calc(100% - 12px) 100%, 12px 100%, 0 calc(100% - 12px), 0 12px)",
              }}
            >
              <Quote className="size-8 text-primary/50 mb-4" />
              <p className="text-foreground/80 text-sm leading-relaxed mb-6 italic">"{item.quote}"</p>
              <div>
                <p className="font-mono text-foreground">{item.author}</p>
                <p className="text-primary text-sm font-mono">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
