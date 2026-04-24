import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useRef, useEffect, useState, useMemo } from 'react'

/*
 * Actual Capricornus constellation — positions mapped from RA/Dec.
 * Shape: arrowhead / inverted triangle.
 * α,β (Algedi, Dabih) = head (top-left)
 * γ,δ (Nashira, Deneb Algedi) = tail (far right)
 */
const mainStars = [
  { x: 110, y: 160, r: 5 },   // 0  α¹ Algedi
  { x: 130, y: 195, r: 4.5 }, // 1  β  Dabih
  { x: 205, y: 280, r: 3.5 }, // 2  ψ  Cap
  { x: 290, y: 340, r: 3.5 }, // 3  ω  Cap
  { x: 370, y: 370, r: 4 },   // 4  24 Cap
  { x: 450, y: 340, r: 3.5 }, // 5  ζ  Cap
  { x: 510, y: 285, r: 3.5 }, // 6  ε  Cap (36 Cap)
  { x: 580, y: 245, r: 4 },   // 7  κ  Cap
  { x: 650, y: 190, r: 5 },   // 8  δ  Deneb Algedi (brightest)
  { x: 625, y: 215, r: 4.5 }, // 9  γ  Nashira
  { x: 350, y: 250, r: 3.5 }, // 10 θ  Cap
  { x: 280, y: 220, r: 3.5 }, // 11 ι  Cap
]

const connections = [
  [0, 1],   // α — β (head)
  [1, 2],   // β — ψ
  [2, 3],   // ψ — ω
  [3, 4],   // ω — 24
  [4, 5],   // 24 — ζ
  [5, 6],   // ζ — ε
  [6, 7],   // ε — κ
  [7, 8],   // κ — δ (tail tip)
  [8, 9],   // δ — γ
  [10, 11], // θ — ι (inner line)
  [11, 1],  // ι — β
  [10, 5],  // θ — ζ
]


