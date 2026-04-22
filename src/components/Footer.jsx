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
          className="text-sm sm:text-base font-light leading-relaxed max-w-sm mx-auto"
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
            className="text-[9px] tracking-[0.3em] uppercase font-light"
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

      {/* Floating Easter Egg Hint - Bottom Right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={active ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 flex flex-col items-center gap-1 opacity-70 cursor-pointer"
      >
        <span
          className="text-[10px] tracking-widest uppercase font-medium"
          style={{ color: darkMode ? '#A09D96' : '#999999' }}
        >
          psst...
        </span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="text-2xl sm:text-3xl font-light"
          style={{ color: darkMode ? '#D4B896' : '#C4A882' }}
        >
          ↓
        </motion.span>
      </motion.div>
    </section>
  )
}
