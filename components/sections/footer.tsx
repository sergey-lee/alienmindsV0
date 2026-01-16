"use client"

import { Logo } from "@/components/logo"
import Link from "next/link"
import { useI18n } from "@/lib/i18n"

export function Footer() {
  const { t } = useI18n()

  const navItems = [
    { key: "services", label: t.nav.services },
    { key: "team", label: t.nav.team },
    { key: "technologies", label: t.nav.technologies },
    { key: "portfolio", label: t.nav.portfolio },
    { key: "contact", label: t.nav.contact },
  ]

  return (
    <footer className="py-12 border-t border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Logo className="w-[120px]" />

          <nav className="flex flex-wrap justify-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={`#${item.key}`}
                className="font-mono text-sm text-foreground/60 hover:text-foreground transition-colors uppercase"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <p className="font-mono text-sm text-foreground/40">© {new Date().getFullYear()} {t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
