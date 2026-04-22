import { motion } from 'framer-motion'

export default function Room04({ darkMode, active }) {
  const fadeUp = {
    hidden: { opacity: 0, y: 25 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.2 + i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
  }

  const catImages = [
    'b412fd84-0036-4c88-9911-bfff09b37961.jpg',
    'bd8395e6-8dee-4e5c-a8be-5e25c962a4f5.jpg',
    'be16946a-8b7e-4f71-9b66-2d9f95a391dc.jpg',
    'c925c79a-6b0b-49ae-bc71-3051030d6af0.jpg'
  ]

  return (
    <section className="snap-section" id="room-04">
      <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto px-4 sm:px-6">
        {/* Title & Text */}
        <motion.h2
          custom={0} initial="hidden" animate={active ? 'visible' : 'hidden'} variants={fadeUp}
          className="font-heading text-3xl sm:text-4xl lg:text-5xl font-light tracking-wide text-center mt-12"
          style={{ color: darkMode ? '#E8E6E1' : '#333333' }}
        >
          Btw giới thiệu với em con báo nhà anh 🐾
        </motion.h2>

        <motion.div
          custom={1} initial="hidden" animate={active ? 'visible' : 'hidden'} variants={fadeUp}
          className="w-8 sm:w-12 h-px my-6 sm:my-8"
          style={{ background: darkMode ? '#3A3835' : '#E5E3DE' }}
        />

        {/* Cat Gallery */}
        <motion.div
          custom={3} initial="hidden" animate={active ? 'visible' : 'hidden'} variants={fadeUp}
          className="w-full max-w-5xl"
        >
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 px-4 sm:px-8">
            {catImages.map((src, i) => (
              <div
                key={i}
                className="flex h-[200px] sm:h-[280px] md:h-[360px] rounded-lg overflow-hidden shadow-lg border border-white/5 bg-gray-100/5"
              >
                <img
                  src={`/images/my%20cat/${src}`}
                  alt={`Con báo nhà anh ${i + 1}`}
                  className="w-auto h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            ))}
          </div>
        </motion.div>

        <motion.p
          custom={4} initial="hidden" animate={active ? 'visible' : 'hidden'} variants={fadeUp}
          className="mt-8 sm:mt-12 text-3xl sm:text-4xl md:text-5xl font-heading italic tracking-wide text-center"
          style={{ color: darkMode ? '#D4B896' : '#C4A882' }}
        >
          "Xinh nhỉ!!!"
        </motion.p>
      </div>
    </section>
  )
}
