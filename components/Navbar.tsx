"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, MapPin, Menu, X, Linkedin } from "lucide-react";
import { IMAGES, SOCIALS } from "@/lib/constants";

const NAV_LINKS = [
  { href: "#about", label: "À propos" },
  { href: "#menu", label: "Notre carte" },
  { href: "#boutiques", label: "Boutiques" },
  { href: "#contact", label: "Contact" },
];

// TikTok icon (not in lucide)
const TikTokIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 1 0 6.33 6.34V8.5a8.24 8.24 0 0 0 4.82 1.55V6.6a4.85 4.85 0 0 1-1.05-.09z" />
  </svg>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const close = () => setMobileOpen(false);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,
          height: "var(--nav-height)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 2.5rem",
          backdropFilter: "blur(24px) saturate(160%)",
          WebkitBackdropFilter: "blur(24px) saturate(160%)",
          background: "var(--glass-nav)",
          borderBottom: "1px solid var(--glass-nav-border)",
          boxShadow: scrolled ? "var(--shadow-md)" : "var(--shadow-sm)",
          transition: "box-shadow 0.3s ease",
        }}
      >
        {/* Logo */}
        <a href="#" aria-label="Accueil X Boulangerie">
          <Image
            src={IMAGES.logo}
            alt="X Boulangerie"
            width={120}
            height={46}
            unoptimized
            style={{ height: 46, width: "auto", objectFit: "contain" }}
            priority
          />
        </a>

        {/* Desktop links */}
        <ul
          style={{
            display: "flex",
            gap: "2rem",
            listStyle: "none",
            alignItems: "center",
          }}
          className="nav-desktop"
        >
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                style={{
                  fontSize: "0.8rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  fontWeight: 500,
                  color: "var(--dark-soft)",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--salmon)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--dark-soft)")
                }
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: social icons + CTA */}
        <div
          style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}
          className="nav-right"
        >
          {[
            {
              href: SOCIALS.instagram,
              icon: <Instagram size={14} />,
              title: "Instagram",
            },
            { href: SOCIALS.tiktok, icon: <TikTokIcon />, title: "TikTok" },
            { href: SOCIALS.maps, icon: <MapPin size={13} />, title: "Maps" },
          ].map(({ href, icon, title }) => (
            <a
              key={title}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              title={title}
              style={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                border: "1px solid rgba(224,123,101,0.3)",
                background: "rgba(255,255,255,0.55)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--text)",
                transition: "var(--transition)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "var(--salmon)";
                (e.currentTarget as HTMLElement).style.color = "var(--salmon)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(224,123,101,0.3)";
                (e.currentTarget as HTMLElement).style.color = "var(--text)";
              }}
            >
              {icon}
            </a>
          ))}
          <a
            href="#contact"
            style={{
              background: "var(--gradient-salmon)",
              color: "white",
              padding: "0.5rem 1.2rem",
              borderRadius: "50px",
              fontSize: "0.78rem",
              letterSpacing: "0.08em",
              fontWeight: 500,
              whiteSpace: "nowrap",
              boxShadow: "var(--shadow-btn)",
              transition: "var(--transition)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.filter =
                "brightness(1.06)";
              (e.currentTarget as HTMLElement).style.transform =
                "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.filter = "none";
              (e.currentTarget as HTMLElement).style.transform = "none";
            }}
          >
            Nous écrire
          </a>
        </div>

        {/* Burger */}
        <button
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Menu"
          style={{
            display: "none",
            background: "none",
            border: "none",
            color: "var(--dark-soft)",
            padding: "4px",
          }}
          className="nav-burger"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            style={{
              position: "fixed",
              top: "var(--nav-height)",
              left: 0,
              right: 0,
              zIndex: 190,
              background: "rgba(255,248,246,0.97)",
              backdropFilter: "blur(20px)",
              borderBottom: "1px solid rgba(224,123,101,0.15)",
              padding: "1.5rem 2rem 2rem",
              boxShadow: "0 8px 30px rgba(176,79,64,0.12)",
              display: "flex",
              flexDirection: "column",
              gap: 0,
            }}
          >
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={close}
                style={{
                  color: "var(--dark-soft)",
                  fontSize: "1rem",
                  fontWeight: 500,
                  padding: "0.9rem 0",
                  borderBottom: "1px solid rgba(224,123,101,0.12)",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                {label} <span>→</span>
              </a>
            ))}
            <div
              style={{ display: "flex", gap: "0.8rem", marginTop: "1.2rem" }}
            >
              {[
                { href: SOCIALS.instagram, icon: <Instagram size={14} /> },
                { href: SOCIALS.tiktok, icon: <TikTokIcon /> },
                { href: SOCIALS.linkedin, icon: <Linkedin size={14} /> },
                { href: SOCIALS.maps, icon: <MapPin size={13} /> },
              ].map(({ href, icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    border: "1px solid rgba(224,123,101,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--text)",
                    flexShrink: 0,
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Responsive styles injected via style tag */}
      <style>{`
        @media (max-width:860px) {
          .nav-desktop { display:none !important; }
          .nav-right   { display:none !important; }
          .nav-burger  { display:flex !important; }
        }
      `}</style>
    </>
  );
}
