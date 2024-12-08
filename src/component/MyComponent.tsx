import React from 'react'

type MyComponentProps = {
  str: string
}

function MyComponent({ str }: MyComponentProps) {
  return (
    <div className="text-red-500">This is MyComponent { str }!!</div>
  )
}

export default MyComponent