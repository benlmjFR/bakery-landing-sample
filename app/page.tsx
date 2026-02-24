// app/page.tsx
"use client";

import { useState } from "react";
import { I18nProvider } from "@/lib/i18n";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SigBar from "@/components/SigBar";
import MenuSection from "@/components/MenuSection";
import ProductGallery from "@/components/ProductGallery";
import MapSection from "@/components/MapSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { SAIME_REPUBLIQUE, SAIME_VOLTAIRE } from "@/lib/locations";

export default function HomePage() {
  // Filtre galerie piloté depuis MenuSection → "Voir les photos"
  const [galleryFilter, setGalleryFilter] = useState<string>("pains");

  return (
    <I18nProvider>
      <Navbar />
      <main>
        <Hero />
        <SigBar speed={40} />
        <MenuSection onGalleryFilter={setGalleryFilter} />
        <ProductGallery />
        <MapSection
          id="saime-voltaire"
          location={SAIME_VOLTAIRE}
          reverse={false}
        />

        <MapSection id="saime-republique" location={SAIME_REPUBLIQUE} reverse />
        <ContactSection />
      </main>
      <Footer />
    </I18nProvider>
  );
}
