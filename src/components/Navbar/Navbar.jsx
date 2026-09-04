import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import styles from './Navbar.module.scss'

function Navbar() {
    const { t, i18n } = useTranslation()
    const [scrolled, setScrolled] = useState(false)

    const links = [
        { label: t('nav.about'),    href: '#about'    },
        { label: t('nav.skills'),   href: '#skills'   },
        { label: t('nav.projects'), href: '#projects' },
        { label: t('nav.contact'),  href: '#contact'  },
    ]

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const toggleLang = () => i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en')

    return (
        <motion.nav
            className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <a href="#" className={styles.navbar__logo}>JP</a>

            <ul className={styles.navbar__links}>
                {links.map((link) => (
                    <li key={link.href}>
                        <a href={link.href} className={styles.navbar__link}>{link.label}</a>
                    </li>
                ))}
            </ul>

            <button className={styles.navbar__lang} onClick={toggleLang}>
                {i18n.language === 'en' ? '🇪🇸 ES' : '🇬🇧 EN'}
            </button>
        </motion.nav>
    )
}

export default Navbar