/* ── Room02 ── */
export default function Room02({ darkMode, active }) {
  const sectionRef = useRef(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Background stars
  const bgStars = useMemo(() =>
    Array.from({ length: 100 }, () => ({
      x: Math.random() * 800,
      y: Math.random() * 600,
      r: Math.random() * 1.3 + 0.2,
      opacity: Math.random() * 0.4 + 0.1,
      dur: 1.5 + Math.random() * 3,
      delay: Math.random() * 3,
    })),
  [])

  const lineColor = darkMode ? 'rgba(212,184,150,0.2)' : 'rgba(196,168,130,0.15)'
  const starColor = darkMode ? 'rgba(212,184,150,0.5)' : 'rgba(196,168,130,0.35)'
  const starGlow = darkMode ? 'rgba(212,184,150,0.15)' : 'rgba(196,168,130,0.1)'
  const bgStarColor = darkMode ? 'rgba(212,184,150,0.2)' : 'rgba(196,168,130,0.12)'


  // Parallax springs
  const starsX = useSpring(mouseX, { stiffness: 40, damping: 20 })
  const starsY = useSpring(mouseY, { stiffness: 40, damping: 20 })
  const linesX = useSpring(mouseX, { stiffness: 25, damping: 25 })
  const linesY = useSpring(mouseY, { stiffness: 25, damping: 25 })
  const bgX = useSpring(mouseX, { stiffness: 10, damping: 30 })
  const bgY = useSpring(mouseY, { stiffness: 10, damping: 30 })

  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 1.2, delay: 0.4 + i * 0.06, ease: [0.25, 0.46, 0.45, 0.94] },
        opacity: { duration: 0.3, delay: 0.4 + i * 0.06 },
      },
    }),
  }

  const starVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i) => ({
      scale: 1, opacity: 1,
      transition: { duration: 0.5, delay: 0.2 + i * 0.04, ease: 'easeOut' },
    }),
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1, y: 0,
      transition: { duration: 0.9, delay: 0.2 + i * 0.2, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
  }

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const handleMouseMove = (e) => {
      const rect = section.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      mouseX.set(((e.clientX - cx) / rect.width) * 20)
      mouseY.set(((e.clientY - cy) / rect.height) * 20)
    }
    section.addEventListener('mousemove', handleMouseMove)
    return () => section.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <section className="snap-section" id="room-02" ref={sectionRef}>
      {/* ===== BACKGROUND: Constellation ===== */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          viewBox="0 0 800 600"
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <radialGradient id="halo02">
              <stop offset="0%" stopColor={starGlow} />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
            <filter id="glow02" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>


          {/* Background scattered stars */}
          <motion.g style={{ x: bgX, y: bgY }}>
            {bgStars.map((s, i) => (
              <circle key={i} cx={s.x} cy={s.y} r={s.r} fill={bgStarColor}>
                <animate
                  attributeName="opacity"
                  values={`${s.opacity};${s.opacity * 0.2};${s.opacity}`}
                  dur={`${s.dur}s`}
                  begin={`${s.delay}s`}
                  repeatCount="indefinite"
                />
              </circle>
            ))}
          </motion.g>

          {/* Constellation lines */}
          <motion.g style={{ x: linesX, y: linesY }}>
            {connections.map(([a, b], i) => (
              <motion.line
                key={`line-${i}`}
                x1={mainStars[a].x} y1={mainStars[a].y}
                x2={mainStars[b].x} y2={mainStars[b].y}
                stroke={lineColor}
                strokeWidth="1"
                strokeLinecap="round"
                custom={i}
                initial="hidden"
                animate={active ? 'visible' : 'hidden'}
                variants={lineVariants}
              />
            ))}
          </motion.g>

          {/* Main stars */}
          <motion.g style={{ x: starsX, y: starsY }}>
            {mainStars.map((star, i) => (
              <motion.g
                key={i}
                custom={i}
                initial="hidden"
                animate={active ? 'visible' : 'hidden'}
                variants={starVariants}
              >
                {/* Halo */}
                <circle cx={star.x} cy={star.y} r={star.r * 6} fill="url(#halo02)">
                  <animate
                    attributeName="opacity"
                    values="0.3;0.7;0.3"
                    dur={`${2 + i * 0.25}s`}
                    repeatCount="indefinite"
                  />
                </circle>
                {/* Star body */}
                <circle cx={star.x} cy={star.y} r={star.r} fill={starColor} filter="url(#glow02)">
                  <animate
                    attributeName="opacity"
                    values="0.7;1;0.7"
                    dur={`${1.5 + i * 0.2}s`}
                    repeatCount="indefinite"
                  />
                </circle>
                {/* Sparkle */}
                <circle cx={star.x} cy={star.y} r={star.r * 0.3}
                  fill={darkMode ? 'rgba(255,255,255,0.4)' : 'rgba(255,255,255,0.3)'}
                />
              </motion.g>
            ))}
          </motion.g>

          {/* Orbital rings */}
          <motion.g style={{ x: bgX, y: bgY }}>
            <ellipse cx="400" cy="300" rx="320" ry="120"
              stroke={lineColor} strokeWidth="0.5" fill="none" opacity="0.4"
              strokeDasharray="3 8"
              transform="rotate(-10, 400, 300)"
            />
            <ellipse cx="400" cy="300" rx="250" ry="85"
              stroke={lineColor} strokeWidth="0.4" fill="none" opacity="0.25"
              strokeDasharray="2 6"
              transform="rotate(-10, 400, 300)"
            />
          </motion.g>
        </svg>
      </div>

      {/* ===== FOREGROUND: Text content ===== */}
      <div className="relative z-10 w-full max-w-lg mx-auto">
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

        {/* Divider */}
        <motion.div
          custom={1}
          initial="hidden"
          animate={active ? 'visible' : 'hidden'}
          variants={fadeUp}
          className="w-10 sm:w-12 h-px mx-auto mb-8 sm:mb-12"
          style={{ background: darkMode ? '#3A3835' : '#E5E3DE' }}
        />

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
        </motion.div>
      </div>
    </section>
  )
}
