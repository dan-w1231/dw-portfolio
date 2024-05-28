'use client'
import Image from 'next/image'
import Link from 'next/link'
import { About } from '@/components/About'
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useRef, useEffect } from "react";
import { Container } from '@/components/Container'

import circleArrow from '@/images/resources/circleArrow.svg'
import arrowTopRight from '@/images/resources/arrowTopRight.svg'
import NVDeal from '@/images/resources/deviceImages/yourDealTradein.png'
import insightsImage from '@/images/resources/insights.png'
import breatheImage from '@/images/resources/breathe.png'
import fitcheckImage from '@/images/resources/fitcheck.png'
import fafmcImage from '@/images/resources/fafmc.png'
import juhuAutoImage from '@/images/resources/deviceImages/juhuCover2.png'

// CURRENTLY IDEAL FOR ~6 IMAGES

const myWork = [
  {
    title: 'NewVehicle',
    description:
      'Online retailing tools for dealership websites, and a secure checkout experience.',
    url: 'newvehicle',
    type: 'Case Study',
    image: function NVBuyNow() {
      return (
        <div className="absolute w-full h-full inset-0 flex items-center justify-center bg-[radial-gradient(#202A37_16%,#253243)]">
          <motion.div
            className="w-[496px]"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport= {{ once: false, amount: 0.25 }}
            transition={{  stiffness: 100, duration: 1.5 }}
          >
            <Image src={NVDeal} className="pointer-events-none" alt="" />
          </motion.div>
        </div>
      )
    },
  },
  {
    title: 'Juhu Auto',
    description:
      'Vehicle marketplace for Germany.',
    url: 'juhuauto',
    type: 'Case Study',
    image: function JuhuAutoCover() {
      return (
        <div className="absolute w-full h-full inset-0 flex items-center justify-center bg-[#C3E72F]">
          <motion.div
            className="w-100"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport= {{ once: false, amount: 0.25 }}
            transition={{  stiffness: 100, duration: 1.5 }}
          >
            <Image src={juhuAutoImage} className="pointer-events-none w-full" alt="" />
          </motion.div>
        </div>
      )
    },
  },
  {
    title: 'Insights',
    description:
      'Lorem description.',
    url: 'insights',
    type: 'Case Study',
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
        </div>
      )
    },
  },
  {
    title: 'Fitness Check',
    description:
      'Lorem description.',
    url: 'fitnesscheck',
    type: 'Gallery',
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
        </div>
      )
    },
  },
  {
    title: 'Dealer Platform',
    description:
      'Lorem description.',
    url: 'dealerplatform',
    type: 'Gallery',
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
        </div>
      )
    },
  },
  {
    title: 'Finance Comparison Calculator',
    description:
      'Lorem description.',
    url: 'financecalculator',
    type: 'Gallery',
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
        </div>
      )
    },
  },
  {
    title: 'Anutha one',
    description:
      'Lorem description.',
    url: 'anuthaone',
    type: 'Gallery',
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
        </div>
      )
    },
  },
]

export function MyWork() {

  const workContainerVariants = ({
    default: { scale: 1, y: 0 },
    hover: { scale: 0.98, y: -2 },
  })

  const workArrowVariants = ({
    hover: { 
      backgroundColor: 'rgba(255,255,255,1)',
      transform: 'scale(0.98)',
       },
  })

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
              className="w-full xl:ease-[cubic-bezier(0.16,0.84,0.44,1)] xl:duration-[600ms] md:max-w-screen-2xl grid md:grid-flow-col md:grid-cols-[repeat(auto-fill,_minmax(496px,_1fr))] md:auto-cols-[minmax(496px,_1fr)] grid-cols-1 gap-y-2 xs:gap-y-4 md:gap-x-4 md:-my-16 md:-mx-4 md:py-16 2xl:px-4"
            >
              {myWork.map((work) => (
                <motion.div
                  key="workContainer"
                  className="md:snap-start md:scroll-mx-0 select-none"
                  variants={workContainerVariants}
                  whileHover="hover"
                  whileTap={{ scale: 0.97, y: 0 }}
                  transition={{ duration: 0.2 }}
                > 
                  <Link href={`/${work.url}/`} className="select-none">
                    <li
                      key={work.title}
                      className="items-center gap-8 rounded-4xl md:rounded-5xl xl:rounded-6xl shadow-lg md:grid-cols-3"
                    >
                      <div key="workImageWrapper" className="relative flex justify-center h-[370px] md:h-[496px] sm:h-[496px] w-full md:w-[496px] overflow-hidden rounded-4xl md:rounded-5xl xl:rounded-6xl shadow-lg sm:h-60">
                        <work.image />
                        <motion.div id="proceedArrow" variants={workArrowVariants} className="absolute top-2 right-2 flex items-center justify-center w-[52px] h-[52px] md:w-[80px] md:h-[80px] xl:w-[140px] xl:h-[140px] bg-white bg-opacity-60 backdrop-blur-sm scale-100 rounded-full">
                          <Image src={arrowTopRight} alt="" className="absolute w-auto xl:w-[40px]" />
                        </motion.div>
                        <motion.div id="typeTag"className="absolute bottom-6 flex items-center justify-center px-4 py-2 bg-white backdrop-blur-sm rounded-full font-display text-lg tracking-tight font-bold text-midnight-900 text-center">
                          {work.type}
                        </motion.div>
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