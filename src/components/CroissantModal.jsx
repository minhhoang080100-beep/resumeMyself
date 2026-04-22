import { motion } from 'framer-motion'

const bakeries = [
  {
    name: 'Soft Studio',
    handle: '@softstudiovn',
    link: 'https://www.instagram.com/softstudiovn/',
    note: 'Online Pastry Studio chuyên Canelé với nguyên liệu tuyển chọn',
  },
  {
    name: 'Olive Studio',
    handle: '@olivestudiovn',
    link: 'https://www.instagram.com/olivestudiovn/',
    note: 'Home-baked Cakes phong cách tinh tế, sử dụng nguyên liệu cao cấp',
  },
  {
    name: 'Clara.T Pastry',
    handle: '@clara.t.pastry',
    link: 'https://www.instagram.com/clara.t.pastry/',
    note: 'French Craft with Local Essence — Bánh Pháp mang hồn bản địa',
  },
]

export default function CroissantModal({ onClose, darkMode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="modal-overlay fixed inset-0 z-[100] flex items-center justify-center px-6"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-sm rounded-lg p-8 sm:p-10 relative"
        style={{
          background: darkMode ? '#242424' : '#FFFFFF',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
        }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xs cursor-pointer bg-transparent border-none"
          style={{ color: darkMode ? '#A09D96' : '#999999' }}
        >
          ✕
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <span className="text-3xl block mb-3">🥐</span>
          <h3
            className="font-heading text-lg font-light"
            style={{ color: darkMode ? '#E8E6E1' : '#333333' }}
          >
            Secret Checklist
          </h3>
          <p
            className="text-[10px] tracking-[0.2em] uppercase mt-1"
            style={{ color: darkMode ? '#A09D96' : '#999999' }}
          >
            3 quán bánh ngon nhất dành riêng cho em
          </p>
        </div>

        {/* List */}
        <div className="flex flex-col mt-4">
          {bakeries.map((b, i) => (
            <a
              key={i}
              href={b.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-start justify-between py-5 sm:py-6 border-b border-opacity-20 transition-all duration-300 ${
                i === bakeries.length - 1 ? 'border-transparent' : ''
              }`}
              style={{ borderColor: darkMode ? '#3A3835' : '#E5E3DE' }}
            >
              <div className="flex gap-3 sm:gap-4 items-start w-full pr-4">
                {/* Number */}
                <div className="pt-1">
                  <span
                    className="text-[10px] sm:text-xs font-medium tracking-widest opacity-30 group-hover:opacity-60 transition-opacity"
                    style={{ color: darkMode ? '#E8E6E1' : '#333333' }}
                  >
                    0{i + 1}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h4
                    className="text-base sm:text-lg font-medium tracking-wide mb-1 group-hover:translate-x-1 transition-transform duration-300"
                    style={{ color: darkMode ? '#E8E6E1' : '#333333' }}
                  >
                    {b.name}
                  </h4>
                  <p
                    className="text-[10px] sm:text-xs tracking-widest uppercase mb-2 sm:mb-2.5"
                    style={{ color: darkMode ? '#A09D96' : '#999999' }}
                  >
                    {b.handle}
                  </p>
                  <p
                    className="text-xs sm:text-sm font-light leading-relaxed"
                    style={{ color: darkMode ? '#C4C2BC' : '#666666' }}
                  >
                    {b.note}
                  </p>
                </div>
              </div>

              {/* Arrow */}
              <div className="pt-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 hidden sm:block shrink-0">
                <span
                  className="text-sm"
                  style={{ color: darkMode ? '#A09D96' : '#999999' }}
                >
                  ↗
                </span>
              </div>
            </a>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}
