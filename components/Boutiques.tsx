'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { BOUTIQUES } from '@/lib/constants'

export default function Boutiques() {
  return (
    <section id="boutiques" style={{ padding:'var(--section-y) var(--section-x)', background:'#fff' }}>
      <motion.p className="section-label" initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }}>Où nous trouver</motion.p>
      <motion.h2 initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6 }}
        style={{ fontFamily:'var(--font-display)', fontSize:'clamp(2rem,3.8vw,3.2rem)', lineHeight:1.15, fontWeight:900, color:'var(--dark-soft)', marginBottom:'3rem' }}>
        Nos deux<br /><em style={{ color:'var(--salmon)', fontStyle:'italic' }}>boutiques</em>
      </motion.h2>

      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'2rem' }} className="boutiques-grid">
        {BOUTIQUES.map((b, i) => (
          <motion.div key={b.id}
            initial={{ opacity:0, y:30 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true, margin:'-60px' }}
            transition={{ delay: i * 0.15, duration:0.65 }}
            whileHover={{ y:-4, boxShadow:'var(--shadow-lg)' }}
            style={{ borderRadius:'var(--radius-lg)', overflow:'hidden', border:'1px solid rgba(224,123,101,0.14)', background:'rgba(255,255,255,0.8)', backdropFilter:'blur(10px)', boxShadow:'var(--shadow-sm)', transition:'var(--transition)' }}>
            {/* Image */}
            <div style={{ height:260, position:'relative', overflow:'hidden' }}>
              <motion.div style={{ position:'absolute', inset:0 }} whileHover={{ scale:1.05 }} transition={{ duration:0.6 }}>
                <Image src={b.image} alt={b.name} fill style={{ objectFit:'cover' }} sizes="600px" />
              </motion.div>
            </div>
            {/* Info */}
            <div style={{ padding:'1.8rem' }}>
              <h3 style={{ fontFamily:'var(--font-display)', fontSize:'1.35rem', fontWeight:700, color:'var(--dark-soft)', marginBottom:'1rem' }}>{b.name}</h3>
              {[
                { icon:<MapPin size={14}/>,   text:b.address },
                { icon:<Clock size={14}/>,    text:b.hours },
                { icon:<Phone size={14}/>,    text:b.phone, href:`tel:${b.phone.replace(/\s/g,'')}` },
                { icon:<Mail size={14}/>,     text:b.email, href:`mailto:${b.email}` },
              ].map(({ icon, text, href }) => (
                <div key={text} style={{ display:'flex', gap:'0.6rem', alignItems:'flex-start', marginBottom:'0.3rem' }}>
                  <span style={{ color:'var(--salmon)', marginTop:'0.15rem', flexShrink:0 }}>{icon}</span>
                  {href
                    ? <a href={href} style={{ color:'var(--text-light)', fontSize:'0.86rem', lineHeight:1.85, transition:'color 0.2s' }}
                         onMouseEnter={e=>(e.currentTarget.style.color='var(--salmon)')}
                         onMouseLeave={e=>(e.currentTarget.style.color='var(--text-light)')}>{text}</a>
                    : <span style={{ color:'var(--text-light)', fontSize:'0.86rem', lineHeight:1.85 }}>{text}</span>
                  }
                </div>
              ))}
              <motion.a href={b.mapsUrl} target="_blank" rel="noopener noreferrer"
                whileHover={{ y:-2, boxShadow:'0 10px 28px rgba(184,79,64,0.42)' }}
                style={{ marginTop:'1.4rem', display:'inline-flex', alignItems:'center', gap:'0.5rem', background:'var(--gradient-salmon)', color:'white', padding:'0.65rem 1.4rem', borderRadius:'50px', fontSize:'0.8rem', fontWeight:500, boxShadow:'var(--shadow-btn)', transition:'var(--transition)' }}>
                <MapPin size={13} /> Voir sur Maps
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        @media (max-width:768px) { .boutiques-grid { grid-template-columns:1fr !important; } }
      `}</style>
    </section>
  )
}
