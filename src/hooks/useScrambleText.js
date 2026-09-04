import { useEffect, useRef } from 'react'

const CHARS = 'abcdefghijklmnopqrstuvwxyz'
const DURATION = 900
const STEPS    = 20

export function useScrambleText(finalText, trigger = true) {
    const ref = useRef(null)

    useEffect(() => {
        if (!trigger || !ref.current) return

        let frame = 0
        const totalFrames = STEPS
        const interval = DURATION / totalFrames

        const tick = setInterval(() => {
            frame++
            const progress = frame / totalFrames
            const revealedCount = Math.floor(progress * finalText.length)

            ref.current.textContent =
                finalText.slice(0, revealedCount) +
                Array.from({ length: finalText.length - revealedCount })
                    .map(() => CHARS[Math.floor(Math.random() * CHARS.length)])
                    .join('')

            if (frame >= totalFrames) {
                clearInterval(tick)
                ref.current.textContent = finalText
            }
        }, interval)

        return () => clearInterval(tick)
    }, [finalText, trigger])

    return ref
}
