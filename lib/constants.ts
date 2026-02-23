// lib/constants.ts
// ─────────────────────────────────────────────────────────────
// SAIME Boulangerie — constantes globales
// ─────────────────────────────────────────────────────────────

import { LocationData } from "@/app/types/types"

// ── IDs des sections (ancres) ────────────────────────────────
export const SECTIONS = {
  MENU:      'menu',
  ABOUT:     'about',
  BOUTIQUES: 'boutiques',
  CONTACT:   'contact',
} as const

export type SectionId = (typeof SECTIONS)[keyof typeof SECTIONS]

// ── Navigation ───────────────────────────────────────────────
export const NAV_LINKS = [
 
  { label: 'À Propos',    href: `#${SECTIONS.ABOUT}` }, 
  { label: 'Notre Carte', href: `#${SECTIONS.MENU}` },
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

export const SAIME_VOLTAIRE: LocationData = {
  name: 'Saime Voltaire',
  image: 'saime_022.jpg',
  address: '195 Boulevard Voltaire',
  zip: '75011',
  city: 'Paris',
  hours: 'Ouvert de 7h à 20h',
  closedDay: 'Tous les jours sauf le lundi',
  email: 'saimeboulangerie@gmail.com',
  phone: '01 45 30 61 92',
  mapEmbedUrl:
    'https://www.google.com/maps?q=195+Boulevard+Voltaire,+75011+Paris&output=embed',
}

export const SAIME_REPUBLIQUE: LocationData = {
  name: 'Saime République',
  image: 'saime2-JohannaAlam-terrasse 1.jpg',
  address: '23 Boulevard Voltaire',
  zip: '75011',
  city: 'Paris',
  hours: 'Ouvert de 7h à 20h',
  closedDay: 'Tous les jours sauf le mercredi',
  email: 'saimeeober@gmail.com',
  phone: '01 40 31 69 63',
  mapEmbedUrl:
    'https://www.google.com/maps?q=23+Boulevard+Voltaire,+75011+Paris&output=embed',
}
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
