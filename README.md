# 🥐 X Boulangerie — Landing Page Next.js

Stack : **Next.js 14 · React 18 · TypeScript · Framer Motion · Lucide · CSS Variables**

---

## 📁 Structure du projet

```
boulangerie-app/
├── app/
│   ├── layout.tsx          ← Metadata SEO + JSON-LD Local Business
│   ├── page.tsx            ← Assemblage des sections
│   └── api/
│       └── contact/
│           └── route.ts    ← API Route envoi email (Nodemailer)
├── components/
│   ├── Navbar.tsx          ← Nav fixe glass + burger mobile
│   ├── Hero.tsx            ← Parallax Framer Motion
│   ├── SigBar.tsx          ← Barre signature dégradée
│   ├── About.tsx           ← Section histoire + mosaïque images
│   ├── MenuSection.tsx     ← Carte avec cards hover
│   ├── Gallery.tsx         ← Strip défilante infinie
│   ├── Valeurs.tsx         ← Cards glass ADN
│   ├── Boutiques.tsx       ← 2 boutiques avec infos
│   ├── MapSection.tsx      ← Google Maps embed + overlay glass
│   ├── Contact.tsx         ← Formulaire validé (Zod + react-hook-form)
│   └── Footer.tsx          ← Footer avec réseaux sociaux
├── lib/
│   └── constants.ts        ← Toutes les données (images, boutiques, menu…)
├── styles/
│   └── globals.css         ← CSS Variables + reset + utilitaires
├── .env.local.example      ← Config email à copier
├── .gitignore
├── next.config.ts
├── tsconfig.json
└── package.json
```

---

## 🚀 Créer le repo et lancer le projet

### 1. Initialiser le repo Git

```bash
git init boulangerie-app
cd boulangerie-app
```

### 2. Copier tous les fichiers dans le dossier, puis :

```bash
npm install
```

### 3. Configurer l'email (formulaire de contact)

```bash
cp .env.local.example .env.local
```

Éditez `.env.local` :

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=votre.email@gmail.com
SMTP_PASS=xxxx xxxx xxxx xxxx   # Mot de passe d'application Gmail
CONTACT_TO=boulangerie@gmail.com
```

> **Gmail** : Activez la validation en 2 étapes puis allez dans
> Compte Google → Sécurité → **Mots de passe des applications**
> pour générer un mot de passe dédié.

### 4. Lancer en développement

```bash
npm run dev
# → http://localhost:3000
```

### 5. Build production

```bash
npm run build
npm run start
```

---

## 🌐 Déployer sur Vercel (recommandé)

```bash
npm i -g vercel
vercel
```

Dans le dashboard Vercel, ajoutez les variables d'environnement :

- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `CONTACT_TO`

---

## 🎨 Personnaliser les couleurs

Toutes les couleurs sont dans `styles/globals.css` :

```css
:root {
  --salmon:      #E07B65;   /* Couleur principale */
  --salmon-dark: #B84F40;   /* Boutons, accents foncés */
  --salmon-light:#F2A490;   /* Textes clairs sur fond sombre */
  --salmon-pale: #FCDDD7;   /* Fonds très clairs */
  --blush:       #FDE8E3;   /* Sections claires */
  ...
}
```

## 📦 Mettre à jour le contenu

Tout est centralisé dans `lib/constants.ts` :

- `IMAGES` → URLs des photos
- `BOUTIQUES` → Adresses, horaires, contacts
- `MENU_ITEMS` → Carte et prix
- `VALEURS` → Mots clés de l'ADN
- `SEO` → Titre, description, mots-clés Google

---

## 📱 Responsive

| Breakpoint | Comportement                     |
| ---------- | -------------------------------- |
| > 860px    | Nav complète avec liens + icônes |
| ≤ 860px    | Burger menu + drawer mobile      |
| ≤ 768px    | Sections en 1 colonne            |
| ≤ 480px    | Formulaire en 1 colonne          |
