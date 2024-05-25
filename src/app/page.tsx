'use client'
import { Footer } from '@/components/Footer'
import { SectionTitle } from '@/components/SectionTitle'
import { GridPattern } from '@/components/GridPattern'
import { FlowChart } from '@/components/FlowChart'
import { Hero } from '@/components/Hero'
import { motion, AnimatePresence } from "framer-motion"
import { MyWork } from '@/components/MyWork'

export default function Home() {
  return (
    <>
      <div id="main" className="relative w-screen mx-auto">
        <div key="gridPattern" className="absolute overflow-hidden w-1/3 top-[-40px] left-0 h-96 text-midnight-900/10">
          <GridPattern x="20%" />
        </div>
        <div key="flowChartPattern" className="absolute overflow-hidden w-3/4 lg:w-1/4 top-[-40px] right-0 lg:right-0 text-midnight-900/10 [mask-image:linear-gradient(rgba(255,255,255,0.5),transparent)]">
          <div className="right-[-90px]">
            <FlowChart size="100%" />
          </div>
        </div>
        <div className="relative mx-auto mt-2 xs:mt-4 xl:mt-14">
          <AnimatePresence>
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
      </div>
    </>
  )
}
