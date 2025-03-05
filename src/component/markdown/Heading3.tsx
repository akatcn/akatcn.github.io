import React from 'react'

type Heading3Type = {
  children: React.ReactNode
  id: string
}

function Heading3({ children, id }: Heading3Type) {
  return (
    <h3 className="scroll-mt-16 group text-xl font-bold mt-4 leading-8" id={id}>
      {children}
      <a className="group-hover:opacity-80 focus:opacity-80 pl-1 before:content-['#'] opacity-0 transition-opacity duration-300" href={`#${encodeURIComponent(id)}`}></a>
    </h3>
  )
}

export default Heading3