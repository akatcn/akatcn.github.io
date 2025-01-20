import { parsedMarkdowns } from '@/app/blog/page'
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
    <article className='prose max-w-3xl m-auto bg-orange-50'>
      {matchedMarkdown?.content}
    </article>
  )
}

export default PostDetailPage