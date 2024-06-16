import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useTheme } from '@/components/HOC/ThemeContext';
import marbleMoon from '@/images/resources/marbleMoon.png';
import marbleSphere from '@/images/resources/marbleSphere.png';
import mL2 from '@/images/resources/sphere/2.png';
import mL3 from '@/images/resources/sphere/3.png';

export const ThemeImage: React.FC = (): JSX.Element => {
  const { darkMode } = useTheme();

  return (
    <div className="absolute top-0 right-0 w-full h-full z-[2]">
      <AnimatePresence>
        {darkMode ? (
          <motion.div
            key="light"
            className="absolute w-full h-full right-0 top-0"
            initial={{ opacity: 0, x: 60, rotate: 0 }}
            viewport={{ once: true, amount: 0 }}
            whileInView={{ 
              opacity: 1, 
              x: 0, 
              rotate: 0,
              transition: { type: "spring", stiffness: 70, delay: 1, duration: 3 },
             }}
            exit={{ 
              opacity: 0, 
              x: 120,
              transition: { type: "spring", stiffness: 70, delay: 0, duration: 1.2 },
            }}
          >
            <motion.div
              animate={{ x: 120 }}
              transition={{ duration: 8, repeat: Infinity, delay: 2, repeatType: "mirror", transition: { type: "spring" } }}
            >
              <Image
                id="reflection"
                src={marbleMoon}
                alt="" className="absolute 
                w-[10rem] sm:w-[14rem] md:w-[54rem] 
                top-[6px] sm:top-[13px] xl:top-[-238px]
                right-[-71px] md:right-[-230px] xl:right-[-245px] z-[-97] md:rotate-[30deg] 
                blur-[32px] md:blur-[160px] 
                opacity-75 dark:opacity-55 lg:opacity-80 rotate-[-60deg] md:rotate(0deg)"
              />
            </motion.div>
            <motion.div
              animate={{ rotate: 0, x: -6 }}
              transition={{ duration: 8, repeat: Infinity, repeatType: "mirror", transition: { type: "spring" } }}
            >
              <Image
                src={marbleMoon}
                alt=""
                className="absolute 
              w-[14rem] md:w-[35rem] xl:w-[54rem] 
              top-[-80px] sm:top-[13px] md:top-[-72px] xl:top-[-238px]
              right-[-112px] md:right-[-230px] xl:right-[-245px]
              z-[-97] 
              md:rotate-[12deg]"
              />
            </motion.div>
          </motion.div>
        ) : (
          // Light Mode Image set
          <motion.div
            key="moon"
            className="absolute w-full h-full right-0 top-0"
            initial={{ opacity: 0, x: 60 }}
            viewport={{ once: true, amount: 0 }}
            whileInView={{ 
              opacity: 1, 
              x: 0, 
              transition: { type: "spring", stiffness: 70, delay: 1, duration: 3 },
             }}
            exit={{ 
              opacity: 0, 
              x: 60,
              transition: { type: "spring", stiffness: 70, delay: 0, duration: 1.2 },
            }}
          >
            <motion.div
              animate={{ x: -20 }}
              transition={{ duration: 8, repeat: Infinity, delay: 2, repeatType: "mirror", transition: { type: "spring" } }}
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
              />
            </motion.div>
            <motion.div
              animate={{ rotate: 0, x: -6 }}
              transition={{ duration: 8, repeat: Infinity, repeatType: "mirror", transition: { type: "spring" } }}
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
              />
            </motion.div>
            <motion.div
              animate={{ rotate: 0, x: -5, z: 0 }}
              transition={{ duration: 8, repeat: Infinity, delay: 0.1, repeatType: "mirror", transition: { type: "spring" } }}
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
              />
            </motion.div>
            <motion.div
              animate={{ rotate: 0, x: -7, y: -8, z: -1 }}
              transition={{ duration: 8, repeat: Infinity, delay: 2, repeatType: "mirror", transition: { type: "spring" } }}
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
        )}
        </AnimatePresence>
    </div>
  );
};
