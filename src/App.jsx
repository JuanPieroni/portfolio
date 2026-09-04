import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import SectionReveal from './components/SectionReveal/SectionReveal'
import Loader from './components/Loader/Loader'
import { useLenis } from './hooks/useLenis'

function App() {
    useLenis()
    const [loading, setLoading] = useState(true)

    return (
        <>
            <AnimatePresence>
                {loading && <Loader key="loader" onComplete={() => setLoading(false)} />}
            </AnimatePresence>

            {!loading && (
                <div>
                    <Navbar />
                    <Hero />
                    <SectionReveal variant="fadeUp">
                        <About />
                    </SectionReveal>
                    <SectionReveal variant="zoomIn" delay={0.1}>
                        <Skills />
                    </SectionReveal>
                    <SectionReveal variant="fadeUp" delay={0.1}>
                        <Projects />
                    </SectionReveal>
                    <SectionReveal variant="fadeUp" delay={0.1}>
                        <Contact />
                    </SectionReveal>
                    <Footer />
                </div>
            )}
        </>
    )
}

export default App
