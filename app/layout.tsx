import type { Metadata } from 'next'
import './globals.css'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: "BucketLabs.ai - The Future of Private AI",
  description: "BucketLabs.ai - We build AI that keeps your data private. Get smarter business tools without giving up control of your information.",
  keywords: "BucketLabs, private AI, RAG, LLMs, Mimir, enterprise AI, privacy-first, secure AI, artificial intelligence",
  generator: 'BucketLabs.ai',
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
