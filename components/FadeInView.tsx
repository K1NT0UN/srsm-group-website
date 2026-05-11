'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  delay?: number
  className?: string
  direction?: 'up' | 'left' | 'right' | 'none'
}

export default function FadeInView({ children, delay = 0, className = '', direction = 'up' }: Props) {
  const initial =
    direction === 'up' ? { opacity: 0, y: 40 }
    : direction === 'left' ? { opacity: 0, x: -40 }
    : direction === 'right' ? { opacity: 0, x: 40 }
    : { opacity: 0 }

  const animate = direction === 'up' ? { opacity: 1, y: 0 }
    : direction === 'left' ? { opacity: 1, x: 0 }
    : direction === 'right' ? { opacity: 1, x: 0 }
    : { opacity: 1 }

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
