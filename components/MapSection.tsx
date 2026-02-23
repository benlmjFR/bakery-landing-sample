// components/MapSection.tsx
'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Clock, Mail, Phone, Instagram } from 'lucide-react'
import SectionLabel from './SectionLabel'
import Button from './Button'
import { BOUTIQUES, SOCIAL, SECTIONS } from '@/lib/constants'
import styles from './MapSection.module.scss'

export default function MapSection() {
  const ref   = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  // On prend la première boutique pour l'affichage principal
  const shop = BOUTIQUES[0]

  return (
    <section
      id={SECTIONS.BOUTIQUES}
      className={styles.section}
      ref={ref}
    >
      {/* ── MAP ── */}
      <div className={styles.mapZone}>
        <iframe
          className={styles.map}
          src={shop.mapEmbedUrl}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          title={`${shop.name} — Localisation Google Maps`}
          aria-label={`Carte interactive — ${shop.name}, ${shop.address}, ${shop.city}`}
        />
        {/* Texture overlay pour rester dans l'aesthetic */}
        <div className={styles.mapOverlay} aria-hidden />
      </div>

      {/* ── INFOS ── */}
      <motion.div
        id={SECTIONS.CONTACT}
        className={styles.info}
        initial={{ opacity: 0, x: 32 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.85, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
      >
        <div className={styles.infoTop}>
          <SectionLabel index="03" label="Nous trouver" light />
          <h2 className={styles.infoTitle}>{shop.name}</h2>
        </div>

        <div className={styles.infoBlocks}>
          {/* Adresse */}
          <div className={styles.block}>
            <span className={styles.blockLabel}>
              <MapPin size={9} strokeWidth={1.5} aria-hidden />
              Adresse
            </span>
            <p className={styles.blockValue}>
              {shop.address}<br />
              {shop.zip} {shop.city}
            </p>
          </div>

          {/* Horaires */}
          <div className={styles.block}>
            <span className={styles.blockLabel}>
              <Clock size={9} strokeWidth={1.5} aria-hidden />
              Horaires
            </span>
            <p className={styles.blockValue}>
              {shop.hours}<br />
              <span className={styles.closed}>{shop.closedDay}</span>
            </p>
          </div>

          {/* Contact */}
          <div className={styles.block}>
            <span className={styles.blockLabel}>
              <Mail size={9} strokeWidth={1.5} aria-hidden />
              Contact
            </span>
            <p className={styles.blockValue}>
              <a href={`mailto:${shop.email}`} className={styles.link}>
                {shop.email}
              </a><br />
              <a href={`tel:${shop.phone.replace(/\s/g, '')}`} className={styles.link}>
                <Phone size={9} strokeWidth={1.5} aria-hidden />
                {shop.phone}
              </a>
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.infoCta}>
          <Button
            href={`https://maps.google.com/?q=${shop.address},${shop.city}`}
            variant="white"
            size="md"
            external
          >
            Itinéraire
          </Button>
          <Button
            href={SOCIAL.instagram}
            variant="ghost"
            size="md"
            external
            icon={<Instagram size={11} strokeWidth={1.5} />}
            iconPos="left"
          >
            Instagram
          </Button>
        </div>
      </motion.div>
    </section>
  )
}
