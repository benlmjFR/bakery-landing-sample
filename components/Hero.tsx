// components/Hero.tsx
'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Button from './Button'
import { SECTIONS } from '@/lib/constants'
import styles from './Hero.module.scss'

// ── Variantes animation ──────────────────────────────────────
const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 26 },
  animate:    { opacity: 1, y: 0 },
  transition: { duration: 0.85, delay, ease: [0.19, 1, 0.22, 1] },
})

const scaleIn = {
  initial:    { opacity: 0, scale: 1.05 },
  animate:    { opacity: 1, scale: 1 },
  transition: { duration: 1.1, delay: 0.1, ease: [0.19, 1, 0.22, 1] },
}

export default function Hero() {
  return (
    <section
      id={SECTIONS.HERO}
      className={styles.hero}
      aria-label="Accueil SAIME Boulangerie"
    >
      {/* ── LEFT ── */}
      <div className={styles.left}>
        <motion.p className={styles.tag} {...fadeUp(0.12)}>
          Paris · Artisan · Depuis&nbsp;2024
        </motion.p>

        <motion.h1 className={styles.title} {...fadeUp(0.24)}>
          Saime
          <em>Boulangerie</em>
        </motion.h1>

        <motion.p className={styles.subtitle} {...fadeUp(0.38)}>
          L'art du pain au cœur de Paris.
        </motion.p>

        <motion.div className={styles.cta} {...fadeUp(0.5)}>
          <Button href={`#${SECTIONS.MENU}`} variant="black" size="md">
            Notre Carte
          </Button>
          <Button
            href={`#${SECTIONS.BOUTIQUES}`}
            variant="ghost"
            size="md"
            icon={<ArrowRight size={11} strokeWidth={1.5} />}
            iconPos="right"
          >
            Nos Boutiques
          </Button>
        </motion.div>
      </div>

      {/* ── RIGHT — photo ── */}
      <motion.div className={styles.right} {...scaleIn}>
        {/*
          Remplacez ce bloc par votre photo une fois disponible :
          <Image
            src="/images/hero.jpg"
            alt="Pain artisanal SAIME"
            fill priority
            sizes="50vw"
            style={{ objectFit: 'cover' }}
          />
        */}
        <div className={styles.placeholder}>
          <span className={styles.placeholderFrame} aria-hidden />
          <span className={styles.placeholderEmoji} aria-hidden>🍞</span>
          <span className={styles.placeholderText}>Photo produit hero</span>
        </div>
      </motion.div>
    </section>
  )
}
