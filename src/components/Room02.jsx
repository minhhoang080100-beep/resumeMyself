import { motion } from 'framer-motion'

/* Fine-line SVG art representing Capricorn constellation + number 11 */
function CapricornArt({ darkMode }) {
  const strokeColor = darkMode ? '#A09D96' : '#333333'
  const dotColor = darkMode ? '#D4B896' : '#C4A882'

  return (
    <svg
      viewBox="0 0 300 300"
      className="w-36 h-36 sm:w-48 sm:h-48 mx-auto"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g stroke={strokeColor} strokeWidth="0.7" fill="none" opacity="0.6">
        <line x1="80" y1="60" x2="120" y2="90" />
        <line x1="120" y1="90" x2="150" y2="70" />
        <line x1="150" y1="70" x2="180" y2="100" />
        <line x1="180" y1="100" x2="160" y2="140" />
        <line x1="160" y1="140" x2="190" y2="170" />
        <line x1="190" y1="170" x2="220" y2="150" />
        <line x1="160" y1="140" x2="130" y2="160" />
        <line x1="130" y1="160" x2="140" y2="200" />
      </g>
      <g fill={dotColor}>
        <circle cx="80" cy="60" r="2.5" />
        <circle cx="120" cy="90" r="2" />
        <circle cx="150" cy="70" r="2.5" />
        <circle cx="180" cy="100" r="2" />
        <circle cx="160" cy="140" r="3" />
        <circle cx="190" cy="170" r="2" />
        <circle cx="220" cy="150" r="2.5" />
        <circle cx="130" cy="160" r="2" />
        <circle cx="140" cy="200" r="2.5" />
      </g>
      <g stroke={strokeColor} strokeWidth="1" fill="none" opacity="0.35">
        <line x1="115" y1="220" x2="115" y2="270" />
        <line x1="105" y1="230" x2="115" y2="220" />
        <line x1="135" y1="220" x2="135" y2="270" />
        <line x1="125" y1="230" x2="135" y2="220" />
      </g>
      <circle cx="125" cy="245" r="25" stroke={strokeColor} strokeWidth="0.4" fill="none" opacity="0.2" />
      <ellipse cx="150" cy="130" rx="110" ry="40" stroke={strokeColor} strokeWidth="0.3" fill="none" opacity="0.15" transform="rotate(-15, 150, 130)" />
      <ellipse cx="150" cy="130" rx="130" ry="55" stroke={strokeColor} strokeWidth="0.3" fill="none" opacity="0.1" transform="rotate(-15, 150, 130)" />
    </svg>
  )
}

export default function Room02({ darkMode, active }) {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, delay: 0.2 + i * 0.2, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
  }

  return (
    <section className="snap-section" id="room-02">
      <div className="w-full max-w-lg mx-auto">
        {/* Section Title */}
        <motion.div
          custom={0}
          initial="hidden"
          animate={active ? 'visible' : 'hidden'}
          variants={fadeUp}
          className="text-center mb-8 sm:mb-12"
        >
          <h2
            className="font-heading text-3xl sm:text-4xl md:text-5xl font-light tracking-wide"
            style={{ color: darkMode ? '#E8E6E1' : '#333333' }}
          >
            Tần số
          </h2>
          <p
            className="font-heading text-sm sm:text-base italic mt-2 tracking-wide"
            style={{ color: darkMode ? '#A09D96' : '#999999' }}
          >
            Frequency
          </p>
        </motion.div>

        {/* Constellation Art */}
        <motion.div
          custom={1}
          initial="hidden"
          animate={active ? 'visible' : 'hidden'}
          variants={fadeUp}
          className="flex justify-center mb-8 sm:mb-12"
        >
          <CapricornArt darkMode={darkMode} />
        </motion.div>

        {/* Quote Text */}
        <motion.div
          custom={2}
          initial="hidden"
          animate={active ? 'visible' : 'hidden'}
          variants={fadeUp}
          className="text-center"
        >
          <p
            className="text-sm sm:text-base leading-relaxed sm:leading-loose font-light"
            style={{ color: darkMode ? '#A09D96' : '#666666' }}
          >
            Anh sinh ngày{' '}
            <span className="font-normal" style={{ color: darkMode ? '#D4B896' : '#C4A882' }}>
              8/1 (Ma Kết)
            </span>
            , với con số chủ đạo là{' '}
            <span
              className="font-heading text-3xl sm:text-4xl italic px-1 leading-[0.8]"
              style={{ color: darkMode ? '#D4B896' : '#C4A882' }}
            >
              11
            </span>
            . Người ta thường nói đây là con số của trực giác, nhưng với anh,
            nó đơn giản là lý do vì sao anh thích quan sát và cảm nhận mọi thứ
            xung quanh hơn là thể hiện qua lời nói.
          </p>

          {/* Tags */}
          {/* <div className="mt-8 flex flex-wrap justify-center gap-2">
            {['♑ Ma Kết · 8/1', '11 — Master Number', 'Hướng nội', 'Quan sát'].map(
              (tag, i) => (
                <span
                  key={i}
                  className="text-[9px] sm:text-[10px] tracking-[0.15em] uppercase px-2.5 py-1 rounded-full border"
                  style={{
                    color: darkMode ? '#A09D96' : '#999999',
                    borderColor: darkMode ? '#3A3835' : '#E5E3DE',
                  }}
                >
                  {tag}
                </span>
              )
            )}
          </div> */}
        </motion.div>
      </div>
    </section>
  )
}
