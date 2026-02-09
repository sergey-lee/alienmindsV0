"use client"

import { Pill } from "@/components/pill"
import Image from "next/image"
import { useI18n } from "@/lib/i18n"

const images = ["/sergey.jpg", "/joon.jpg", "/kaylee.jpeg", "/diana.jpg", "/matthew.jpg", "/jenny.jpg", "/anton.jpg"]

export function Team() {
  const { t } = useI18n()

  return (
    <section id="team" className="py-24 md:py-32 relative">
      <div className="container">
        <div className="text-center mb-16">
          <Pill className="mb-6">{t.team.pill}</Pill>
          <h2 className="text-4xl md:text-5xl font-sentient">
            {t.team.title1} <i className="font-light">{t.team.title2}</i>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.team.members.map((member, index) => (
            <div
              key={index}
              className="group p-6 border border-border bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-colors duration-300"
              style={{
                clipPath:
                  "polygon(12px 0, calc(100% - 12px) 0, 100% 12px, 100% calc(100% - 12px), calc(100% - 12px) 100%, 12px 100%, 0 calc(100% - 12px), 0 12px)",
              }}
            >
              <div className="size-16 rounded-full overflow-hidden border border-primary/30 mb-4">
                <Image
                  src={images[index]}
                  alt={member.name}
                  width={64}
                  height={64}
                  className="object-cover size-full"
                />
              </div>
              <h3 className="text-lg font-mono uppercase text-foreground mb-1">{member.name}</h3>
              <p className="text-primary text-sm font-mono mb-3">{member.role}</p>
              <p className="text-foreground/60 text-sm leading-relaxed">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
