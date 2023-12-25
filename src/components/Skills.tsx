import { AcademicCapIcon, ChevronDoubleRightIcon, LibraryIcon, LocationMarkerIcon, OfficeBuildingIcon } from '@heroicons/react/solid';

export default function Skills() {
    // const cssFrameWorksData = [
    //     "Tailwind-css", "Bootstrap", "Material-UI", "Radix-UI"
    // ];

    const frameworksData = [
        "ReactJS", "NextJS", "React-Native","Angular", "JavaScript", "HTML", "CSS", "DevOps", "Figma"
    ];

    const languagesKnown = [
        "English", " Hindi ", "Telugu",
    ];
    return (
        <>
            {/* <div className=' w-[90%] md:w-[75%] lg:w-[55%] mx-auto my-10'>
                <h1 className=' text-white font-bold text-2xl mb-4'>Technical Skills</h1>
                <div className=' bg-white shadow-2xl my-10 p-6 flex flex-col'>
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
            </div> */}

            <div className=' w-[90%] md:w-[75%] lg:w-[55%] mx-auto my-10'>
            <h1 className=' text-white font-bold text-2xl mb-4'>Technical Skills</h1>
                <div className=' bg-white shadow-2xl mb-10 p-6 flex flex-col sm:grid sm:grid-cols-2 rounded'>
                    {/* <h1 className=' text-clr1 font-bold text-xl'>Familiar With Frontend Frameworks</h1> */}
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

            <div className=' w-[90%] md:w-[75%] lg:w-[55%] mx-auto my-10'>
            <h1 className=' text-white font-bold text-2xl mb-4'>Languages Known</h1>
                <div className=' bg-white shadow-2xl mb-10 p-6 flex flex-col rounded'>
                    {/* <h1 className=' text-clr1 font-bold text-xl'>Languages</h1> */}
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
