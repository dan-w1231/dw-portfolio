'use client'
import { Footer } from '@/components/Footer'
import { SectionTitle } from '@/components/SectionTitle'
import { GridPattern } from '@/components/GridPattern'
import { FlowChart } from '@/components/FlowChart'
import { Hero } from '@/components/Hero'
import { motion } from "framer-motion"
import { NavBar } from '@/components/NavBar'
import { MyWork } from '@/components/MyWork'

export default function Home() {
  return (
    <> 
      <NavBar />
      <div id="main" className="relative w-screen mx-auto">
        <div className="absolute overflow-hidden w-1/3 top-[-40px] left-0 h-96 text-midnight-900/10">
          <GridPattern x="20%" />
        </div>
        <div className="absolute overflow-hidden w-3/4 lg:w-1/4 top-[-40px] right-0 lg:right-0 text-midnight-900/10 [mask-image:linear-gradient(rgba(255,255,255,0.5),transparent)]">
          <div className="right-[-90px]">
            <FlowChart size="100%" />
          </div>
        </div>
        <div className="relative mx-auto mt-2 xs:mt-4 xl:mt-14">
          <motion.div
            initial={{ opacity: 0, y: 50, rotate: 4 }}
            viewport= {{ once: true, amount: 0 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ type: "spring", stiffness: 70, duration: 1.5, staggerChildren: 0.5 }}
          >
            <Hero />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            viewport= {{ once: true, amount: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 70, delay: 1.4, duration: 1.5, staggerChildren: 0.5 }}
          >
            <div className="absolute h-[1980px] top-4 mt-96">
              <SectionTitle />
            </div>
            <MyWork />
          </motion.div>

          {/* <motion.div
            className="ease-[cubic-bezier(0.16,0.84,0.44,1)] duration-[600ms]"
            style={{ y }}
            initial={{ y: -3313 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100, duration: 1.5, staggerChildren: 0.5 }}
          >
            <About />
          </motion.div> */}

          <Footer />
        </div>
      </div>
    </>
  )
}
