import { motion } from 'framer-motion'

const hobbies = [
  {
    icon: '🏸',
    title: 'Thể thao',
    desc: 'Cầu lông, bóng bàn, và chạy bộ. Không giỏi lắm nhưng thích vận động — chủ yếu để đầu óc thoáng hơn.',
  },
  {
    icon: '🎧',
    title: 'Âm nhạc',
    desc: 'Anh nghe khá nhiều dòng nhạc, tùy vào tâm trạng. Nhưng Big Bang và One Ok Rock luôn là hai cái tên nằm trong danh sách phát thường xuyên nhất.',
  },
  {
    icon: '🥐',
    title: 'Ăn uống',
    desc: 'Anh thường đi tìm và khám phá những tiệm bánh ngọt ở những nơi anh đến.',
  },
  {
    icon: '✈️',
    title: 'Du lịch',
    desc: 'Anh thích tự đi du lịch kiểu khám phá hơn là chạy theo những nơi đông đúc',
  },
]

export default function Room03({ darkMode, active }) {
  const fadeUp = {
    hidden: { opacity: 0, y: 25 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.2 + i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
  }

  const cardBg = darkMode
    ? 'rgba(255,255,255,0.03)'
    : 'rgba(0,0,0,0.015)'
  const cardBorder = darkMode ? '#3A3835' : '#E5E3DE'

  return (
    <section className="snap-section" id="room-03">
      <div className="w-full max-w-3xl mx-auto px-4 sm:px-6">
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
            Sở thích
          </h2>
          <p
            className="font-heading text-xs sm:text-sm italic mt-2 tracking-wide"
            style={{ color: darkMode ? '#A09D96' : '#999999' }}
          >
            Interests
          </p>
        </motion.div>

        {/* Editorial Index List */}
        <div className="flex flex-col mt-4 sm:mt-8 border-t border-opacity-30" style={{ borderColor: darkMode ? '#3A3835' : '#E5E3DE' }}>
          {hobbies.map((hobby, i) => (
            <motion.div
              key={hobby.title}
              custom={i + 1}
              initial="hidden"
              animate={active ? 'visible' : 'hidden'}
              variants={fadeUp}
              className="group flex flex-col sm:flex-row sm:items-start justify-between py-6 sm:py-8 border-b border-opacity-30 transition-colors duration-500 hover:bg-black/[0.02] dark:hover:bg-white/[0.02]"
              style={{ borderColor: darkMode ? '#3A3835' : '#E5E3DE' }}
            >
              {/* Left side: Number + Title */}
              <div className="flex items-start gap-4 sm:gap-6 sm:w-1/3 px-2 sm:px-4">
                <span
                  className="text-[10px] sm:text-xs font-medium tracking-widest opacity-30 mt-1"
                  style={{ color: darkMode ? '#E8E6E1' : '#333333' }}
                >
                  0{i + 1}
                </span>
                <h3
                  className="font-heading text-lg sm:text-xl md:text-2xl font-light uppercase tracking-[0.2em] group-hover:translate-x-2 transition-transform duration-500"
                  style={{ color: darkMode ? '#E8E6E1' : '#333333' }}
                >
                  {hobby.title}
                </h3>
              </div>

              {/* Right side: Description + Icon */}
              <div className="sm:w-2/3 flex items-start gap-4 mt-4 sm:mt-0 px-2 sm:px-4 pl-10 sm:pl-4">
                <p
                  className="flex-1 text-sm sm:text-base leading-relaxed font-light mt-0.5"
                  style={{ color: darkMode ? '#C4C2BC' : '#666666' }}
                >
                  {hobby.desc}
                </p>
                <span className="text-2xl sm:text-3xl grayscale group-hover:grayscale-0 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 shrink-0">
                  {hobby.icon}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
