"use client";
import { motion } from "framer-motion";
import { BOUTIQUES } from "@/lib/constants";

export default function MapSection() {
  const b = BOUTIQUES[0];
  return (
    <div style={{ position: "relative", height: "clamp(300px,45vw,440px)" }}>
      <iframe
        src={b.mapEmbed}
        style={{ width: "100%", height: "100%", border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`Carte ${b.name}`}
      />
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        style={{
          position: "absolute",
          top: "2.5rem",
          left: "4rem",
          background: "rgba(255,250,249,0.92)",
          backdropFilter: "blur(22px)",
          WebkitBackdropFilter: "blur(22px)",
          border: "1px solid rgba(255,255,255,0.8)",
          borderRadius: "var(--radius-lg)",
          padding: "1.5rem 1.8rem",
          maxWidth: 240,
          boxShadow: "var(--shadow-md)",
        }}
        className="map-pin"
      >
        <h4
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.05rem",
            color: "var(--dark-soft)",
            marginBottom: "0.7rem",
            fontWeight: 700,
          }}
        >
          {b.name}
        </h4>
        <p
          style={{
            fontSize: "0.82rem",
            color: "var(--text-light)",
            lineHeight: 1.75,
          }}
        >
          {b.address}
          <br />
          7h – 20h · sf. lundi
        </p>
        <span
          style={{
            display: "inline-block",
            marginTop: "0.9rem",
            background: "var(--gradient-salmon)",
            color: "white",
            fontSize: "0.7rem",
            letterSpacing: "0.08em",
            padding: "0.35rem 0.9rem",
            borderRadius: "50px",
            fontWeight: 600,
          }}
        >
          Ouvert aujourd&apos;hui
        </span>
      </motion.div>

      <style>{`
        @media (max-width:600px) {
          .map-pin { left:1rem !important; top:1rem !important; right:1rem !important; max-width:none !important; }
        }
      `}</style>
    </div>
  );
}
