import "@/styles/globals.css"
import { Inter } from "next/font/google"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "VOC AI - Market Intelligence Platform",
  description: "AI-powered market intelligence and competitor analysis platform",
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vocai.com',
    siteName: 'VOC AI',
    title: 'VOC AI - Market Intelligence Platform',
    description: 'AI-powered market intelligence and competitor analysis platform',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'VOC AI Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VOC AI - Market Intelligence Platform',
    description: 'AI-powered market intelligence and competitor analysis platform',
    images: ['/images/twitter-image.jpg'],
    creator: '@vocai',
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "VOC AI",
  "applicationCategory": "BusinessApplication",
  "description": "AI-powered market intelligence and competitor analysis platform",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "900"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#ffffff" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          <link rel="manifest" href="/manifest.json" />
          <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
