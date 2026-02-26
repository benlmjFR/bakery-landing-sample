export const SECTIONS = {  
  ABOUT:     'about',
  WORDING:   'wording',
  MENU:      'menu',
  GALLERY:   'gallery',
  BOUTIQUES: 'boutiques',
  CONTACT:   'contact',
} as const

export type SectionId = (typeof SECTIONS)[keyof typeof SECTIONS]

// TODO Modifiez avec votre email réel
export const CONTACT_EMAIL = 'saimeparis@gmail.com'

export const NAV_LINK_KEYS = [
  { key: 'nav.about',     href: '#about' },
  { key: 'nav.menu',      href: '#menu' },
  { key: 'nav.gallery',   href: '#gallery' },
  { key: 'nav.boutiques', href: '#boutiques' },
  { key: 'nav.contact',   href: '#contact' },
] as const

export const WORDING_ITEMS = [
  'Pain au Levain', 'Croissant au Beurre', 'Matcha Roll',
  'Baguette Parisienne', 'Entremet Saison', 'Madeleine Nature',
  'Chou à la Crème', 'Kouign-Amann', 'Tarte aux Fruits', 'Pain Khorasan',
] as const

export interface GalleryPhoto {
  src:   string
  alt:   string
  wide?: boolean
}

export interface Product {
  id:      string
  icon:    string
  nameKey: string
  descKey: string
  price:   string
  tagKey?: string
  photos:  GalleryPhoto[]
}

export const PRODUCTS: Product[] = [
  {
    id: 'pains', icon: '🥖',
    nameKey: 'products.pains.name', descKey: 'products.pains.desc',
    price: 'Dès 1,00 €',
    photos: [
      { src: '/gallery/pains/01.jpg', alt: 'Pain au levain SAIME', wide: true },
      { src: '/gallery/pains/02.jpg', alt: 'Baguette Parisienne' },
      { src: '/gallery/pains/03.jpg', alt: 'Pain Khorasan' },
      { src: '/gallery/pains/04.jpg', alt: 'Pain de campagne' },
    ],
  },
  {
    id: 'viennoiseries', icon: '🥐',
    nameKey: 'products.viennoiseries.name', descKey: 'products.viennoiseries.desc',
    price: 'Dès 1,50 €', tagKey: 'products.viennoiseries.tag',
    photos: [
      { src: '/gallery/viennoiseries/01.jpg', alt: 'Croissant au beurre', wide: true },
      { src: '/gallery/viennoiseries/02.jpg', alt: 'Matcha Roll' },
      { src: '/gallery/viennoiseries/03.jpg', alt: 'Madeleine Nature' },
      { src: '/gallery/viennoiseries/04.jpg', alt: 'Chou à la Crème' },
    ],
  },
  {
    id: 'patisseries', icon: '🍰',
    nameKey: 'products.patisseries.name', descKey: 'products.patisseries.desc',
    price: 'Dès 4,50 €',
    photos: [
      { src: '/gallery/patisseries/01.jpg', alt: 'Entremet Saison', wide: true },
      { src: '/gallery/patisseries/02.jpg', alt: 'Tarte aux fruits' },
      { src: '/gallery/patisseries/03.jpg', alt: 'Éclair' },
      { src: '/gallery/patisseries/04.jpg', alt: 'Financier' },
    ],
  },
  {
    id: 'snacking', icon: '🥗',
    nameKey: 'products.snacking.name', descKey: 'products.snacking.desc',
    price: 'Dès 5,50 €',
    photos: [
      { src: '/gallery/snacking/01.jpg', alt: 'Poké Bowl', wide: true },
      { src: '/gallery/snacking/02.jpg', alt: 'Quiche Lorraine' },
      { src: '/gallery/snacking/03.jpg', alt: 'Sandwich artisan' },
      { src: '/gallery/snacking/04.jpg', alt: 'Formule déjeuner' },
    ],
  },
]

export interface Boutique {
  id: string; nameKey: string; address: string; city: string; zip: string
  hoursKey: string; closedKey: string; phone: string; email: string
  lat: number; lng: number; mapEmbedUrl: string
}

export const BOUTIQUES: Boutique[] = [
  {
    id: 'voltaire', nameKey: 'boutiques.voltaire.name',
    address: '195 Boulevard Voltaire', city: 'Paris', zip: '75011',
    hoursKey: 'boutiques.voltaire.hours', closedKey: 'boutiques.voltaire.closed',
    phone: '01 45 30 61 92', email: 'saime@gmail.com',
    lat: 48.8535, lng: 2.3804,
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.0!2d2.3804!3d48.8535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f15!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2s195+Bd+Voltaire%2C+75011+Paris!5e0!3m2!1sfr!2sfr!4v1',
  },
]

export const SOCIAL = {
  instagram: 'https://www.instagram.com/',
  linkedin : "https://www.linkedin.com/",
  tiktok: 'https://www.tiktok.com/',
} as const



export const SITE_META = {
  name: 'SAIME Boulangerie',
  tagline: "L'art du pain au cœur de Paris.",
  description: 'Boulangerie artisanale — Pain, viennoiseries, pâtisseries et snacking. 195 Boulevard Voltaire, Paris 11e.',
  url: 'https://saime-boulangerie.fr',
  locale: 'fr_FR',
} as const

export const LOCALES        = ['fr', 'en'] as const
export type  Locale         = (typeof LOCALES)[number]
export const DEFAULT_LOCALE: Locale = 'fr'


// ── EmailJS — configuration (sans serveur) ───────────────────
// 1. Créez un compte sur https://www.emailjs.com (gratuit, 200/mois)
// 2. Ajoutez un "Email Service" (Gmail, Outlook…)
// 3. Créez un "Email Template" avec les variables :
//      {{from_name}}  {{from_email}}  {{subject}}  {{message}}
// 4. Remplacez les valeurs ci-dessous par vos vrais IDs
export const EMAILJS = {
  SERVICE_ID:  'service_5t1wyqi',   // ← Email Services > Service ID
  TEMPLATE_ID: 'template_khecez8',  // ← Email Templates > Template ID
  PUBLIC_KEY:  '-qLF5iKh8_n75oF3z',      // ← Account > Public Key
} as const




