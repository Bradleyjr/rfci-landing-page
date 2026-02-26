'use client'

import { motion } from 'motion/react'
import type { ReactNode, Key } from 'react'

type Direction = 'up' | 'left' | 'right' | 'none'

const offsets: Record<Direction, { x: number; y: number }> = {
  up:    { x: 0,   y: 40 },
  left:  { x: -40, y: 0  },
  right: { x: 40,  y: 0  },
  none:  { x: 0,   y: 0  },
}

export function SectionReveal({
  children,
  direction = 'up',
  delay = 0,
  className = '',
}: {
  key?: Key
  children: ReactNode
  direction?: Direction
  delay?: number
  className?: string
}) {
  const offset = offsets[direction]
  return (
    <motion.div
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
