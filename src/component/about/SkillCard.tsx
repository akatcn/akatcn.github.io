import React from 'react'
import ReactMarkdown from "react-markdown"

type SkillCardProps = {
  skillName: string
  descriptions: string[]
}

function SkillCard({ skillName, descriptions }: SkillCardProps) {
  return (
    <div className='mb-8'>
      <h3 className='text-3xl font-bold mb-2'>{ skillName }</h3>
      <ul className='list-disc pl-5'>
        {
          descriptions.map(description =>
            <li key={description}>
              <ReactMarkdown
                components={{
                  code: ({ children, ...props }) => {
                    return (
                      <code
                        className="bg-system-gray-6 text-[#EB5757] p-1 rounded font-mono text-sm"
                        {...props}>
                        {children}
                      </code>
                    )
                  }
                }}>
                {description}
              </ReactMarkdown>
            </li>
          )
        }
      </ul>
    </div>
  )
}

export default SkillCard