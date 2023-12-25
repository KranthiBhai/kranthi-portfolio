import React, { ReactNode } from 'react'
import classNames from '../lib/classNames';
import { Navbar } from './navbars/Navbar';

type ShellProps = {
  children?: ReactNode
  classNames?: ReactNode
}
export default function Shell(props:ShellProps) {

  return (
    // <div className={classNames(' h-screen-header-4rem lg:h-screen-header-5rem overflow-auto', props.classNames)} >
    <div className={classNames(' w-full h-full overflow-hidden', props.classNames)}>
      <Navbar /> 
      <div className='w-full h-full overflow-auto'>
        {props.children}
        </div>
    </div>
  )
}
