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
      <div className='my-8 md:my-14 pb-6 border-b-1 border-gray-300'>
        <h1 className='text-4xl md:text-5xl font-extrabold leading-12 md:leading-15'>{matchedMarkdown?.frontmatter.title}</h1>
        <div className='space-y-2 mt-2'>
          <h2 className='text-2xl text-system-gray'>{matchedMarkdown?.frontmatter.subtitle}</h2>
          <div className='flex flex-wrap gap-2 mt-4'>
            <StaticChip text="연구" selected={false} />
            <StaticChip text="JavaScript" selected={true} />
            <StaticChip text="Computer Science" selected={false} />
          </div>
          <div className='mt-4 text-system-gray-2'>{new Date(matchedMarkdown?.frontmatter.date ?? "").toLocaleString("ko-KR")}</div>
        </div>
      </div>
      <div className='yhmd'>
        {matchedMarkdown?.content}
      </div>
    </article>
  )
}

export default PostDetailPage