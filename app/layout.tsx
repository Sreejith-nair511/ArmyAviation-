import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, IBM_Plex_Sans } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const ibmPlexSans = IBM_Plex_Sans({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-ibm-plex',
})

export const metadata: Metadata = {
  title: 'N. Sasidharan | Airframe Supervisor | Indian Army Aviation Professional',
  description: '30 years of distinguished aviation maintenance, leadership, and operational excellence. Subedar Major specializing in airframe maintenance, NDT, and aircraft operations.',
  keywords: [
    'Aviation Professional',
    'Airframe Maintenance',
    'Indian Army',
    'NDT Testing',
    'Aircraft Operations',
    'Aviation Safety',
  ],
  generator: 'v0.app',
  openGraph: {
    title: 'N. Sasidharan | Airframe Supervisor',
    description: 'Senior aviation professional with 30 years of distinguished service',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#1b2741',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${ibmPlexSans.variable}`}>
      <body className="font-sans antialiased bg-white text-foreground print:bg-white">
        {children}
      </body>
    </html>
  )
}
