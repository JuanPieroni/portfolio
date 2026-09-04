import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import styles from './Projects.module.scss'

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } }
}

const cardVariants = {
    hidden:  { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
}

function ProjectCard({ project }) {
    const { t } = useTranslation()
    const cardRef = useRef(null)

    const onMouseMove = (e) => {
        const { left, top, width, height } = cardRef.current.getBoundingClientRect()
        const x = (e.clientX - left) / width  - 0.5
        const y = (e.clientY - top)  / height - 0.5
        cardRef.current.style.transform = `perspective(800px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg) translateY(-4px)`
    }

    const onMouseLeave = () => {
        cardRef.current.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg) translateY(0)'
    }

    return (
        <motion.div ref={cardRef} className={styles.card} variants={cardVariants} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
            <div className={styles.card__image}>
                <img src={project.image} alt={project.title} />
                <div className={styles.card__overlay}>
                    <a href={project.demo} className={styles.card__link} target="_blank" rel="noreferrer">{t('projects.demo')}</a>
                    <a href={project.repo} className={styles.card__link} target="_blank" rel="noreferrer">{t('projects.repo')}</a>
                </div>
            </div>
            <div className={styles.card__body}>
                <h3 className={styles.card__title}>{project.title}</h3>
                <p className={styles.card__description}>{t(project.descKey)}</p>
                <div className={styles.card__tags}>
                    {project.tags.map((tag) => (
                        <span key={tag} className={styles.card__tag}>{tag}</span>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

function Projects() {
    const { t } = useTranslation()

    const projects = [
        { title: 'Project Alpha', descKey: 'projects.p1_description', image: 'https://placehold.co/600x340/0f0f1a/6d28d9?text=Project+Alpha', tags: ['React', 'Node.js', 'MongoDB'], demo: '#', repo: '#' },
        { title: 'Project Beta',  descKey: 'projects.p2_description', image: 'https://placehold.co/600x340/0f0f1a/ec4899?text=Project+Beta',  tags: ['React Native', 'Expo', 'Express'], demo: '#', repo: '#' },
        { title: 'Project Gamma', descKey: 'projects.p3_description', image: 'https://placehold.co/600x340/0f0f1a/22d3ee?text=Project+Gamma', tags: ['React', 'Python', 'AI'], demo: '#', repo: '#' },
    ]

    return (
        <section id="projects" className={styles.projects}>
            <motion.p
                className={styles.projects__label}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }} transition={{ duration: 0.5 }}
            >
                {t('projects.label')}
            </motion.p>

            <motion.h2
                className={styles.projects__title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }} transition={{ duration: 0.5, delay: 0.1 }}
            >
                {t('projects.title')}
            </motion.h2>

            <motion.div
                className={styles.projects__grid}
                variants={containerVariants} initial="hidden"
                whileInView="visible" viewport={{ once: false, amount: 0.1 }}
            >
                {projects.map((p) => <ProjectCard key={p.title} project={p} />)}
            </motion.div>
        </section>
    )
}

export default Projects
