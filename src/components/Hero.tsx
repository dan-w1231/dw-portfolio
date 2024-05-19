'use client'

import Image from 'next/image'
import { motion, useScroll } from "framer-motion"
import { Button } from '@/components/Button'
import Circle from '@/images/resources/circle.svg'
import nightBg from '@/images/resources/nightBg.svg'
import marbleSphere from '@/images/resources/marbleSphere.png'
import mL1 from '@/images/resources/sphere/1.png'
import mL2 from '@/images/resources/sphere/2.png'
import mL3 from '@/images/resources/sphere/3.png'
import mL4 from '@/images/resources/sphere/4.png'
import mL5 from '@/images/resources/sphere/5.png'

export function Hero() {
  return (
    // Header
      // image right
      // current header is div with same properties

    <header className="relative m-w-full px-2 xs:px-4 rounded-4xl max-w-screen-2xl mx-auto">
      <div  
        className="max-w-full pt-11 md:pt-20 pb-6 md:pb-10 px-4 sm:px-6 md:px-10 bg-cardGrad backdrop-blur shadow-lg rounded-4xl md:rounded-5xl xl:rounded-6xl flex flex-row flex-wrap justify-between gap-6 md:gap-10 overflow-hidden">
        <div className="relative max-w-full md:w-3/4 items-end flex items-center z-[1]">
          <div className="w-full">
            <motion.div
              className="relative z-[99]"
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 80, delay: 0.4, duration: 3, staggerChildren: 0.4 }}
            >
              <p className="font-display text-3xl font-semibold tracking-tight text-slate-600 mb-4 z-[99]">
                Hey, I'm Dan 👋
              </p>
              {/* <h1 className="font-serif text-5xl sm:text-7xl font-extrabold text-slate-900 sm:text-6xl z-1">
                An experience designer with a passion for human-centred products.
              </h1> */}
              <h1 className="font-display text-5xl md:text-6xl xl:text-7xl tracking-tight font-extrabold text-slate-900 z-1">
                Digital product designer.
              </h1>
            </motion.div>
          </div>
        </div>
        <div className="relative w-full sm:w-1/3 flex items-end lg:col-span-4 lg:row-span-2 z-[3]">
          <motion.button 
            className="relative px-2 sm:px-0 z-10 max-w-full flex w-full md:w-80 xl:w-64"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 100, duration: 1.5}}
            whileHover={{ scale: 1.05, y: 0, transition: { type: "spring", stiffness: 100, duration: 0.2 }, }}
            whileTap={{ scale: 0.95, y: 0, transition: { type: "spring", stiffness: 100, duration: 0.2 }, }}
            >
            <Button href="#pricing" color="primaryGrad" className="w-full">
                  View CV
            </Button>
            {/* <Image className="w-full" src={coverImage} alt="" priority /> */}
          </motion.button>
        </div>
        {/* <div className="absolute top-[-20px] sm:top-[-30px] md:top-[-52px] right-[-70px] sm:right-0 md:right-[98px] w-48 h-64 overflow-visible z-[2]"> */}
        <div className="absolute top-0 right-0 w-full h-full z-[2]">
          <motion.div
            // className="absolute w-48 sm:w-96 md:w-[32rem] h-48 overflow-visible"
            className="absolute w-full h-full right-0 top-0"
            initial={{ opacity: 0, x: 60, rotate: 0 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 1, duration: 6 }}
          >
              <motion.div
                animate={{ opacity: 1, x: -20 }}
                transition={{ duration: 2, repeat: Infinity, delay: 5, repeatType: "mirror" }}
              >
                <Image
                  id="reflection"
                  src={marbleSphere}
                  alt="" className="absolute 
                    w-[10rem] sm:w-[14rem] md:w-[54rem] 
                    top-[-29px] sm:top-[13px] xl:top-[-238px]
                    right-[-59px] md:right-[-230px] xl:right-[-245px] z-[-97] md:rotate-[30deg] 
                    scale-y-[-0.8] 
                    brightness-100 
                    blur-[20px] md:blur-[130px] 
                    opacity-100"
                  unoptimized
                />
              </motion.div>
              <motion.div
                animate={{ rotate: 0, x: -8 }}
                transition={{ duration: 8, repeat: Infinity, repeatType: "mirror" }}
              >
              <Image
                src={marbleSphere}
                alt=""
                className="absolute 
                  w-[10rem] sm:w-[14rem] md:w-[35rem] xl:w-[54rem] 
                  top-[-29px] sm:top-[13px] md:top-[-72px] xl:top-[-238px]
                  right-[-59px] md:right-[-230px] xl:right-[-245px]
                  z-[-97] 
                  md:rotate-[12deg]"
                unoptimized
              />
              </motion.div>
              <motion.div
                animate={{ rotate: 0, x: -4, y: -2, z: 1 }}
                transition={{ duration: 8, repeat: Infinity, delay: 0.1, repeatType: "mirror" }}
              >
              <Image
                src={mL1}
                alt=""
                className="absolute 
                  w-[10rem] sm:w-[14rem] md:w-[35rem] xl:w-[54rem] 
                  top-[-29px] sm:top-[13px] md:top-[-72px] xl:top-[-238px]
                  right-[-59px] md:right-[-230px] xl:right-[-245px]
                  z-[-96] 
                  md:rotate-[12deg]"
                unoptimized
              />
              </motion.div>
              <motion.div
                animate={{ rotate: 0, x: 4, y: 4, z: 0 }}
                transition={{ duration: 8, repeat: Infinity, delay: 0.1, repeatType: "mirror" }}
              >
              <Image
                src={mL2}
                alt=""
                className="absolute 
                  w-[10rem] sm:w-[14rem] md:w-[35rem] xl:w-[54rem] 
                  top-[-29px] sm:top-[13px] md:top-[-72px] xl:top-[-238px]
                  right-[-59px] md:right-[-230px] xl:right-[-245px]
                  z-[-95] 
                  md:rotate-[12deg]"
                unoptimized
              />
              </motion.div>
              <motion.div
                animate={{rotate: 0, x: -10, z: -1}}
                transition={{ duration: 8, repeat: Infinity, delay: 2, repeatType: "reverse" }}
              >
              <Image
                src={mL3}
                alt=""
                className="absolute 
                  w-[10rem] sm:w-[14rem] md:w-[35rem] xl:w-[54rem] 
                  top-[-29px] sm:top-[13px] md:top-[-72px] xl:top-[-238px]
                  right-[-59px] md:right-[-230px] xl:right-[-245px]
                  z-[-94] 
                  md:rotate-[12deg]"
                unoptimized
              />
              </motion.div>
              <motion.div
                animate={{rotate: 0, x: -7, y: -3, z: -5}}
                transition={{ duration: 8, repeat: Infinity, repeatType: "mirror" }}
              >
              <Image
                src={mL4}
                alt=""
                className="absolute 
                  w-[10rem] sm:w-[14rem] md:w-[35rem] xl:w-[54rem] 
                  top-[-29px] sm:top-[13px] md:top-[-72px] xl:top-[-238px]
                  right-[-59px] md:right-[-230px] xl:right-[-245px]
                  z-[-93] 
                  md:rotate-[12deg]"
                unoptimized
              />
              </motion.div>
              <motion.div
                animate={{rotate: 0, x: -4, z: 4}}
                transition={{ duration: 6, repeat: Infinity, delay: 0.1, repeatType: "mirror" }}
              >
              <Image
                src={mL5}
                alt=""
                className="absolute 
                  w-[10rem] sm:w-[14rem] md:w-[35rem] xl:w-[54rem] 
                  top-[-29px] sm:top-[13px] md:top-[-72px] xl:top-[-238px]
                  right-[-59px] md:right-[-230px] xl:right-[-245px]
                  z-[-92] 
                  md:rotate-[12deg]"
                unoptimized
              />
              </motion.div>
          </motion.div>
          </div>
          <Image src={nightBg} alt="" className="absolute invisible md:visible right-[-100px] xl:right-0 xl:rotate[5deg] top-[-280px] xl:w-[898px] xl:rotate-[14deg]" unoptimized/>
          {/* <motion.div
            className="absolute w-full right-[-200px] top-[-400px]"
            viewport= {{ once: true, amount: 0 }}
            initial={{ opacity: 0, x: 60, rotate: 10 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.8, duration: 1.5}}
          >
              <Image src={nightBg} alt="" className="absolute w-full" unoptimized/>
          </motion.div> */}
          <div className="absolute top-[16px] md:top-[40px] left-[16px] md:left-[40px] w-full z-[-99]">
              <Image src={Circle} alt="" className="absolute w-[13px] h-[13px] top-0 left-0 z-[-98]" unoptimized />
          </div>
      </div>
    </header>
  )
}
