import React from 'react'

function NotFoundPage() {
  return (
    <article className='h-full flex flex-col gap-y-2 items-center justify-center'>
      <span className='text-8xl font-bold'>404</span>
      <p className='text-system-gray'>페이지를 찾을 수 없습니다</p>
    </article>
  )
}

export default NotFoundPage