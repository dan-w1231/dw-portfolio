'use client'
import '@/styles/tailwind.css'
import { usePathname } from 'next/navigation'
import FrozenRoute from '@/components/HOC/FrozenRoute'
import { motion, AnimatePresence } from 'framer-motion'
import { ThemeProvider } from '@/components/HOC/ThemeContext'

export default function Template({ 
  children, 
}: { 
  children: React.ReactNode 
}) {
  const pathname = usePathname()
  return (
    
    <AnimatePresence mode="wait">
      <motion.div 
        key={pathname}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 70, delay: 0.3, duration: 1.5 }}
        exit={{ opacity: 0, y: 30 }}
        >
          <FrozenRoute>{children}</FrozenRoute>
      </motion.div>
    </AnimatePresence>
  )
}