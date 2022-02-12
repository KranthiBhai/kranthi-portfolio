import React from 'react';
import Education from './Education';
import Experiance from './Experiance';
import Skills from './Skills';

export default function Resume() {
  return( 
    <div className=' bg-[#d3d3d3] py-20'>
        <h1 className=' text-clr1 font-bold text-2xl text-center'>RESUME</h1>
        <Experiance />
        <Education />
        <Skills />
    </div>
    );
}
