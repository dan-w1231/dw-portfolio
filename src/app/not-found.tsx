import Link from 'next/link'
import { Container } from '@/components/Container'
import { GridPattern } from '@/components/GridPattern'

export default function NotFound() {
  return (
    <div className="relative w-full flex justify-center items-center h-[50vh] mt-10 md:mt-24">
      <Container className="w-full flex flex-col items-center justify-start text-center bg-cardGrad dark:bg-cardGradDark backdrop-blur-[140px] rounded-4xl md:rounded-5xl xl:rounded-6xl overflow-hidden p-16 md:p-32">
        <p className="rounded-full px-4 py-1 text-base font-medium tracking-tight text-midnight-900 dark:text-ice-900 ring-1 ring-inset ring-midnight-900 dark:ring-ice-900">
          404
        </p>
        <h1 className="mt-6 font-display text-5xl font-extrabold text-midnight-900 dark:text-ice-900 sm:text-6xl">
          Page not found
        </h1>
        <p className="mt-4 text-lg tracking-tight text-midnight-700 dark:text-ice-700">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <Link
          href="/"
          className="mt-6 text-base font-medium text-blurple-900 hover:text-midnight-900 dark:hover:text-ice-900"
        >
          <span aria-hidden="true">&larr;</span> Go back home 
        </Link>
      </Container>
    </div>
  )
}
