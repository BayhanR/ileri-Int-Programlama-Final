"use client"

import { motion } from 'framer-motion'
import HomePage from '@/components/HomePage'

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <HomePage />
    </motion.div>
  )
}
