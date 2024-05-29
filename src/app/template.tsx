'use client'
import '@/styles/tailwind.css'
import { usePathname } from 'next/navigation'
import FrozenRoute from '@/components/HOC/FrozenRoute'
import { motion, AnimatePresence } from 'framer-motion'


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
        initial={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 80, duration: 1.8 }}
        exit={{ opacity: 0, y: 50 }}
        >
        <FrozenRoute>{children}</FrozenRoute>
      </motion.div>
    </AnimatePresence>
  )
}