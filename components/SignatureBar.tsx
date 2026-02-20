'use client'

import { motion } from 'framer-motion'
import { SIGNATURE_ITEMS } from '@/lib/constants'

export default function SignatureBar() {
  return (
    <div
      style={{
        background:
          'linear-gradient(90deg, var(--color-salmon-dark) 0%, var(--color-salmon) 55%, var(--color-salmon-light) 100%)',
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'center',
        gap: '3rem',
        overflowX: 'auto',
        flexWrap: 'nowrap',
      }}
    >
      {SIGNATURE_ITEMS.map((item, i) => (
        <motion.div
          key={item}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.07 }}
          style={{
            color: 'rgba(255,245,243,0.88)',
            fontSize: '0.7rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontWeight: 500,
          }}
        >
          <span style={{ color: 'rgba(255,245,243,0.55)', fontSize: '0.52rem' }}>✦</span>
          {item}
        </motion.div>
      ))}
    </div>
  )
}
