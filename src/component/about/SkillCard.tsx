import StyledMarkdown from '@/component/about/StyledMarkdown'
import React from 'react'

type SkillCardProps = {
  skillName: string
  descriptions: string[]
}

function SkillCard({ skillName, descriptions }: SkillCardProps) {
  return (
    <div>
      <h3 className='text-3xl font-bold mb-2'>{ skillName }</h3>
      <ul className='list-disc pl-5 font-light'>
        {
          descriptions.map(description =>
            <li key={description}>
              <StyledMarkdown>
                {description}
              </StyledMarkdown>
            </li>
          )
        }
      </ul>
    </div>
  )
}

export default SkillCard