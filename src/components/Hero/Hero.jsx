import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useScrambleText } from '../../hooks/useScrambleText'
import styles from './Hero.module.scss'

const fadeUp = (delay = 0) => ({
    initial:    { opacity: 0, y: 30 },
    animate:    { opacity: 1, y: 0 },
    transition: { delay: delay + 0.3, duration: 0.6, ease: 'easeOut' }
})

const letterVariants = {
    hidden:  { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
}

function Hero() {
    const { t } = useTranslation()
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
    const bgY     = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
    const scrambleRef = useScrambleText('Juan', true)

    return (
        <section ref={ref} className={styles.hero}>
            <motion.div className={styles.hero__bg} style={{ y: bgY }}>
                <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80" alt="" />
                <div className={styles.hero__bgOverlay} />
            </motion.div>

            <motion.div style={{ opacity }} className={styles.hero__content}>
                <motion.p className={styles.hero__greeting} {...fadeUp(0)}>
                    {t('hero.greeting')}
                </motion.p>

                <h1 className={styles.hero__name}>
                    <motion.span {...fadeUp(0.2)}>
                        <span ref={scrambleRef}>Juan</span>
                    </motion.span>
                    {' '}
                    <motion.span
                        className={styles.hero__lastName}
                        initial="hidden"
                        animate="visible"
                        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 1.3 } } }}
                    >
                        {'Pieroni'.split('').map((char, i) => (
                            <motion.span key={i} variants={letterVariants}>{char}</motion.span>
                        ))}
                    </motion.span>
                </h1>

                <motion.h2 className={styles.hero__title} {...fadeUp(0.4)}>
                    {t('hero.title')}
                </motion.h2>

                <motion.p className={styles.hero__description} {...fadeUp(0.6)}>
                    {t('hero.description')}
                </motion.p>

                <motion.div className={styles.hero__cta} {...fadeUp(0.8)}>
                    <a href="#projects" className={styles.hero__btn}>{t('hero.cta_projects')}</a>
                    <a href="#contact" className={styles.hero__btnOutline}>{t('hero.cta_contact')}</a>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Hero
