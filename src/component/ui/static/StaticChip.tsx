import React from 'react'
import classNames from 'classnames';

type StaticChipProps = {
  text: string
  selected: boolean
}

function StaticChip({ text, selected }: StaticChipProps) {
  return (
    <button className={classNames("px-3 py-1.5 rounded-lg", selected ? "bg-gray-900 hover:bg-gray-700 text-white" : "bg-gray-200 text-gray-600 hover:bg-gray-100")}>
      { text }
    </button>
  )
}

export default StaticChip