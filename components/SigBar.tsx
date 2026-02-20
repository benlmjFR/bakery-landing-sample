'use client'
import { motion } from 'framer-motion'

const ITEMS = ['Boulangerie Artisanale','Pâtisserie Créative','Café de Spécialité','Pain au Levain','Snacking Maison','Ouvert 7j/7']

export default function SigBar() {
  return (
    <motion.div
      initial={{ opacity:0 }}
      whileInView={{ opacity:1 }}
      viewport={{ once:true }}
      style={{ background:'var(--gradient-bar)', padding:'1rem 2rem', display:'flex', justifyContent:'center', gap:'3rem', overflowX:'auto', flexWrap:'nowrap' }}>
      {ITEMS.map(item => (
        <span key={item} style={{ color:'rgba(255,245,243,0.88)', fontSize:'0.7rem', letterSpacing:'0.18em', textTransform:'uppercase', whiteSpace:'nowrap', display:'flex', alignItems:'center', gap:'0.5rem', fontWeight:500 }}>
          <span style={{ color:'rgba(255,245,243,0.55)', fontSize:'0.52rem' }}>✦</span>
          {item}
        </span>
      ))}
    </motion.div>
  )
}
