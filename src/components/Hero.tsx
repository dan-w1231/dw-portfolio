'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useTheme } from '@/components/HOC/ThemeContext';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/Button';
import { ButtonLink } from '@/components/ButtonLink';
import Circle from '@/images/resources/circle.svg';
import { ThemeImage } from '@/components/ThemeImage';
import { useIsMobile } from '@/app/utils/useIsMobile';



export function Hero() {
  const isMobile = useIsMobile();

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const handleContactClick = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: MouseEvent) => {
    setMousePosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  useEffect(() => {
    if (!isMobile) {
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }
  }, []);

  const imageStyle = {
    transform: `translate(${mousePosition.x * 0.005}px, ${mousePosition.y * 0.005}px)`,
    transition: 'transform 1s cubic-bezier(0.16,0.84,0.44,1)',
  };
  
  return ( 
      <motion.div key={1} ref={ref} >
        <header className="relative m-w-full px-2 xs:px-4 rounded-4xl max-w-screen-2xl mx-auto">
          <div  
            className="relative max-w-full pt-11 md:pt-20 pb-6 md:pb-10 px-4 sm:px-6 md:px-10 bg-cardGrad dark:bg-cardGradDark backdrop-blur-[140px] shadow-xl dark:shadow-xlD rounded-4xl md:rounded-5xl xl:rounded-6xl flex flex-row flex-wrap justify-between gap-6 md:gap-10 overflow-hidden z-[2] before:absolute before:z[-1] before:rounded-[inherit] before:margin-1 before:blurple-900-gradient(#003842_33%,#001D22)] transition-opacity transition-bg duration-900">
            <div className="relative max-w-full md:w-3/4 flex items-center z-[3]">
              <div className="w-full">
                <motion.div
                  className="relative z-[99]"
                  initial={{ opacity: 0, x: -80 }}
                  viewport= {{ once: true, amount: 0 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ type: "spring", stiffness: 80, delay: 0.4, duration: 3, staggerChildren: 0.4 }}
                >
                  <p className="font-display text-3xl font-semibold tracking-tight text-midnight-600 dark:text-ice-600 mb-4 z-[99]">
                    Hey, I'm Dan 👋
                  </p>
                  <h1 className="font-display text-5xl md:text-6xl xl:text-7xl tracking-tight font-extrabold text-midnight-900 dark:text-ice-900 z-2 drop-shadow-[4px_0_0_#e4d3d8] dark:drop-shadow-[4px_0_0_#352c48] transition-color">
                    Digital product designer.
                  </h1>
                </motion.div>
              </div>
            </div>
            <div className="relative w-full sm:w-1/2 flex flex-start z-[3] gap-2 md:gap-4">
            <motion.div
                className="relative z-10 flex w-full rounded-full max-w-[248px]"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", stiffness: 100, duration: 1.5}}
                whileHover={{ scale: 0.98, y: 0, transition: { type: "spring", stiffness: 400, duration: 0.2 }, }}
                whileTap={{ scale: 0.95, y: 0, transition: { type: "spring", stiffness: 400, duration: 0.2 }, }}
                >
                <ButtonLink href="/danWallaceCV2024.pdf" target="_blank" className="w-full">
                  View CV
                </ButtonLink>
                <div className="absolute h-[64px] bg-primaryGrad rounded-full pointer-events-none z-[98] scale-y-[-0.99] scale-x-[-0.99] brightness-100 blur-[20px] md:blur-[70px] opacity-20 w-full top-[62px]" />
              </motion.div>
              <motion.div 
                className="relative z-10 flex w-1/3 sm:w-full rounded-full max-w-[220px]"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", stiffness: 100, duration: 1.5}}
                whileHover={{ scale: 0.98, y: 0, transition: { type: "spring", stiffness: 400, duration: 0.2 }, }}
                whileTap={{ scale: 0.95, y: 0, transition: { type: "spring", stiffness: 400, duration: 0.2 }, }}
                >
                <Button onClick={handleContactClick} variant="secondary" className="w-full">
                  Contact
                </Button>
                <div className="absolute h-[64px] border-3 border-blurple-900 rounded-full pointer-events-none z-[98] scale-y-[-0.99] scale-x-[-0.99] brightness-100 blur-[0px] md:blur-[40px] opacity-100 w-full top-[62px]" />
              </motion.div>
            </div>
            <div className="absolute top-0 right-0 w-full h-full z-[2]" style={imageStyle}>    
              <ThemeImage/>
            </div>
              <div className="absolute top-[16px] md:top-[40px] left-[16px] md:left-[40px] w-full z-[-99]">
                  <Image src={Circle} alt="" className="absolute w-[13px] h-[13px] top-0 left-0 z-[-98]" unoptimized />
              </div>
          </div>
        </header>
      </motion.div>
  )
}
