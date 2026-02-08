"use client"

import { Pill } from "@/components/pill"
import { ExternalLink, Lock } from "lucide-react"
import { useI18n } from "@/lib/i18n"
import Image from "next/image"

const projectImages: Record<string, string> = {
  "KoreaTour24": "/portfolio/koreatour24.png",
  "NaoNow": "/portfolio/naonow.png",
  "PromptTown": "/portfolio/prompttown.png",
  "Insurz": "/portfolio/insurz.png",
  "Imperia Food": "/portfolio/imperia.png",
  "Amoring": "/portfolio/amoring.jpg",
  "Wethm": "/portfolio/wethm.png",
  "SSOLDOT (dR)": "/portfolio/veneer.png",
  "AlbaDo": "/portfolio/albado.png",
  "Ethnogram": "/portfolio/ethnogram.jpg",
}

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {t.portfolio.items.map((project, index) => {
            const isNda = !project.url
            const Card = isNda ? "div" : "a"
            const linkProps = isNda ? {} : { href: project.url, target: "_blank", rel: "noopener noreferrer" }

            return (
              <Card
                key={index}
                {...linkProps}
                className={`group p-6 border border-border bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-colors duration-300 ${isNda ? "" : "cursor-pointer"}`}
                style={{
                  clipPath:
                    "polygon(12px 0, calc(100% - 12px) 0, 100% 12px, 100% calc(100% - 12px), calc(100% - 12px) 100%, 12px 100%, 0 calc(100% - 12px), 0 12px)",
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  {projectImages[project.title] ? (
                    <Image
                      src={projectImages[project.title]}
                      alt={project.title}
                      width={40}
                      height={40}
                      className="size-10 object-contain rounded"
                    />
                  ) : isNda ? (
                    <Lock className="size-5 text-foreground/40" />
                  ) : (
                    <ExternalLink className="size-5 text-foreground/40 group-hover:text-primary transition-colors" />
                  )}
                  <div className="flex items-center gap-2">
                    {isNda && (
                      <span className="px-2 py-1 text-xs font-mono text-foreground/50 border border-foreground/20 rounded">
                        NDA
                      </span>
                    )}
                    <span className="px-3 py-1 text-xs font-mono text-primary border border-primary/30 bg-primary/10 rounded">
                      {project.tag}
                    </span>
                  </div>
                </div>
                <h3 className="text-lg font-mono uppercase text-foreground mb-3">{project.title}</h3>
                <p className="text-foreground/60 text-sm leading-relaxed">{project.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
