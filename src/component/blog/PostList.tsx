import PostItem from '@/component/blog/PostItem'
import { parsedMarkdowns, ParsedMarkdownType } from '@/lib/markdownFileUtil'
import React from 'react'

const extractPath = (inputPath: string) => {
  const match = inputPath.match(/\/markdown(\/[^\/]+)*\/([^\/]+)\.mdx$/)
  return match ? match[0].replace('/markdown', '').replace(/\.mdx$/, '') : "/"
}

function organizePostsByYear(posts: ParsedMarkdownType): { year: number; posts: ParsedMarkdownType }[] {
  const postsByYear: { [key: number]: ParsedMarkdownType } = {}

  posts.forEach(post => {
    const year = new Date(post.frontmatter.date).getFullYear()
    
    if (!postsByYear[year]) {
      postsByYear[year] = []
    }
    postsByYear[year].push(post)
  })

  Object.keys(postsByYear).forEach(year => {
    postsByYear[parseInt(year)].sort((a, b) => {
      return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
    })
  })

  const result = Object.entries(postsByYear)
    .sort((a, b) => parseInt(b[0]) - parseInt(a[0])) // 연도 내림차순 (최신 연도부터)
    .map(([year, posts]) => ({
      year: parseInt(year),
      posts
    }))

  return result
}

function PostList() {
  const organizedPostsByYear = organizePostsByYear(parsedMarkdowns)

  return (
    <section className='group max-w-[60rem] mx-auto lg:mt-14'>
      {
        organizedPostsByYear.map(organizedPost => 
          <div key={organizedPost.year} className='group/div flex border-t-1 first:border-t-0 border-system-gray-5 py-4'>
            <h2 className='mr-4 mt-4 font-bold text-3xl group-hover:opacity-50 group-hover/div:opacity-100' style={{transition: "background-color 0.3s ease-in-out, opacity 0.3s ease-in-out"}}>{organizedPost.year}</h2>
            <ul className='flex-1'>
              {
                organizedPost.posts.map(posts => 
                  <PostItem
                    key={posts.path}
                    title={posts.frontmatter.title}
                    subtitle={posts.frontmatter.subtitle}
                    date={new Date(posts.frontmatter.date)}
                    path={extractPath(posts.path)}
                  />
                )
              }
            </ul>
          </div>
        )
      }
    </section>
  )
}

export default PostList