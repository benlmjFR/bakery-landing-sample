// components/SigBar.tsx
// Bande de mots qui défilent en continu (Ticker/Marquee)
// Utilisé entre le Hero et la section Menu

import { WORDING_ITEMS } from "@/lib/constants";
import styles from "./SigBar.module.scss";

interface SigBarProps {
  /** Vitesse de défilement en secondes (durée d'un cycle complet) */
  speed?: number;
  /** Inverser le sens */
  reverse?: boolean;
}

export default function SigBar({ speed = 22, reverse = false }: SigBarProps) {
  // Triple le tableau pour garantir le seamless loop
  const items = [...WORDING_ITEMS, ...WORDING_ITEMS, ...WORDING_ITEMS];

  return (
    <div className={styles.bar} aria-hidden="true" role="presentation">
      <div
        className={[styles.track, reverse ? styles.reverse : ""].join(" ")}
        style={{ animationDuration: `${speed}s` }}
      >
        {items.map((word, i) => (
          <span key={i} className={styles.item}>
            <span className={styles.word}>{word}</span>
            <span className={styles.dot} aria-hidden>
              ·
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
