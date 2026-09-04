import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import styles from './Footer.module.scss'

const socials = [
    { label: 'GitHub',   href: 'https://github.com/tu-usuario' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/tu-usuario' },
    { label: 'Twitter',  href: 'https://twitter.com/tu-usuario' },
]

function Footer() {
    const { t } = useTranslation()

    return (
        <footer className={styles.footer}>
            <div className={styles.footer__divider} />
            <div className={styles.footer__content}>
                <motion.a href="#" className={styles.footer__logo} whileHover={{ scale: 1.05 }}>JP</motion.a>

                <ul className={styles.footer__socials}>
                    {socials.map((s) => (
                        <li key={s.label}>
                            <motion.a href={s.href} className={styles.footer__socialLink} target="_blank" rel="noreferrer" whileHover={{ y: -3 }}>
                                {s.label}
                            </motion.a>
                        </li>
                    ))}
                </ul>

                <p className={styles.footer__copy}>
                    © {new Date().getFullYear()} Juan Pieroni — {t('footer.copy')}
                </p>
            </div>
        </footer>
    )
}

export default Footer
