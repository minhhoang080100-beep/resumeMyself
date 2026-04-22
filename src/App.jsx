import { useState, useEffect, useRef, useCallback } from 'react'
import { AnimatePresence } from 'framer-motion'
import Hero from './components/Hero'
import Room01 from './components/Room01'
import Room02 from './components/Room02'
import Room03 from './components/Room03'
import Room04 from './components/Room04'
import Footer from './components/Footer'
import DarkModeToggle from './components/DarkModeToggle'
import SecretButton from './components/SecretButton'
import CroissantModal from './components/CroissantModal'
import NavDots from './components/NavDots'

const SECTIONS = ['hero', 'room-01', 'room-02', 'room-03', 'footer', 'room-04']

export default function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [activeSection, setActiveSection] = useState(0)
  const containerRef = useRef(null)

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [darkMode])

  // Track which section is in view
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      const scrollTop = container.scrollTop
      const sectionHeight = container.clientHeight
      const index = Math.round(scrollTop / sectionHeight)
      setActiveSection(Math.min(index, SECTIONS.length - 1))
    }

    container.addEventListener('scroll', handleScroll, { passive: true })
    return () => container.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = useCallback((index) => {
    const container = containerRef.current
    if (!container) return
    container.scrollTo({
      top: index * container.clientHeight,
      behavior: 'smooth',
    })
  }, [])

  return (
    <div className="relative">
      {/* Dark Mode Toggle */}
      <DarkModeToggle darkMode={darkMode} toggle={() => setDarkMode(!darkMode)} />

      {/* Secret Croissant Button */}
      <SecretButton onClick={() => setModalOpen(true)} />

      {/* Nav Dots */}
      <NavDots
        sections={SECTIONS}
        activeIndex={activeSection}
        onNavigate={scrollTo}
        darkMode={darkMode}
      />

      {/* Scroll Snap Container */}
      <main ref={containerRef} className="snap-container">
        <Hero darkMode={darkMode} onNext={() => scrollTo(1)} />
        <Room01 darkMode={darkMode} active={activeSection === 1} />
        <Room02 darkMode={darkMode} active={activeSection === 2} />
        <Room03 darkMode={darkMode} active={activeSection === 3} />
        <Footer darkMode={darkMode} active={activeSection === 4} />
        <Room04 darkMode={darkMode} active={activeSection === 5} />
      </main>

      {/* Modal */}
      <AnimatePresence>
        {modalOpen && <CroissantModal onClose={() => setModalOpen(false)} darkMode={darkMode} />}
      </AnimatePresence>
    </div>
  )
}
