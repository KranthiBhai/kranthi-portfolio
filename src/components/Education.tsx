import { AcademicCapIcon, LibraryIcon, LocationMarkerIcon, OfficeBuildingIcon } from '@heroicons/react/solid';

export default function Education() {
    const educationData = [
        {
            CourseDuration: "2014 - 2018",
            EducationLevel: "B.Tech",
            College: " KKR & KSR Institute of Technology & Sciences",
            University: "JNTU Kakinada",
            location: "Guntur, A.P",
        },
        {
            CourseDuration: "2012 - 2014",
            EducationLevel: "Intermediate",
            College: "Jagarlamudi Kuppuswamy Chowdary College",
            University: "Board of Intermediate Education",
            location: "Guntur, A.P",
        },
        {
            CourseDuration: "2012",
            EducationLevel: "10th Class",
            College: "Auxilium High School",
            University: "Board of Secondary Education",
            location: "Guntur, A.P",
        },
    ];
    return (
        <>
            <div className=' w-[90%] md:w-[75%] lg:w-[55%] mx-auto my-10'>
                <h1 className=' text-white font-bold text-2xl mb-4'>Education</h1>
                {educationData.map((item, index) => {
                    return (
                        <div key={index} className=' bg-white shadow-2xl mb-10 p-6 flex flex-col rounded'>
                            <div >
                                <h1 className=' text-clr1 font-bold text-xl'>{item.CourseDuration}</h1>
                                <div className=' flex items-center'>
                                    <AcademicCapIcon className=' w-6 h-6 mr-2 my-2 fill-clr1' />
                                    <p className=' font-bold'>{item.EducationLevel}</p>
                                </div>
                                <div className=' flex items-center'>
                                    <OfficeBuildingIcon className=' w-6 h-6 mr-2 my-2 fill-clr1 ' />
                                    <p className=' font-bold'>{item.College}</p>
                                </div>
                                <div className=' flex items-center'>
                                    <LibraryIcon className=' w-6 h-6 mr-2 my-2 fill-clr1 ' />
                                    <p className=' font-bold'>{item.University}</p>
                                </div>
                                <div className=' flex items-center'>
                                    <LocationMarkerIcon className=' w-6 h-6 mr-2 my-2 fill-clr1' />
                                    <p className=' font-bold'>{item.location}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    );
}
