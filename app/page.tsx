// app/page.tsx
'use client'

import { useState } from 'react'
import Navbar     from '@/components/Navbar'
import Hero       from '@/components/Hero'
import SigBar     from '@/components/SigBar'
import MenuSection from '@/components/MenuSection'
import MapSection  from '@/components/MapSection'
import Footer     from '@/components/Footer'
import { DEFAULT_LOCALE, type Locale } from '@/lib/constants'

export default function HomePage() {
  const [locale, setLocale] = useState<Locale>(DEFAULT_LOCALE)

  return (
    <>
      <Navbar locale={locale} onLocaleChange={setLocale} />

      <main>
        {/* 1. Hero — plein écran, titre + CTA */}
        <Hero />

        {/* 2. SigBar — mots qui défilent */}
        <SigBar speed={30} />

        {/* 3. Sélection Produits */}
        <MenuSection />

        {/* 4. Carte + Contacts */}
        <MapSection />
      </main>

      <Footer />
    </>
  )
}
