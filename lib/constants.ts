// lib/constants.ts
// ─────────────────────────────────────────────────────────────
// SAIME Boulangerie — constantes globales
// ─────────────────────────────────────────────────────────────

// ── IDs des sections (ancres) ────────────────────────────────
export const SECTIONS = {
  HERO:      'hero',
  WORDING:   'wording',
  MENU:      'menu',
  GALLERY:   'gallery',
  ABOUT:     'about',
  BOUTIQUES: 'boutiques',
  CONTACT:   'contact',
} as const

export type SectionId = (typeof SECTIONS)[keyof typeof SECTIONS]

// ── Navigation ───────────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'Notre Carte', href: `#${SECTIONS.MENU}` },
  { label: 'À Propos',    href: `#${SECTIONS.ABOUT}` },
  { label: 'Boutiques',   href: `#${SECTIONS.BOUTIQUES}` },
  { label: 'Contact',     href: `#${SECTIONS.CONTACT}` },
] as const

// ── Ticker — mots qui défilent ───────────────────────────────
export const WORDING_ITEMS = [
  'Pain au Levain',
  'Croissant au Beurre',
  'Matcha Roll',
  'Baguette Parisienne',
  'Entremet Saison',
  'Madeleine Nature',
  'Chou à la Crème',
  'Kouign-Amann',
  'Tarte aux Fruits',
  'Pain Khorasan',
] as const

// ── Sélection Produits ───────────────────────────────────────
export interface Product {
  id:    string
  icon:  string
  name:  string
  desc:  string
  price: string
  tag?:  string          // ex: "Nouveauté", "Signature"
}

export const PRODUCTS: Product[] = [
  {
    id:    'pains',
    icon:  '🥖',
    name:  'Pains',
    desc:  'Baguette, levain, khorasan, épeautre…',
    price: 'Dès 1,00 €',
  },
  {
    id:    'viennoiseries',
    icon:  '🥐',
    name:  'Viennoiseries',
    desc:  'Croissant, matcha roll, madeleine, chou crème…',
    price: 'Dès 1,50 €',
    tag:   'Signature',
  },
  {
    id:    'patisseries',
    icon:  '🍰',
    name:  'Pâtisseries',
    desc:  'Entremets, tartes, éclairs, financiers…',
    price: 'Dès 4,50 €',
  },
  {
    id:    'snacking',
    icon:  '🥗',
    name:  'Snacking & Déjeuner',
    desc:  'Quiches, pokés, sandwiches, formules midi…',
    price: 'Dès 5,50 €',
  },
]

// ── Boutiques / Adresses ─────────────────────────────────────
export interface Boutique {
  id:          string
  name:        string
  address:     string
  city:        string
  zip:         string
  hours:       string
  closedDay:   string
  phone:       string
  email:       string
  lat:         number
  lng:         number
  mapEmbedUrl: string
}

export const BOUTIQUES: Boutique[] = [
  {
    id:        'voltaire',
    name:      'SAIME Voltaire',
    address:   '195 Boulevard Voltaire',
    city:      'Paris',
    zip:       '75011',
    hours:     '7h00 — 20h00',
    closedDay: 'Fermé le lundi',
    phone:     '01 45 30 61 92',
    email:     'saime@gmail.com',
    lat:       48.8535,
    lng:       2.3804,
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.0!2d2.3804!3d48.8535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f15!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2s195+Bd+Voltaire%2C+75011+Paris!5e0!3m2!1sfr!2sfr!4v1',
  },
]

// ── Réseaux sociaux ───────────────────────────────────────────
export const SOCIAL = {
  instagram: 'https://www.instagram.com/',
  tiktok:    'https://www.tiktok.com/',
} as const

// ── Meta / SEO ───────────────────────────────────────────────
export const SITE_META = {
  name:        'SAIME Boulangerie',
  tagline:     'L\'art du pain au cœur de Paris.',
  description: 'Boulangerie artisanale — Pain, viennoiseries, pâtisseries et snacking. 195 Boulevard Voltaire, Paris 11e.',
  url:         'https://saime-boulangerie.fr',
  locale:      'fr_FR',
} as const

// ── Locales disponibles ──────────────────────────────────────
export const LOCALES = ['fr', 'en'] as const
export type Locale   = (typeof LOCALES)[number]
export const DEFAULT_LOCALE: Locale = 'fr'
