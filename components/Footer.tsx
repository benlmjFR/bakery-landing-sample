"use client";
import Image from "next/image";
import { Instagram, Linkedin, MapPin } from "lucide-react";
import { IMAGES, SOCIALS } from "@/lib/constants";

const TikTokIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 1 0 6.33 6.34V8.5a8.24 8.24 0 0 0 4.82 1.55V6.6a4.85 4.85 0 0 1-1.05-.09z" />
  </svg>
);

const socialLinks = [
  {
    href: SOCIALS.instagram,
    icon: <Instagram size={13} />,
    label: "Instagram",
  },
  { href: SOCIALS.tiktok, icon: <TikTokIcon />, label: "TikTok" },
  { href: SOCIALS.linkedin, icon: <Linkedin size={13} />, label: "LinkedIn" },
  { href: SOCIALS.maps, icon: <MapPin size={12} />, label: "Maps" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--dark)",
        padding: "2.2rem var(--section-x)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "1.2rem",
        color: "rgba(255,240,236,0.45)",
      }}
    >
      <Image
        src={IMAGES.logo}
        alt="X"
        width={100}
        height={38}
        unoptimized
        style={{
          height: 38,
          width: "auto",
          objectFit: "contain",
          filter: "brightness(0) invert(1) opacity(0.78)",
        }}
      />
      <p style={{ fontSize: "0.76rem" }}>
        © {new Date().getFullYear()} X Boulangerie · Boulangerie artisanale
        Paris 11ème
      </p>
      <div style={{ display: "flex", gap: "0.7rem" }}>
        {socialLinks.map(({ href, icon, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            style={{
              width: 33,
              height: 33,
              borderRadius: "50%",
              border: "1px solid rgba(224,123,101,0.22)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "rgba(255,240,236,0.45)",
              transition: "var(--transition)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor =
                "var(--salmon)";
              (e.currentTarget as HTMLElement).style.color = "var(--salmon)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor =
                "rgba(224,123,101,0.22)";
              (e.currentTarget as HTMLElement).style.color =
                "rgba(255,240,236,0.45)";
            }}
          >
            {icon}
          </a>
        ))}
      </div>
    </footer>
  );
}
