// components/Navbar.tsx
'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS, LOCALES, type Locale } from '@/lib/constants'
import styles from './Navbar.module.scss'

interface NavbarProps {
  locale: Locale
  onLocaleChange: (l: Locale) => void
}

export default function Navbar({ locale, onLocaleChange }: NavbarProps) {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <motion.header
      className={[styles.nav, scrolled ? styles.scrolled : ''].join(' ')}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
    >
      <div className={styles.inner}>

        {/* ── Logo ── */}
        <a href="#" className={styles.logo} aria-label="SAIME — Accueil">
          <span className={styles.logoName}>SAIME</span>
          <small className={styles.logoSub}>BOULANGERIE · PARIS</small>
        </a>

        {/* ── Links desktop ── */}
        <nav className={styles.links} aria-label="Navigation principale">
          <ul>
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className={styles.link}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* ── Droite : lang + burger ── */}
        <div className={styles.right}>
          <div className={styles.lang} role="group" aria-label="Langue">
            {LOCALES.map((l, i) => (
              <span key={l} className={styles.langItem}>
                <button
                  className={[styles.langBtn, locale === l ? styles.langOn : ''].join(' ')}
                  onClick={() => onLocaleChange(l)}
                  aria-pressed={locale === l}
                >
                  {l.toUpperCase()}
                </button>
                {i < LOCALES.length - 1 && (
                  <span className={styles.langSep} aria-hidden>/</span>
                )}
              </span>
            ))}
          </div>

          <button
            className={styles.burger}
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {menuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* ── Menu mobile ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <ul>
              {NAV_LINKS.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ x: -16, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.055 }}
                >
                  <a href={l.href} onClick={() => setMenuOpen(false)}>
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
