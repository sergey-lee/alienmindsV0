"use client"

import { Pill } from "@/components/pill"
import { Button } from "@/components/ui/button"
import { Mail, ExternalLink } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export function Contact() {
  const { t } = useI18n()

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <Pill className="mb-6">{t.contact.pill}</Pill>
          <h2 className="text-4xl md:text-5xl font-sentient mb-6">
            {t.contact.title1} <i className="font-light">{t.contact.title2}</i>?
          </h2>
          <p className="text-foreground/60 font-mono mb-8">{t.contact.description}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a href="mailto:contact@alienminds.net" className="contents">
              <Button>
                <Mail className="size-4 mr-2" />
                {t.contact.button}
              </Button>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-foreground/60 font-mono text-sm">
            <a
              href="https://alienminds.net"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <ExternalLink className="size-4" />
              alienminds.net
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
