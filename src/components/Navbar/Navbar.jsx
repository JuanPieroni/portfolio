import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import styles from './Navbar.module.scss'

const links = [
    { label: 'About',    href: '#about'    },
    { label: 'Skills',   href: '#skills'   },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact',  href: '#contact'  },
]

function Navbar() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

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
                        <a href={link.href} className={styles.navbar__link}>
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
        </motion.nav>
    )
}

export default Navbar
