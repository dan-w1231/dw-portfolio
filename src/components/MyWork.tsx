'use client'
import Image from 'next/image'
import Link from 'next/link'
import { About } from '@/components/About'
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useRef, useEffect } from "react";
import { Container } from '@/components/Container'

import circleArrow from '@/images/resources/circleArrow.svg'
import NVBuyNow from '@/images/resources/deviceImages/deal.png'
import insightsImage from '@/images/resources/insights.png'
import breatheImage from '@/images/resources/breathe.png'
import fitcheckImage from '@/images/resources/fitcheck.png'
import fafmcImage from '@/images/resources/fafmc.png'

const myWork = [
  {
    title: 'Recovery',
    description:
      'Lorem description.',
    url: 'newvehicle',
    image: function BreatheImage() {
      return (
        <div className="absolute w-full h-full inset-0 flex items-center justify-center bg-[linear-gradient(#003842_33%,#001D22)]">
          <motion.div
            className="w-[496px]"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport= {{ once: false, amount: 0.25 }}
            transition={{  stiffness: 100, duration: 1.5 }}
          >
            <Image src={NVBuyNow} className="pointer-events-none" alt="" />
          </motion.div>
          <Image src={circleArrow} alt="" className="absolute w-auto md:w-[80px] xl:w-[140px] top-[8px] right-[8px]" />
        </div>
      )
    },
  },
  {
    title: 'Insights',
    description:
      'Lorem description.',
    url: 'insights',
    image: function InsightsImage() {
      return (
        <div className="absolute w-full h-full inset-0 flex items-center justify-center bg-[radial-gradient(#3C2E97_35%,#5945D6)]">
          <motion.div
            className="w-[370px]"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport= {{ once: false, amount: 0.25 }}
            transition={{  stiffness: 100, duration: 1.5 }}
          >
            <Image src={insightsImage} className="pointer-events-none" alt="" />
          </motion.div>
          <Image src={circleArrow} alt="" className="absolute w-auto md:w-[80px] xl:w-[140px] top-[8px] right-[8px]" />
        </div>
      )
    },
  },
  {
    title: 'Fitness Check',
    description:
      'Lorem description.',
    url: 'fitnesscheck',
    image: function FitnessCheckImage() {
      return (
        <div className="absolute w-full h-full inset-0 flex items-center justify-center bg-[radial-gradient(#95702A,#FEC351)]">
          <motion.div
            className="w-80"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport= {{ once: false, amount: 0.25 }}
            transition={{  stiffness: 100, duration: 1.5 }}
          >
            <Image src={fitcheckImage} className="pointer-events-none" alt="" />
          </motion.div>
          <Image src={circleArrow} alt="" className="absolute w-auto md:w-[80px] xl:w-[140px] top-[8px] right-[8px]" />
        </div>
      )
    },
  },
  {
    title: 'Dealer Platform',
    description:
      'Lorem description.',
    url: 'dealerplatform',
    image: function BreatheImage() {
      return (
        <div className="absolute w-full h-full inset-0 flex items-center justify-center bg-[linear-gradient(#003842_33%,#001D22)]">
            <motion.div
            className="w-[370px]"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport= {{ once: false, amount: 0.25 }}
            transition={{  stiffness: 100, duration: 1.5 }}
          >
            <motion.button
              whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
              }}
              whileTap={{ scale: 0.9 }}
/>
              <Image src={breatheImage} className="pointer-events-none" alt="" />
          </motion.div>
          <Image src={circleArrow} alt="" className="absolute w-auto md:w-[80px] xl:w-[140px] top-[8px] right-[8px]" />
        </div>
      )
    },
  },
  {
    title: 'Finance Comparison Calculator',
    description:
      'Lorem description.',
    url: 'financecalculator',
    image: function FinanceComparison() {
      return (
        <div className="absolute w-full h-full inset-0 flex items-center justify-center bg-[radial-gradient(#95702A,#FEC351)]">
          <motion.div
            className="w-80"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport= {{ once: false, amount: 0.25 }}
            transition={{  stiffness: 100, duration: 1.5 }}
          >
            <Image src={fitcheckImage} className="pointer-events-none" alt="" />
          </motion.div>
          <Image src={circleArrow} alt="" className="absolute w-auto md:w-[80px] xl:w-[140px] top-[8px] right-[8px]" />
        </div>
      )
    },
  },
  {
    title: 'Anutha one',
    description:
      'Lorem description.',
    url: 'anuthaone',
    image: function DealerPlatform() {
      return (
        <div className="absolute w-full h-full inset-0 flex items-center justify-center bg-[radial-gradient(#3AC0A8,#45D6BC)]">
          <motion.div
            className="w-80"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport= {{ once: false, amount: 0.25 }}
            transition={{  stiffness: 100, duration: 1.5 }}
          >
            <Image src={fafmcImage} className="pointer-events-none" alt="" />
          </motion.div>
          <Image src={circleArrow} alt="" className="absolute w-auto md:w-[80px] xl:w-[140px] top-[8px] right-[8px]" />
        </div>
      )
    },
  },
]

