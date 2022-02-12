import React, { ReactNode } from 'react'
import classNames from '../lib/classNames';

type ShellProps = {
  children?: ReactNode
  classNames?: ReactNode
}
export default function Shell(props:ShellProps) {

  return (
    <div className={classNames(' h-screen-header overflow-auto', props.classNames)} >
        {props.children}
    </div>
  )
}
