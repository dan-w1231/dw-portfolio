import Image from 'next/image'
import { motion } from "framer-motion"
import arrowDown from '@/images/resources/arrowDown.svg'

export function SectionTitle() {
  return (
    <motion.div
      id="sectionPill"
      className="sticky left-0 top-16 px-4 py-12 bg-[#BDCACE] flex items-center justify-center rounded-r-[46px] overflow-hidden z-[99]"
    >
      <div
        id="sectionPillTitle"
        className="flex flex-col gap-2 justify-center items-center"
      >
        <h2
          id="sectionPillText"
          className="font-display mr-[-2px] text-midnight-700 text-lg tracking-tight leading-5 [writing-mode:vertical-lr]">
            Portfolio
        </h2>
        <div
          id="sectionPillIcon"
          className="flex flex-col gap-2 justify-center items-center"
        >
          <Image src={arrowDown} alt="" className="" />
        </div>
      </div>
    </motion.div>
  )
}