'use client'
import { useRef } from "react";
import { SectionTitle } from '@/components/SectionTitle'
import { Hero } from '@/components/Hero'
import { motion } from "framer-motion"
import { MyWork } from '@/components/MyWork'

export default function Home() {
  const constraintRef = useRef<HTMLDivElement | null>(null);
  return (
    <>
      <motion.div 
        id="main" 
        key="homePage"
        className="relative w-screen mx-auto"
        >
        <div className="relative mx-auto mt-4 xs:mt-8 xl:mt-8" key={4}>
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
        </div>
      </motion.div>
    </>
  )
}
