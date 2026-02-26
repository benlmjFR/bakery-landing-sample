"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Clock, Mail, Phone, Instagram } from "lucide-react";
import SectionLabel from "./SectionLabel";
import Button from "./Button";
import styles from "./MapSection.module.scss";
import { LocationData } from "@/types/types";
import { SECTIONS } from "@/lib/constants";
import { useI18n } from "@/lib/i18n";

type MapSectionProps = {
  id: string;
  location: LocationData;
  reverse?: boolean;
};

export default function MapSection({
  id,
  location,
  reverse = false,
}: MapSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const { t } = useI18n();

  return (
    <section
      id={SECTIONS.BOUTIQUES}
      ref={ref}
      className={`${styles.section} ${reverse ? styles.reverse : ""}`}
    >
      {/* ── MAP ── */}
      <div className={styles.mapZone}>
        <iframe
          className={styles.map}
          src={location.mapEmbedUrl}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          title={`${location.name} — Localisation`}
        />
        <div className={styles.mapOverlay} aria-hidden />
      </div>

      {/* ── INFOS ── */}
      <div className={styles.infoWrapper}>
        <motion.div
          className={styles.info}
          initial={{ opacity: 0, x: reverse ? -32 : 32 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.85, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
        >
          <div className={styles.infoTop}>
            <SectionLabel
              index="03"
              label={t("boutiques.sectionLabel")}
              light
            />
            <h2 className={styles.infoTitle}>{location.name}</h2>
          </div>

          <div className={styles.infoBlocks}>
            <div className={styles.block}>
              <span className={styles.blockLabel}>
                <MapPin size={9} />
                {t("boutiques.address")}
              </span>
              <p className={styles.blockValue}>
                {location.address}
                <br />
                {location.zip} {location.city}
              </p>
            </div>

            <div className={styles.block}>
              <span className={styles.blockLabel}>
                <Clock size={9} />
                {t("boutiques.hours")}
              </span>
              <p className={styles.blockValue}>
                {location.hours}
                <br />
                <span className={styles.closed}>{location.closedDay}</span>
              </p>
            </div>

            <div className={styles.block}>
              <span className={styles.blockLabel}>
                <Mail size={9} />
                {t("boutiques.contact")}
              </span>
              <p className={styles.blockValue}>
                <a href={`mailto:${location.email}`} className={styles.link}>
                  {location.email}
                </a>
                <br />
                <a
                  href={`tel:${location.phone.replace(/\s/g, "")}`}
                  className={styles.link}
                >
                  <Phone size={9} />
                  {location.phone}
                </a>
              </p>
            </div>
          </div>

          <div className={styles.infoCta}>
            <Button
              href={`https://maps.google.com/?q=${location.address},${location.city}`}
              variant="white"
              size="md"
              external
            >
              Itinéraire
            </Button>
            <Button
              href="https://instagram.com"
              variant="ghost"
              size="md"
              external
              icon={<Instagram size={11} />}
            >
              Instagram
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
