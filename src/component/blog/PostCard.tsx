import StaticChipGroup, { ChipDataType } from '@/component/ui/static/StaticChipGroup'
import Link from 'next/link'
import React from 'react'

type PostCardProps = {
  title: string
  subTitle: string
  chips: ChipDataType[]
  date: Date
}

function PostCard({ title, subTitle, chips, date }: PostCardProps) {
  return (
    // todo: <Link> 컴포넌트는 <a> 태그로 치환됨. 동시에 <StaticChipGroup> 컴포넌트 또한 <a> 태그로 치환되므로 중첩된 <a>태그가 발생함. 이를 수정할 것
    <Link href="/">
      <div className='flex flex-col justify-between p-5 bg-gray-50 rounded-2xl text-start space-y-3 hover:bg-gray-100 h-full'>
        <div className='space-y-3'>
          <p className='font-bold text-2xl'>{title}</p>
          <p className='text-gray-600'>{subTitle}</p>
        </div>
        <div className='flex items-center justify-between'>
          <StaticChipGroup chips={chips} />
          <p className='text-sm text-gray-500'>{date.toDateString()}</p>
        </div>
      </div>
    </Link>
  )
}

export default PostCard