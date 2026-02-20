'use client'

import { motion } from 'framer-motion'
import SectionLabel from './SectionLabel'
import { MENU_ITEMS } from '@/lib/constants'

export default function Menu() {
  return (
    <section
      id="menu"
      style={{
        padding: 'var(--section-padding-y) var(--section-padding-x)',
        background: 'var(--gradient-dark)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative glow */}
      <div
        style={{
          position: 'absolute', top: -200, right: -200,
          width: 550, height: 550, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(224,123,101,0.13) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7 }}
      >
        <SectionLabel light>Notre Carte</SectionLabel>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 3.8vw, 3.2rem)',
            lineHeight: 1.15,
            fontWeight: 900,
            color: '#fff',
          }}
        >
          Des saveurs pour
          <br />
          <em style={{ color: 'var(--color-salmon-light)', fontStyle: 'italic' }}>
            tous les plaisirs
          </em>
        </h2>
      </motion.div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1.4rem',
          marginTop: '3rem',
        }}
        className="menu-grid"
      >
        {MENU_ITEMS.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            whileHover={{
              y: -6,
              borderColor: 'rgba(224,123,101,0.38)',
              boxShadow: '0 18px 40px rgba(0,0,0,0.28)',
            }}
            style={{
              background: 'var(--glass-dark)',
              border: '1px solid var(--glass-dark-border)',
              borderRadius: 'var(--radius-md)',
              padding: '1.8rem',
              cursor: 'default',
              transition: 'border-color var(--transition-base)',
            }}
          >
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{item.icon}</div>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.2rem',
                fontWeight: 700,
                color: '#fff',
                marginBottom: '0.7rem',
              }}
            >
              {item.title}
            </h3>
            <p
              style={{
                color: 'rgba(255,235,230,0.52)',
                fontSize: '0.85rem',
                lineHeight: 1.75,
              }}
            >
              {item.description}
            </p>
            <div
              style={{
                marginTop: '1.2rem',
                color: 'var(--color-salmon-light)',
                fontSize: '0.78rem',
                fontWeight: 600,
              }}
            >
              {item.price}
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        @media (max-width: 860px) { .menu-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 480px) { .menu-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
