// app/layout.tsx
import type { Metadata } from 'next'
import { Cormorant_Garamond, Space_Mono } from 'next/font/google'
import '@/styles/globals.scss'
import { SITE_META } from '@/lib/constants'

const cormorant = Cormorant_Garamond({
  subsets:  ['latin'],
  weight:   ['300', '400', '600'],
  style:    ['normal', 'italic'],
  variable: '--font-cormorant',
  display:  'swap',
})

const spaceMono = Space_Mono({
  subsets:  ['latin'],
  weight:   ['400', '700'],
  variable: '--font-space-mono',
  display:  'swap',
})

export const metadata: Metadata = {
  title:       `${SITE_META.name} — Paris`,
  description: SITE_META.description,
  keywords:    ['boulangerie', 'paris', 'artisan', 'pain', 'pâtisserie', 'saime'],
  openGraph: {
    title:       SITE_META.name,
    description: SITE_META.tagline,
    locale:      SITE_META.locale,
    type:        'website',
    url:         SITE_META.url,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      className={`${cormorant.variable} ${spaceMono.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
