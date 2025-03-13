import React from 'react'
import ReactMarkdown from "react-markdown"

type StyledMarkdownProps = {
  children: string
}

function StyledMarkdown({ children }: StyledMarkdownProps) {
  return (
    <ReactMarkdown
      components={{
        code: ({ children, ...props }) => {
          return (
            <code className="bg-system-gray-6 text-[#EB5757] p-1 rounded font-mono text-sm" {...props}>
              {children}
            </code>
          )
        },
        strong: ({ children, ...props }) => {
          return (
            <strong className="font-bold" {...props}>
              {children}
            </strong>
          )
        }
    }}>
      {children}
    </ReactMarkdown>
  )
}

export default StyledMarkdown