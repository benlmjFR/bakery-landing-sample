// components/ContactSection.tsx
'use client'

import { useRef, useState, type FormEvent, type ChangeEvent } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import SectionLabel from './SectionLabel'
import Button from './Button'
import { useI18n } from '@/lib/i18n'
import { SECTIONS, CONTACT_EMAIL } from '@/lib/constants'
import styles from './ContactSection.module.scss'

// ── Types ────────────────────────────────────────────────────
interface FormState {
  name:    string
  email:   string
  subject: string
  message: string
}

interface FormErrors {
  name?:    string
  email?:   string
  subject?: string
  message?: string
}

type Status = 'idle' | 'sending' | 'success' | 'error'

const INITIAL_FORM: FormState = { name: '', email: '', subject: '', message: '' }

// ── Composant ────────────────────────────────────────────────
export default function ContactSection() {
  const ref    = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const { t }  = useI18n()

  const [form,   setForm]   = useState<FormState>(INITIAL_FORM)
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<Status>('idle')

  // ── Validation ────────────────────────────────────────────
  function validate(f: FormState): FormErrors {
    const e: FormErrors = {}
    if (!f.name.trim() || f.name.trim().length < 2)
      e.name = t('contact.required')
    if (!f.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email))
      e.email = t('contact.emailInvalid')
    if (!f.subject.trim() || f.subject.trim().length < 2)
      e.subject = t('contact.required')
    if (!f.message.trim() || f.message.trim().length < 10)
      e.message = t('contact.required')
    return e
  }

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    // Efface l'erreur dès que l'utilisateur commence à corriger
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  // ── Submit ────────────────────────────────────────────────
  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const errs = validate(form)
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }

    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Server error')
      setStatus('success')
      setForm(INITIAL_FORM)
    } catch {
      setStatus('error')
    }
  }

  const isSending = status === 'sending'

  return (
    <section id={SECTIONS.CONTACT} className={styles.section} ref={ref}>

      {/* ── LEFT — texte ── */}
      <motion.div
        className={styles.left}
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.75, ease: [0.19, 1, 0.22, 1] }}
      >
        <SectionLabel index="04" label={t('contact.sectionLabel').replace('04 — ', '')} />
        <h2 className={styles.title}>{t('contact.sectionTitle')}</h2>
        <p className={styles.subtitle}>{t('contact.subtitle')}</p>

        <div className={styles.directContact}>
          <a href={`mailto:${CONTACT_EMAIL}`} className={styles.emailLink}>
            {CONTACT_EMAIL}
          </a>
        </div>
      </motion.div>

      {/* ── RIGHT — formulaire ── */}
      <motion.div
        className={styles.right}
        initial={{ opacity: 0, y: 28 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.75, delay: 0.15, ease: [0.19, 1, 0.22, 1] }}
      >
        <AnimatePresence mode="wait">

          {/* Succès */}
          {status === 'success' && (
            <motion.div
              key="success"
              className={styles.feedback}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <CheckCircle size={28} strokeWidth={1.2} className={styles.feedbackIcon} />
              <p>{t('contact.success')}</p>
              <button
                className={styles.resetBtn}
                onClick={() => setStatus('idle')}
              >
                Nouveau message
              </button>
            </motion.div>
          )}

          {/* Erreur serveur */}
          {status === 'error' && (
            <motion.div
              key="error"
              className={`${styles.feedback} ${styles.feedbackError}`}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
            >
              <AlertCircle size={28} strokeWidth={1.2} className={styles.feedbackIcon} />
              <p>{t('contact.error')}</p>
              <a href={`mailto:${CONTACT_EMAIL}`} className={styles.resetBtn}>
                {CONTACT_EMAIL}
              </a>
              <button className={styles.resetBtn} onClick={() => setStatus('idle')}>
                Réessayer
              </button>
            </motion.div>
          )}

          {/* Formulaire */}
          {(status === 'idle' || status === 'sending') && (
            <motion.form
              key="form"
              className={styles.form}
              onSubmit={handleSubmit}
              noValidate
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Rangée nom + email */}
              <div className={styles.row}>
                <Field
                  label={t('contact.name')}
                  name="name"
                  type="text"
                  placeholder={t('contact.namePlaceholder')}
                  value={form.name}
                  error={errors.name}
                  onChange={handleChange}
                  disabled={isSending}
                />
                <Field
                  label={t('contact.email')}
                  name="email"
                  type="email"
                  placeholder={t('contact.emailPlaceholder')}
                  value={form.email}
                  error={errors.email}
                  onChange={handleChange}
                  disabled={isSending}
                />
              </div>

              {/* Sujet */}
              <Field
                label={t('contact.subject')}
                name="subject"
                type="text"
                placeholder={t('contact.subjectPlaceholder')}
                value={form.subject}
                error={errors.subject}
                onChange={handleChange}
                disabled={isSending}
              />

              {/* Message */}
              <Field
                label={t('contact.message')}
                name="message"
                type="textarea"
                placeholder={t('contact.messagePlaceholder')}
                value={form.message}
                error={errors.message}
                onChange={handleChange}
                disabled={isSending}
              />

              <div className={styles.formFooter}>
                <Button
                  variant="black"
                  size="md"
                  disabled={isSending}
                  icon={<Send size={11} strokeWidth={1.5} />}
                  iconPos="right"
                >
                  {isSending ? t('contact.sending') : t('contact.send')}
                </Button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </motion.div>

    </section>
  )
}

// ── Sous-composant Field ─────────────────────────────────────
interface FieldProps {
  label:       string
  name:        string
  type:        'text' | 'email' | 'textarea'
  placeholder: string
  value:       string
  error?:      string
  onChange:    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  disabled?:   boolean
}

function Field({ label, name, type, placeholder, value, error, onChange, disabled }: FieldProps) {
  const inputCls = [styles.input, error ? styles.inputError : ''].filter(Boolean).join(' ')

  return (
    <div className={styles.field}>
      <label className={styles.label} htmlFor={name}>{label}</label>
      {type === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          className={`${inputCls} ${styles.textarea}`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          rows={5}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          className={inputCls}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          autoComplete={name === 'email' ? 'email' : 'off'}
        />
      )}
      <AnimatePresence>
        {error && (
          <motion.p
            className={styles.errorMsg}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2 }}
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}
