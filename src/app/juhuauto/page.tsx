'use client'
import { FlowChart } from '@/components/FlowChart'
import { GridPattern } from '@/components/GridPattern'
import { BulletTag } from '@/components/BulletTag'
import { motion, useTransform, useScroll, AnimatePresence } from 'framer-motion'
import { useRef, useEffect } from "react"
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import Link from 'next/link'
import Image from 'next/image'

import bdkToJuhu from '@/images/resources/deviceImages/bdkTojuhu.png'
import bdkSitemap from '@/images/resources/bdkSitemap.png'
import bdkTaskflow from '@/images/resources/bdktaskFlow.png'
import bdkEEA from '@/images/resources/bdkEEA.png'
import ABcategories from '@/images/resources/homeCategories.png'
import ABcategoriesStats from '@/images/resources/homeCategoriesStats.png'

const JuhuImages = [
  {
    image: function BDKToJuhu() {
      return (
        <div className="relative w-2/3 md:w-full inset-0 flex items-center justify-center bg-[linear-gradient(#BFE725_33%,#5CC300)] rounded-xl md:rounded-5xl xl:rounded-6xl shadow-lg min-w-[220px] md:min-w-0">
          <motion.div
            // className="w-80 md:w-[496px] md:mr-[10%]"
            className=""
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport= {{ once: true, amount: 0.25 }}
            transition={{  stiffness: 100, duration: 1.2 }}
          >
            <Zoom>
              <Image src={bdkToJuhu} className="w-full max-w-[390px] py-10" alt="Themed finance calculators embedded in dealership websites" />
            </Zoom>
          </motion.div>
        </div>
      )
    },
  },
  {
    image: function YourDeal() {
      return (
        <div className="relative w-2/3 md:w-full inset-0 flex items-center justify-center bg-[linear-gradient(#29374A_33%,#253243)] rounded-xl md:rounded-5xl xl:rounded-6xl shadow-lg min-w-[220px] md:min-w-0">
          <motion.div
            className=""
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport= {{ once: true, amount: 0.25 }}
            transition={{  stiffness: 100, duration: 1.2 }}
          >
            <Zoom>
              <Image src={bdkToJuhu} className="w-full m-w-[496px]" alt="The deal page." />
            </Zoom>
          </motion.div>
        </div>
      )
    },
  },
  {
    image: function Reserve() {
      return (
        <div className="relative w-2/3 md:w-full inset-0 flex items-center justify-center bg-[linear-gradient(#29374A_33%,#253243)] rounded-xl md:rounded-5xl xl:rounded-6xl shadow-lg min-w-[220px] md:min-w-0">
          <motion.div
            className=""
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport= {{ once: true, amount: 0.25 }}
            transition={{  stiffness: 100, duration: 1.2 }}
          > 
            <Zoom>
              <Image src={bdkToJuhu} className="w-full max-w-[44rem] p-[12%]" alt="Desktop view of a reservation." />
            </Zoom>
          </motion.div>
        </div>
      )
    },
  },
  {
    image: function VehicleAd() {
      return (
        <div className="relative w-2/3 md:w-full inset-0 flex items-center justify-center bg-[linear-gradient(#29374A_33%,#253243)] rounded-xl md:rounded-5xl xl:rounded-6xl shadow-lg min-w-[220px] md:min-w-0">
          <motion.div
            className=""
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport= {{ once: true, amount: 0.25 }}
            transition={{  stiffness: 100, duration: 1.2 }}
          >
            <Zoom>
              <Image src={bdkToJuhu} className="w-full max-w-[17rem] p-[18%]" alt="Vehicle advert." />
            </Zoom>
          </motion.div>
        </div>
      )
    },
  },
  {
    image: function Approved() {
      return (
        <div className="relative w-2/3 md:w-full inset-0 flex items-center justify-center bg-[linear-gradient(#29374A_33%,#253243)] rounded-xl md:rounded-5xl xl:rounded-6xl shadow-lg min-w-[220px] md:min-w-0">
          <motion.div
            className=""
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport= {{ once: true, amount: 0.25 }}
            transition={{  stiffness: 100, duration: 1.2 }}
          >
            <Zoom>
              <Image src={bdkToJuhu} className="w-full max-w-[17rem] p-[18%]" alt="Instant decision on finance applications." />
            </Zoom>
          </motion.div>
        </div>
      )
    },
  },
]

