"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import SectionLabel from "./SectionLabel";
import { useI18n } from "@/lib/i18n";
import { PRODUCTS, SECTIONS, type GalleryPhoto } from "@/lib/constants";
import styles from "./ProductGallery.module.scss";

// ── Types ────────────────────────────────────────────────────
interface LightboxState {
  productId: string;
  index: number;
}

export default function ProductGallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useI18n();
  const [activeId, setActiveId] = useState<string>(PRODUCTS[0].id);
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);

  // Produit actif
  const activeProduct = PRODUCTS.find((p) => p.id === activeId) ?? PRODUCTS[0];
  const photos = activeProduct.photos;

  // ── Lightbox keyboard nav ─────────────────────────────────
  const closeLightbox = useCallback(() => setLightbox(null), []);

  const lightboxNext = useCallback(() => {
    if (!lightbox) return;
    setLightbox({ ...lightbox, index: (lightbox.index + 1) % photos.length });
  }, [lightbox, photos.length]);

  const lightboxPrev = useCallback(() => {
    if (!lightbox) return;
    setLightbox({
      ...lightbox,
      index: (lightbox.index - 1 + photos.length) % photos.length,
    });
  }, [lightbox, photos.length]);

  useEffect(() => {
    if (!lightbox) return;
    const fn = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") lightboxNext();
      if (e.key === "ArrowLeft") lightboxPrev();
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [lightbox, closeLightbox, lightboxNext, lightboxPrev]);

  // Ferme lightbox si on change de catégorie
  const handleCategoryClick = (id: string) => {
    setActiveId(id);
    setLightbox(null);
  };

  return (
    <section id={SECTIONS.GALLERY} className={styles.section} ref={sectionRef}>
      {/* ── Header ── */}
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <SectionLabel
            index="02"
            label={t("gallery.sectionLabel").replace("02 — ", "")}
          />
          <h2 className={styles.title}>{t("gallery.sectionTitle")}</h2>
        </div>

        {/* ── Filtres catégories ── */}
        <nav className={styles.filters} aria-label="Filtrer par catégorie">
          {PRODUCTS.map((p) => (
            <button
              key={p.id}
              className={[
                styles.filter,
                activeId === p.id ? styles.filterActive : "",
              ].join(" ")}
              onClick={() => handleCategoryClick(p.id)}
              aria-pressed={activeId === p.id}
            >
              <span className={styles.filterIcon} aria-hidden>
                {p.icon}
              </span>
              <span>{t(p.nameKey)}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* ── Grille photos ── */}
      <div className={styles.gridWrapper}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            className={styles.grid}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {photos.length === 0 ? (
              <p className={styles.empty}>{t("gallery.noPhotos")}</p>
            ) : (
              photos.map((photo, i) => (
                <motion.button
                  key={`${activeId}-${i}`}
                  className={[
                    styles.photoBtn,
                    photo.wide ? styles.photoBtnWide : "",
                  ].join(" ")}
                  onClick={() => setLightbox({ productId: activeId, index: i })}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  aria-label={photo.alt}
                >
                  <PhotoItem photo={photo} />
                </motion.button>
              ))
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className={styles.lightbox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28 }}
            onClick={closeLightbox}
            role="dialog"
            aria-modal
            aria-label="Agrandissement photo"
          >
            {/* Image */}
            <motion.div
              className={styles.lightboxImgWrap}
              initial={{ scale: 0.93 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.93 }}
              transition={{ duration: 0.3, ease: [0.19, 1, 0.22, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <PhotoItem photo={photos[lightbox.index]} priority fill />

              {/* Counter */}
              <span className={styles.lightboxCount}>
                {lightbox.index + 1} / {photos.length}
              </span>
            </motion.div>

            {/* Contrôles */}
            <button
              className={styles.lightboxClose}
              onClick={closeLightbox}
              aria-label={t("gallery.close")}
            >
              <X size={18} strokeWidth={1.5} />
            </button>

            {photos.length > 1 && (
              <>
                <button
                  className={`${styles.lightboxNav} ${styles.lightboxPrev}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    lightboxPrev();
                  }}
                  aria-label={t("gallery.prev")}
                >
                  <ChevronLeft size={22} strokeWidth={1.2} />
                </button>
                <button
                  className={`${styles.lightboxNav} ${styles.lightboxNext}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    lightboxNext();
                  }}
                  aria-label={t("gallery.next")}
                >
                  <ChevronRight size={22} strokeWidth={1.2} />
                </button>
              </>
            )}

            {/* Caption */}
            <p className={styles.lightboxCaption}>
              {photos[lightbox.index].alt}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

// ── Sous-composant image avec fallback placeholder ────────────
interface PhotoItemProps {
  photo: GalleryPhoto;
  priority?: boolean;
  fill?: boolean;
}

function PhotoItem({ photo, priority = false, fill = false }: PhotoItemProps) {
  const [error, setError] = useState(false);

  if (error || !photo.src) {
    return (
      <div className={styles.photoPlaceholder}>
        <span className={styles.photoPlaceholderIcon} aria-hidden>
          🖼
        </span>
        <span className={styles.photoPlaceholderText}>{photo.alt}</span>
      </div>
    );
  }

  return (
    <Image
      src={photo.src}
      alt={photo.alt}
      fill={fill || true}
      sizes="(max-width: 768px) 50vw, 25vw"
      priority={priority}
      style={{ objectFit: "cover" }}
      onError={() => setError(true)}
    />
  );
}
