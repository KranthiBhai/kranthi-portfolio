import React from 'react'
import Shell from '../../components/Shell'

export default function Projects() {

  const propjectsData = [
    {
      id: 1,
      title: "Photo Sliding Frame",
      data: "It is a simple photo sliding frames with several typesb of effects provided.",
      image: "",
      href: "#",
    },
    {
      id: 2,
      title: "Todo List",
      data: "It is a simple Todo List. You can add a item to list and remove a item from list, you can check or uncheck the item.",
      image: "",
      href: "#",
    },
  ]
  return (
    <div>
      <Shell>
        <div className=' w-full h-full bg-clr2/60'>
            <h1 className=' w-full text-center text-white text-3xl font-bold py-10'>Projects</h1>
            <p className=' w-1/2 mx-auto text-white'>Here are my latest Projects which are build with React Js with Typescript template and the css framework used in the projects is Tailwind CSS and used several Libraries like Radix-UI, Material-UI, Bootstrap, React-Bootstrap, Chakra-UI etc.,</p>
        
            {/* Projects */}
            <div className=' flex flex-col gap-y-10 my-10'>
              {propjectsData.map((item, index) => {
                return(
                  <div key={index} className=" bg-white w-1/2 mx-auto h-fit flex items-center">
                      <div>
                        <h1>{item.title}</h1>
                        <p>{item.data}</p>
                      </div>
                      <div><a href={item.href}><img src={item.image} alt="img" /></a></div>
                  </div>
                );
              })}
            </div>
        </div>
      </Shell>
    </div>
  )
}
