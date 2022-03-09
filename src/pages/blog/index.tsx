import React from 'react'
import Shell from '../../components/Shell'

export default function Blog() {
  return (
    <div>
      <Shell>
        <div className=' h-full flex items-center justify-center'>
          <video autoPlay muted loop className=' w-1/2 h-1/2 shadow-3xl'>
          <source src='/media/blog/comming-soon.mp4' />  
          </video>
        </div>
      </Shell>
    </div>
  )
}
