import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ícaro Gonçalves | Backend Developer Portfolio",
  description:
    "Portfolio of Ícaro Gonçalves - Junior Systems Analyst and Backend Developer specializing in Java 21, Spring Boot 3, and modern DevOps practices.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${spaceGrotesk.className} font-sans antialiased`}>
        {children}
        
      </body>
    </html>
  )
}
