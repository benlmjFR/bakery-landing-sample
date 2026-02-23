// lib/i18n/index.tsx
'use client'

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from 'react'
import fr, { type Translations } from './fr'
import en from './en'
import { LOCALES, DEFAULT_LOCALE, type Locale } from '@/lib/constants'

// ── Map des traductions ───────────────────────────────────────
const TRANSLATIONS: Record<Locale, Translations> = { fr, en }

// ── Accès par chemin pointé "a.b.c" ──────────────────────────
// Permet de faire t('contact.send') → string
function get(obj: Record<string, unknown>, path: string): string {
  return path.split('.').reduce<unknown>((acc, key) => {
    if (acc && typeof acc === 'object') return (acc as Record<string, unknown>)[key]
    return ''
  }, obj) as string
}

// ── Context ───────────────────────────────────────────────────
interface I18nContext {
  locale:          Locale
  setLocale:       (l: Locale) => void
  t:               (key: string) => string
  translations:    Translations
}

const Ctx = createContext<I18nContext | null>(null)

// ── Provider ──────────────────────────────────────────────────
export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE)

  const setLocale = useCallback((l: Locale) => {
    if (LOCALES.includes(l)) setLocaleState(l)
  }, [])

  const translations = TRANSLATIONS[locale]

  const t = useCallback(
    (key: string) => get(translations as unknown as Record<string, unknown>, key) || key,
    [translations]
  )

  return (
    <Ctx.Provider value={{ locale, setLocale, t, translations }}>
      {children}
    </Ctx.Provider>
  )
}

// ── Hook ──────────────────────────────────────────────────────
export function useI18n() {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useI18n must be used inside <I18nProvider>')
  return ctx
}

// Export du type pour usage externe
export type { Translations }
