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
      className="relative flex align-center bg-white py-3 px-4 pr-5 rounded-full inline-block shadow-lg"
    >
      <div
        id="Tag"
        className="flex flex-row no-wrap justify-start items-center"
      >
        <span className="mr-2 text-base leading-6 text-blurple font-medium tracking-tight self-start">
          •
        </span>
        <span className="text-base leading-6 text-blurple font-medium tracking-tight">
          {children}
        </span>
      </div>
    </div>
  )
}
