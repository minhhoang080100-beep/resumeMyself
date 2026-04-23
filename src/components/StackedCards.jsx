import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * StackedCards — Tinder-style stacked photo cards.
 *
 * Props:
 *   images   – [{ src, alt }]
 *   darkMode – boolean
 */
export default function StackedCards({ images, darkMode }) {
  const [stack, setStack] = useState(() => images.map((_, i) => i))
  const [exitDir, setExitDir] = useState(1)

  const dismiss = useCallback(() => {
    setExitDir(Math.random() > 0.5 ? 1 : -1)
    setStack((prev) => {
      if (prev.length <= 1) return images.map((_, i) => i) // loop back
      return prev.slice(1)
    })
  }, [images])

  // Visible cards (max 3 stacked)
  const visible = stack.slice(0, 3)

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Card stack */}
      <div
        className="relative cursor-pointer select-none"
        style={{ width: 'min(72vw, 340px)', height: 'min(96vw, 440px)' }}
        onClick={dismiss}
      >
        <AnimatePresence mode="popLayout">
          {visible.map((imgIndex, stackPos) => {
            const img = images[imgIndex]
            const isTop = stackPos === 0

            // Subtle offsets for depth
            const offsetY = stackPos * 10
            const scale = 1 - stackPos * 0.05
            const rotate = stackPos === 1 ? 3 : stackPos === 2 ? -2 : 0
            const zIndex = 30 - stackPos

            return (
              <motion.div
                key={imgIndex}
                className="absolute inset-0 rounded-xl overflow-hidden shadow-2xl"
                style={{
                  zIndex,
                  border: `1px solid ${darkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)'}`,
                  transformOrigin: 'center bottom',
                }}
                initial={isTop ? { opacity: 0, scale: 0.9, y: -30 } : false}
                animate={{
                  y: offsetY,
                  scale,
                  rotate,
                  opacity: stackPos === 2 ? 0.6 : stackPos === 1 ? 0.85 : 1,
                }}
                exit={{
                  x: exitDir * 350,
                  rotate: exitDir * 25,
                  opacity: 0,
                  transition: { duration: 0.5, ease: [0.32, 0.72, 0, 1] },
                }}
                transition={{
                  duration: 0.45,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                whileHover={isTop ? { scale: 1.02, rotate: -1 } : {}}
                whileTap={isTop ? { scale: 0.97 } : {}}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-contain"
                  style={{ background: darkMode ? '#242424' : '#F0EFE9' }}
                  draggable={false}
                />

                {/* Subtle gradient overlay on back cards */}
                {stackPos > 0 && (
                  <div
                    className="absolute inset-0"
                    style={{
                      background: darkMode
                        ? 'rgba(26,26,26,0.25)'
                        : 'rgba(249,249,248,0.2)',
                    }}
                  />
                )}
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>

      {/* Dots indicator */}
      <div className="flex items-center gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            className="rounded-full transition-all duration-400"
            style={{
              width: stack[0] === i ? 18 : 5,
              height: 5,
              borderRadius: stack[0] === i ? 3 : '50%',
              background:
                stack[0] === i
                  ? darkMode ? '#D4B896' : '#C4A882'
                  : darkMode ? '#3A3835' : '#E5E3DE',
            }}
          />
        ))}
      </div>

      {/* Hint text */}
      <p
        className="text-[10px] sm:text-xs tracking-widest uppercase opacity-40 font-light"
        style={{ color: darkMode ? '#A09D96' : '#999999' }}
      >
        Nhấn để xem tiếp →
      </p>
    </div>
  )
}
