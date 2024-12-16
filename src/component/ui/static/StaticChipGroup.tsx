import StaticChip from '@/component/ui/static/StaticChip'
import Link from 'next/link'
import React from 'react'

export type ChipDataType = {
  text: string
  selected: boolean
  path: string
}

type StaticChipGroupProps = {
  chips: ChipDataType[]
}

function StaticChipGroup({ chips }: StaticChipGroupProps) {
  return (
    <div className='space-x-2'>
      {chips.map((chip, index) => 
        <Link key={index} href={chip.path}>
          <StaticChip text={chip.text} selected={chip.selected} />
        </Link>
      )}
    </div>
  )
}

export default StaticChipGroup