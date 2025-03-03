import React from 'react'

type Heading2Type = {
  children: React.ReactNode
  id: string
}

function Heading2({ children, id }: Heading2Type) {
  return (
    <h2 className="relative scroll-mt-16 group text-3xl font-bold mt-6 leading-10" id={id}>
      {children}
      <a className="absolute group-hover:opacity-80 -left-6 pr-1 top-0 before:content-['#'] opacity-0 transition-opacity duration-300" href={`#${encodeURIComponent(id)}`}></a>
    </h2>
  )
}

export default Heading2