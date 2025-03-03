import React from 'react'

type Heading1Type = {
  children: React.ReactNode
  id: string
}

function Heading1({ children, id }: Heading1Type) {
  return (
    <h1 className="relative scroll-mt-16 group text-4xl font-extrabold mt-8 leading-15" id={id}>
      {children}
      <a className="absolute group-hover:opacity-80 -left-8 pr-2 top-0 before:content-['#'] opacity-0 transition-opacity duration-300" href={`#${encodeURIComponent(id)}`}></a>
    </h1>
  )
}

export default Heading1