import StaticChip from '@/component/ui/static/StaticChip'
import React from 'react'

function ArticlePage() {
  return (
    <div className='w-full text-center space-y-6 mt-16'>
      <h1 className='text-8xl font-extrabold'>블로그</h1>
      <p className='text-gray-600'>(블로그 페이지에 대한 간략한 설명)</p>
      <StaticChip text='TEST' selected={true} />
      <StaticChip text='TEST' selected={false} />
    </div>
  )
}

export default ArticlePage