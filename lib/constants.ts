// ─── IMAGES (Wix CDN) ─────────────────────────────────────────────────────────
export const IMAGES = {
  logo: "https://static.wixstatic.com/media/e12494_2a357b02367647ed8e92bab0c9548f59~mv2.gif",
  hero: "https://static.wixstatic.com/media/e12494_851606ee2a0547c9941c43f3caeaaa7c~mv2.jpg",
  interior:
    "https://static.wixstatic.com/media/e12494_78dcedc07c954bcc8ebc12a51be43d34~mv2.jpg",
  terrace:
    "https://static.wixstatic.com/media/e12494_8d18fc636ad84da6a72f964a7c3ea2e4~mv2.jpg",
  pastry1:
    "https://static.wixstatic.com/media/e12494_bf3402504e294b0596805cb599c5396a~mv2.jpg",
  pastry2:
    "https://static.wixstatic.com/media/e12494_9bad584da12c4348a4efa97ff26f6aa0~mv2.jpg",
  viennois:
    "https://static.wixstatic.com/media/e12494_6d1c9dca39474123b280eb3e594ef38d~mv2.jpg",
  cookie:
    "https://static.wixstatic.com/media/e12494_0619a15527004d1da9984a0281684bab~mv2.jpg",
} as const;

export const GALLERY_IMAGES = [
  IMAGES.hero,
  IMAGES.interior,
  IMAGES.pastry2,
  IMAGES.terrace,
  IMAGES.viennois,
  IMAGES.cookie,
  IMAGES.pastry1,
];

// ─── BOUTIQUES ────────────────────────────────────────────────────────────────
export const BOUTIQUES = [
  {
    id: "voltaire",
    name: "X Voltaire",
    address: "195 Boulevard Voltaire, 75011 Paris",
    hours: "7h – 20h · Tous les jours sauf lundi",
    phone: "01 45 30 61 92",
    email: "boulangerie@gmail.com",
    mapsUrl: "https://maps.google.com/?cid=8298735263620160785",
    image: IMAGES.interior,
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.1!2d2.3736!3d48.8559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e175ed02acd%3A0x733073ce76ca3111!2s195%20Bd%20Voltaire%2C%2075011%20Paris!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr",
  },
  {
    id: "republique",
    name: "X République",
    address: "23 Boulevard Voltaire, 75011 Paris",
    hours: "7h – 20h · Tous les jours sauf mercredi",
    phone: "01 40 31 69 63",
    email: "boulangerie@gmail.com",
    mapsUrl:
      "https://www.google.com/maps/search/23+Boulevard+Voltaire+75011+Paris",
    image: IMAGES.terrace,
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.8!2d2.3648!3d48.8637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fc6344b0001%3A0x1!2s23%20Bd%20Voltaire%2C%2075011%20Paris!5e0!3m2!1sfr!2sfr!4v1700000000001!5m2!1sfr!2sfr",
  },
] as const;

// ─── MENU ITEMS ───────────────────────────────────────────────────────────────
export const MENU_ITEMS = [
  {
    icon: "🍞",
    title: "Pains",
    desc: "Baguette parisienne, pain au levain, Khorasan, pains de spécialité travaillés avec passion chaque matin.",
    price: "Dès 1€ · jusqu'à 15€/kg",
  },
  {
    icon: "🥐",
    title: "Viennoiseries",
    desc: "Croissant au beurre, Matcha Roll, Madeleine, Chou à la crème… classiques et créations originales.",
    price: "Dès 1€ · jusqu'à 3,90€",
  },
  {
    icon: "🍰",
    title: "Pâtisseries",
    desc: "Pâtisseries individuelles et entremets sur commande pour 4, 6 ou 8 personnes.",
    price: "4,50€ – 7€ · Entremets dès 28€",
  },
  {
    icon: "☕",
    title: "Snacking & Café",
    desc: "Quiches maison, Poké Bowl, formules déjeuner. Café de spécialité pour chaque pause.",
    price: "Formules dès 10,90€",
  },
] as const;

// ─── VALEURS ──────────────────────────────────────────────────────────────────
export const VALEURS = [
  { label: "Délice", word: "Rare" },
  { label: "Ambition", word: "Créatif" },
  { label: "Ensemble", word: "Partage" },
  { label: "Qualité", word: "Précieux" },
  { label: "Tradition", word: "Gourmandise" },
  { label: "Toujours", word: "Excellent" },
] as const;

// ─── SOCIAL LINKS ─────────────────────────────────────────────────────────────
export const SOCIALS = {
  instagram: "https://www.instagram.com/boulangerie_paris/",
  tiktok: "https://www.tiktok.com/@alice.lapatisserie",
  linkedin: "https://www.linkedin.com/company/p%C3%A9pite-boulangerie/",
  maps: "https://maps.google.com/?cid=8298735263620160785",
} as const;

// ─── SEO ──────────────────────────────────────────────────────────────────────
export const SEO = {
  title: "X Boulangerie – Boulangerie Pâtisserie Paris 11 République",
  description:
    "X, boulangerie artisanale dans le 11ème arrondissement de Paris (République). Pains, viennoiseries, pâtisseries créatives. Ouvert 7j/7. Boulevard Voltaire.",
  keywords:
    "boulangerie paris 11, pâtisserie république paris, boulangerie artisanale 11ème, pain viennoiserie patisserie paris,  boulangerie voltaire, boulangerie boulevard voltaire",
  url: "https://boulangerie.com",
  ogImage: IMAGES.hero,
} as const;
