import { motion } from 'framer-motion'

export default function Footer({ darkMode, active }) {
  return (
    <section className="snap-section" id="footer">
      <motion.div
        initial={{ opacity: 0 }}
        animate={active ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-center"
      >
        {/* Thin decorative line */}
        <div
          className="w-10 h-px mx-auto mb-10"
          style={{ background: darkMode ? '#3A3835' : '#E5E3DE' }}
        />

        <p
          className="text-base sm:text-lg lg:text-xl font-light leading-relaxed max-w-md mx-auto"
          style={{ color: darkMode ? '#A09D96' : '#999999' }}
        >
          "Nếu em thấy bản Resume này đủ uy tín,
          <br />
          hãy cho anh một tín hiệu nhé ✨"
        </p>

        <div className="mt-10 flex items-center justify-center gap-3">
          <div
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: darkMode ? '#D4B896' : '#C4A882' }}
          />
          <p
            className="text-xs sm:text-sm tracking-[0.3em] uppercase font-light"
            style={{ color: darkMode ? '#A09D96' : '#C4A882' }}
          >
            Fin
          </p>
          <div
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: darkMode ? '#D4B896' : '#C4A882' }}
          />
        </div>

        {/* <p
          className="mt-8 text-[9px] tracking-[0.15em] uppercase"
          style={{ color: darkMode ? '#3A3835' : '#E5E3DE' }}
        >
          Crafted with care · 2026
        </p> */}
      </motion.div>

      {/* Floating Easter Egg Hint - Bottom Center */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
      >
        <div
          className="flex items-center gap-2 px-4 py-1.5 rounded-full backdrop-blur-sm"
          style={{
            background: darkMode ? 'rgba(212,184,150,0.1)' : 'rgba(196,168,130,0.1)',
            border: `1px solid ${darkMode ? 'rgba(212,184,150,0.2)' : 'rgba(196,168,130,0.25)'}`,
          }}
        >
          <span
            className="text-[10px] sm:text-xs tracking-[0.25em] uppercase font-medium"
            style={{ color: darkMode ? '#D4B896' : '#C4A882' }}
          >
            psst...
          </span>
        </div>
        <motion.span
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="text-lg sm:text-xl font-light"
          style={{ color: darkMode ? '#D4B896' : '#C4A882' }}
        >
          ↓
        </motion.span>
      </motion.div>
    </section>
  )
}
