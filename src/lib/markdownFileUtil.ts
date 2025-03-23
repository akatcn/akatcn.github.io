import fs from "fs"
import { sync } from "glob"
import { compileMDX, MDXRemoteProps } from 'next-mdx-remote/rsc'
import remarkGfm from "remark-gfm"
import remarkEmoji from 'remark-emoji'
import remarkToc from "remark-toc"
import rehypePrettyCode from "rehype-pretty-code"
import rehypeExternalLinks from "rehype-external-links"
import rehypeSlug from "rehype-slug"
import Heading1 from "@/component/markdown/Heading1"
import Heading2 from "@/component/markdown/Heading2"
import Heading3 from "@/component/markdown/Heading3"
import Heading4 from "@/component/markdown/Heading4"

const SOURCE_PATH = `${process.cwd()}/src`

/**
 * /markdown/blog 아래 모든 MDX 파일의 경로를 반환하는 함수
 * @returns MDX 파일의 경로들이 담긴 배열
 */
const getAllPostPaths = () => {
  const paths = sync(`${SOURCE_PATH}/markdown/blog/**/*.mdx`);

  return paths
    .filter(path => {
      const url = path.replace(/\.mdx$/, "")
      const blogIndex = url.indexOf("src/markdown/blog/")
      return blogIndex !== -1
    })
}

type FrontmatterType = {
  title: string
  subtitle: string
  tags: string[]
  date: string
};

const rehypePrettyCodeOptions = {
  theme: {
    dark: "github-dark-dimmed",
    light: "github-light",
  }
}

/**
 * /markdown/blog 아래의 모든 MDX 파일을 파싱하여 반환하는 함수
 * @param tocHeading TOC로 쓰일 제목
 * @param components MDX 내에 사용할 컴포넌트명 배열
 * @returns MDX 파일의 경로, frontmatter, 컨텐츠를 담은 객체의 배열
 */
export const getParsedMarkdowns = async (tocHeading: string, components?: MDXRemoteProps["components"]) => {
  const filePaths = getAllPostPaths()
  
  return await Promise.all(filePaths
    .map(async (path) => {
      const fileContent = fs.readFileSync(path, 'utf-8');
      const { frontmatter, content } = await compileMDX<FrontmatterType>({
        source: fileContent,
        components,
        options: {
          mdxOptions: {
            remarkPlugins: [
              remarkGfm,
              remarkEmoji,
              [
                remarkToc,
                {
                  heading: tocHeading
                }
              ]
            ],
            rehypePlugins: [
              [rehypePrettyCode, rehypePrettyCodeOptions],
              rehypeSlug,
              [
                rehypeExternalLinks,
                {
                  target: "_blank",
                  rel: ["noopener", "noreferrer", 'nofollow'],
                  content: { type: 'text', value: '↗︎' },
                  properties: {
                    className: "external-link"
                  }
                }
              ]
            ],
          },
          parseFrontmatter: true
        }
      })

      return {
        path,
        frontmatter,
        content
      }
    })
  )
}

export type ParsedMarkdownType = Awaited<ReturnType<typeof getParsedMarkdowns>>

const markdownComponents = {
  h1: Heading1,
  h2: Heading2,
  h3: Heading3,
  h4: Heading4
}

export const parsedMarkdowns = await getParsedMarkdowns("목차", markdownComponents)