// components/MenuSection.tsx
'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Images } from 'lucide-react'
import SectionLabel from './SectionLabel'
import Button from './Button'
import { PRODUCTS, SECTIONS } from '@/lib/constants'
import { useI18n } from '@/lib/i18n'
import styles from './MenuSection.module.scss'

interface MenuSectionProps {
  /** Callback appelé quand on clique "Voir les photos" — active le filtre dans la galerie */
  onGalleryFilter?: (productId: string) => void
}

export default function MenuSection({ onGalleryFilter }: MenuSectionProps) {
  const ref    = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const { t }  = useI18n()
  const [hovered, setHovered] = useState<string | null>(null)

  const handleViewGallery = (productId: string) => {
    onGalleryFilter?.(productId)
    // Scroll vers la galerie
    document.getElementById(SECTIONS.GALLERY)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id={SECTIONS.MENU} className={styles.section} ref={ref}>

      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 22 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.75, ease: [0.19, 1, 0.22, 1] }}
      >
        <div className={styles.headerLeft}>
          <SectionLabel index="01" label={t('menu.sectionLabel').replace('01 — ', '')} />
          <h2 className={styles.title}>{t('menu.sectionTitle')}</h2>
        </div>
        <Button href={`#${SECTIONS.CONTACT}`} variant="ghost" size="sm"
          icon={<ArrowRight size={10} strokeWidth={1.5} />}>
          {t('menu.ctaOrder')}
        </Button>
      </motion.div>

      <div className={styles.grid}>
        {PRODUCTS.map((product, i) => {
          const isHovered = hovered === product.id
          return (
            <motion.article
              key={product.id}
              className={[styles.card, isHovered ? styles.cardHovered : ''].join(' ')}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.12 + i * 0.09, ease: [0.19, 1, 0.22, 1] }}
              onMouseEnter={() => setHovered(product.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {product.tagKey && (
                <span className={styles.tag}>{t(product.tagKey)}</span>
              )}
              <span className={styles.icon} aria-hidden>{product.icon}</span>
              <h3 className={styles.name}>{t(product.nameKey)}</h3>
              <p className={styles.desc}>{t(product.descKey)}</p>
              <div className={styles.cardFooter}>
                <span className={styles.price}>{product.price}</span>
                <button
                  className={styles.galleryBtn}
                  onClick={() => handleViewGallery(product.id)}
                  aria-label={`Voir les photos de ${t(product.nameKey)}`}
                >
                  <Images size={11} strokeWidth={1.5} />
                  <span>{t('menu.viewGallery')}</span>
                </button>
              </div>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
