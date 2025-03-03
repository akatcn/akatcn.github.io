"use client"

import { useThemeMode } from '@/hooks/useThemeMode'
import { GroupNameKrMap } from '@/lib/groupNameMap'
import classNames from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function GlobalNavigation() {
  const currentGroupName = usePathname().split("/").filter(Boolean)[1] || "";
  const { toggleTheme } = useThemeMode()

  return (
    <nav className='sticky top-0 w-full z-50 border-b-1 border-b-system-gray-5 bg-absent' style={{transition: "border-color .5s, background-color .5s"}}>
      <div className='flex items-center justify-between max-w-7xl m-auto py-3 px-4 md:px-5'>
        <Link href="/">
          <p className='font-bold md:text-lg'>YHSpace</p>
        </Link>
        <ul className='absolute left-1/2 top-1/2 -translate-[50%] hidden md:flex items-center gap-x-6'>
          {
            Object.entries(GroupNameKrMap).map(([path, groupName]) => 
              <Link href={`/blog/${path}`} key={path}>
                <li className={classNames('text-sm', currentGroupName === path ? "font-bold" : "text-system-gray")}>{groupName}</li>
              </Link>
            )
          }
        </ul>
        <div className='hidden md:flex items-center md:gap-x-6'>
          <button className='cursor-pointer hidden dark:block' onClick={toggleTheme}>라이트 모드로 전환</button>
          <button className='cursor-pointer dark:hidden' onClick={toggleTheme}>다크 모드로 전환</button>
          <Link href="/about">
            <p className='font-bold'>소개</p>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default GlobalNavigation