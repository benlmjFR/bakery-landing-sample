// app/page.tsx
'use client'

import { useState } from 'react'
import { I18nProvider }   from '@/lib/i18n'
import Navbar             from '@/components/Navbar'
import Hero               from '@/components/Hero'
import SigBar             from '@/components/SigBar'
import MenuSection        from '@/components/MenuSection'
import ProductGallery     from '@/components/ProductGallery'
import MapSection         from '@/components/MapSection'
import ContactSection     from '@/components/ContactSection'
import Footer             from '@/components/Footer'

export default function HomePage() {
  // Filtre galerie piloté depuis MenuSection → "Voir les photos"
  const [galleryFilter, setGalleryFilter] = useState<string>('pains')

  return (
    // I18nProvider injecte locale + t() dans tout l'arbre
    <I18nProvider>
      <Navbar />
      <main>
        <Hero />
        <SigBar speed={30} />
        <MenuSection onGalleryFilter={setGalleryFilter} />
        <ProductGallery />
        <MapSection />
        <ContactSection />
      </main>
      <Footer />
    </I18nProvider>
  )
}
