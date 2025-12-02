import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import '../styles/globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['200', '400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-plus-jakarta-sans',
})

export const metadata: Metadata = {
  title: 'Karaoke Dzũng',
  description: 'Karaoke Dzũng - Địa điểm karaoke hàng đầu tại Huế',
  icons: {
    icon: 'https://th.bing.com/th?id=OIP.fp-nE-Xyv3FMtan9LUSlkQHaH1&w=243&h=257&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" className={plusJakartaSans.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
