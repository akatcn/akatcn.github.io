import PostCard from '@/component/blog/PostCard'
import StaticLinkChip, { ChipDataType } from '@/component/ui/static/StaticLinkChip'
import { getParsedMarkdowns, markdownComponents } from '@/lib/markdownFileUtil'
import React from 'react'

export const parsedMarkdowns = await getParsedMarkdowns("목차", markdownComponents)

const chipsA: ChipDataType[] = [
  {
    text: "전체",
    selected: true,
    path: "/"
  }
]

const extractPath = (inputPath: string) => {
  const match = inputPath.match(/\/markdown(\/[^\/]+)*\/([^\/]+)\.mdx$/)
  return match ? match[0].replace('/markdown', '').replace(/\.mdx$/, '') : "/"
}

function PostPage() {
  return (
    <div className='w-full text-center space-y-6 mt-16'>
      <h1 className='text-8xl font-extrabold'>블로그</h1>
      <p className='text-gray-600'>(블로그 페이지에 대한 간략한 설명)</p>
      <div className='space-x-2'>
        {chipsA.map(chipData => 
          <StaticLinkChip key={chipData.path} text={chipData.text} selected={chipData.selected} path={chipData.path} />
        )}
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4'>
        {
          parsedMarkdowns.map(parsedMarkdown => 
            <PostCard
              key={parsedMarkdown.path}
              title={parsedMarkdown.frontmatter.title}
              subTitle={parsedMarkdown.frontmatter.subTitle}
              date={new Date(parsedMarkdown.frontmatter.date)}
              path={extractPath(parsedMarkdown.path)}
            />
          )
        }
      </div>
    </div>
  )
}

export default PostPage