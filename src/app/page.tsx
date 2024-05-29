'use client'
import { useRef } from "react";
import { SectionTitle } from '@/components/SectionTitle'
import { GridPattern } from '@/components/GridPattern'
import { FlowChart } from '@/components/FlowChart'
import { Hero } from '@/components/Hero'
import { motion, AnimatePresence } from "framer-motion"
import { MyWork } from '@/components/MyWork'

export default function Home() {
  const constraintRef = useRef<HTMLDivElement | null>(null);
  return (
    <>
      <div id="main" className="relative w-screen mx-auto">
        <div className="relative mx-auto mt-2 xs:mt-4 xl:mt-14" key={4}>
          <AnimatePresence mode="wait">
            <motion.div
              key="contentHero"
              initial={{ opacity: 0, y: 50, rotate: 0 }}
              viewport= {{ once: true, amount: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ type: "spring", stiffness: 70, duration: 1.5 }}
              exit={{ opacity: 0, y: 50, rotate: 0 }}
            >
              <Hero />
            </motion.div>
            <motion.div
              key="contentWork"
              initial={{ opacity: 0, y: 50 }}
              viewport= {{ once: true, amount: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 70, delay: 1.4, duration: 1.5, staggerChildren: 0.5 }}
              exit={{ opacity: 0, y: 50 }}
            >
              <div className="absolute h-[1980px] md:h-[1130px] top-4 md:top-[1rem] mt-96 md:mt-[24rem] z-[97]">
                <SectionTitle />
              </div>
                <MyWork />
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/*
        // Bouncy ball
        <div id="ballContainer" className="fixed top-0 left-0 w-full h-full z-[99]" ref={constraintRef}>
          <motion.div
            id="ball"
            className="absolute bottom-10 left-20 w-10 h-10 rounded-full bg-blurple"
            drag
            dragConstraints={constraintRef}
            dragMomentum={true}
            dragElastic={0}
            dragTransition={{ bounceStiffness: 500, bounceDamping: 10 }}>
          </motion.div>
        </div> 
        */}
      </div>
    </>
  )
}
