import React from 'react';
import Education from './Education';
import Experiance from './Experiance';
import Skills from './Skills';

export default function Resume() {
  return( 
    <div className=' bg-[#C36A2D] pt-10 pb-20'>
        <h1 className=' text-white font-bold text-2xl text-center underline'>RESUME</h1>
        <Experiance />
        <Education />
        <Skills />
    </div>
    );
}
