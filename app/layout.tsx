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
  title: '洲洲 | 專業自由潛水教練 & CMAS STA 台灣國家紀錄保持人',
  description: '洲洲（潘名洲）- 專業自由潛水運動員與教練，CMAS STA 台灣國家紀錄保持人。提供單堂體驗課、初階自由潛水課程、專項訓練課程，帶你探索水下世界的魅力。',
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
