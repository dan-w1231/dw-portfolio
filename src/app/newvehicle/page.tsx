'use client'
import { FlowChart } from '@/components/FlowChart'
import { Footer } from '@/components/Footer'
import { GridPattern } from '@/components/GridPattern'
import { Hero } from '@/components/Hero'
import { NavBar } from '@/components/NavBar'
import { BulletTag } from '@/components/BulletTag'
import { motion, useTransform, useScroll } from 'framer-motion'
import { useRef, useEffect } from "react";
import Link from 'next/link'
import Image from 'next/image'

import yourDeal from '@/images/resources/deviceImages/yourDeal-flat.png'
import relationshipMap from '@/images/resources/relationshipMap.png'

const NVImages = [
  {
    image: function YourDeal() {
      return (
        <div className="relative w-full inset-0 flex items-center justify-center bg-[linear-gradient(#003842_33%,#001D22)] rounded-4xl md:rounded-5xl xl:rounded-6xl shadow-lg">
          <motion.div
            className="w-[496px]"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport= {{ once: false, amount: 0.25 }}
            transition={{  stiffness: 100, duration: 1.5 }}
          >
            <Image src={yourDeal} className="pointer-events-none" alt="" />
          </motion.div>
        </div>
      )
    },
  },
  {
    image: function YourDeal() {
      return (
        <div className="relative w-full inset-0 flex items-center justify-center bg-[linear-gradient(#003842_33%,#001D22)] rounded-4xl md:rounded-5xl xl:rounded-6xl shadow-lg">
          <motion.div
            className="w-[496px]"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport= {{ once: false, amount: 0.25 }}
            transition={{  stiffness: 100, duration: 1.5 }}
          >
            <Image src={yourDeal} className="pointer-events-none" alt="" />
          </motion.div>
        </div>
      )
    },
  },
]

export default function NewVehicle() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const initialWindowWidth = typeof window !== 'undefined' ? window.innerWidth : 0;

  const y = useTransform(scrollYProgress, [0, 1], initialWindowWidth <768 ? ["0%", "0%"] : ["0px", "-100px"]);

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
            className="w-full max-w-screen-2xl flex flex-row gap-[40px] no-wrap flex-center mx-auto"
            ref={targetRef}
            initial={{ opacity: 0, y: 50 }}
            viewport= {{ once: true, amount: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 70, duration: 1.5 }}
          >
          {/* Left col */}
          <div className="w-full max-w-[768px]">
            <header className="relative w-full px-2 xs:px-4 rounded-4xl mx-auto">
              <div
                className="relative w-full pt-11 md:pt-10 pb-6 md:pb-10 px-4 sm:px-6 md:px-10 bg-cardGrad backdrop-blur shadow-lg rounded-4xl md:rounded-5xl xl:rounded-6xl overflow-hidden">
                  <Link
                    href="/"
                    className="mt-6 text-base font-medium text-blurple hover:text-midnight-900"
                  >
                    <span aria-hidden="true">&larr;</span> Back 
                </Link>
                <div className="relative max-w-full items-end flex items-center md:mt-10">
                  <div className="w-full">
                    <motion.div
                      className="relative z-[99]"
                      initial={{ opacity: 0, y: 80 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ type: "spring", stiffness: 80, delay: 0.4, duration: 3, staggerChildren: 0.5 }}
                    >
                      <h1 className="font-display text-5xl md:text-6xl xl:text-7xl tracking-tight font-extrabold text-blurple">
                        NewVehicle.com
                      </h1>
                      <h2 className="font-display text-5xl md:text-6xl xl:text-7xl tracking-tight font-extrabold text-midnight-900">
                        Buy Online
                      </h2>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800">
                          A vehicle purchase experience that can be embedded into dealership websites, and a secure checkout 
                          website for Buyer’s to manage their car purchase.
                        </p>
                        <div className="flex flow-row flex-wrap w-full gap-2 mt-4">
                          <BulletTag>From concept</BulletTag><BulletTag>To live product</BulletTag><BulletTag>To optimised experience</BulletTag>
                        </div>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800">
                          A vehicle purchase experience that can be embedded into dealership websites, and a secure checkout 
                          website for Buyer’s to manage their car purchase.
                        </p>
                        <h3 className="font-display font-bold text-3xl xl:text-4xl tracking-tight font-extrabold text-midnight-900 mt-10">
                          Goals
                        </h3>
                        <h4 className="font-display font-bold text-2xl xl:text-3xl tracking-tight font-extrabold text-midnight-900 mt-6">
                          For car buyers
                        </h4>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800">
                          Whether buying a car with cash or on finance, create an online purchasing experience that’s as transparent and seamless as possible.
                        </p>
                        <h4 className="font-display font-bold text-2xl xl:text-3xl tracking-tight font-extrabold text-midnight-900 mt-6">
                          For car sellers
                        </h4>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800">
                          Generate and display high quality leads by making a frictionless car purchase experience for buyers, themed to fit each retailer’s 
                          branding. Working from the philosophy that the better the experience is for the buyer, the more cars dealers will sell.
                        </p>
                        <h3 className="font-display font-bold text-3xl xl:text-4xl tracking-tight font-extrabold text-midnight-900 mt-10">
                          Scope
                        </h3>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800">
                          Leverage the business’s existing vehicle quoting technology by creating themeable lead generating tools, focused on helping buyers 
                          who want to get the best finance deal for their new vehicle.
                        </p>
                        <div className="flex flow-row flex-wrap w-full gap-2 mt-4">
                          <BulletTag>Finance quote comparison tool</BulletTag><BulletTag>Finance eligibility checking</BulletTag><BulletTag>Finance applications</BulletTag>
                          <BulletTag>Instant feedback on application decision</BulletTag><BulletTag>Dealer lead management system</BulletTag>
                        </div>
                        <div className="mt-6">
                        <Image src={relationshipMap} loading="lazy" placeholder="blur" className="pointer-events-none" alt="" />
                        </div>
                        <div className="mt-6">
                        <Image src={relationshipMap} loading="lazy" placeholder="blur" className="pointer-events-none" alt="" />
                        </div>
                        <div className="mt-6">
                        <Image src={relationshipMap} loading="lazy" placeholder="blur" className="pointer-events-none" alt="" />
                        </div>
                        <div className="mt-6">
                        <Image src={relationshipMap} loading="lazy" placeholder="blur" className="pointer-events-none" alt="" />
                        </div>
                        
                    </motion.div>
                  </div>
                </div>
              </div>
            </header>
          </div>
          {/* Right col */}
          <motion.ol 
            style={{ y }}
            role="list" 
            className="sticky top-10 w-full flex flex-col gap-6 ease-[cubic-bezier(0.16,0.84,0.44,1)] duration-[600ms]"
            >
            {NVImages.map((images) => (
                <images.image />
            ))}
          </motion.ol>
          </motion.div>
          <Footer />
        </div>
      </div>
    </>
  )
}