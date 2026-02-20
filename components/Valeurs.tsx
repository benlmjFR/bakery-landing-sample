'use client'
import { motion } from 'framer-motion'
import { VALEURS } from '@/lib/constants'

export default function Valeurs() {
  return (
    <section style={{ padding:'var(--section-y) var(--section-x)', background:'linear-gradient(155deg,var(--salmon-pale) 0%,var(--blush) 55%,#FFF0ED 100%)', textAlign:'center' }}>
      <motion.p className="section-label" style={{ justifyContent:'center' }} initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }}>Notre ADN</motion.p>
      <motion.h2 initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6 }}
        style={{ fontFamily:'var(--font-display)', fontSize:'clamp(2rem,3.8vw,3.2rem)', lineHeight:1.15, fontWeight:900, color:'var(--dark-soft)', marginBottom:'3rem' }}>
        Ce qui nous définit
      </motion.h2>

      <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'1.4rem', maxWidth:820, margin:'0 auto' }} className="valeurs-grid">
        {VALEURS.map((v, i) => (
          <motion.div key={v.word}
            initial={{ opacity:0, y:20 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true, margin:'-50px' }}
            transition={{ delay: i * 0.08, duration:0.55 }}
            whileHover={{ y:-4, boxShadow:'0 12px 35px rgba(184,79,64,0.12)' }}
            style={{ padding:'1.8rem 1.4rem', background:'rgba(255,255,255,0.55)', border:'1px solid rgba(255,255,255,0.78)', backdropFilter:'blur(16px)', WebkitBackdropFilter:'blur(16px)', borderRadius:'var(--radius-md)', transition:'var(--transition)' }}>
            <p style={{ fontSize:'0.63rem', letterSpacing:'0.28em', textTransform:'uppercase', color:'var(--salmon)', fontWeight:700, marginBottom:'0.35rem' }}>{v.label}</p>
            <p style={{ fontFamily:'var(--font-display)', fontSize:'1.8rem', fontWeight:900, color:'var(--dark-soft)', fontStyle:'italic' }}>{v.word}</p>
          </motion.div>
        ))}
      </div>

      <style>{`
        @media (max-width:600px) { .valeurs-grid { grid-template-columns:1fr 1fr !important; } }
        @media (max-width:400px) { .valeurs-grid { grid-template-columns:1fr !important; } }
      `}</style>
    </section>
  )
}
