"use client"

import MoonIcon from '@/component/global/MoonIcon'
import SunIcon from '@/component/global/SunIcon'
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
      <div className='flex items-center justify-between max-w-7xl m-auto py-2 px-4 md:px-5'>
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
        <div className='flex items-center gap-x-2'>
          {/* 라이트 모드로 전환 버튼 */}
          <button className='p-2 rounded-full hover:bg-system-gray-6 cursor-pointer hidden dark:block text-yellow-500' onClick={toggleTheme}><SunIcon /></button>
          {/* 다크 모드로 전환 버튼 */}
          <button className='p-2 rounded-full hover:bg-system-gray-6 cursor-pointer dark:hidden text-indigo-500' onClick={toggleTheme}><MoonIcon /></button>
          <Link href="/about">
            <span className='font-bold p-2 hover:bg-system-gray-6 rounded-lg'>소개</span>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default GlobalNavigation