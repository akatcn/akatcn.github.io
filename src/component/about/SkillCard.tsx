import React from 'react'

type SkillCardProps = {
  skillName: string
  descriptions: string[]
}

function SkillCard({ skillName, descriptions }: SkillCardProps) {
  return (
    <div className='mb-8'>
      <h3 className='text-3xl font-bold mb-2'>{ skillName }</h3>
      <ul className='list-disc pl-5'>
        { descriptions.map(description => <li key={description}>{description}</li>) }
      </ul>
    </div>
  )
}

export default SkillCard