'use client'

import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import type { ReactNode, Key } from 'react'

type Direction = 'up' | 'left' | 'right' | 'none'

const offsets: Record<Direction, { x: number; y: number }> = {
  up:    { x: 0,   y: 40 },
  left:  { x: -40, y: 0  },
  right: { x: 40,  y: 0  },
  none:  { x: 0,   y: 0  },
}

/** When ?noreveal is in the URL, skip animations (used by Figma capture). */
function useSkipReveal() {
  const [skip, setSkip] = useState(false)
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.search.includes('noreveal')) {
      setSkip(true)
    }
  }, [])
  return skip
}

export function SectionReveal({
  children,
  direction = 'up',
  delay = 0,
  className = '',
  style,
}: {
  key?: Key
  children: ReactNode
  direction?: Direction
  delay?: number
  className?: string
  style?: React.CSSProperties
}) {
  const skip = useSkipReveal()
  const offset = offsets[direction]

  if (skip) {
    return <div className={className} style={style}>{children}</div>
  }

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
      style={style}
    >
      {children}
    </motion.div>
  )
}
