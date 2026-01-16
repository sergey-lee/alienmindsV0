"use client"

import { Pill } from "@/components/pill"
import { Search, Palette, Code, TestTube, Rocket, HeadphonesIcon } from "lucide-react"
import { useI18n } from "@/lib/i18n"

const icons = [Search, Palette, Code, TestTube, Rocket, HeadphonesIcon]

export function Process() {
  const { t } = useI18n()

  return (
    <section id="process" className="py-24 md:py-32 relative">
      <div className="container">
        <div className="text-center mb-16">
          <Pill className="mb-6">{t.process.pill}</Pill>
          <h2 className="text-4xl md:text-5xl font-sentient">
            {t.process.title1} <i className="font-light">{t.process.title2}</i>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-start gap-4 md:gap-2">
          {t.process.steps.map((step, index) => {
            const Icon = icons[index]
            return (
              <div key={index} className="flex flex-col items-center text-center flex-1 max-w-[200px]">
                <div className="relative">
                  <div
                    className="size-16 border border-primary bg-primary/10 flex items-center justify-center mb-4"
                    style={{
                      clipPath:
                        "polygon(8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px), 0 8px)",
                    }}
                  >
                    <Icon className="size-7 text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 size-6 bg-primary text-background text-xs font-mono flex items-center justify-center rounded-full">
                    {index + 1}
                  </span>
                </div>
                <h3 className="font-mono uppercase text-foreground mb-2">{step.title}</h3>
                <p className="text-foreground/60 text-sm leading-relaxed">{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
