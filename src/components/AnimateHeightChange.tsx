'use client'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'

interface AnimateHeightChangeProps {
  children: React.ReactNode
  className?: string
}
export const AnimateHeightChange: React.FC<AnimateHeightChangeProps> = ({ children, className }) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [height, setHeight] = useState<number | 'auto'>('auto')

  useEffect(() => {
    if (containerRef.current) {
      const resizeObserver = new ResizeObserver((entries) => {
        // We only have one entry, so we can use entries[0].
        const observedHeight = entries[0].contentRect.height
        setHeight(observedHeight)
      })

      resizeObserver.observe(containerRef.current)

      return () => {
        // Cleanup the observer when the component is unmounted
        resizeObserver.disconnect()
      }
    }
  }, [])

  // useEffect(() => {
  //   const handleResize = () => {
  //     if (window.innerWidth < 768) {
  //       setHeight('auto'); // Set height to 'auto' for small viewports
  //     }
  //   };

  //   // Initial check
  //   handleResize();

  //   // Listen for window resize events
  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     // Cleanup the event listener when the component is unmounted
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);

  return (
    <motion.div className={clsx(className, 'w-full')} style={{ height }} animate={{ height }} transition={{ type: "spring", duration: 1.5 }}>
      <div ref={containerRef}>{children}</div>
    </motion.div>
  )
}