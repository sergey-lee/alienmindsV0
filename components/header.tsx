"use client"

import Link from "next/link"
import { Logo } from "./logo"
import { MobileMenu } from "./mobile-menu"
import { useEffect, useState } from "react"
import { useI18n, localeNames, type Locale } from "@/lib/i18n"

export const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const { locale, setLocale, t } = useI18n()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
    }
  }

  const navItems = [
    { key: "services", label: t.nav.services },
    { key: "team", label: t.nav.team },
    { key: "technologies", label: t.nav.technologies },
    { key: "portfolio", label: t.nav.portfolio },
    { key: "contact", label: t.nav.contact },
  ]

  return (
    <div
      className={`fixed z-50 top-0 left-0 w-full transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md py-4" : "pt-8 md:pt-14"
      }`}
    >
      <header className="flex items-center justify-between container">
        <Link href="/">
          <Logo className="w-[140px] md:w-[160px]" />
        </Link>
        <nav className="flex max-lg:hidden absolute left-1/2 -translate-x-1/2 items-center justify-center gap-x-10">
          {navItems.map((item) => (
            <a
              className="uppercase inline-block font-mono text-foreground/60 hover:text-foreground/100 duration-150 transition-colors ease-out cursor-pointer"
              href={`#${item.key}`}
              key={item.key}
              onClick={(e) => handleClick(e, `#${item.key}`)}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="relative max-lg:hidden">
          <button
            className="uppercase transition-colors ease-out duration-150 font-mono text-primary hover:text-primary/80 cursor-pointer flex items-center gap-1"
            onClick={() => setLangOpen(!langOpen)}
          >
            {localeNames[locale]}
            <svg
              className={`w-4 h-4 transition-transform ${langOpen ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {langOpen && (
            <div className="absolute top-full right-0 mt-2 bg-background/90 backdrop-blur-md border border-border rounded-md overflow-hidden">
              {(Object.keys(localeNames) as Locale[]).map((lang) => (
                <button
                  key={lang}
                  className={`block w-full px-4 py-2 text-left font-mono text-sm hover:bg-primary/20 transition-colors ${
                    locale === lang ? "text-primary" : "text-foreground/60"
                  }`}
                  onClick={() => {
                    setLocale(lang)
                    setLangOpen(false)
                  }}
                >
                  {localeNames[lang]}
                </button>
              ))}
            </div>
          )}
        </div>
        <MobileMenu />
      </header>
    </div>
  )
}
