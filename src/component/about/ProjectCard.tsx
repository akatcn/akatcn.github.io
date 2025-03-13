import React from 'react'
import ReactMarkdown from "react-markdown"

type ProjectCardProps = {
  projectName: string
  projectDescription: string
  tasks: string[]
  keyAchievements?: string[]
}

function ProjectCard({ projectName, projectDescription, tasks, keyAchievements = [] }: ProjectCardProps) {
  return (
    <div className='flex flex-col gap-y-4'>
      <div>
        <h3 className='text-2xl font-bold'>{ projectName }</h3>
        <p className='font-semibold'>{ projectDescription }</p>
      </div>
      <div>
        <h4 className='text-xl font-bold'>담당 업무</h4>
        <ul className='list-disc pl-5'>
          { tasks.map(task => <li key={task}>{ <ReactMarkdown>{ task }</ReactMarkdown> }</li>) }
        </ul>
      </div>
      {
        keyAchievements.length > 0 &&
        <div>
          <h4 className='text-xl font-bold'>핵심 성과</h4>
          <ul className='list-disc pl-5'>
            { keyAchievements.map(keyAchievement => <li key={keyAchievement}><ReactMarkdown>{ keyAchievement }</ReactMarkdown></li>) }
          </ul>
        </div>
      }
    </div>
  )
}

export default ProjectCard