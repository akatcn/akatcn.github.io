import StaticChip from '@/component/ui/static/StaticChip'
import { parsedMarkdowns } from '@/lib/markdownFileUtil'
import React from 'react'

export const dynamicParams = false

export const generateStaticParams = async () => {
  return parsedMarkdowns
    .map(markdown => {
      const segments = markdown.path.split("/")
      const blogIndex = segments.indexOf("blog")

      return {
        group: segments[blogIndex + 1],
        series: segments[blogIndex + 2],
        post: segments[blogIndex + 3].replace(/\.mdx$/, "")
      }
    })
}

type PostDetailPageProps = {
  params: Promise<{
    group: string,
    series: string,
    post: string,
  }>
}

async function PostDetailPage({ params }: PostDetailPageProps) {
  const { group, series, post } = await params
  const matchedMarkdown = parsedMarkdowns.find(md => md.path.includes(`${decodeURIComponent(group)}/${decodeURIComponent(series)}/${decodeURIComponent(post)}.mdx`))

  return (
    <article className='max-w-3xl mx-auto'>
      <div className='my-14 pb-6 border-b-1 border-gray-300'>
        <h1 className='text-4xl md:text-5xl my-4 font-extrabold md:leading-15'>{matchedMarkdown?.frontmatter.title}</h1>
        <div>
          <h2 className='text-2xl my-2 text-gray-600'>{matchedMarkdown?.frontmatter.description}</h2>
          <span className='text-gray-500'>{new Date(matchedMarkdown?.frontmatter.date ?? "").toLocaleString("ko-KR")}</span>
          <div className='flex gap-2 mt-2'>
            <StaticChip text="연구" selected={false} />
            <StaticChip text="JavaScript" selected={false} />
            <StaticChip text="Computer Science" selected={false} />
          </div>
        </div>
      </div>
      <div className='yhmd'>
        {matchedMarkdown?.content}
      </div>
    </article>
  )
}

export default PostDetailPage