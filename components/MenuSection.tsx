// components/MenuSection.tsx
'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import SectionLabel from './SectionLabel'
import Button from './Button'
import { PRODUCTS, SECTIONS } from '@/lib/constants'
import styles from './MenuSection.module.scss'

export default function MenuSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <section
      id={SECTIONS.MENU}
      className={styles.section}
      ref={ref}
    >
      {/* ── Header ── */}
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 22 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.75, ease: [0.19, 1, 0.22, 1] }}
      >
        <div className={styles.headerLeft}>
          <SectionLabel index="01" label="Notre Carte" />
          <h2 className={styles.title}>Sélection</h2>
        </div>

        <Button
          href={`#${SECTIONS.CONTACT}`}
          variant="ghost"
          size="sm"
          icon={<ArrowRight size={10} strokeWidth={1.5} />}
        >
          Commander
        </Button>
      </motion.div>

      {/* ── Grille produits ── */}
      <div className={styles.grid}>
        {PRODUCTS.map((product, i) => (
          <motion.article
            key={product.id}
            className={[
              styles.card,
              hovered === product.id ? styles.cardHovered : '',
            ].join(' ')}
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.65,
              delay: 0.12 + i * 0.09,
              ease: [0.19, 1, 0.22, 1],
            }}
            onMouseEnter={() => setHovered(product.id)}
            onMouseLeave={() => setHovered(null)}
            aria-label={`${product.name} — ${product.price}`}
          >
            {/* Tag optionnel */}
            {product.tag && (
              <span className={styles.tag}>{product.tag}</span>
            )}

            <span className={styles.icon} aria-hidden>{product.icon}</span>
            <h3 className={styles.name}>{product.name}</h3>
            <p className={styles.desc}>{product.desc}</p>
            <span className={styles.price}>{product.price}</span>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
