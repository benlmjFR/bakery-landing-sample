'use client'

interface SectionLabelProps {
  children: React.ReactNode
  light?: boolean
  centered?: boolean
}

export default function SectionLabel({ children, light = false, centered = false }: SectionLabelProps) {
  return (
    <div
      style={{
        fontSize: '0.68rem',
        letterSpacing: '0.28em',
        textTransform: 'uppercase',
        color: light ? 'rgba(255,240,236,0.85)' : 'var(--color-salmon)',
        fontWeight: 600,
        marginBottom: '0.9rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: centered ? 'center' : 'flex-start',
        gap: '0.8rem',
      }}
    >
      {children}
      <span
        style={{
          width: 45,
          height: 1,
          background: light
            ? 'linear-gradient(to right, rgba(255,240,236,0.6), transparent)'
            : 'linear-gradient(to right, var(--color-salmon), transparent)',
          flexShrink: 0,
        }}
      />
    </div>
  )
}
