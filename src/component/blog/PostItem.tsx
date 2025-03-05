import Link from 'next/link'
import React from 'react'

type PostItemProps = {
  title: string
  subtitle: string
  date: Date
  path: string
}

function PostItem({ title, subtitle, date, path }: PostItemProps) {
  return (
    <li className='relative p-4 group-hover:opacity-50 hover:opacity-100 hover:bg-system-gray-6 rounded-lg' style={{transition: "background-color 0.3s ease-in-out, opacity 0.3s ease-in-out"}}>
      <h2 className='text-lg font-bold'>{title}</h2>
      <h3 className='mt-1 text-secondary'>{subtitle}</h3>
      <p className='mt-1 text-system-gray text-sm'>{date.toLocaleDateString('ko-KR')}</p>
      <Link href={path} className='absolute top-0 left-0 w-full h-full rounded-2xl' />
    </li>
  )
}

export default PostItem