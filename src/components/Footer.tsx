'use client'
import { GridPattern } from '@/components/GridPattern';
import Link from 'next/link';
import { Github } from '@/components/Github';
import { LinkedIn } from '@/components/LinkedIn';
import { Logo } from '@/components/Logo';

export function Footer() {
  return (
    <footer id="footer" className="relative pb-20 pt-20 mt-10 sm:pb-32 sm:pt-14">
      <div className="absolute inset-x-0 top-0 h-32 text-midnight-900/10 dark:text-ice-900/10 [mask-image:linear-gradient(white,transparent)]">
        <GridPattern x="50%" />
      </div>
      <div className="relative flex flex-col items-center justify-center gap-4 ">
          <div className="relative flex items-center flex-col justify-center gap-2 text-center text-sm">
            <div className="links flex flex-row gap-8 justify-center items-center">
              <Link href="https://github.com/dan-w1231/dw-portfolio" target="blank" className=" text-midnight-600 dark:text-ice-600 hover:text-blurple-900 dark:hover:text-blurple-900">
                <Github h={32} />
              </Link>
              <Link href="https://www.linkedin.com/in/danwdesign/" target="blank" className=" text-midnight-600 dark:text-ice-600 hover:text-blurple-900 dark:hover:text-blurple-900">
                <LinkedIn h={32} />
              </Link>
            </div>
            <span className="text-midnight-600 dark:text-ice-600">Made with &lt;3 by me</span>
          </div>
        <div className="relative text-center text-sm text-midnight-600 dark:text-ice-600">
          <p>Copyright &copy; {new Date().getFullYear()} Dan Wallace</p>
          <p>All rights reserved.</p>
        </div>
        <Link href="/" className="text-midnight-600 dark:text-ice-600 mt-12 hover:text-blurple-900 dark:hover:text-blurple-900">
          <Logo />
        </Link>
      </div>
    </footer>
  )
}
