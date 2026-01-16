"use client"

import { Hero } from "@/components/hero"
import { Services } from "@/components/sections/services"
import { Team } from "@/components/sections/team"
import { Technologies } from "@/components/sections/technologies"
import { Process } from "@/components/sections/process"
import { Portfolio } from "@/components/sections/portfolio"
import { Testimonials } from "@/components/sections/testimonials"
import { Stats } from "@/components/sections/stats"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Team />
      <Technologies />
      <Process />
      <Portfolio />
      <Testimonials />
      <Stats />
      <Contact />
      <Footer />
    </>
  )
}
