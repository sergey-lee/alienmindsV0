"use client"

import { Pill } from "@/components/pill"
import { Smartphone, Bot, Rocket, Palette, Monitor, Settings } from "lucide-react"
import { useI18n } from "@/lib/i18n"

const icons = [Smartphone, Bot, Rocket, Palette, Monitor, Settings]

export function Services() {
  const { t } = useI18n()

  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="container">
        <div className="text-center mb-16">
          <Pill className="mb-6">{t.services.pill}</Pill>
          <h2 className="text-4xl md:text-5xl font-sentient">
            {t.services.title1} <i className="font-light">{t.services.title2}</i>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.items.map((service, index) => {
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
                <Icon className="size-10 text-primary mb-4" />
                <h3 className="text-lg font-mono uppercase text-foreground mb-3">{service.title}</h3>
                <p className="text-foreground/60 text-sm leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
