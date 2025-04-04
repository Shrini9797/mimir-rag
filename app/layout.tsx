import type { Metadata } from 'next'
import './globals.css'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: "Mimir - Privacy-first AI",
  description: "Discover Mimir, the world's most advanced secure private AI assistant. Experience innovative technology with uncompromising data privacy and tailored solutions for your business.",
  keywords: "Mimir, AI assistant, privacy, secure data, privacy-first, RAG, compliance, innovation",
  generator: 'bucket',
  icons: {
    icon: '/bucket.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics /> {/* added to track page visits */}
        <SpeedInsights /> {/* added for speed and performance tracking */}
      </body>
    </html>
  )
}
