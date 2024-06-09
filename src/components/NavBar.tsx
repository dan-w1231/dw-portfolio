'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Logo } from '@/components/Logo';
import { motion } from 'framer-motion';
import { LightDarkToggle } from '@/components/LightDarkToggle';
import marble from '@/images/resources/sphereLowqual.png';


export function NavBar() {
  const [isSticky, setIsSticky] = useState(false);

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
      className="sticky top-0 w-full mt-2 flex items-center space-between z-[99]"
    >
      <motion.div 
        id="navBar"
        key="navBar"
        className={`w-full flex items-center space-between transition-all duration-300 py-2 backdrop-blur-[60px] overflow-hidden z-[99] ${isSticky ? 'bg-solidLight/90 dark:bg-solidDark/90 rounded-none pl-2 md:pl-4 pr-2 md:pr-4' : 'bg-bgGrad dark:bg-bgGradDark rounded-4xl xl:rounded-5xl mx-2 xs:mx-4 pl-4 md:pl-10 pr-2'}`}
        initial={navBarStyles.initial}
        animate={navBarStyles.animate}
      >
        <Link href="/">
          <Logo className="text-midnight-900 dark:text-ice-900" />
        </Link>
        <motion.div className="relative flex w-full justify-end items-center gap-0">
          <LightDarkToggle />
        </motion.div>
      </motion.div>
    </motion.div>
  );
  }