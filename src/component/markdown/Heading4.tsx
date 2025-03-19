import React from 'react'

type Heading4Type = {
  children: React.ReactNode
  id: string
}

function Heading4({ children, id }: Heading4Type) {
  return (
    <h4 className="scroll-mt-16 group text-lg font-semibold mt-2" id={id}>
      {children}
      <a className="group-hover:opacity-80 focus:opacity-80 pl-1 before:content-['#'] opacity-0 transition-opacity duration-300" href={`#${encodeURIComponent(id)}`}></a>
    </h4>
  )
}

export default Heading4