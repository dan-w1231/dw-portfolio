import Image from 'next/image';
import { useState } from 'react';
import { useTheme } from '@/components/HOC/ThemeContext';
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/Button';
import { ButtonLink } from '@/components/ButtonLink';
import Circle from '@/images/resources/circle.svg';
import { ThemeImage } from '@/components/ThemeImage';

import JDEF from '@/images/resources/jdefConceptDark.png';



export function GalleryHero() {

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const handleContactClick = () => {
    const element = document.getElementById('contactBox');
    element?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return ( 
      <motion.div key={1} ref={ref} >
        <header className="relative m-w-full px-2 xs:px-4 rounded-4xl max-w-screen-2xl mx-auto">
          <div  
            className="relative max-w-full pt-20 md:pt-20 pb-10 md:pb-20 px-4 sm:px-6 md:px-10 bg-cardGrad dark:bg-cardGradDark backdrop-blur-[140px] shadow-xl dark:shadow-xlD rounded-4xl md:rounded-5xl xl:rounded-6xl flex flex-row flex-wrap justify-between gap-6 md:gap-10 overflow-hidden z-[2] before:absolute before:z[-1] before:rounded-[inherit] before:margin-1 before:blurple-900-gradient(#003842_33%,#001D22)] transition-opacity transition-bg duration-900">
            <div className="relative max-w-full md:w-3/4 items-end flex items-center z-[1]">
              <div className="w-full">
                <motion.div
                  className="relative z-[99]"
                  initial={{ opacity: 0, x: -80 }}
                  viewport= {{ once: true, amount: 0 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ type: "spring", stiffness: 80, delay: 0.4, duration: 3, staggerChildren: 0.4 }}
                >
                  <p className="font-display text-3xl font-semibold tracking-tight text-midnight-600 dark:text-ice-600 mb-4 z-[99]">
                    Concept Gallery
                  </p>
                  <h1 className="font-display text-5xl md:text-6xl xl:text-7xl tracking-tight font-extrabold text-midnight-900 dark:text-ice-900 z-1">
                    Connected Worker
                  </h1>
                </motion.div>
              </div>
            </div>
            <div className="absolute -top-4 -right-0 w-full h-full z-[2]">    
              <Image src={JDEF} alt="" className="absolute -right-4 z-[-1]" unoptimized />
            </div>
              <div className="absolute top-[16px] md:top-[40px] left-[16px] md:left-[40px] w-full z-[-99]">
                  <Image src={Circle} alt="" className="absolute w-[13px] h-[13px] top-0 left-0 z-[-98]" unoptimized />
              </div>
          </div>
        </header>
      </motion.div>
  )
}