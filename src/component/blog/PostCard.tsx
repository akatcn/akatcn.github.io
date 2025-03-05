import { ChipDataType } from '@/component/ui/static/StaticLinkChip'
import StaticChip, { StaticChipSizeEnum } from '@/component/ui/static/StaticChip'
import Link from 'next/link'
import React from 'react'

type PostCardProps = {
  title: string
  subtitle: string
  chips?: ChipDataType[]
  date: Date
  path: string
}

function PostCard({ title, subtitle, chips = [], date, path }: PostCardProps) {
  return (
    <div className='relative flex flex-col justify-between p-5 bg-system-gray-6 rounded-2xl text-start hover:bg-system-gray-5 h-full'>
      <div className='space-y-3 mb-3'>
        <p className='font-bold text-2xl'>{title}</p>
        <p className='text-system-gray'>{subtitle}</p>
      </div>
      <div className='flex items-center justify-between'>
        <div className='space-x-2 z-10'>
          {chips.map((chip, index) => 
            <Link key={index} href={chip.path}>
              <StaticChip text={chip.text} selected={chip.selected} size={StaticChipSizeEnum.M} />
            </Link>
          )}
        </div>
        <p className='text-sm text-system-gray'>{date.toLocaleDateString('ko-KR')}</p>
      </div>
      <Link href={path} className='absolute top-0 left-0 w-full h-full rounded-2xl' />
    </div>
  )
}

export default PostCard