'use client'

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { Logo } from '@/components/Logo';
import { motion, AnimatePresence } from 'framer-motion';
import { LightDarkToggle } from '@/components/HOC/LightDarkToggle';
import { Arrow } from '@/components/Arrow';

export function NavBar() {
  const [isSticky, setIsSticky] = useState(false);
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navBarStyles = {
    initial: { backgroundImage: isSticky ? 'bg-bgGrad' : 'bg-bgGrad' },
    animate: {
      backgroundImage: isSticky ? 'bg-solidLight' : 'bg-bgGrad',
      transition: { type: 'spring', stiffness: 400, damping: 30 },
    },
  };
  return (
    <motion.div
      id="navContainer"
      key="navContainer"
      className={`sticky top-0 w-full mt-2 xs:mt-4 flex items-center space-between z-[98] ${isSticky ? 'px-0 xs:px-0' : 'px-2 xs:px-4'}`}
      transition={{ duration: 1.5 }}
    >
      <motion.div
        id="navBar"
        key="navBar"
        className={`w-full ml-auto mr-auto flex items-center transition-all duration-300 py-2 backdrop-blur-[60px] overflow-hidden z-[99] ${isSticky ? 'max-w-full ml-auto mr-auto bg-solidLight/70 dark:bg-solidDark/70 rounded-[0_0_24px_24px] pl-2 md:pl-4 pr-2 md:pr-4' : 'max-w-[1504px] ml-auto mr-auto bg-bgGrad dark:bg-bgGradDark rounded-4xl pl-4 md:pl-10 pr-2'}`}
        initial={navBarStyles.initial}
        animate={navBarStyles.animate}
        transition={{ duration: 1.5 }}
      >
        <motion.div layout
          id="navContent"
          key="navContent"
          className="flex items-center justify-between w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Link href="/">
            <AnimatePresence>
              <motion.div layout
                id="navLogoArrow"
                key="navLogoArrow"
                initial={false}
                animate={{ width: pathname === '/' ? '50px' : '71px' }}
                // whileHover={{ transition: { duration: 0.1, delay: 0 }, x: pathname === '/' ? '0' : '-4px' }}
                // whileTap={{ transition: { duration: 0.1, delay: 0 }, x: pathname === '/' ? '0' : '-6px' }}
                className="relative h-[23px] flex items-center grow shrink justify-start gap-2 transition-all duration-300"
              >

                {pathname !== '/' && (
                  <motion.div layout
                    id="navArrow"
                    key="navArrow"
                    className="relative flex items-center justify-start gap-2 transition-all duration-300"
                    initial={{ x: -8, opacity: 0 }}
                    animate={{ x: 0, opacity: 1, transition: { delay: 1 } }}
                    exit={{ x: -8, opacity: 0, transition: { delay: 1 } }}
                    >
                    <Arrow className="text-blurple-900 hover:text-midnight-900 dark:text-blurple-900 dark:hover:text-ice-900 rotate-90" />
                  </motion.div>
                )}
                <div className={`absolute ${pathname === '/' ? 'left-[0px]' : 'left-[21px]'} transition-all duration-500`}>
                  <Logo className="text-midnight-900 dark:text-ice-900 hover:text-blurple-900 hover:dark:text-blurple-900" />
                </div>
              </motion.div>
            </AnimatePresence>
          </Link>
          <div className="relative flex w-full justify-end items-center gap-0">
            <LightDarkToggle />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}