import { motion } from 'framer-motion'

const bakeries = [
  {
    name: 'Soft Studio',
    handle: '@softstudiovn',
    link: 'https://www.instagram.com/softstudiovn/',
    note: 'Online Pastry Studio chuyên Canelé với nguyên liệu tuyển chọn',
    emoji: '🍮',
  },
  {
    name: 'Olive Studio',
    handle: '@olivestudiovn',
    link: 'https://www.instagram.com/olivestudiovn/',
    note: 'Home-baked Cakes phong cách tinh tế, sử dụng nguyên liệu cao cấp',
    emoji: '🎂',
  },
  {
    name: 'Clara.T Pastry',
    handle: '@clara.t.pastry',
    link: 'https://www.instagram.com/clara.t.pastry/',
    note: 'French Craft with Local Essence — Bánh Pháp mang hồn bản địa',
    emoji: '🥐',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: 0.35 + i * 0.12,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
}

export default function CroissantModal({ onClose, darkMode }) {
  const bg = darkMode
    ? 'linear-gradient(145deg, #1E1E1E 0%, #2A2520 100%)'
    : 'linear-gradient(145deg, #FFFDF9 0%, #FFF8F0 100%)'
  const cardBg = darkMode ? 'rgba(255,255,255,0.04)' : 'rgba(196,168,130,0.06)'
  const cardBorder = darkMode ? 'rgba(212,184,150,0.12)' : 'rgba(196,168,130,0.15)'
  const cardHoverBg = darkMode ? 'rgba(212,184,150,0.08)' : 'rgba(196,168,130,0.12)'

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="modal-overlay fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-6"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 30 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md rounded-2xl p-6 sm:p-8 relative overflow-hidden"
        style={{
          background: bg,
          boxShadow: darkMode
            ? '0 32px 64px -16px rgba(0,0,0,0.6), 0 0 0 1px rgba(212,184,150,0.08)'
            : '0 32px 64px -16px rgba(196,168,130,0.2), 0 0 0 1px rgba(196,168,130,0.1)',
        }}
      >
        {/* Decorative glow */}
        <div
          className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{ background: darkMode ? '#D4B896' : '#C4A882' }}
        />
        <div
          className="absolute -bottom-16 -left-16 w-32 h-32 rounded-full blur-3xl opacity-10 pointer-events-none"
          style={{ background: darkMode ? '#D4B896' : '#C4A882' }}
        />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer bg-transparent transition-all duration-300 hover:scale-110"
          style={{
            border: `1px solid ${darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'}`,
            color: darkMode ? '#A09D96' : '#999999',
          }}
        >
          <span className="text-xs leading-none">✕</span>
        </button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-center mb-6 sm:mb-8"
        >
          <motion.span
            className="text-4xl sm:text-5xl block mb-3"
            animate={{ rotate: [0, -8, 8, -4, 0] }}
            transition={{ duration: 2, delay: 0.6, ease: 'easeInOut' }}
          >
            🥐
          </motion.span>
          <h3
            className="font-heading text-xl sm:text-2xl font-light tracking-wide"
            style={{ color: darkMode ? '#E8E6E1' : '#333333' }}
          >
            Secret Checklist
          </h3>
          <div
            className="w-8 h-px mx-auto my-3"
            style={{ background: darkMode ? '#3A3835' : '#E5E3DE' }}
          />
          <p
            className="text-[10px] sm:text-xs tracking-[0.2em] uppercase"
            style={{ color: darkMode ? '#A09D96' : '#999999' }}
          >
            3 quán bánh ngon nhất dành riêng cho em
          </p>
        </motion.div>

        {/* Cards */}
        <div className="flex flex-col gap-3">
          {bakeries.map((b, i) => (
            <motion.a
              key={i}
              href={b.link}
              target="_blank"
              rel="noopener noreferrer"
              custom={i}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              className="group relative rounded-xl p-4 sm:p-5 flex items-start gap-4 transition-all duration-400 no-underline"
              style={{
                background: cardBg,
                border: `1px solid ${cardBorder}`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = cardHoverBg
                e.currentTarget.style.borderColor = darkMode ? 'rgba(212,184,150,0.25)' : 'rgba(196,168,130,0.3)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = cardBg
                e.currentTarget.style.borderColor = cardBorder
              }}
            >
              {/* Emoji badge */}
              <div
                className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center text-xl sm:text-2xl"
                style={{
                  background: darkMode ? 'rgba(212,184,150,0.1)' : 'rgba(196,168,130,0.1)',
                }}
              >
                {b.emoji}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h4
                    className="text-sm sm:text-base font-medium tracking-wide group-hover:translate-x-0.5 transition-transform duration-300"
                    style={{ color: darkMode ? '#E8E6E1' : '#333333' }}
                  >
                    {b.name}
                  </h4>
                  <span
                    className="opacity-0 -translate-x-1 group-hover:opacity-60 group-hover:translate-x-0 transition-all duration-300 text-xs"
                    style={{ color: darkMode ? '#D4B896' : '#C4A882' }}
                  >
                    ↗
                  </span>
                </div>
                <p
                  className="text-[10px] tracking-[0.15em] uppercase mb-1.5"
                  style={{ color: darkMode ? '#D4B896' : '#C4A882' }}
                >
                  {b.handle}
                </p>
                <p
                  className="text-xs sm:text-sm font-light leading-relaxed"
                  style={{ color: darkMode ? '#A09D96' : '#888888' }}
                >
                  {b.note}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center text-[10px] sm:text-xs tracking-[0.15em] uppercase mt-8 sm:mt-10 font-light"
          style={{ color: darkMode ? '#A09D96' : '#C4A882' }}
        >
          Curated with love ♡
        </motion.p>
      </motion.div>
    </motion.div>
  )
}
