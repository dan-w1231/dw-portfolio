'use client'
import { motion } from "framer-motion"
import { Arrow } from '@/components/Arrow'

export function SectionTitle() {
  
  return (
    <motion.div
      id="sectionPill"
      className="sticky left-0 top-28 md:top-[210px] md:mt-[160px] lg:mt-[102px] px-4 py-12 bg-[#BDCACE] dark:bg-[#1B1B27] flex items-center justify-center rounded-r-[46px] overflow-hidden z-[99]"
      initial={{ opacity: 0, x: -90 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 2.2, duration: 1 }}
      // ref={targetRef}
    >
      <div
        id="sectionPillTitle"
        className="flex flex-col gap-2 justify-center items-center"
      >
        <h2
          id="sectionPillText"
          className="font-display mr-[-2px] text-midnight-700 dark:text-ice-700 text-lg tracking-tight leading-5 [writing-mode:vertical-lr]">
            Portfolio
        </h2>
        <motion.div
          id="sectionPillIcon"
          // style={{ rotateZ: arrowRotation }}
          className="flex flex-col justify-center items-center"
        >
          <Arrow className="md:-rotate-90 text-midnight-700 dark:text-ice-600" />
        </motion.div>
      </div>
    </motion.div>
  )
}