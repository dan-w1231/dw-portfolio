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
import juhuFPAs from '@/images/resources/deviceImages/juhuFPAs.png'
import juhuQuotes from '@/images/resources/deviceImages/juhuFinanceWide.png'
import juhuPreApproval from '@/images/resources/deviceImages/juhuPreApproval.png'

import bdkSitemap from '@/images/resources/bdkSitemap.png'
import bdkTaskflow from '@/images/resources/bdktaskFlow.png'
import bdkEEA from '@/images/resources/bdkEEA.png'
import bdkWireframes from '@/images/resources/bdkWireframes.png'
import juhuUserTest from '@/images/resources/juhuUserTest.png'
import ABcategories from '@/images/resources/CategoryABResults.png'

const JuhuImages = [
  {
    image: function BDKToJuhu() {
      return (
        <div className="relative w-2/3 md:w-full inset-0 flex items-center justify-center bg-[#E7FFCE] rounded-xl md:rounded-5xl xl:rounded-6xl shadow-lg min-w-[220px] md:min-w-0">
          <motion.div
            // className="w-80 md:w-[496px] md:mr-[10%]"
            className=""
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport= {{ once: true, amount: 0.25 }}
            transition={{  stiffness: 100, duration: 1.2 }}
          >
            <Zoom>
              <Image src={bdkToJuhu} className="w-full max-w-[390px] py-10 object-contain" alt="Wireframes to brand" />
            </Zoom>
          </motion.div>
        </div>
      )
    },
  },
  {
    image: function JuhuVehicleAdvert() {
      return (
        <div className="relative w-2/3 md:w-full inset-0 flex items-center justify-center bg-[#E7FFCE] rounded-xl md:rounded-5xl xl:rounded-6xl shadow-lg min-w-[220px] md:min-w-0">
          <motion.div
            className=""
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport= {{ once: true, amount: 0.25 }}
            transition={{  stiffness: 100, duration: 1.2 }}
          >
            <Zoom>
              <Image src={juhuFPAs} className="w-full max-w-[400px] object-contain" alt="The vehicle advert page." />
            </Zoom>
          </motion.div>
        </div>
      )
    },
  },
  {
    image: function JuhuPreapproval() {
      return (
        <div className="relative w-2/3 md:w-full inset-0 flex items-center justify-center bg-[#E7FFCE] rounded-xl md:rounded-5xl xl:rounded-6xl shadow-lg min-w-[220px] md:min-w-0">
          <motion.div
            className=""
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport= {{ once: true, amount: 0.25 }}
            transition={{  stiffness: 100, duration: 1.2 }}
          > 
            <Zoom>
              <Image src={juhuPreApproval} className="w-full max-w-[400px] object-contain" alt="Getting pre-approved" />
            </Zoom>
          </motion.div>
        </div>
      )
    },
  },
  {
    image: function JuhuQuotes() {
      return (
        <div className="relative w-2/3 md:w-full inset-0 flex items-center justify-center bg-[#E7FFCE] rounded-xl md:rounded-5xl xl:rounded-6xl shadow-lg min-w-[220px] md:min-w-0">
          <motion.div
            className=""
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport= {{ once: true, amount: 0.25 }}
            transition={{  stiffness: 100, duration: 1.2 }}
          >
            <Zoom>
              <Image src={juhuQuotes} className="w-full max-w-[650px] object-contain p-[10%]" alt="Viewing finance quotes on a laptop." />
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
                        Juhu Auto
                      </h1>
                      <h2 className="font-display text-5xl md:text-6xl xl:text-7xl tracking-tight font-extrabold text-midnight-900">
                        Car marketplace in Germahy
                      </h2>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800">
                          Create a finance-focused vehicle marketplace for buyers and sellers in Germany, on behalf of Bank Deutsches Kraftfahrzeuggewerbe (BDK). Combining previous work where I designed online retailing tools including vehicle search, finance calculators, applications and eligibility checking, brought together into a simple yet engaging way to buy a car.
                        </p>
                        <div className="flex flow-row flex-wrap w-full gap-2 mt-4">
                          <BulletTag>From concept</BulletTag><BulletTag>To live product</BulletTag><BulletTag>Post-release User & A/B Testing</BulletTag>
                        </div>
                        <h3 className="font-display font-bold text-3xl xl:text-4xl tracking-tight font-extrabold text-midnight-900 mt-10">
                          Goals
                        </h3>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800">
                          Use research conducted in the UK market and German market experts to create a bespoke vehicle marketplace for Germany, with a goal to optimise post-release.
                        </p>
                        <h3 className="font-display font-bold text-3xl xl:text-4xl tracking-tight font-extrabold text-midnight-900 mt-10">
                          Scope
                        </h3>
                        <div className="flex flow-row flex-wrap w-full gap-2 mt-4">
                          <BulletTag>Search</BulletTag><BulletTag>Vehicle Adverts</BulletTag><BulletTag>Contact seller</BulletTag>
                          <BulletTag>Get Pre-Approved</BulletTag><BulletTag>Book a test drive</BulletTag><BulletTag>Post-release usability testing</BulletTag>
                        </div>
                        <h3 className="font-display font-bold text-3xl xl:text-4xl tracking-tight font-extrabold text-midnight-900 mt-10">
                          Ideation
                        </h3>
                        <h4 className="font-display font-bold text-2xl xl:text-3xl tracking-tight font-extrabold text-midnight-900 mt-6">
                          Task Flows
                        </h4>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800">
                          Leveraging research from previous projects I developed user task flows for the primary task "Finding a car", outlining how 
                          buyers at different stages of the purchase journey could complete their tasks.
                        </p>

                        <div className="mt-6 flex flex-row gap-4">
                          <div className="w-1/2">
                            <Zoom>
                              <Image src={bdkEEA} loading="lazy" placeholder="blur" className="bg-[#DDDAE3] rounded-lg" alt="research plan" />
                            </Zoom>
                          </div>
                          <div className="w-1/2">
                            <Zoom>
                              <Image src={bdkTaskflow} loading="lazy" placeholder="blur" className="bg-[#DDDAE3] rounded-lg" alt="Research plan" />
                            </Zoom>
                          </div>
                        </div>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800">
                          People who know exactly which model they want can quickly get to evaluation stage, while those still unsure need ways to explore and browse potential options.
                        </p>
                        <h4 className="font-display font-bold text-2xl xl:text-3xl tracking-tight font-extrabold text-midnight-900 mt-6">
                          Navigation
                        </h4>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800">
                          Based on the requirements and task flows I created a simple sitemap.
                        </p>
                        <div className="mt-6 cursor-zoom-in">
                        <Zoom>
                            <Image src={bdkSitemap} loading="lazy" placeholder="blur" className="bg-[#DDDAE3] rounded-lg p-6 object-contain" alt="Planning for street interviews" />
                        </Zoom>
                        </div>
                        <h4 className="font-display font-bold text-2xl xl:text-3xl tracking-tight font-extrabold text-midnight-900 mt-6">
                          Wireframing & Prototyping
                        </h4>
                        <div className="mt-6 cursor-zoom-in">
                          <Zoom>
                            <Image src={bdkWireframes} loading="lazy" placeholder="blur" className="rounded-lg object-contain" alt="Four of the personas created" />
                          </Zoom>
                        </div>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800">
                          After a few rounds of testing and tweaking the prototypes, the product was branded in Germany as Juhu Auto, and my work would continue post-release to test and optimise the product.
                        </p>
                        <h3 className="font-display font-bold text-3xl xl:text-4xl tracking-tight font-extrabold text-midnight-900 mt-10">
                          User Testing
                        </h3>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800">
                          <span className="font-bold">Goal:</span> Understand how users navigate the site to purchase a car, and discover the common pain points.
                        </p>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800">
                          <span className="font-bold">Type:</span> Unmoderated test using Loop11.
                        </p>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800">
                          <span className="font-bold">Method:</span> Planned and created the test in English, then translated the test with my German-speaking colleague.   
                        </p>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800">
                          I used TestingTime to recruit German participants who recently bought a car or were actively searching for one.
                        </p>
                        <div className="mt-6 cursor-zoom-in">
                          <Zoom>
                            <Image src={juhuUserTest} loading="lazy" placeholder="blur" className="rounded-lg" alt="Wireframes of the NV application process" />
                          </Zoom>
                        </div>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800">
                          <span className="font-bold">Discovery:</span> Participants mentioned they were interested in a particular bodystyle i.e. Kleinwagen (Small car) but did not type this into the search box.
                        </p>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800">
                          <span className="font-bold">Solution:</span> Create an A/B test that presents categories on the homepage that can be quickly tapped to display those results.
                        </p>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800">
                        <span className="font-bold">Discovery:</span> Participants using the budget filter accidentally entered their 'maximum budget' into the 'minimum price' field, displaying only vehicles out of their range.
                        </p>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800">
                          <span className="font-bold">Solution:</span> Redesigned the budget filter to be more focused on a maximum budget.
                        </p>
                        
                        <h3 className="font-display font-bold text-3xl xl:text-4xl tracking-tight font-extrabold text-midnight-900 mt-10">
                          A/B Testing
                        </h3>
                        <h4 className="font-display font-bold text-2xl xl:text-3xl tracking-tight font-extrabold text-midnight-900 mt-6">
                          Hypothesis
                        </h4>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800">
                          Providing users with one-click ‘Bodystyle Categories’ on the homepage will increase conversion from the homepage to vehicle results. 
                        </p>
                        <h4 className="font-display font-bold text-2xl xl:text-3xl tracking-tight font-extrabold text-midnight-900 mt-6">
                          Traffic
                        </h4>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800">
                          22,000 users over 2 weeks, traffic split 50/50 between Control and Variation.
                        </p>
                        <h4 className="font-display font-bold text-2xl xl:text-3xl tracking-tight font-extrabold text-midnight-900 mt-6">
                          Results
                        </h4>
                        <div className="mt-6 cursor-zoom-in">
                          <Zoom>
                            <Image src={ABcategories} loading="lazy" placeholder="blur" className="bg-[#DDDAE3] rounded-lg p-6 object-contain" alt="Wireframes of the NV application process" />
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