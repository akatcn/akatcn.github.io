"use client"

import { GroupNameKrMap } from '@/lib/groupNameMap'
import classNames from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function GlobalNavigation() {
  const currentGroupName = usePathname().split("/").filter(Boolean)[1] || "";

  return (
    <nav className='sticky top-0 w-full'>
      <div className='flex items-center justify-between max-w-7xl m-auto py-3 px-4 md:px-5 backdrop-blur-sm'>
        <Link href="/">
          <p className='font-bold md:text-lg'>YHSpace</p>
        </Link>
        <ul className='flex items-center gap-x-6'>
          {
            Object.entries(GroupNameKrMap).map(([path, groupName]) => 
              <Link href={`/blog/${path}`} key={path}>
                <li className={classNames('text-sm text-gray-800', currentGroupName === path && "font-bold")}>{groupName}</li>
              </Link>
            )
          }
        </ul>
        <div className='flex items-center md:gap-x-6'>
          <Link href="/about">
            <p className='font-bold'>소개</p>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default GlobalNavigation