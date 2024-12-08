import MyComponent from "@/component/MyComponent";
import fs from "fs";
import { sync } from "glob";
import { compileMDX, MDXRemoteProps } from 'next-mdx-remote/rsc'
import remarkGfm from "remark-gfm";
import remarkEmoji from 'remark-emoji';
import remarkToc from "remark-toc";
import rehypePrettyCode from "rehype-pretty-code";

const SOURCE_PATH = `${process.cwd()}/src`

/**
 * /markdown/article 아래 모든 MDX 파일의 경로를 반환하는 함수
 */
const getAllArticlePaths = () => {
  const paths = sync(`${SOURCE_PATH}/markdown/article/**/*.mdx`);

  return paths
    .filter(path => {
      const segments = path.split("/")
      const articleIndex = segments.indexOf("article")
      return articleIndex !== -1 && segments.length === articleIndex + 4
    })
}

/**
 * /markdown/article 아래의 모든 MDX 파일을 파싱하여 반환하는 함수
 * @param tocHeading TOC로 쓰일 제목
 * @param components MDX 내에 사용할 컴포넌트명 배열
 * @returns MDX 파일의 경로, frontmatter, 컨텐츠를 담은 객체의 배열
 */
export const getParsedMarkdowns = async (tocHeading: string, components?: MDXRemoteProps["components"], ) => {
  const filePaths = getAllArticlePaths()
  
  return await Promise.all(filePaths
    .map(async (path) => {
      const fileContent = fs.readFileSync(path, 'utf-8');
      const { frontmatter, content } = await compileMDX({
        source: fileContent,
        components,
        options: {
          mdxOptions: {
            remarkPlugins: [remarkGfm, remarkEmoji, [remarkToc, { heading: tocHeading }]],
            rehypePlugins: [rehypePrettyCode]
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

// todo: 적절한 파일로 옮길 것(ex. data.ts)
// todo: 마크다운에 적용할 컴포넌트들의 이름을 programmatic하게 추출하여 리스트업 할 것
const components = {
  MyComponent
}

// todo: 적절한 파일로 옮길 것(ex. data.ts)
export const parsedMarkdowns = await getParsedMarkdowns("목차", components)