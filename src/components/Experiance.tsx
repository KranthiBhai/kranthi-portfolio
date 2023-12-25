import React from 'react';
import {  BriefcaseIcon, LocationMarkerIcon, OfficeBuildingIcon } from '@heroicons/react/solid';

export default function Experiance() {
  return( 
    <div className=' w-[55%] mx-auto my-10'>
        <h1 className=' text-clr1 font-bold text-2xl'>Experience</h1>
        <div className=' bg-white shadow-2xl my-4 p-6 flex'>
            <div>
                <h1 className=' text-clr1 font-bold text-xl'>2021 - Present</h1>
                <div className=' flex items-center'>
                <BriefcaseIcon className=' w-6 h-6 mr-2 my-2 fill-clr1' />
                <p className=' font-bold text-ellipsis whitespace-nowrap'>FRONTEND DEVELOPER</p>
                </div>
                <div className=' flex items-center'>
                <OfficeBuildingIcon className=' w-6 h-6 mr-2 my-2 fill-clr1 ' />
                <p className=' font-bold'>SqubeSoftSol.Pvt.Ltd</p>
                </div>
                <div className=' flex items-center'>
                    <LocationMarkerIcon className=' w-6 h-6 mr-2 my-2 fill-clr1' />
                    <p className=' font-bold'>Guntur</p>
                </div>
            </div>

            <div className=' mx-10'>
                <p> From Jan, 2021, i have been working in <strong>SqubeSoftSol Pvt Ltd compony</strong> as a Frontend Developer.
                    I've been working with projects like dating websites and creating HTML templates. Familiar with CSS frameworks like
                    Tailwindcss, Bootstrap, Material UI, Radix-ui.
                </p>
            </div>
        </div>
    </div>
    );
}
