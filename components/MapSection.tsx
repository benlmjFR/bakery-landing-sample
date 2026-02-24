"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Clock, Mail, Phone, Instagram } from "lucide-react";
import SectionLabel from "./SectionLabel";
import Button from "./Button";
import { BOUTIQUES, SOCIAL, SECTIONS } from "@/lib/constants";
import { useI18n } from "@/lib/i18n";
import styles from "./MapSection.module.scss";

export default function MapSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const { t } = useI18n();
  const shop = BOUTIQUES[0];

  return (
    <section id={SECTIONS.BOUTIQUES} className={styles.section} ref={ref}>
      <div className={styles.mapZone}>
        <iframe
          className={styles.map}
          src={shop.mapEmbedUrl}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          title={`${t(shop.nameKey)} — Google Maps`}
          aria-label={`Carte — ${shop.address}, ${shop.city}`}
        />
        <div className={styles.mapOverlay} aria-hidden />
      </div>

      <motion.div
        id={SECTIONS.CONTACT}
        className={styles.info}
        initial={{ opacity: 0, x: 32 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.85, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
      >
        <div className={styles.infoTop}>
          <SectionLabel
            index="03"
            label={t("boutiques.sectionLabel").replace("03 — ", "")}
            light
          />
          <h2 className={styles.infoTitle}>{t(shop.nameKey)}</h2>
        </div>

        <div className={styles.infoBlocks}>
          <div className={styles.block}>
            <span className={styles.blockLabel}>
              <MapPin size={9} strokeWidth={1.5} aria-hidden />
              {t("boutiques.address")}
            </span>
            <p className={styles.blockValue}>
              {shop.address}
              <br />
              {shop.zip} {shop.city}
            </p>
          </div>
          <div className={styles.block}>
            <span className={styles.blockLabel}>
              <Clock size={9} strokeWidth={1.5} aria-hidden />
              {t("boutiques.hours")}
            </span>
            <p className={styles.blockValue}>
              {t(shop.hoursKey)}
              <br />
              <span className={styles.closed}>{t(shop.closedKey)}</span>
            </p>
          </div>
          <div className={styles.block}>
            <span className={styles.blockLabel}>
              <Mail size={9} strokeWidth={1.5} aria-hidden />
              {t("boutiques.contact")}
            </span>
            <p className={styles.blockValue}>
              <a href={`mailto:${shop.email}`} className={styles.link}>
                {shop.email}
              </a>
              <br />
              <a
                href={`tel:${shop.phone.replace(/\s/g, "")}`}
                className={styles.link}
              >
                <Phone size={9} strokeWidth={1.5} aria-hidden />
                {shop.phone}
              </a>
            </p>
          </div>
        </div>

        <div className={styles.infoCta}>
          <Button
            href={`https://maps.google.com/?q=${shop.address},${shop.city}`}
            variant="white"
            size="md"
            external
          >
            {t("boutiques.itinerary")}
          </Button>
          <Button
            href={SOCIAL.instagram}
            variant="ghost"
            size="md"
            external
            icon={<Instagram size={11} strokeWidth={1.5} />}
            iconPos="left"
          >
            {t("boutiques.instagram")}
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
