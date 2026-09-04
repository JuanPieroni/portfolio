import { motion } from 'framer-motion'
import styles from './Hero.module.scss'

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' }
    })
}

function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.hero__content}>
                <motion.p
                    className={styles.hero__greeting}
                    variants={fadeUp} initial="hidden" animate="visible" custom={0}
                >
                    Hi, I&apos;m
                </motion.p>

                <motion.h1
                    className={styles.hero__name}
                    variants={fadeUp} initial="hidden" animate="visible" custom={1}
                >
                    Juan Pieroni
                </motion.h1>

                <motion.h2
                    className={styles.hero__title}
                    variants={fadeUp} initial="hidden" animate="visible" custom={2}
                >
                    FullStack Developer <span>&</span> AI Enthusiast
                </motion.h2>

                <motion.p
                    className={styles.hero__description}
                    variants={fadeUp} initial="hidden" animate="visible" custom={3}
                >
                    Building digital products that scale — from frontend to backend, with a bit of AI magic.
                </motion.p>

                <motion.div
                    className={styles.hero__cta}
                    variants={fadeUp} initial="hidden" animate="visible" custom={4}
                >
                    <a href="#projects" className={styles.hero__btn}>Ver proyectos</a>
                    <a href="#contact" className={styles.hero__btnOutline}>Contactame</a>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero
