import type { Metadata, Viewport } from 'next'
import { Noto_Sans_TC, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const notoSansTC = Noto_Sans_TC({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '700', '900'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: '洲洲 | 專業自由潛水運動員與教練',
  description: '洲洲（潘名洲）的個人網站 - 專業自由潛水運動員與教練。',
}

export const viewport: Viewport = {
  themeColor: '#0a1628',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-Hant">
      <body className={`${notoSansTC.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
