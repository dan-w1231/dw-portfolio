import { NavBar } from '@/components/NavBar'
import Link from 'next/link'


export default function Insights() {
  return (
    <> 
      <NavBar />
      <div id="main" className="relative h-screen flex flex-col justify-center items-center">
        <div className="relative">
          <h2>Insights</h2>
          <Link href="/" className="mt-6 text-base font-medium text-blue-600 hover:text-blue-800">
            Go back home <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </>
  )
}