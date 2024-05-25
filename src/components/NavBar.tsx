'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Popover } from '@headlessui/react'
import clsx from 'clsx'
import Logo from '@/images/resources/dwLogo.png'
// SVG logo is flickering. Y tho..?
// import Logo from '@/images/resources/dwLogo.svg'

const sections = [
  {
    id: 'table-of-contents',
    title: (
      <>
        <span className="hidden lg:inline">Home</span>
        <span className="lg:hidden">Contents</span>
      </>
    ),
  },
  { id: 'page1', title: 'My Design Language' },
  { id: 'work', title: 'My Work' },
  { id: 'anotherpage', title: 'Contact' },
]

function MenuIcon({
  open,
  ...props
}: React.ComponentPropsWithoutRef<'svg'> & {
  open: boolean
}) {
  return (
    <svg 
      aria-hidden="true"
      fill="none"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
    >
      <path 
        d={open ? 'M5.63477 18.3633L18.3627 5.63536' : 'M11 12L21 12'}
        stroke="#0F1629"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path 
        d={open ? 'M5.63477 5.63672L18.3627 18.3646' : 'M3 5H21'}
        stroke="#0F1629"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path 
        d="M3 19H21" 
        stroke="#0F1629" 
        strokeWidth="2" 
        strokeLinecap="round"
        opacity={open ? '0' : '1'}
      />
    </svg>
  )
}

export function NavBar() {
  let navBarRef = useRef<React.ElementRef<'div'>>(null)
  let [activeIndex, setActiveIndex] = useState<number | null>(null)
  let mobileActiveIndex = activeIndex === null ? 0 : activeIndex

  useEffect(() => {
    function updateActiveIndex() {
      if (!navBarRef.current) {
        return
      }

      let newActiveIndex = null
      let elements = sections
        .map(({ id }) => document.getElementById(id))
        .filter((el): el is HTMLElement => el !== null)
      let bodyRect = document.body.getBoundingClientRect()
      let offset = bodyRect.top + navBarRef.current.offsetHeight + 1

      if (window.scrollY >= Math.floor(bodyRect.height) - window.innerHeight) {
        setActiveIndex(sections.length - 1)
        return
      }

      for (let index = 0; index < elements.length; index++) {
        if (
          window.scrollY >=
          elements[index].getBoundingClientRect().top - offset
        ) {
          newActiveIndex = index
        } else {
          break
        }
      }

      setActiveIndex(newActiveIndex)
    }

    updateActiveIndex()

    window.addEventListener('resize', updateActiveIndex)
    window.addEventListener('scroll', updateActiveIndex, { passive: true })

    return () => {
      window.removeEventListener('resize', updateActiveIndex)
      window.removeEventListener('scroll', updateActiveIndex)
    }
  }, [])

  return (
    <div ref={navBarRef} className="sticky top-0 z-[99]">
      <Popover className="">
        {({ open }) => (
          <>
            <div
              className={clsx(
                'relative flex items-center px-6 py-3',
                !open &&
                  'bg-[#e1d4de] bg-opacity-[0.8] backdrop-blur border border-b-[#A59AA8]',
              )}
            >
              {!open && (
                <>
                  <Image src={Logo} height="22" alt="DW Design" priority />
                  {/* <span
                    aria-hidden="true"
                    className="font-mono text-sm text-blue-600"
                  >
                    {(mobileActiveIndex + 1).toString().padStart(2, '0')}
                  </span>
                  <span className="ml-4 text-base font-medium text-midnigh-900">
                    {sections[mobileActiveIndex].title}
                  </span> */}
                </>
              )}
              <Popover.Button
                className={clsx(
                  '-mr-1 ml-auto flex h-8 w-8 items-center justify-center',
                  open && 'relative z-[98]',
                )}
                aria-label="Toggle navigation menu"
              >
                {!open && (
                  <>
                    {/* Increase hit area */}
                    <span className="absolute inset-0" />
                  </>
                )}
                <MenuIcon open={open} className="h-6 w-6 stroke-slate-700" />
              </Popover.Button>
            </div>
            <Popover.Panel className="absolute inset-x-0 top-0 py-3.5 shadow-lg backdrop-blur bg-white/50">
              {sections.map((section, sectionIndex) => (
                <Popover.Button
                  as={Link}
                  key={section.id}
                  href={`#${section.id}`}
                  scroll={false}
                  className="flex items-center px-4 py-1.5"
                >
                  <span
                    aria-hidden="true"
                    className="font-mono text-sm text-blue-600"
                  >
                    {(sectionIndex + 1).toString().padStart(2, '0')}
                  </span>
                  <span className="ml-4 text-base font-medium text-midnigh-900">
                    {section.title}
                  </span>
                </Popover.Button>
              ))}
            </Popover.Panel>
            <div className="absolute inset-x-0 bottom-full z-[98] h-4 bg-transparent" />
          </>
        )}
      </Popover>
      {/* <div className="hidden sm:flex sm:h-32 sm:justify-center sm:border-b sm:border-slate-200 sm:bg-transparent sm:[@supports(backdrop-filter:blur(0))]:bg-white/50 sm:[@supports(backdrop-filter:blur(0))]:backdrop-blur">
        <ol
          role="list"
          className="mb-[-2px] grid auto-cols-[minmax(0,15rem)] grid-flow-col text-base font-medium text-midnigh-900 [counter-reset:section]"
        >
          {sections.map((section, sectionIndex) => (
            <li key={section.id} className="flex [counter-increment:section]">
              <Link
                href={`#${section.id}`}
                scroll={true}
                className={clsx(
                  'flex w-full flex-col items-center justify-center border-b-2 before:mb-2 before:font-mono before:text-sm before:content-[counter(section,decimal-leading-zero)]',
                  sectionIndex === activeIndex
                    ? 'border-blue-600 bg-blue-50 text-blue-600 before:text-blue-600'
                    : 'border-transparent before:text-midnigh-500 hover:bg-blue-50/40 hover:before:text-midnigh-900',
                )}
              >
                {section.title}
              </Link>
            </li>
          ))}
        </ol>
      </div> */}
    </div>
  )
}
