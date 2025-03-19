import GitHubIcon from '@/component/about/GitHubIcon'
import React from 'react'

function ContactCard() {
  return (
    <div>
      <address className='text-xl font-light not-italic'>
        <a href="mailto:akatcn@gmail.com">✉️ akatcn@gmail.com</a>
      </address>
      <div className='flex gap-x-1 mt-4 items-center'>
        <GitHubIcon />
        <a href="https://www.github.com/akatcn" className='text-xl font-light border-b-1 border-b-system-gray-3'>github.com/akatcn</a>
      </div>
    </div>
  )
}

export default ContactCard