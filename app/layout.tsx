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
  title: 'Karaoke ở Huế - Các Quán Karaoke ở Huế | Karaoke Dzũng',
  description: 'Karaoke Dzũng - Quán karaoke bình dân, giá rẻ tại Huế với phòng ốc sang trọng, âm thanh hiện đại. Địa chỉ: 2/29 Lê Hồng Phong, Phú Nhuận, Huế. Hotline: 0906 404 048. Tìm quán karaoke ở Huế chất lượng cao, giá cả hợp lý.',
  keywords: 'karaoke ở huế, các quán karaoke ở huế, karaoke huế, quán karaoke huế, karaoke dzũng, karaoke hue, karaoke o hue, karaoke tại huế, phòng karaoke huế, địa điểm karaoke huế, karaoke giá rẻ huế, karaoke bình dân huế, karaoke rẻ ở huế',
  authors: [{ name: 'Karaoke Dzũng' }],
  creator: 'Karaoke Dzũng',
  publisher: 'Karaoke Dzũng',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://karaokedzung.com'), // Thay bằng domain thực tế
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Karaoke ở Huế - Các Quán Karaoke ở Huế | Karaoke Dzũng',
    description: 'Karaoke Dzũng - Quán karaoke bình dân, giá rẻ tại Huế với phòng ốc sang trọng, âm thanh hiện đại. Địa chỉ: 2/29 Lê Hồng Phong, Phú Nhuận, Huế.',
    url: 'https://karaokedzung.com', // Thay bằng domain thực tế
    siteName: 'Karaoke Dzũng',
    locale: 'vi_VN',
    type: 'website',
    images: [
      {
        url: '/images/banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Karaoke Dzũng - Quán karaoke ở Huế',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Karaoke ở Huế - Các Quán Karaoke ở Huế | Karaoke Dzũng',
    description: 'Karaoke Dzũng - Quán karaoke bình dân, giá rẻ tại Huế với phòng ốc sang trọng, âm thanh hiện đại.',
    images: ['/images/banner.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: 'https://th.bing.com/th?id=OIP.fp-nE-Xyv3FMtan9LUSlkQHaH1&w=243&h=257&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2',
  },
  verification: {
    // Thêm Google Search Console verification code nếu có
    // google: 'your-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Structured Data cho LocalBusiness (Schema.org)
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://karaokedzung.com#business', // Thay bằng domain thực tế
    name: 'Karaoke Dzũng',
    alternateName: 'Karaoke Dzung',
    description: 'Quán karaoke bình dân, giá rẻ tại Huế với phòng ốc sang trọng, hệ thống âm thanh và ánh sáng hiện đại. Cập nhật bài hát mới thường xuyên. Giá cả hợp lý, phù hợp mọi đối tượng khách hàng.',
    url: 'https://karaokedzung.com', // Thay bằng domain thực tế
    telephone: '+84906404048',
    email: 'dzungdzung3000@yahoo.com.vn',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '2/29 Lê Hồng Phong',
      addressLocality: 'Phú Nhuận',
      addressRegion: 'Thừa Thiên Huế',
      addressCountry: 'VN',
      postalCode: '530000',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '16.460363584277214',
      longitude: '107.59175567601365',
    },
    openingHours: 'Mo-Su 00:00-23:59',
    priceRange: '$$',
    image: [
      'https://karaokedzung.com/images/banner.jpg',
      'https://karaokedzung.com/images/room1.jpg',
      'https://karaokedzung.com/images/room2.jpg',
      'https://karaokedzung.com/images/room3.jpg',
      'https://karaokedzung.com/images/room4.jpg',
    ],
    servesCuisine: 'Vietnamese',
    amenityFeature: [
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Karaoke Rooms',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'VIP Rooms',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Modern Sound System',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Food & Beverage Service',
        value: true,
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '150',
    },
    sameAs: [
      // Thêm các social media links nếu có
    ],
  }

  return (
    <html lang="vi" className={plusJakartaSans.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
