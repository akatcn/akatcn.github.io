import React from 'react'

type Heading4Type = {
  children: React.ReactNode
  id: string
}

function Heading4({ children, id }: Heading4Type) {
  return (
    <h2 className="relative scroll-mt-16 group text-lg font-semibold mt-2" id={id}>
      {children}
      <a className="absolute group-hover:opacity-80 -left-3.5 pr-1 top-0 before:content-['#'] opacity-0 transition-opacity duration-300" href={`#${encodeURIComponent(id)}`}></a>
    </h2>
  )
}

export default Heading4