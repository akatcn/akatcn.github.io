import React from 'react'

type Heading1Type = {
  children: React.ReactNode
  id: string
}

function Heading1({ children, id }: Heading1Type) {
  return (
    <h1 className="scroll-mt-16 group text-4xl font-extrabold mt-8 leading-15" id={id}>
      {children}
      <a className="group-hover:opacity-80 focus:opacity-80 pl-1.5 before:content-['#'] opacity-0 transition-opacity duration-300" href={`#${encodeURIComponent(id)}`}></a>
    </h1>
  )
}

export default Heading1