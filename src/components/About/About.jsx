import { motion } from 'framer-motion'
import styles from './About.module.scss'

const tags = ['JavaScript', 'React', 'Node.js', 'CSS / SASS', 'React Native', 'AI Engineering']

const fadeLeft  = { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } } }
const fadeRight = { hidden: { opacity: 0, x:  50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } } }

function About() {
    return (
        <section id="about" className={styles.about}>
            <motion.div
                className={styles.about__image}
                variants={fadeLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <img src="https://placehold.co/400x500/0f0f1a/6d28d9?text=JP" alt="Juan Pieroni" />
                <div className={styles.about__imageBorder} />
            </motion.div>

            <motion.div
                className={styles.about__content}
                variants={fadeRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <p className={styles.about__label}>About me</p>
                <h2 className={styles.about__title}>Passionate about building things that matter</h2>
                <p className={styles.about__text}>
                    Soy un desarrollador FullStack con foco en crear experiencias digitales rápidas, escalables y con buena UX.
                    Me apasiona el frontend tanto como el backend, y estoy explorando el mundo de la inteligencia artificial aplicada al desarrollo de productos.
                </p>
                <p className={styles.about__text}>
                    Trabajo con JavaScript en toda la stack — desde interfaces en React hasta APIs en Node.js.
                    Siempre buscando aprender algo nuevo y aplicarlo en proyectos reales.
                </p>

                <div className={styles.about__tags}>
                    {tags.map((tag) => (
                        <span key={tag} className={styles.about__tag}>{tag}</span>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}

export default About
