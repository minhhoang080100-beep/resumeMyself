import { motion } from 'framer-motion'

export default function DarkModeToggle({ darkMode, toggle }) {
  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 2.5 }}
      onClick={toggle}
      className="toggle-btn fixed top-6 right-6 z-50 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"
      aria-label="Toggle dark mode"
      id="dark-mode-toggle"
    >
      <motion.span
        key={darkMode ? 'moon' : 'sun'}
        initial={{ scale: 0, rotate: -90 }}
        animate={{ scale: 1, rotate: 0 }}
        exit={{ scale: 0, rotate: 90 }}
        transition={{ duration: 0.3 }}
        className="text-base"
      >
        {darkMode ? '☀️' : '🌙'}
      </motion.span>
    </motion.button>
  )
}