export function MyWork() {

  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Get the initial window width cos next
  const initialWindowWidth = typeof window !== 'undefined' ? window.innerWidth : 0;

  const x = useTransform(scrollYProgress, [0, 1], initialWindowWidth <768 ? ["0%", "0%"] : ["0px", "-2800px"]);

  // // scroll event listener
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const zindex = scrollYProgress.get() > 0.85 ? 2 : 1;
  //     // console.log('Z-Index:', zindex);
  //     // console.log('Scroll Y Progress:', scrollYProgress.get());
  //   };

  // window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, [scrollYProgress]);

  // const horizontalListThreshold = 0.85;
  // const aboutThreshold = 0.85;

  // const scrollPosition = scrollYProgress.get();
  // const horizontalListZIndex = scrollPosition < horizontalListThreshold ? 99 : 1;
  // const aboutZIndex = scrollPosition > aboutThreshold ? 99 : 1;

  return (
    <AnimatePresence>
      <motion.div key={2} exit={{ opacity: 0, y: -30}} >
        <section
          id="myWork"
          aria-labelledby="myWork-title"
          ref={targetRef}
          className="relative mt-2 xs:my-4 md:h-[200vh] lg:h-[300vh]"  
        >
          <Container 
            size="lg" 
            className="relative z-96 w-full md:sticky md:top-0 flex items-center overflow-hidden pb-20 -mb-20 md:pt-20 md:-mt-20"
            // style={{ zIndex: horizontalListZIndex }}
            >
            <motion.ol
              style={{ x }}
              role="list"
              className="w-full ease-[cubic-bezier(0.16,0.84,0.44,1)] duration-[600ms] md:max-w-screen-2xl grid md:grid-flow-col md:grid-cols-[repeat(auto-fill,_minmax(496px,_1fr))] md:auto-cols-[minmax(496px,_1fr)] grid-cols-1 gap-y-2 xs:gap-y-4 md:gap-x-4 md:-my-16 md:-mx-4 md:py-16 2xl:px-4"
            >
              {myWork.map((work) => (
                <motion.div
                  key="workContainer"
                  className="md:snap-start md:scroll-mx-0 select-none"
                  initial={{ scale: 1, y: 0 }}
                  whileHover={{ scale: 1.01, y: -2 }}
                  whileTap={{ scale: 0.99, y: 0 }}
                  transition={{ duration: 0.2 }}
                > 
                  <Link href={`/${work.url}/`} className="select-none">
                    <li
                      key={work.title}
                      className="items-center gap-8 rounded-4xl md:rounded-5xl xl:rounded-6xl shadow-lg md:grid-cols-3"
                    >
                      <div key="workImageWrapper" className="relative h-[370px] md:h-[496px] sm:h-[496px] w-full md:w-[496px] overflow-hidden rounded-4xl md:rounded-5xl xl:rounded-6xl shadow-lg sm:h-60">
                        <work.image />
                      </div>
                    </li>
                  </Link>
                </motion.div>
              ))}
            </motion.ol>
          </Container>
          <motion.div
                className="sticky top-[176px] md:top-[592px] z-50"
                // style={{ zIndex: aboutZIndex }}
                initial={{ opacity: 0, y: 50 }}
                viewport= {{ once: true, amount: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{  stiffness: 70, duration: 1.5, staggerChildren: 0.5 }}
              >
              <About />
          </motion.div>
        </section>
      </motion.div>
    </AnimatePresence>
  )
}