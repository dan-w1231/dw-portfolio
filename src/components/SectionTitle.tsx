'use client'
import Image from 'next/image'
// import { motion, useScroll, useTransform } from "framer-motion"
import { motion } from "framer-motion"
// import { useRef, useEffect } from "react";
import arrow from '@/images/resources/arrowDown.svg'

export function SectionTitle() {

  // const targetRef = useRef<HTMLDivElement | null>(null);
  // const { scrollYProgress } = useScroll({
  //   target: targetRef,
  // });

  // // Get the initial window width cos next
  // const initialWindowWidth = typeof window !== 'undefined' ? window.innerWidth : 0;

  // // scroll event listener
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const threshold = scrollYProgress.get() < 0.3 ? 1 : 0;
  //     console.log('thresholdPassed', threshold);
  //     console.log('Scroll Y Progress:', scrollYProgress.get());
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, [scrollYProgress]);

  // const scrollThreshold = 0.30;
  // const scrollPosition = scrollYProgress.get();
  // const arrowRotation = scrollPosition < scrollThreshold ? -90 : 0;
  
  return (
    <motion.div
      id="sectionPill"
      className="sticky left-0 top-16 md:top-[210px] md:mt-[160px] lg:mt-[102px] px-4 py-12 bg-[#BDCACE] flex items-center justify-center rounded-r-[46px] overflow-hidden z-[99]"
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
          className="font-display mr-[-2px] text-midnight-700 text-lg tracking-tight leading-5 [writing-mode:vertical-lr]">
            Portfolio
        </h2>
        <motion.div
          id="sectionPillIcon"
          // style={{ rotateZ: arrowRotation }}
          className="flex flex-col justify-center items-center"
        >
          <Image src={arrow} alt="" className="md:-rotate-90" />
        </motion.div>
      </div>
    </motion.div>
  )
}