import React from 'react'

type Heading2Type = {
  children: React.ReactNode
  id: string
}

function Heading2({ children, id }: Heading2Type) {
  return (
    <h2 className="scroll-mt-16 group text-3xl font-bold mt-6 leading-10" id={id}>
      {children}
      <a className="group-hover:opacity-80 focus:opacity-80 pl-1.5 before:content-['#'] opacity-0 transition-opacity duration-300" href={`#${encodeURIComponent(id)}`}></a>
    </h2>
  )
}

export default Heading2