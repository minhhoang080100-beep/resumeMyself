import { motion } from 'framer-motion'

export default function NavDots({ sections, activeIndex, onNavigate }) {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 2.5 }}
      className="nav-dots"
      aria-label="Section navigation"
    >
      {sections.map((_, i) => (
        <button
          key={i}
          className={`nav-dot ${activeIndex === i ? 'active' : ''}`}
          onClick={() => onNavigate(i)}
          aria-label={`Go to section ${i + 1}`}
        />
      ))}
    </motion.nav>
  )
}
