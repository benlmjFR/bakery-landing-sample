import type { Translations } from './fr'

const en: Translations = {
  nav: {
    about:     'About us',
    menu:      'Our Menu',
    gallery:   'Gallery',
    boutiques: 'Boutiques',
    contact:   'Contact',
  },

  hero: {
    tag:          'Paris · Artisan · Since 2024',
    title:        'Saime',
    titleItalic:  'Bakery',
    subtitle:     'The art of bread in the heart of Paris.',
    ctaPrimary:   'Our Menu',
    ctaSecondary: 'Our Boutiques',
  },

  products: {
    pains:        { name: 'Breads',              desc: 'Baguette, sourdough, khorasan, spelt…' },
    viennoiseries:{ name: 'Pastries',             desc: 'Croissant, matcha roll, madeleine…', tag: 'Signature' },
    patisseries:  { name: 'Cakes',               desc: 'Entremets, tarts, éclairs, financiers…' },
    snacking:     { name: 'Snacking & Lunch',    desc: 'Quiches, poké bowls, sandwiches, lunch deals…' },
  },

  menu: {
    sectionLabel: '01 — Our Menu',
    sectionTitle: 'Selection',
    ctaOrder:     'Order',
    viewGallery:  'View photos',
  },

  gallery: {
    sectionLabel: '02 — Gallery',
    sectionTitle: 'Our Craft',
    all:          'View all',
    close:        'Close',
    prev:         'Previous',
    next:         'Next',
    noPhotos:     'Photos coming soon',
  },

  boutiques: {
    sectionLabel: '03 — Find Us',
    voltaire: {
      name:   'SAIME Voltaire',
      hours:  '7am — 8pm',
      closed: 'Closed on Mondays',
    },
    address:    'Address',
    hours:      'Opening Hours',
    contact:    'Contact',
    itinerary:  'Get Directions',
    instagram:  'Instagram',
  },

  contact: {
    sectionLabel:    '04 — Contact',
    sectionTitle:    'Get in Touch',
    subtitle:        'A question, a special order? We reply within 24 hours.',
    name:            'Name',
    namePlaceholder: 'Your name',
    email:           'Email',
    emailPlaceholder: 'your@email.com',
    subject:         'Subject',
    subjectPlaceholder: 'Your subject…',
    message:         'Message',
    messagePlaceholder: 'Your message…',
    send:            'Send',
    sending:         'Sending…',
    success:         'Message sent! We will get back to you soon.',
    error:           'Something went wrong. Please retry or email us directly.',
    required:        'Required field',
    emailInvalid:    'Invalid email',
  },

  footer: {
    copy: '© 2024 SAIME Boulangerie',
    made: 'Paris 11e',
  },
}

export default en
