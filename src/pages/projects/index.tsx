import React from "react";
import Shell from "../../components/Shell";

export default function Projects() {
  const propjectsData = [
    {
      title: "Global Destination Management",
      type: "Tourism",
      data: "This is a Tourism based project. This projects provides a best place to choose and book best tour places, restaurants, hotels, shopping etc., It provides best User Interface and it is very easy to handle. The main features included in this project are Payment Gateway, stylish cards design for showing offers and best deals.",
      image: "/media/projects/global-destination-management.jpg",
      href: "http://globaldestination.in/",
    },
  ];
  return (
    <Shell>
      <div className=" w-full min-h-[90vh] bg-clr2/60">
        <h1 className=" w-full text-center text-white text-3xl font-bold py-10">
          Projects
        </h1>
        <p className=" w-1/2 mx-auto text-white">
          Here are my latest Projects which are build with React Js with
          Typescript template and the css framework used in the projects is
          Tailwind CSS and used several Libraries like Radix-UI, Material-UI,
          Bootstrap, React-Bootstrap, Chakra-UI etc.,
        </p>

        {/* Projects */}
        <div className=" flex flex-col-reverse gap-y-10 my-10">
          {propjectsData.map((item, index) => {
            return (
              <div
                key={index}
                className=" rounded-lg shadow-2xl bg-gray-100 w-2/3 mx-auto min-h-[15rem] flex"
              >
                {/* text */}
                <div className=" w-1/2 p-4">
                  <div className=" mb-4">
                    <h1 className=" text-xl font-bold">{item.title}</h1>
                    <p className=" text-sm">{item.type}</p>
                  </div>
                  <p>{item.data}</p>
                </div>
                {/* Image */}
                <div className=" w-1/2 min-h-[15rem] h-full">
                  <a
                    href={item.href}
                    target="_blank"
                    className=" min-h-[15rem] h-full"
                  >
                    <img
                      src={item.image}
                      alt="img"
                      className=" min-h-[15rem] h-full object-cover"
                    />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Shell>
  );
}
