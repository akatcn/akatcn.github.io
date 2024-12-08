import { parsedMarkdowns } from '@/lib/markdownFileUtil'
import React from 'react'

export const dynamicParams = false

export const generateStaticParams = async () => {
  return parsedMarkdowns
    .map(markdown => {
      const segments = markdown.path.split("/")
      const articleIndex = segments.indexOf("article")

      return {
        group: segments[articleIndex + 1],
        series: segments[articleIndex + 2],
        article: segments[articleIndex + 3].replace(/\.mdx$/, "")
      }
    })
}

type ArticleDetailPageProps = {
  params: Promise<{
    group: string,
    series: string,
    article: string,
  }>
}

async function ArticleDetailPage({ params }: ArticleDetailPageProps) {
  const { group, series, article } = await params
  const matchedMarkdown = parsedMarkdowns.find(md => md.path.includes(`${decodeURIComponent(group)}/${decodeURIComponent(series)}/${decodeURIComponent(article)}.mdx`))

  return (
    <article>
      {matchedMarkdown?.content}
    </article>
  )
}

export default ArticleDetailPage