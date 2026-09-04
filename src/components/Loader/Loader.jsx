import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Loader.module.scss'

function Loader({ onComplete }) {
    const [count, setCount] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prev) => {
                if (prev >= 100) {
                    clearInterval(interval)
                    setTimeout(onComplete, 400)
                    return 100
                }
                return prev + Math.floor(Math.random() * 12) + 3
            })
        }, 60)
        return () => clearInterval(interval)
    }, [onComplete])

    return (
        <motion.div
            className={styles.loader}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
            <div className={styles.loader__content}>
                <motion.p
                    className={styles.loader__name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    JP
                </motion.p>

                <div className={styles.loader__bar}>
                    <motion.div
                        className={styles.loader__fill}
                        style={{ width: `${Math.min(count, 100)}%` }}
                    />
                </div>

                <motion.p
                    className={styles.loader__count}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    {Math.min(count, 100)}%
                </motion.p>
            </div>
        </motion.div>
    )
}

export default Loader
