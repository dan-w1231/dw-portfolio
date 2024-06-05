'use client'

import Image from 'next/image'
import Logo from '@/images/resources/dwLogo.png'
import { Button } from '@/components/Button'
import { motion } from 'framer-motion'

export function NavBar() {
  const handleContactClick = () => {
    document.getElementById('contactBox')?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <motion.div 
      id="NavBar"
      key="navBar"
      className="sticky top-2 xs:top-4 xl:4 w-full flex items-center mx-auto max-w-screen-2xl z-[99]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="w-full flex items-center pr-2 pl-4 md:pl-10 py-2 bg-sectionGrad backdrop-blur-[60px] rounded-4xl xl:rounded-5xl z-[99] max-w-screen-2xl mx-2 xs:mx-4">
        <Image src={Logo} height="22" alt="DW Design" priority />
        <motion.div className="relative ml-auto"
          whileHover={{ scale: 0.98, y: 0 }}
          whileTap={{ scale: 0.95, y: 0 }}
          transition={{ type: "spring", stiffness: 400, duration: 0.2 }}
          >
          <Button onClick={handleContactClick} variant="secondary" className="ml-auto px-6">Contact</Button>
        </motion.div>
        </div>
      </motion.div>
    )
  }


// const sections = [
//   {
//     id: 'table-of-contents',
//     title: (
//       <>
//         <span className="hidden lg:inline">Home</span>
//         <span className="lg:hidden">Contents</span>
//       </>
//     ),
//   },
//   { id: 'Todo', title: 'My Design Language' },
//   { id: 'Todo2', title: 'My Work' },
//   { id: 'Todo3', title: 'Contact' },
// ]

// function MenuIcon({
//   open,
//   ...props
// }: React.ComponentPropsWithoutRef<'svg'> & {
//   open: boolean
// }) {
//   return (
//     <svg 
//       aria-hidden="true"
//       fill="none"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       {...props}
//     >
//       <path 
//         d={open ? 'M5.63477 18.3633L18.3627 5.63536' : 'M11 12L21 12'}
//         stroke="#0F1629"
//         strokeWidth="2"
//         strokeLinecap="round"
//       />
//       <path 
//         d={open ? 'M5.63477 5.63672L18.3627 18.3646' : 'M3 5H21'}
//         stroke="#0F1629"
//         strokeWidth="2"
//         strokeLinecap="round"
//       />
//       <path 
//         d="M3 19H21" 
//         stroke="#0F1629" 
//         strokeWidth="2" 
//         strokeLinecap="round"
//         opacity={open ? '0' : '1'}
//       />
//     </svg>
//   )
// }


