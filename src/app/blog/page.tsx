import PostList from '@/component/blog/PostList'
import React from 'react'

function PostPage() {
  return (
    <div className='w-full space-y-6 mt-16'>
      <h1 className='text-8xl text-center font-extrabold'>블로그</h1>
      <PostList />
    </div>
  )
}

export default PostPage