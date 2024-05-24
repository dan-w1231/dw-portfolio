// 'use client'
import Image from 'next/image'
import { motion } from "framer-motion"
import arrowDown from '@/images/resources/arrowDown.svg'

export function BulletTag({
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'h2'>) {
  return (
    <div
      id="bulletTag"
      className="relative bg-white py-1 px-4 pr-5 rounded-full inline-block shadow-lg"
    >
      <div
        id="Tag"
        className="flex flex-row no-wrap justify-start items-center"
      >
        <span className="mr-2 text-base text-blurple font-medium tracking-tight">
          •
        </span>
        <span className="text-base text-blurple font-medium tracking-tight">
          {children}
        </span>
      </div>
    </div>
  )
}