export default function JuhuAuto() {

  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const initialWindowWidth = typeof window !== 'undefined' ? window.innerWidth : 0;
  const y = useTransform(scrollYProgress, [0, 1], initialWindowWidth <768 ? ["0%", "0%"] : ["0px", "1800px"]);

  return (
    <> 
      <div id="main" className="relative w-screen mx-auto">
        <div key="gridPattern" className="absolute overflow-hidden w-1/3 top-[-40px] left-0 h-96 text-midnight-900/10 [mask-image:linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.05))]">
          <GridPattern x="20%" />
        </div>
        <div key="flowChartPattern" className="absolute overflow-hidden w-3/4 lg:w-1/4 top-[-40px] right-0 lg:right-0 text-midnight-900/10 [mask-image:linear-gradient(rgba(255,255,255,0.5),transparent)]">
          <div className="right-[-90px]">
            <FlowChart size="100%" />
          </div>
        </div>
        <div className="relative mx-auto mt-2 xs:mt-4 xl:mt-14">
          <motion.div
            className="w-full max-w-screen-2xl flex flex-col gap-0 no-wrap flex-center mx-auto md:flex-row 2xl:gap-4 z-97"
            ref={targetRef}
            initial={{ opacity: 0, y: 50 }}
            viewport= {{ once: true, amount: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 70, duration: 1.5 }}
          >
          {/* Left col */}
          <div className="w-full max-w-[800px]">
            <header className="relative w-full px-2 xs:px-4 2xl:pl-4 rounded-4xl mx-auto">
              <div
                className="relative w-full pt-11 md:pt-10 pb-6 md:pb-10 px-4 sm:px-6 md:px-10 bg-cardGrad backdrop-blur shadow-lg rounded-4xl md:rounded-5xl xl:rounded-6xl overflow-hidden">   
                <div className="relative max-w-full items-end flex items-center md:mt-10">
                  <div className="w-full">
                  <AnimatePresence>
                    <motion.div
                      key="contentWorkImage"
                      className="relative z-[99]"
                      initial={{ opacity: 0, y: 80 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ type: "spring", stiffness: 80, delay: 0.4, duration: 3, staggerChildren: 0.5 }}
                      exit={{ opacity: 0, y: 80 }}
                    >
                      <motion.div
                        initial={{ x: 0 }}
                        whileHover={{ x: -4 }}>
                        <Link
                          href="/"
                          className="text-base font-medium text-blurple hover:text-midnight-900"
                        >
                          <span aria-hidden="true">&larr;</span> Back 
                        </Link>
                      </motion.div>
                      <h1 className="mt-6 font-display text-5xl md:text-6xl xl:text-7xl tracking-tight font-extrabold text-[#01A516]">
                        Vehicle Marketplace in Germany
                      </h1>
                      <h2 className="font-display text-5xl md:text-6xl xl:text-7xl tracking-tight font-extrabold text-midnight-900">
                        Juhu Auto
                      </h2>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800">
                          Create a vehicle marketplace for advertising German retailer's vehicles along with affordable finance products. Combining previous work where I designed online retailing tools including vehicle search, finance calculators, applications and eligibility checking, brought together into a simple yet innovative way to buy a vehicle.
                        </p>
                        <div className="flex flow-row flex-wrap w-full gap-2 mt-4">
                          <BulletTag>From concept</BulletTag><BulletTag>To live product</BulletTag><BulletTag>Post-release User & A/B Testing</BulletTag>
                        </div>
                        <h3 className="font-display font-bold text-3xl xl:text-4xl tracking-tight font-extrabold text-midnight-900 mt-10">
                          Goals
                        </h3>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800">
                          Use what was learned in the UK market to create a bespoke vehicle marketplace for Germany, with a goal to optimise post-release.
                        </p>
                        <h3 className="font-display font-bold text-3xl xl:text-4xl tracking-tight font-extrabold text-midnight-900 mt-10">
                          Scope
                        </h3>
                        <div className="flex flow-row flex-wrap w-full gap-2 mt-4">
                          <BulletTag>Search</BulletTag><BulletTag>Find a car</BulletTag><BulletTag>Find a retailer and view their stock</BulletTag><BulletTag>Send message to retailer</BulletTag>
                          <BulletTag>Pre-Approval with instant decision</BulletTag><BulletTag>Post-release usability testing</BulletTag>
                        </div>
                        <h3 className="font-display font-bold text-3xl xl:text-4xl tracking-tight font-extrabold text-midnight-900 mt-10">
                          Ideation
                        </h3>
                        <h4 className="font-display font-bold text-2xl xl:text-3xl tracking-tight font-extrabold text-midnight-900 mt-6">
                          Task Flows
                        </h4>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800">
                          To begin I started by using the research from previous projects to develop some high-level task flows for the main tasks. 
                          outlining what a buyer wants to do when they land on the site, whether they
                          already know what they want or not.
                        </p>
                        <div className="mt-6 cursor-zoom-in" >
                          <Zoom>
                            <Image src={bdkTaskflow} loading="lazy" placeholder="blur" className="bg-white rounded-lg" alt="research plan" />
                          </Zoom>  
                        </div>
                        <div className="mt-6 cursor-zoom-in" >
                          <Zoom>
                            <Image src={bdkSitemap} loading="lazy" placeholder="blur" className="bg-white rounded-lg" alt="research plan" />
                          </Zoom>  
                        </div>
                        <div className="mt-6 cursor-zoom-in">
                          <Zoom>
                            <Image src={bdkEEA} loading="lazy" placeholder="blur" className="bg-white rounded-lg" alt="Research plan" />
                          </Zoom>
                        </div>

                        <div className="mt-6 cursor-zoom-in">
                        <Zoom>
                            <Image src={ABcategories} loading="lazy" placeholder="blur" className="bg-white rounded-lg p-6" alt="Planning for street interviews" />
                        </Zoom>
                        </div>

                        <div className="mt-6 cursor-zoom-in">
                          <Zoom>
                            <Image src={ABcategoriesStats} loading="lazy" placeholder="blur" className="rounded-lg" alt="Four of the personas created" />
                          </Zoom>
                        </div>

                        <h3 className="font-display font-bold text-3xl xl:text-4xl tracking-tight font-extrabold text-midnight-900 mt-10">
                          Wireframing
                        </h3>
                        
                        <div className="mt-6 cursor-zoom-in">
                          <Zoom>
                            <Image src={bdkToJuhu} loading="lazy" placeholder="blur" className="rounded-lg" alt="Wireframes of the NV application process" />
                          </Zoom>
                        </div>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800">
                          
                        </p>
                        <div className="mt-6 flex flex-row gap-4">
                          <div className="w-1/2">
                          <Zoom>
                            <Image src={bdkToJuhu} loading="lazy" placeholder="blur" className="rounded-lg" alt="A map of how the different vehicle retailing features fit together" />
                          </Zoom>
                          </div>
                          <div className="w-1/2">
                          <Zoom>
                            <Image src={bdkToJuhu} loading="lazy" placeholder="blur" className="rounded-lg" alt="Different options placed on the ideas wall." />
                          </Zoom>
                          </div>
                        </div>
                        <div className="mt-6 cursor-zoom-in">
                          <Zoom>
                            <Image src={bdkToJuhu} loading="lazy" placeholder="blur" className="rounded-lg" alt="Some samples of pages in the web app." />
                          </Zoom>
                        </div>

                        <h3 className="font-display font-bold text-3xl xl:text-4xl tracking-tight font-extrabold text-midnight-900 mt-10">
                          Analytics and Optimisations
                        </h3>

                        <div className="mt-6 cursor-zoom-in">
                          <Zoom>
                            <Image src={bdkToJuhu} loading="lazy" placeholder="blur" className="rounded-lg" alt="Some samples of pages in the web app." />
                          </Zoom>
                        </div>

                        <div className="mt-6 cursor-zoom-in">
                          <Zoom>
                            <Image src={bdkToJuhu} loading="lazy" placeholder="blur" className="rounded-lg" alt="Some samples of pages in the web app." />
                          </Zoom>
                        </div>
                    </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </header>
          </div>
          {/* Right col */}
            <div className="w-full max-w-full md:max-w-[50%] 2xl:max-w-[40%]">
              <h3 className="font-display md:hidden font-bold text-3xl xl:text-4xl px-4 tracking-tight font-extrabold text-midnight-900 mt-10">
                Screenshots of work
              </h3>
            <motion.ol 
              style={{ y }}
              role="list" 
              className="rounded-t-xl py-4 px-4 w-full flex flex-row gap-2 overflow-x-scroll overflow-y-hidden md:overflow-visible md:gap-4 ease-[cubic-bezier(0.16,0.84,0.44,1)] duration-[600ms] h-1/2 sm:h-2/3 md:h-auto md:relative md:top-0 md:px-0 md:py-0 md:bg-transparent md:shadow-[0] md:border-0 md:flex-col md:pr-4 md:backdrop-blur-[0px]"
              >
              {JuhuImages.map((images) => (
                  <images.image />
              ))}
            </motion.ol>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}