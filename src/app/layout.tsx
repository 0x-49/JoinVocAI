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
          {/* Primary Meta Tags */}
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
          <meta name="theme-color" content="#ffffff" />
          <meta name="title" content="VOC AI - AI-Powered Market Intelligence Platform" />
          <meta name="description" content="Unlock competitor insights and market trends with VOC AI's advanced AI analysis platform. Get actionable intelligence for strategic business decisions." />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://vocai.com/" />
          <meta property="og:title" content="VOC AI - AI-Powered Market Intelligence Platform" />
          <meta property="og:description" content="Unlock competitor insights and market trends with VOC AI's advanced AI analysis platform. Get actionable intelligence for strategic business decisions." />
          <meta property="og:image" content="/images/og-image.jpg" />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://vocai.com/" />
          <meta property="twitter:title" content="VOC AI - AI-Powered Market Intelligence Platform" />
          <meta property="twitter:description" content="Unlock competitor insights and market trends with VOC AI's advanced AI analysis platform. Get actionable intelligence for strategic business decisions." />
          <meta property="twitter:image" content="/images/twitter-image.jpg" />

          {/* Favicons */}
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          <link rel="manifest" href="/manifest.json" />

          {/* Structured Data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "url": "https://vocai.com",
              "logo": "https://vocai.com/images/Vox-AI-Logo.png.webp",
              "contactPoint": [{
                "@type": "ContactPoint",
                "telephone": "+1-800-555-1234",
                "contactType": "customer service",
                "areaServed": "US"
              }]
            })}
          </script>
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
