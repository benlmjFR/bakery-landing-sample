'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import { Send, MapPin, Mail, Phone } from 'lucide-react'

const schema = z.object({
  prenom:    z.string().min(2, 'Prénom requis'),
  nom:       z.string().min(2, 'Nom requis'),
  email:     z.string().email('Email invalide'),
  telephone: z.string().optional(),
  objet:     z.string().optional(),
  message:   z.string().min(10, 'Message trop court (min 10 caractères)'),
})
type FormData = z.infer<typeof schema>

const INFO = [
  { icon:<MapPin size={14}/>,  text:'195 & 23 Boulevard Voltaire, 75011 Paris' },
  { icon:<Mail size={14}/>,    text:'pepiteboulangerie@gmail.com', href:'mailto:pepiteboulangerie@gmail.com' },
  { icon:<Phone size={14}/>,   text:'01 45 30 61 92', href:'tel:0145306192' },
]

export default function Contact() {
  const [sent, setSent]   = useState(false)
  const [error, setError] = useState('')

  const { register, handleSubmit, reset, formState:{ errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormData) => {
    setError('')
    try {
      const res = await fetch('/api/contact', { method:'POST', headers:{ 'Content-Type':'application/json' }, body:JSON.stringify(data) })
      if (!res.ok) throw new Error()
      setSent(true)
      reset()
      setTimeout(() => setSent(false), 5000)
    } catch {
      setError('Erreur lors de l\'envoi. Veuillez réessayer.')
    }
  }

  const inputStyle: React.CSSProperties = {
    background:'rgba(255,255,255,0.58)', border:'1px solid rgba(255,255,255,0.7)',
    borderRadius:'var(--radius-sm)', padding:'0.85rem 1.05rem',
    color:'var(--dark-soft)', fontFamily:'var(--font-body)',
    fontSize:'0.86rem', outline:'none', width:'100%', transition:'var(--transition)',
  }

  return (
    <section id="contact" style={{ padding:'var(--section-y) var(--section-x)', background:'var(--gradient-contact)', display:'grid', gridTemplateColumns:'1fr 1fr', gap:'5rem', alignItems:'center', position:'relative', overflow:'hidden' }}
      className="contact-section">
      {/* Decorative circle */}
      <div style={{ position:'absolute', bottom:-220, right:-220, width:560, height:560, borderRadius:'50%', background:'radial-gradient(circle,rgba(255,255,255,0.14) 0%,transparent 68%)', pointerEvents:'none' }} />

      {/* Left */}
      <motion.div initial={{ opacity:0, x:-30 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.7 }}>
        <p className="section-label section-label--light">Nous écrire</p>
        <h2 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(2rem,3.8vw,3.2rem)', lineHeight:1.15, fontWeight:900, color:'#fff' }}>
          Une question,<br /><em style={{ color:'rgba(255,240,236,0.72)', fontStyle:'italic' }}>un projet ?</em>
        </h2>
        <p style={{ color:'rgba(255,240,236,0.78)', marginTop:'1.1rem', lineHeight:1.85, fontSize:'0.95rem' }}>
          Commandes spéciales, entremets sur mesure, partenariats… notre équipe vous répond avec plaisir.
        </p>
        <div style={{ marginTop:'1.8rem', display:'flex', flexDirection:'column', gap:'0.7rem' }}>
          {INFO.map(({ icon, text, href }) => (
            <div key={text} style={{ display:'flex', alignItems:'center', gap:'0.7rem', color:'rgba(255,240,236,0.82)', fontSize:'0.88rem' }}>
              <span style={{ color:'rgba(255,240,236,0.7)', flexShrink:0 }}>{icon}</span>
              {href ? <a href={href} style={{ transition:'color 0.2s' }}
                onMouseEnter={e=>(e.currentTarget.style.color='#fff')}
                onMouseLeave={e=>(e.currentTarget.style.color='rgba(255,240,236,0.82)')}>{text}</a> : <span>{text}</span>}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Glass form card */}
      <motion.div
        initial={{ opacity:0, x:30 }}
        whileInView={{ opacity:1, x:0 }}
        viewport={{ once:true }}
        transition={{ duration:0.7, delay:0.15 }}
        style={{ background:'var(--glass-form)', border:'1px solid var(--glass-form-border)', backdropFilter:'blur(30px)', WebkitBackdropFilter:'blur(30px)', borderRadius:'var(--radius-lg)', padding:'2.4rem', boxShadow:'0 18px 55px rgba(0,0,0,0.1)' }}>

        <form onSubmit={handleSubmit(onSubmit)} style={{ display:'flex', flexDirection:'column', gap:'0.9rem' }}>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'0.9rem' }} className="form-row">
            <div>
              <input {...register('prenom')} placeholder="Prénom *" style={inputStyle} />
              {errors.prenom && <p style={{ color:'rgba(255,200,190,0.9)', fontSize:'0.75rem', marginTop:'0.25rem' }}>{errors.prenom.message}</p>}
            </div>
            <div>
              <input {...register('nom')} placeholder="Nom *" style={inputStyle} />
              {errors.nom && <p style={{ color:'rgba(255,200,190,0.9)', fontSize:'0.75rem', marginTop:'0.25rem' }}>{errors.nom.message}</p>}
            </div>
          </div>
          <div>
            <input {...register('email')} type="email" placeholder="Email *" style={inputStyle} />
            {errors.email && <p style={{ color:'rgba(255,200,190,0.9)', fontSize:'0.75rem', marginTop:'0.25rem' }}>{errors.email.message}</p>}
          </div>
          <input {...register('telephone')} type="tel" placeholder="Téléphone" style={inputStyle} />
          <input {...register('objet')} placeholder="Objet" style={inputStyle} />
          <div>
            <textarea {...register('message')} placeholder="Votre message…" rows={4} style={{ ...inputStyle, resize:'none', height:110 }} />
            {errors.message && <p style={{ color:'rgba(255,200,190,0.9)', fontSize:'0.75rem', marginTop:'0.25rem' }}>{errors.message.message}</p>}
          </div>

          <motion.button type="submit" disabled={isSubmitting}
            whileHover={{ y:-2, boxShadow:'0 8px 22px rgba(0,0,0,0.3)' }}
            style={{ background:'linear-gradient(135deg,var(--dark-soft),var(--dark))', color:'white', border:'none', padding:'0.9rem 2rem', borderRadius:'50px', fontSize:'0.86rem', fontWeight:500, letterSpacing:'0.05em', alignSelf:'flex-start', boxShadow:'0 4px 14px rgba(0,0,0,0.22)', transition:'var(--transition)', display:'flex', alignItems:'center', gap:'0.5rem', opacity:isSubmitting ? 0.7 : 1 }}>
            <Send size={14} />
            {isSubmitting ? 'Envoi…' : 'Envoyer le message'}
          </motion.button>

          {sent  && <p style={{ color:'rgba(255,242,238,0.95)', fontSize:'0.86rem' }}>✅ Message envoyé ! Nous vous répondrons rapidement.</p>}
          {error && <p style={{ color:'rgba(255,200,190,0.9)', fontSize:'0.86rem' }}>{error}</p>}
        </form>
      </motion.div>

      <style>{`
        .contact-section { grid-template-columns:1fr 1fr; }
        @media (max-width:860px) { .contact-section { grid-template-columns:1fr !important; gap:3rem !important; } }
        @media (max-width:480px) { .form-row { grid-template-columns:1fr !important; } }
      `}</style>
    </section>
  )
}
