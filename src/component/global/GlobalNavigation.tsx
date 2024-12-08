import Link from 'next/link'
import React from 'react'


function GlobalNavigation() {
  return (
    <nav className='sticky top-0 w-full bg-red-300/50'>
      <div className='flex items-center justify-between max-w-7xl m-auto py-3 px-4 md:px-5'>
        <Link href="/">
          <p className='font-bold md:text-lg'>YHSpace</p>
        </Link>
        <div className='hidden md:flex md:items-center md:gap-x-6'>
          <Link href="/about">
            <p>About</p>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default GlobalNavigation