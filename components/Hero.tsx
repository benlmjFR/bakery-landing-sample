"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { IMAGES } from "@/lib/constants";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section
      ref={ref}
      id="hero"
      style={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        paddingTop: "var(--nav-height)",
      }}
    >
      {/* Parallax background */}
      <motion.div style={{ position: "absolute", inset: 0, y: bgY }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${IMAGES.hero})`,
            backgroundSize: "cover",
            backgroundPosition: "center 30%",
            filter: "brightness(0.55) saturate(0.9)",
          }}
        />
      </motion.div>

      {/* Salmon gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "var(--gradient-hero)",
        }}
      />

      {/* Content */}
      <motion.div
        style={{
          position: "relative",
          zIndex: 2,
          padding: "0 var(--section-x)",
          maxWidth: 860,
          y: textY,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              fontSize: "0.68rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "rgba(255,230,225,0.92)",
              fontWeight: 500,
              border: "1px solid rgba(255,200,190,0.38)",
              padding: "0.42rem 1rem",
              borderRadius: "50px",
              marginBottom: "1.8rem",
              backdropFilter: "blur(10px)",
              background: "rgba(255,255,255,0.1)",
            }}
          >
            ✦ Boulangerie Artisanale · Paris 11ème · République
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3rem,7.5vw,7rem)",
              lineHeight: 1.0,
              color: "#fff",
              fontWeight: 900,
              textShadow: "0 2px 20px rgba(80,20,10,0.35)",
            }}
          >
            X
            <em
              style={{
                fontStyle: "italic",
                color: "rgba(255,225,218,0.95)",
                display: "block",
              }}
            >
              Boulangerie.
            </em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            style={{
              fontFamily: "var(--font-elegant)",
              fontSize: "1.2rem",
              color: "rgba(255,235,230,0.85)",
              margin: "1.5rem 0 2.5rem",
              fontWeight: 300,
              fontStyle: "italic",
              maxWidth: 420,
              lineHeight: 1.75,
              textShadow: "0 1px 8px rgba(80,20,10,0.22)",
            }}
          >
            Une boulangerie à l'univers coloré, accueillant et chaleureux. Des
            créations originales autour de nouvelles saveurs et textures.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.7 }}
            style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
          >
            <a
              href="#menu"
              style={{
                background: "var(--gradient-salmon)",
                color: "white",
                padding: "0.9rem 2rem",
                borderRadius: "50px",
                fontSize: "0.86rem",
                letterSpacing: "0.06em",
                fontWeight: 500,
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                boxShadow: "var(--shadow-btn)",
                transition: "var(--transition)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(-3px)";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 10px 30px rgba(184,79,64,0.48)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "none";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "var(--shadow-btn)";
              }}
            >
              Découvrir la carte →
            </a>
            <a
              href="#boutiques"
              style={{
                background: "rgba(255,255,255,0.15)",
                color: "white",
                padding: "0.9rem 2rem",
                borderRadius: "50px",
                fontSize: "0.86rem",
                letterSpacing: "0.06em",
                fontWeight: 500,
                border: "1.5px solid rgba(255,255,255,0.42)",
                backdropFilter: "blur(10px)",
                transition: "var(--transition)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  "rgba(255,255,255,0.28)";
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  "rgba(255,255,255,0.15)";
                (e.currentTarget as HTMLElement).style.transform = "none";
              }}
            >
              Nous trouver
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        style={{
          position: "absolute",
          bottom: "2.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.4rem",
          color: "rgba(255,225,218,0.5)",
          fontSize: "0.65rem",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
        }}
      >
        <motion.span
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
        >
          Défiler
        </motion.span>
        <span
          style={{
            display: "block",
            width: 1,
            height: 40,
            background:
              "linear-gradient(to bottom,rgba(255,220,210,0.5),transparent)",
          }}
        />
      </motion.div>
    </section>
  );
}
