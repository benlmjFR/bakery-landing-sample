"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "./Button";
import { SECTIONS } from "@/lib/constants";
import { useI18n } from "@/lib/i18n";
import styles from "./Hero.module.scss";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 26 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.85, delay, ease: [0.19, 1, 0.22, 1] },
});

const scaleIn = {
  initial: { opacity: 0, scale: 1.05 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 1.1, delay: 0.1, ease: [0.19, 1, 0.22, 1] },
};

export default function Hero() {
  const { t } = useI18n();

  return (
    <section
      id={SECTIONS.ABOUT}
      className={styles.hero}
      aria-label="Accueil SAIME Boulangerie"
    >
      <div className={styles.left}>
        <motion.p className={styles.tag} {...fadeUp(0.12)}>
          {t("hero.tag")}
        </motion.p>
        <motion.h1 className={styles.title} {...fadeUp(0.24)}>
          {t("hero.title")}
          <em>{t("hero.titleItalic")}</em>
        </motion.h1>
        <motion.p className={styles.subtitle} {...fadeUp(0.38)}>
          {t("hero.subtitle")}
        </motion.p>
        <motion.div className={styles.cta} {...fadeUp(0.5)}>
          <Button href={`#${SECTIONS.MENU}`} variant="black" size="md">
            {t("hero.ctaPrimary")}
          </Button>
          <Button
            href={`#${SECTIONS.BOUTIQUES}`}
            variant="ghost"
            size="md"
            icon={<ArrowRight size={11} strokeWidth={1.5} />}
            iconPos="right"
          >
            {t("hero.ctaSecondary")}
          </Button>
        </motion.div>
      </div>

      <motion.div className={styles.right} {...scaleIn}>
        <div className={styles.placeholder}>
          <span className={styles.placeholderFrame} aria-hidden />

          <span className={styles.placeholderText}>
            <br />​ Chez nous, la gourmandise passe par les grands classiques de
            la boulangerie et de la pâtisserie françaises, mais aussi par nos
            créations originales autour de nouvelles saveurs et textures.
            <br />
            <br />​
            <br />​ Echanger, essayer, goûter... c’est le quotidien de la team !
            Créatifs et enthousiastes, nous travaillons tous les jours sur
            l&apos;élaboration de nouvelles recettes pour le plus grand bonheur
            de vos papilles.
          </span>
        </div>
      </motion.div>
    </section>
  );
}
