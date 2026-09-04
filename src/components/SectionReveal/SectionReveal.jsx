import { motion } from 'framer-motion'

const variants = {
    fadeUp:   { hidden: { opacity: 0, y: 60 },            visible: { opacity: 1, y: 0 } },
    fadeIn:   { hidden: { opacity: 0 },                   visible: { opacity: 1 } },
    slideLeft:{ hidden: { opacity: 0, x: -60 },           visible: { opacity: 1, x: 0 } },
    zoomIn:   { hidden: { opacity: 0, scale: 0.85 },      visible: { opacity: 1, scale: 1 } },
}

function SectionReveal({ children, variant = 'fadeUp', delay = 0, className }) {
    return (
        <motion.div
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            variants={variants[variant]}
            transition={{ duration: 0.7, ease: 'easeOut', delay }}
        >
            {children}
        </motion.div>
    )
}

export default SectionReveal
