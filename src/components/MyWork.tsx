'use client'
import Image from 'next/image';
import Link from 'next/link';
import { ContactBox } from '@/components/ContactBox';
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Container } from '@/components/Container';
import { Arrow } from '@/components/Arrow';
import NVDeal from '@/images/resources/deviceImages/yourDealTradein.png';
import insightsImage from '@/images/resources/insights.png';
import JDEFRecord from '@/images/resources/deviceImages/JDEF.png';
import breatheImage from '@/images/resources/breathe.png';
import fitcheckImage from '@/images/resources/fitcheckp6.png';
import fafmcImage from '@/images/resources/fafmc.png';
import juhuAutoImage from '@/images/resources/deviceImages/juhuCover2.png';
import dealerPlatform from '@/images/resources/deviceImages/dealerPlatform.png';

// CURRENTLY IDEAL FOR ~6 IMAGES

const myWork = [
  {
    title: 'NewVehicle',
    description:
      'Online retailing tools for dealership websites, and a secure checkout experience.',
    url: 'newvehicle',
    type: 'Case Study',
    disabled: false,
    image: function NVBuyNow() {
      return (
        <div className="absolute w-full h-full inset-0 flex items-center justify-center bg-[radial-gradient(#202A37_16%,#253243)] dark:bg-opacity-50">
          <motion.div
            className="w-[496px]"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport= {{ once: false, amount: 0.25 }}
            transition={{ duration: 1.5 }}
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
    disabled: false,
    image: function JuhuAutoCover() {
      return (
        <motion.div layout className="absolute w-full h-full inset-0 flex items-center justify-center bg-[#C3E72F]">
          <motion.div layout
            className="w-100"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport= {{ once: false, amount: 0.25 }}
            transition={{ duration: 1.5 }}
          >
            <Image src={juhuAutoImage} className="pointer-events-none w-full" alt="" />
          </motion.div>
        </motion.div>
      )
    },
  },
  {
    title: 'FitnessCheck',
    description:
      'A guided maximal workout that gives you a picture of your current health and fitness levels.',
    url: 'fitnesscheck',
    type: 'Case Study',
    disabled: false,
    image: function FitnessCheckImage() {
      return (
        <div className="absolute w-full h-full inset-0 flex items-center justify-center bg-[radial-gradient(#3C2E97_35%,#5945D6)] dark:bg-opacity-50">
          <motion.div layout
            className="h-full w-full flex items-center justify-center"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport= {{ once: false, amount: 0.25 }}
            transition={{ duration: 1.5 }}
          >
            <Image src={fitcheckImage} className="pointer-events-none h-[370px] sm:h-[496px] w-auto p-8" alt="" />
          </motion.div>
        </div>
      )
    },
  },
  {
    title: 'Job Demands Analysis',
    description:
      'Lorem description.',
    url: '#',
    type: 'Coming Soon',
    disabled: true,
    image: function JDEF() {
      return (
        <div className="absolute w-full h-full inset-0 flex items-center justify-center bg-[#E3DAF7]">
          <motion.div
            className="w-100"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport= {{ once: false, amount: 0.25 }}
            transition={{ duration: 1.5 }}
          >
            <Image src={JDEFRecord} className="w-full pointer-events-none" alt="" />
          </motion.div>
        </div>
      )
    },
  },
  {
    title: 'Dealer Platform',
    description:
      'Lorem description.',
    url: '#',
    type: 'Coming Soon',
    disabled: true,
    image: function DealerPlatform() {
      return (
        <div className="absolute w-full h-full inset-0 flex items-center justify-center bg-[#020006] dark:bg-opacity-20 dark:backdrop-blur-[140px]">
          <motion.div
            className="w-100"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport= {{ once: false, amount: 0.25 }}
            transition={{ duration: 1.5 }}
          >
            <Image src={dealerPlatform} className="w-full pointer-events-none" alt="" />
          </motion.div>
        </div>
      )
    },
  },  {
    title: 'FAFMC',
    description:
      'Lorem description.',
    url: '#',
    type: 'Coming Soon',
    disabled: true,
    image: function FAFMC() {
      return (
        <div className="absolute w-full h-full inset-0 flex items-center justify-center bg-[radial-gradient(#3AC0A8,#45D6BC)] dark:bg-opacity-20 dark:backdrop-blur-[140px]">
          <motion.div
            className="w-100"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport= {{ once: false, amount: 0.25 }}
            transition={{ duration: 1.5 }}
          >
            <Image src={fafmcImage} className="w-full pointer-events-none" alt="" />
          </motion.div>
        </div>
      )
    },
  },
  // {
  //   title: 'BodyCheck',
  //   description:
  //     'Lorem description.',
  //   url: '#',
  //   type: 'Gallery',
  //   image: function BreatheImage() {
  //     return (
  //       <div className="absolute w-full h-full inset-0 flex items-center justify-center bg-[linear-gradient(#003842_33%,#001D22)] dark:bg-opacity-50">
  //         <motion.div
  //           className="w-[370px]"
  //           initial={{ opacity: 0, y: 32 }}
  //           whileInView={{ opacity: 1, y: 0 }}
  //           viewport= {{ once: false, amount: 0.25 }}
  //           transition={{ duration: 1.5 }}
  //         >
  //           <Image src={breatheImage} className="pointer-events-none" alt="" />
  //         </motion.div>
  //       </div>
  //     )
  //   },
  // },
]

export function MyWork() {

  const workContainerVariants = ({
    default: { scale: 1, y: 0 },
    hover: { scale: 0.98, y: -2 },
  })

  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], windowWidth < 768 ? ["0", "0"] : ["0px", "-2800px"]);

  // const isDragEnabled = windowWidth >= 768;

  return (
      <motion.div key={2}>
        <section
          id="myWork"
          aria-labelledby="myWork-title"
          ref={targetRef}
          className="relative mt-2 xs:my-4 md:h-[200vh] lg:h-[310vh]"  
        >
          <Container 
            size="lg" 
            className="relative z-96 w-full md:sticky md:top-8 flex items-center overflow-hidden pb-20 -mb-20 md:pt-20 md:-mt-20"
            // style={{ zIndex: horizontalListZIndex }}
            >
            <motion.ol
              layout
              style={{ x }}
              // drag="x"
              // dragConstraints={{ left: -2800, right: 0 }}
              role="list"
              className="w-full xl:ease-[cubic-bezier(0.16,0.84,0.44,1)] xl:duration-[600ms] md:max-w-screen-2xl grid md:grid-flow-col md:grid-cols-[repeat(auto-fill,_minmax(496px,_1fr))] md:auto-cols-[minmax(496px,_1fr)] grid-cols-1 gap-y-2 xs:gap-y-4 md:gap-x-4 md:-my-16 md:-mx-4 md:py-16 2xl:px-4"
            >
              {myWork.map((work) => (
                <motion.div layout
                  key={work.url}
                  className="md:snap-start md:scroll-mx-0 select-none"
                  variants={workContainerVariants}
                  whileHover="hover"
                  whileTap={{ scale: 0.97, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Temporarily disable incomplete items */}
                  {work.disabled ? (
                    <div className="select-none">
                    <li
                      key={work.title}
                      className="items-center gap-8 rounded-4xl md:rounded-5xl xl:rounded-6xl shadow-xl dark:shadow-xlD hover:shadow-lg md:grid-cols-3"
                    >
                      <motion.div layout key="workImageWrapper" className="relative flex justify-center h-[370px] md:h-[496px] sm:h-[496px] w-full md:w-[496px] overflow-hidden rounded-4xl md:rounded-5xl xl:rounded-6xl sm:h-60">
                        <work.image />
                      </motion.div>
                    </li>
                  </div>
                  ) : (
                    <Link href={`/${work.url}/`} className="select-none">
                    <li
                      key={work.title}
                      className="items-center gap-8 rounded-4xl md:rounded-5xl xl:rounded-6xl shadow-xl dark:shadow-xlD hover:shadow-lg md:grid-cols-3"
                    >
                      <motion.div layout key="workImageWrapper" className="relative flex justify-center h-[370px] md:h-[496px] sm:h-[496px] w-full md:w-[496px] overflow-hidden rounded-4xl md:rounded-5xl xl:rounded-6xl sm:h-60">
                        <work.image />
                        <motion.div id="proceedArrow" className="absolute top-2 right-2 flex items-center justify-center w-[52px] h-[52px] md:w-[80px] md:h-[80px] bg-ice-900/60 dark:bg-[#1B1B27] transition-bg duration-900 backdrop-blur-[60px] scale-100 rounded-[18px_26px_18px_18px] md:rounded-[18px_42px_18px_28px] xl:rounded-[18px_117px_18px_48px]">
                          <Arrow className="absolute scale-[1.3] rotate-[235deg] text-midnight-700 dark:text-ice-700 transition-bg duration-900 w-auto" />
                        </motion.div>
                        <motion.div id="typeTag" className="absolute left-2 bottom-2 md:left-[initial] flex items-center justify-center px-4 py-2 bg-white/60 dark:bg-[#1B1B27] transition-bg transition-color duration-900 backdrop-blur-[60px] scale-100 rounded-full font-display text-lg tracking-tight font-bold text-midnight-900 dark:text-ice-900 text-center">
                          {work.type}
                        </motion.div>
                      </motion.div>
                    </li>
                  </Link>
                  )}
                </motion.div>
              ))}
            </motion.ol>
          </Container>
          <motion.div
                className="sticky top-[176px] md:top-[624px] z-50"
                // style={{ zIndex: aboutZIndex }}
                initial={{ opacity: 0, y: 50 }}
                viewport= {{ once: true, amount: 0.25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 70, duration: 1.5 }}
              >
              <ContactBox useContainerQuery={false} parentClass="mt-2 sm:pb-16 xs:mt-4 px-2 xs:px-4" flexClass="md:flex-row" />
          </motion.div>
        </section>
      </motion.div>
  )
}