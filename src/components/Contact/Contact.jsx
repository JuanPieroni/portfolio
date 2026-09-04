import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import emailjs from '@emailjs/browser'
import styles from './Contact.module.scss'

const EMAILJS_SERVICE  = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE = 'YOUR_TEMPLATE_ID'
const EMAILJS_KEY      = 'YOUR_PUBLIC_KEY'

const fadeUp = {
    hidden:  { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

function Contact() {
    const { t } = useTranslation()
    const formRef = useRef(null)
    const [status, setStatus] = useState('idle')

    const onSubmit = async (e) => {
        e.preventDefault()
        setStatus('sending')
        try {
            await emailjs.sendForm(EMAILJS_SERVICE, EMAILJS_TEMPLATE, formRef.current, EMAILJS_KEY)
            setStatus('success')
            formRef.current.reset()
        } catch {
            setStatus('error')
        }
    }

    return (
        <section id="contact" className={styles.contact}>
            <motion.p className={styles.contact__label} initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fadeUp}>
                {t('contact.label')}
            </motion.p>
            <motion.h2 className={styles.contact__title} initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fadeUp}>
                {t('contact.title')}
            </motion.h2>
            <motion.p className={styles.contact__subtitle} initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fadeUp}>
                {t('contact.subtitle')}
            </motion.p>

            <motion.form ref={formRef} className={styles.contact__form} onSubmit={onSubmit} initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fadeUp}>
                <div className={styles.contact__row}>
                    <input name="user_name"  type="text"  placeholder={t('contact.name')}    required className={styles.contact__input} />
                    <input name="user_email" type="email" placeholder={t('contact.email')}   required className={styles.contact__input} />
                </div>
                <input     name="subject"    type="text"  placeholder={t('contact.subject')} required className={styles.contact__input} />
                <textarea  name="message"                 placeholder={t('contact.message')} required className={styles.contact__textarea} rows={5} />

                <button type="submit" className={styles.contact__btn} disabled={status === 'sending'}>
                    {status === 'sending' ? t('contact.sending') : t('contact.send')}
                </button>

                {status === 'success' && <p className={styles.contact__success}>{t('contact.success')}</p>}
                {status === 'error'   && <p className={styles.contact__error}>{t('contact.error')}</p>}
            </motion.form>
        </section>
    )
}

export default Contact
