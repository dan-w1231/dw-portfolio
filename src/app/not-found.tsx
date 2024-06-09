import Link from 'next/link'

import { Container } from '@/components/Container'
import { GridPattern } from '@/components/GridPattern'

export default function NotFound() {
  return (
    <div className="relative flex flex-auto items-center">
      <div className="absolute inset-0 -z-10 text-midnight-900/10 [mask-image:linear-gradient(transparent,white,transparent)]">
        <GridPattern x="50%" y="50%" patternTransform="translate(0 60)" />
      </div>
      <Container className="flex flex-col items-center py-16 text-center sm:py-20 lg:py-32">
        <p className="rounded-full px-4 py-1 text-base font-medium tracking-tight text-midnight-900 dark:text-ice-900 ring-1 ring-inset ring-slate-900">
          404
        </p>
        <h1 className="mt-6 font-display text-5xl font-extrabold text-midnight-900 dark:text-ice-900 sm:text-6xl">
          Page not found
        </h1>
        <p className="mt-4 text-lg tracking-tight text-midnight-700">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <Link
          href="/"
          className="mt-6 text-base font-medium text-blurple-900 hover:text-midnight-900"
        >
          <span aria-hidden="true">&larr;</span> Go back home 
        </Link>
      </Container>
    </div>
  )
}
