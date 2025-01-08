import StaticChip from '@/component/ui/static/StaticChip'
import Link from 'next/link'
import React from 'react'

export type ChipDataType = {
  text: string
  selected: boolean
  path: string
}

type StaticLinkChipProps = ChipDataType

function StaticLinkChip({ text, selected, path }: StaticLinkChipProps) {
  return (
    <Link href={path}>
      <StaticChip text={text} selected={selected} />
    </Link>
  )
}

export default StaticLinkChip