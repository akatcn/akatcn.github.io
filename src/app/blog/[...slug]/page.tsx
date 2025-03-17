import StaticChip from '@/component/ui/static/StaticChip'
import { formatDate } from '@/lib/dateUtil'
import { parsedMarkdowns } from '@/lib/markdownFileUtil'
import React from 'react'

export const dynamicParams = false

export const generateStaticParams = async () => {
  return parsedMarkdowns
    .map(markdown => {
      const url = markdown.path.replace(/\.mdx$/, "")
      const blogIndex = url.indexOf("src/markdown/blog/")
      const segments = url.slice(blogIndex + "src/markdown/blog/".length)

      return {
        slug: segments.split("/").filter(segment => segment.length > 0)
      }
    })
}

type PostDetailPageProps = {
  params: Promise<{
    slug: string[]
  }>
}

async function PostDetailPage({ params }: PostDetailPageProps) {
  const { slug } = await params
  const path = decodeURIComponent(slug.join("/"))
  const matchedMarkdown = parsedMarkdowns.find(md => md.path.includes(`${path}.mdx`))
  const formattedDate = formatDate(new Date(matchedMarkdown?.frontmatter.date ?? ""))

  return (
    <article className='max-w-3xl mx-auto'>
      <div className='my-8 md:my-14 pb-6 border-b-1 border-gray-300'>
        <h1 className='text-4xl md:text-5xl font-extrabold leading-12 md:leading-15'>{matchedMarkdown?.frontmatter.title}</h1>
        <div className='space-y-2 mt-2'>
          <h2 className='text-2xl text-system-gray'>{matchedMarkdown?.frontmatter.subtitle}</h2>
          <div className='flex flex-wrap gap-2 mt-4'>
            {
              matchedMarkdown?.frontmatter.tags.map(tag => <StaticChip key={tag} text={tag} selected={false} />)
            }
          </div>
          {
            matchedMarkdown?.frontmatter.date &&
            <div className='mt-4 text-system-gray-2'>{`${formattedDate.year} ${formattedDate.month} ${formattedDate.day}`}</div>
          }
        </div>
      </div>
      <div className='yhmd'>
        {matchedMarkdown?.content}
      </div>
    </article>
  )
}

export default PostDetailPage