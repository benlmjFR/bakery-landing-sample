const fr = {
  nav: {
    about:     'A propos de nous',
    menu:      'Notre Carte',
    gallery:   'Galerie',
    boutiques: 'Boutiques',
    contact:   'Contact',
  },

  hero: {
    tag:           'Paris · Artisan · Depuis 2024',
    title:         'Saime',
    titleItalic:   'Boulangerie',
    subtitle:      "L'art du pain au cœur de Paris.",
    ctaPrimary:    'Notre Carte',
    ctaSecondary:  'Nos Boutiques',
  },

  products: {
    pains:        { name: 'Pains',                desc: 'Baguette, levain, khorasan, épeautre…' },
    viennoiseries:{ name: 'Viennoiseries',        desc: 'Croissant, matcha roll, madeleine…', tag: 'Signature' },
    patisseries:  { name: 'Pâtisseries',          desc: 'Entremets, tartes, éclairs, financiers…' },
    snacking:     { name: 'Snacking & Déjeuner',  desc: 'Quiches, pokés, sandwiches, formules midi…' },
  },

  menu: {
    sectionLabel:  '01 — Notre Carte',
    sectionTitle:  'Sélection',
    ctaOrder:      'Commander',
    viewGallery:   'Voir les photos',
  },

  gallery: {
    sectionLabel: '02 — Galerie',
    sectionTitle: 'Notre Travail',
    all:          'Tout voir',
    close:        'Fermer',
    prev:         'Précédent',
    next:         'Suivant',
    noPhotos:     'Photos à venir',
  },

  boutiques: {
    sectionLabel: '03 — Nous trouver',
    voltaire: {
      name:   'SAIME Voltaire',
      hours:  '7h00 — 20h00',
      closed: 'Fermé le lundi',
    },
    address:    'Adresse',
    hours:      'Horaires',
    contact:    'Contact',
    itinerary:  'Itinéraire',
    instagram:  'Instagram',
  },

  contact: {
    sectionLabel:  '04 — Contact',
    sectionTitle:  'Écrivez-nous',
    subtitle:      'Une question, une commande spéciale ? On vous répond dans les 24h.',
    name:          'Nom',
    namePlaceholder: 'Votre nom',
    email:         'Email',
    emailPlaceholder: 'votre@email.com',
    subject:       'Sujet',
    subjectPlaceholder: 'Votre sujet…',
    message:       'Message',
    messagePlaceholder: 'Votre message…',
    send:          'Envoyer',
    sending:       'Envoi en cours…',
    success:       'Message envoyé ! On vous recontacte bientôt.',
    newMessage:    'Nouveau message',
    error:         "Une erreur est survenue. Réessayez ou écrivez-nous directement.",
    required:      'Message trop court',
    emailInvalid:  'Email invalide',
  },

  footer: {
    copy: '© 2024 SAIME Boulangerie',
    made: 'Paris 11e',
  },
}

export default fr
export type Translations = typeof fr
