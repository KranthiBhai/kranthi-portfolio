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
    {
      title: "Whrool-Online Dating App",
      type: "Online-Dating",
      data: "Whrool is a dating app, which provides the user to interact with new profiles. He/She can Like the profile and also the user can save the profile to see later. There is a feature to chat with the user. Both the users can chat in the real-time and can share their words. To search for a particular profile there is a option to search the user, where he/she can search based on the age, city-name & interests. Based on the user input the search results will be shown. There is a one more feature which is a Catch & Match feature. This feature will work based on the user location. By locating the user location it will show the near-by-users with in the radius of 5Km to 50Km. While increasing the radius the new profiles will load. If the user faces any issue regarding anything he faces in the application there is an option to raise a ticket. The user can track his/her ticket in the TicketHistory. If the user find the whrooler-profile is cheating or any other reason there is an option to report the user.This Dating is a Paid Version, but still the user can use this app with limited resources.",
      image: "/media/projects/whrool.png",
      href: "https://dem.whrool.com/",
    },
    {
      title: "Abhay Innovative Recycling",
      type: "Waste Recycling",
      data: "I had built the website for Abhay Innovative Recycling Pvt Ltd, which showcases their company info, about their team, recycling methods, technology used, sustainability and various versatile products offered by them with recycling the waste produced.",
      image: "/media/projects/air.png",
      href: "https://abhayinnovativerecycling.in/",
    },
    {
      title: "Ask Your Needs",
      type: "Delivery App",
      data: `Ask Your Needs is a delivery app, which provides delivery for all type of home needs, food & beverages. There are like majorly three sections here Daily Needs, Food & Beverages and Services. 
In the Daily Needs section the user can buy any product in this section. In this section the user can see all the home need products and groceries and beauty products. 
In Food & Beverages section the user can order food from the restaurats from various restaurants available in the city/town.
In Services section the user can book any provided service like Electrician, Plumber, Carpenter, Cabs, Packers & Movers etc.,

With this Delivery App I have developed the Delivery Boy App & Merchant App, Where they will receive the order.
`,
      image: "/media/projects/AskYourNeeds.png",
      href: "https://askyourneeds.com/",
    },
  ];
  return (
    <Shell>
      <div className=" w-full min-h-[90vh] bg-clr2/60 pb-20">
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
                  <p className=" h-[9rem] overflow-auto">{item.data}</p>
                </div>
                {/* Image */}
                <div className=" w-1/2 min-h-[15rem] h-[256px]">
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
