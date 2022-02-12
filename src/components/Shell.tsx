import React, { ReactNode } from 'react'

type ShellProps = {
  children: ReactNode
}
export default function Shell(props:ShellProps) {
  return (
    <div className=' h-screen-header w-[40%] bg-[#9aa4db] overflow-auto' >
        {props.children}
    </div>
  )
}
