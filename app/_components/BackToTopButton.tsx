'use client'

import { motion, AnimatePresence } from 'motion/react'
import { ArrowUp } from '@phosphor-icons/react'

export function BackToTopButton({ visible }: { visible: boolean }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-50 w-10 h-10 bg-white/90 backdrop-blur-sm text-rfci-black/60 flex items-center justify-center shadow-md border border-black/5 hover:bg-rfci-blue hover:text-white hover:border-rfci-blue transition-colors duration-200"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
