import React, { ReactNode } from 'react'

type ResumeSectionProps = {
  title: string
  children: ReactNode
  hasDivider?: boolean
}

function ResumeSection({ title, children, hasDivider = false }: ResumeSectionProps) {
  return (
    <section>
      <h2 className='text-4xl md:text-5xl font-bold mb-6'>{ title }</h2>
      <div className='flex flex-col gap-y-8'>
        {children}
      </div>
      { hasDivider && <hr className='my-10 text-system-gray-4' /> }
    </section>
  )
}

export default ResumeSection