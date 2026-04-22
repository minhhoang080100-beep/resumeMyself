import { motion } from 'framer-motion'

export default function Hero({ darkMode, onNext }) {
  return (
    <section className="snap-section" id="hero">
      {/* Subtle decorative line */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 origin-top"
        style={{ background: darkMode ? '#3A3835' : '#E5E3DE' }}
      />

      <div className="text-center max-w-lg">
        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-[10px] tracking-[0.35em] uppercase mb-8"
          style={{ color: darkMode ? '#A09D96' : '#999999' }}
        >
          A Personal Exhibition
        </motion.p>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-heading text-5xl sm:text-6xl md:text-7xl font-light leading-tight mb-6"
          style={{ color: darkMode ? '#E8E6E1' : '#333333' }}
        >
          Minh
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="font-heading text-lg sm:text-xl font-light italic"
          style={{ color: darkMode ? '#A09D96' : '#666666' }}
        >
          L'art de vivre
        </motion.p>

        {/* Year badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          className="mt-10 inline-block"
        >
          <span
            className="text-[10px] tracking-[0.3em] uppercase px-4 py-2 border rounded-full"
            style={{
              color: darkMode ? '#A09D96' : '#999999',
              borderColor: darkMode ? '#3A3835' : '#E5E3DE',
            }}
          >
            Since 2000
          </span>
        </motion.div>
      </div>

      {/* Scroll indicator — clickable to go next */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2.4 }}
        onClick={onNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer bg-transparent border-none"
      >
        <span
          className="text-[9px] tracking-[0.3em] uppercase"
          style={{ color: darkMode ? '#A09D96' : '#999999' }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-6"
          style={{ background: darkMode ? '#A09D96' : '#999999' }}
        />
      </motion.button>
    </section>
  )
}
