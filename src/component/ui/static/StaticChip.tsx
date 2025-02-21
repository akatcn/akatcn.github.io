import { cva } from 'class-variance-authority'
import classNames from 'classnames'
import React from 'react'

export const StaticChipSizeEnum = {
  XL: "EXTRA_LARGE",
  L: "LARGE",
  M: "MEDIUM",
  S: "SMALL"
} as const

type StaticChipProps = {
  text: string
  selected: boolean
  size?: (typeof StaticChipSizeEnum)[keyof typeof StaticChipSizeEnum]
}

const staticChipVariants = cva([], {
  variants: {
    size: {
      [StaticChipSizeEnum.XL]: "px-4 py-2 text-base rounded-xl",
      [StaticChipSizeEnum.L]: "px-3 py-1.5 text-sm rounded-lg",
      [StaticChipSizeEnum.M]: "px-2 py-1 text-sm rounded-md",
      [StaticChipSizeEnum.S]: "px-1.5 py-0.5 text-xs rounded-md",
    },
    selected : {
      true: "bg-present text-absent hover:bg-present/80",
      false: "bg-system-gray-6 text-system-gray hover:bg-system-gray-5"
    }
  }
})

function StaticChip({ text, selected, size = StaticChipSizeEnum.L }: StaticChipProps) {
  return (
    <button className={classNames(staticChipVariants({size, selected}))}>
      { text }
    </button>
  )
}

export default StaticChip