import { Instagram } from "lucide-react";
import { SOCIAL, SITE_META } from "@/lib/constants";
import styles from "./Footer.module.scss";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <span className={styles.copy}>
          © {year} {SITE_META.name}
        </span>
        <span className={styles.sep} aria-hidden>
          ·
        </span>
        <span className={styles.made}>Paris 11e</span>
      </div>

      <div className={styles.social}>
        <a
          href={SOCIAL.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
          aria-label="SAIME sur Instagram"
        >
          <Instagram size={13} strokeWidth={1.5} />
        </a>
        <a
          href={SOCIAL.tiktok}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
          aria-label="SAIME sur TikTok"
        >
          {/* Lucide n'a pas d'icône TikTok — on utilise du texte mono */}
          <span className={styles.tiktok}>TT</span>
        </a>
      </div>
    </footer>
  );
}
