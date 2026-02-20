"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { IMAGES } from "@/lib/constants";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};
const stagger = { show: { transition: { staggerChildren: 0.15 } } };

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "var(--section-y) var(--section-x)",
        background: "var(--gradient-bg)",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "5rem",
        alignItems: "center",
      }}
      className="about-section"
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.p variants={fadeUp} className="section-label">
          Notre Histoire
        </motion.p>
        <motion.h2
          variants={fadeUp}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem,3.8vw,3.2rem)",
            lineHeight: 1.15,
            fontWeight: 900,
            color: "var(--dark-soft)",
          }}
        >
          La Boulangerie
          <br />
          <em style={{ color: "var(--salmon)", fontStyle: "italic" }}>
            Gourmande
          </em>
        </motion.h2>
        <motion.p
          variants={fadeUp}
          style={{
            fontFamily: "var(--font-elegant)",
            fontSize: "1.12rem",
            lineHeight: 1.9,
            color: "var(--text-light)",
            marginTop: "1.3rem",
          }}
        >
          X est une boulangerie artisanale, à l'univers coloré, accueillant et
          chaleureux. Chez nous, la gourmandise passe par les grands classiques
          de la boulangerie et de la pâtisserie françaises, mais aussi par nos
          créations originales autour de nouvelles saveurs et textures.
        </motion.p>
        <motion.p
          variants={fadeUp}
          style={{
            fontFamily: "var(--font-elegant)",
            fontSize: "1.12rem",
            lineHeight: 1.9,
            color: "var(--text-light)",
            marginTop: "0.8rem",
          }}
        >
          Échanger, essayer, goûter… c'est le quotidien de la team ! Créatifs et
          enthousiastes, nous travaillons tous les jours sur l'élaboration de
          nouvelles recettes.
        </motion.p>
        <motion.a
          variants={fadeUp}
          href="#boutiques"
          style={{
            marginTop: "2rem",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            background: "var(--gradient-salmon)",
            color: "white",
            padding: "0.9rem 2rem",
            borderRadius: "50px",
            fontSize: "0.86rem",
            letterSpacing: "0.06em",
            fontWeight: 500,
            boxShadow: "var(--shadow-btn)",
            transition: "var(--transition)",
          }}
          whileHover={{ y: -3, boxShadow: "0 10px 30px rgba(184,79,64,0.48)" }}
        >
          Nos boutiques →
        </motion.a>
      </motion.div>

      {/* Images mosaic */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "0.9rem",
          height: 500,
        }}
      >
        <div
          style={{
            gridRow: "span 2",
            borderRadius: "70px 10px 10px 10px",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Image
            src={IMAGES.interior}
            alt="Intérieur X"
            fill
            style={{ objectFit: "cover" }}
            sizes="300px"
          />
        </div>
        <div
          style={{
            borderRadius: "10px 70px 10px 10px",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Image
            src={IMAGES.pastry1}
            alt="Pâtisseries X"
            fill
            style={{ objectFit: "cover" }}
            sizes="200px"
          />
        </div>
        <div
          style={{
            borderRadius: "10px 10px 70px 10px",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Image
            src={IMAGES.terrace}
            alt="Terrasse X"
            fill
            style={{ objectFit: "cover" }}
            sizes="200px"
          />
        </div>
      </motion.div>

      <style>{`
        @media (max-width:768px) {
          .about-section { grid-template-columns:1fr !important; gap:3rem !important; }
        }
      `}</style>
    </section>
  );
}
