import { motion } from 'framer-motion'
import StackedCards from './StackedCards'

const catImages = [
  { src: '/images/my%20cat/b412fd84-0036-4c88-9911-bfff09b37961.jpg', alt: 'Con báo nhà anh 1' },
  { src: '/images/my%20cat/bd8395e6-8dee-4e5c-a8be-5e25c962a4f5.jpg', alt: 'Con báo nhà anh 2' },
  { src: '/images/my%20cat/be16946a-8b7e-4f71-9b66-2d9f95a391dc.jpg', alt: 'Con báo nhà anh 3' },
  { src: '/images/my%20cat/c925c79a-6b0b-49ae-bc71-3051030d6af0.jpg', alt: 'Con báo nhà anh 4' },
]

export default function Room04({ darkMode, active }) {
  const fadeUp = {
    hidden: { opacity: 0, y: 25 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.2 + i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
  }

  return (
    <section className="snap-section" id="room-04">
      <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto px-4 sm:px-6">
        {/* Title & Text */}
        <motion.h2
          custom={0} initial="hidden" animate={active ? 'visible' : 'hidden'} variants={fadeUp}
          className="font-heading text-3xl sm:text-4xl lg:text-5xl font-light tracking-wide text-center w-full"
          style={{ color: darkMode ? '#E8E6E1' : '#333333' }}
        >
          Btw giới thiệu với em con báo nhà anh 🐾
        </motion.h2>

        <motion.div
          custom={1} initial="hidden" animate={active ? 'visible' : 'hidden'} variants={fadeUp}
          className="w-8 sm:w-12 h-px my-4 sm:my-6 mx-auto"
          style={{ background: darkMode ? '#3A3835' : '#E5E3DE' }}
        />

        {/* Cat Gallery — Stacked Cards */}
        <motion.div
          custom={2} initial="hidden" animate={active ? 'visible' : 'hidden'} variants={fadeUp}
        >
          <StackedCards images={catImages} darkMode={darkMode} />
        </motion.div>

        <motion.p
          custom={3} initial="hidden" animate={active ? 'visible' : 'hidden'} variants={fadeUp}
          className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl font-heading italic tracking-wide text-center shrink-0"
          style={{ color: darkMode ? '#D4B896' : '#C4A882' }}
        >
          "Xinh nhỉ!!!"
        </motion.p>
      </div>
    </section>
  )
}
