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
  metadataBase: new URL('https://saintgermainphysicaltherapy.com'),
  title: 'Juliet St. Germain | Physical Therapy | Silicon Valley',
  description: 'Physical therapy and sports rehabilitation in Silicon Valley. Personalized care for athletes, executives, and high-performers. Move better, perform stronger, recover faster.',
  keywords: ['physical therapy', 'sports rehabilitation', 'Silicon Valley', 'athletic performance', 'injury prevention', 'mobility'],
  openGraph: {
  title: 'Juliet St. Germain | Physical Therapy | Silicon Valley',
  description:
    'Physical therapy and sports rehabilitation in Silicon Valley. Personalized care for athletes, executives, and high-performers. Move better, perform stronger, recover faster.',
  url: 'https://saintgermainphysicaltherapy.com',
  siteName: 'Saint Germain Physical Therapy',
  images: [
    {
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      type: 'image/jpeg',
      alt: 'Saint Germain Physical Therapy — move better, perform stronger, recover faster.',
    },
  ],
  type: 'website',
},
twitter: {
  card: 'summary_large_image',
  title: 'Saint Germain Physical Therapy',
  description:
    'Personalized physical therapy, rehabilitation, and performance care in Silicon Valley.',
  images: ['/og-image.jpg'],
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
