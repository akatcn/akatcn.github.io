import AffiliationPeriodCard, { AffiliationPeriodProps } from '@/component/about/AffiliationPeriodCard'
import React, { ReactNode } from 'react'

type ExperienceCardProps = {
  children: ReactNode
  hasDivider?: boolean
} & AffiliationPeriodProps

function ExperienceCard({ organization, description, startDate, endDate, children, hasDivider }: ExperienceCardProps) {
  return (
    <>
      <div className='lg:flex'>
        <AffiliationPeriodCard organization={organization} description={description} startDate={startDate} endDate={endDate} />
        <div className='flex flex-col gap-y-12'>
          { children }
        </div>
      </div>
      { hasDivider && <hr className='my-10 text-system-gray-4' /> }
    </>
  )
}

export default ExperienceCard