import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair'
});

export const metadata: Metadata = {
  title: 'Juliet St. Germain | Elite Physical Therapy | Silicon Valley',
  description: 'Elite physical therapy and sports rehabilitation in Silicon Valley. Personalized care for athletes, executives, and high-performers. Move better, perform stronger, recover faster.',
  keywords: ['physical therapy', 'sports rehabilitation', 'Silicon Valley', 'athletic performance', 'injury prevention', 'mobility'],
  generator: 'v0.app',
  icons: {
    icon: '/icon-light-32x32.png',
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0066FF',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
