import { motion } from 'framer-motion'

export default function SecretButton({ onClick }) {
  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 2 }}
      className="group fixed bottom-6 left-6 sm:bottom-8 sm:left-8 z-50 flex items-center gap-3 cursor-pointer bg-transparent border-none p-0"
      aria-label="Secret croissant"
      id="secret-croissant-btn"
    >
      {/* Container */}
      <div className="relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/5 dark:bg-white/10 backdrop-blur-md shadow-sm hover:shadow-md transition-all duration-300">
        
        {/* Wiggling Emoji */}
        <motion.span 
          animate={{ rotate: [0, 15, -5, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', repeatDelay: 1 }}
          className="text-lg sm:text-xl group-hover:scale-110 transition-transform"
        >
          🥐
        </motion.span>
        
        {/* Pulsing Ring */}
        <span 
          className="absolute inset-0 rounded-full border border-[#C4A882] animate-ping" 
          style={{ animationDuration: '3s', opacity: 0.4 }}
        ></span>
      </div>

      {/* Hover Text Hint */}
      <span className="text-[10px] tracking-widest uppercase opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 font-medium text-[#C4A882] pointer-events-none">
        Secret
      </span>
    </motion.button>
  )
}
