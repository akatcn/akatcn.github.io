import { formatDate } from '@/lib/dateUtil'
import React from 'react'

export type AffiliationPeriodProps = {
  organization: string
  description: string
  startDate: Date
  endDate?: Date | "현재" | "Present"
}

function AffiliationPeriodCard({ organization, description, startDate, endDate }: AffiliationPeriodProps) {
  const formattedStartDate = `${formatDate(startDate).year} ${formatDate(startDate).month}`
  const formattedEndDate = endDate instanceof Date ? `${formatDate(endDate).year} ${formatDate(endDate).month}` : endDate

  return (
    <div className='md:mr-48'>
      <h3 className='text-3xl font-bold'>{ organization }</h3>
      <p className='my-1'>{ description }</p>
      <div className='text-system-gray'>
        <time dateTime={startDate.toDateString()}>{ formattedStartDate }</time>
        { endDate &&
          <>
            <span> ~ </span>
            <time dateTime={startDate.toDateString()}>{ formattedEndDate }</time>
          </>
        }
      </div>
    </div>
  )
}

export default AffiliationPeriodCard