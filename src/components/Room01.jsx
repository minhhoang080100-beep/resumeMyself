import { motion } from 'framer-motion'
import StackedCards from './StackedCards'

const aboutImages = [
  { src: '/images/about%20me/337022bf-ad74-4c73-8f7f-3b80a8634681.jpg', alt: 'Kỷ niệm 1' },
  { src: '/images/about%20me/65840af2-3d5b-4a2e-8e62-5016cd042b16.jpg', alt: 'Kỷ niệm 2' },
  { src: '/images/about%20me/813647a7-de7a-4daf-991e-b440405be0b8.jpg', alt: 'Kỷ niệm 3' },
  { src: '/images/about%20me/82f3e445-7c0d-40ca-ac70-45b701795983.jpg', alt: 'Kỷ niệm 4' },
  { src: '/images/about%20me/c33db2bc-ca3b-4e89-871c-63268ad795e5.jpg', alt: 'Kỷ niệm 5' },
]

export default function Room01({ darkMode, active }) {
  const fadeUp = {
    hidden: { opacity: 0, y: 25 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, delay: 0.15 + i * 0.18, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
  }

  return (
    <section className="snap-section" id="room-01">
      <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto px-4 sm:px-6">

        {/* ===== TEXT CONTENT (TOP) ===== */}
        <motion.h2
          custom={0} initial="hidden" animate={active ? 'visible' : 'hidden'} variants={fadeUp}
          className="font-heading text-3xl sm:text-4xl lg:text-5xl font-light tracking-wide text-center"
          style={{ color: darkMode ? '#E8E6E1' : '#333333' }}
        >
          Một chút về anh
        </motion.h2>

        <motion.p
          custom={1} initial="hidden" animate={active ? 'visible' : 'hidden'} variants={fadeUp}
          className="font-heading text-xs sm:text-sm italic mt-1 sm:mt-2 tracking-wide text-center"
          style={{ color: darkMode ? '#A09D96' : '#999999' }}
        >
          About me
        </motion.p>

        <motion.div
          custom={2} initial="hidden" animate={active ? 'visible' : 'hidden'} variants={fadeUp}
          className="w-10 sm:w-12 h-px my-5 sm:my-6"
          style={{ background: darkMode ? '#3A3835' : '#E5E3DE' }}
        />

        <motion.p
          custom={3} initial="hidden" animate={active ? 'visible' : 'hidden'} variants={fadeUp}
          className="text-sm sm:text-base leading-relaxed sm:leading-loose font-light text-center max-w-2xl px-2 sm:px-4 mb-10 sm:mb-14"
          style={{ color: darkMode ? '#A09D96' : '#666666' }}
        >
          Anh thích những khoảng lặng và sự đơn giản. Thay vì những nơi
          ồn ào, anh thường chọn cho mình một góc yên tĩnh trong phố với một tách cà phê
          hoặc một chiếc bánh ngọt.
        </motion.p>

        {/* ===== STACKED CARDS ===== */}
        <motion.div
          custom={4} initial="hidden" animate={active ? 'visible' : 'hidden'} variants={fadeUp}
        >
          <StackedCards images={aboutImages} darkMode={darkMode} />
        </motion.div>

      </div>
    </section>
  )
}
