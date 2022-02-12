import { AcademicCapIcon, ChevronDoubleRightIcon, LibraryIcon, LocationMarkerIcon, OfficeBuildingIcon } from '@heroicons/react/solid';

export default function Skills() {
    const cssFrameWorksData = [
        "Tailwind-css", "Bootstrap", "Material-UI", "Radix-UI"
    ];

    const frameworksData = [
        "ReactJS", "NextJS", "HTML", "CSS", "Python"
    ];

    const languagesKnown = [
        "English", " Hindi ", "Telugu",
    ];
    return (
        <>
            <div className=' w-[55%] mx-auto my-10'>
                {/* <h1 className=' text-clr1 font-bold text-2xl'>Education</h1> */}
                <div className=' bg-white shadow-2xl my-10 p-6 flex flex-col'>
                    <h1 className=' text-clr1 font-bold text-xl'>Familiar With CSS Frameworks</h1>
                    {cssFrameWorksData.map((item, index) => {
                        return (
                            <div key={index} className=' flex items-center'>
                                <ChevronDoubleRightIcon className=' w-6 h-6 mr-2 my-2 fill-clr1' />
                                <p className=' font-bold'>{item}</p>
                            </div>
                        )
                    })}

                    <div>

                    </div>
                </div>
            </div>

            <div className=' w-[55%] mx-auto my-10'>
                {/* <h1 className=' text-clr1 font-bold text-2xl'>Education</h1> */}
                <div className=' bg-white shadow-2xl my-10 p-6 flex flex-col'>
                    <h1 className=' text-clr1 font-bold text-xl'>Familiar With Frontend Frameworks</h1>
                    {frameworksData.map((item, index) => {
                        return (
                            <div key={index} className=' flex items-center'>
                                <ChevronDoubleRightIcon className=' w-6 h-6 mr-2 my-2 fill-clr1' />
                                <p className=' font-bold'>{item}</p>
                            </div>
                        )
                    })}

                    <div>

                    </div>
                </div>
            </div>

            <div className=' w-[55%] mx-auto my-10'>
                {/* <h1 className=' text-clr1 font-bold text-2xl'>Education</h1> */}
                <div className=' bg-white shadow-2xl my-10 p-6 flex flex-col'>
                    <h1 className=' text-clr1 font-bold text-xl'>Languages</h1>
                    {languagesKnown.map((item, index) => {
                        return (
                            <div key={index} className=' flex items-center'>
                                <ChevronDoubleRightIcon className=' w-6 h-6 mr-2 my-2 fill-clr1' />
                                <p className=' font-bold'>{item}</p>
                            </div>
                        )
                    })}

                    <div>

                    </div>
                </div>
            </div>
        </>
    );
}
