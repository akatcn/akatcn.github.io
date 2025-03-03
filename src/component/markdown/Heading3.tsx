import React from 'react'

type Heading3Type = {
  children: React.ReactNode
  id: string
}

function Heading3({ children, id }: Heading3Type) {
  return (
    <h2 className="relative scroll-mt-16 group text-xl font-bold mt-4 leading-8" id={id}>
      {children}
      <a className="absolute group-hover:opacity-80 -left-4 pr-1 top-0 before:content-['#'] opacity-0 transition-opacity duration-300" href={`#${encodeURIComponent(id)}`}></a>
    </h2>
  )
}

export default Heading3