import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist_Mono } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { I18nProvider } from "@/lib/i18n"

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "AlienMinds - Mobile & Web Development",
  description: "Mobile & Web App Solutions - iOS, Android, Flutter Development",
  generator: "v0.app",
}

export const viewport: Viewport = {
  themeColor: "#000000",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistMono.variable} antialiased`} suppressHydrationWarning>
        <I18nProvider>
          <Header />
          {children}
        </I18nProvider>
      </body>
    </html>
  )
}
