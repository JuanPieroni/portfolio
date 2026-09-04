import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import styles from './Skills.module.scss'

const categories = [
    { title: 'Frontend',  icon: '🎨', skills: ['JavaScript', 'React', 'HTML5', 'CSS3', 'SASS', 'Tailwind CSS', 'Framer Motion'] },
    { title: 'Backend',   icon: '⚙️', skills: ['Node.js', 'Express', 'REST APIs', 'MongoDB', 'SQL'] },
    { title: 'Mobile',    icon: '📱', skills: ['React Native', 'Expo'] },
    { title: 'AI & Tools',icon: '🤖', skills: ['AI Engineering', 'Git', 'GitHub', 'Vite', 'Figma'] },
]

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } }
}

const cardVariants = {
    hidden:  { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
}

function Skills() {
    const { t } = useTranslation()

    return (
        <section id="skills" className={styles.skills}>
            <motion.p
                className={styles.skills__label}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }} transition={{ duration: 0.5 }}
            >
                {t('skills.label')}
            </motion.p>

            <motion.h2
                className={styles.skills__title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }} transition={{ duration: 0.5, delay: 0.1 }}
            >
                {t('skills.title')}
            </motion.h2>

            <motion.div
                className={styles.skills__grid}
                variants={containerVariants} initial="hidden"
                whileInView="visible" viewport={{ once: false, amount: 0.2 }}
            >
                {categories.map((cat) => (
                    <motion.div key={cat.title} className={styles.skills__card} variants={cardVariants}>
                        <div className={styles.skills__cardHeader}>
                            <span className={styles.skills__icon}>{cat.icon}</span>
                            <h3 className={styles.skills__cardTitle}>{cat.title}</h3>
                        </div>
                        <div className={styles.skills__tags}>
                            {cat.skills.map((skill) => (
                                <span key={skill} className={styles.skills__tag}>{skill}</span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}

export default Skills
