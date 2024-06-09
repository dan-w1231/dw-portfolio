import Image from 'next/image'
import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/Button'
import { ButtonLink } from '@/components/ButtonLink'
import Circle from '@/images/resources/circle.svg'
// import nightBg from '@/images/resources/nightBg.svg'
import marbleSphere from '@/images/resources/marbleSphere.png'
import mL2 from '@/images/resources/sphere/2.png'
import mL3 from '@/images/resources/sphere/3.png'


export function Hero() {

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
            className="relative max-w-full pt-11 md:pt-20 pb-6 md:pb-10 px-4 sm:px-6 md:px-10 bg-cardGrad dark:bg-cardGradDark backdrop-blur-[140px] shadow-xl dark:shadow-xlD rounded-4xl md:rounded-5xl xl:rounded-6xl flex flex-row flex-wrap justify-between gap-6 md:gap-10 overflow-hidden z-[2] before:absolute before:z[-1] before:rounded-[inherit] before:margin-1 before:blurple-900-gradient(#003842_33%,#001D22)]">
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
                    Hey, I'm Dan 👋
                  </p>
                  <h1 className="font-display text-5xl md:text-6xl xl:text-7xl tracking-tight font-extrabold text-midnight-900 dark:text-ice-900 z-1">
                    Digital product designer.
                  </h1>
                </motion.div>
              </div>
            </div>
            <div className="relative w-full sm:w-1/2 flex flex-start z-[3] gap-2 md:gap-4">
            <motion.button 
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
              </motion.button>
              <motion.button 
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
              </motion.button>
            </div>
            <div className="absolute top-0 right-0 w-full h-full z-[2]">        
              <motion.div
                className="absolute w-full h-full right-0 top-0"
                initial={{ opacity: 0, x: 60, rotate: 0 }}
                viewport= {{ once: true, amount: 0 }}
                whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                transition={{ type: "spring", stiffness: 100, delay: 1, duration: 6 }}
              >
                  <motion.div
                    animate={{ x: -20 }}
                    transition={{ duration: 8, repeat: Infinity, delay: 2, repeatType: "mirror", transition:{ type: "spring"} }}
                  >
                    <Image
                      id="reflection"
                      src={marbleSphere}
                      alt="" className="absolute 
                        w-[10rem] sm:w-[14rem] md:w-[54rem] 
                        top-[6px] sm:top-[13px] xl:top-[-238px]
                        right-[-71px] md:right-[-230px] xl:right-[-245px] z-[-97] md:rotate-[30deg] 
                        blur-[32px] md:blur-[160px] 
                        opacity-75 dark:opacity-55 lg:opacity-80 rotate-[-60deg] md:rotate(0deg)"
                      unoptimized
                    />
                  </motion.div>
                  <motion.div
                    animate={{ rotate: 0, x: -6 }}
                    transition={{ duration: 8, repeat: Infinity, repeatType: "mirror", transition:{ type: "spring"} }}
                  >
                  <Image
                    src={marbleSphere}
                    alt=""
                    className="absolute 
                      w-[14rem] md:w-[35rem] xl:w-[54rem] 
                      top-[-80px] sm:top-[13px] md:top-[-72px] xl:top-[-238px]
                      right-[-112px] md:right-[-230px] xl:right-[-245px]
                      z-[-97] 
                      md:rotate-[12deg]"
                    unoptimized
                  />
                  </motion.div>
                  <motion.div
                    animate={{ rotate: 0, x: -5, z: 0 }}
                    transition={{ duration: 8, repeat: Infinity, delay: 0.1, repeatType: "mirror", transition:{ type: "spring"} }}
                  >
                  <Image
                    src={mL2}
                    alt=""
                    className="absolute 
                      w-[14rem] md:w-[35rem] xl:w-[54rem] 
                      top-[-80px] sm:top-[13px] md:top-[-72px] xl:top-[-238px]
                      right-[-112px] md:right-[-230px] xl:right-[-245px]
                      z-[-95] 
                      md:rotate-[12deg]"
                    unoptimized
                  />
                  </motion.div>
                  <motion.div
                    animate={{rotate: 0, x: -7, y: -8, z: -1}}
                    transition={{ duration: 8, repeat: Infinity, delay: 2, repeatType: "mirror", transition:{ type: "spring"} }}
                  >
                  <Image
                    src={mL3}
                    alt=""
                    className="absolute 
                      w-[14rem] md:w-[35rem] xl:w-[54rem] 
                      top-[-80px] sm:top-[13px] md:top-[-72px] xl:top-[-238px]
                      right-[-112px] md:right-[-230px] xl:right-[-245px]
                      z-[-94] 
                      md:rotate-[12deg]"
                    unoptimized
                  />
                  </motion.div>

              </motion.div>
            </div>
              {/* <Image src={nightBg} alt="" className="absolute invisible md:visible right-[-100px] xl:right-0 xl:rotate[5deg] top-[-280px] xl:w-[898px] xl:rotate-[14deg]" unoptimized/> */}
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
      </motion.div>
  )
}
