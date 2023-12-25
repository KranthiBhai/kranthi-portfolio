import { Email, PhoneAndroid } from "@mui/icons-material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { DetailsCard } from "../../components/DetailsCard";
import Shell from "../../components/Shell";

export default function Home() {
  const navigate = useNavigate();
  return (
    <Shell>
      {/* <div className=' w-full h-full flex flex-wrap justify-center md:justify-start bg-[#C36A2D] md:bg-white'>
          <div className="  md:w-[40%] h-full flex pt-20 justify-end md:bg-[#C36A2D]">
            <DetailsCard />
          </div>
          <div className=' md:w-[60%] relative md:left-20 lg:left-40 px-2 pt-20'>
            <h1 className=' text-[4rem] font-extrabold'>Hello</h1>
            <p className=' text-2xl'>Here's who I am & what I do</p>
            <div className=' flex items-center gap-x-4 my-4'>
              <button onClick={() => navigate('/resume')} className=' px-2 py-1 bg-blue-800 text-xl text-white rounded-lg'>Resume</button>
              <button onClick={() => navigate('/projects')} className=' px-2 py-1 border rounded-lg text-xl hover:bg-blue-800 hover:text-white hover:border-none border-black '>Projects</button>
            </div>
            <p className=' w-1/2'>
              I am currently working as a <strong>Frontend Developer</strong> in <strong>SqubeSoftSol.pvt.ltd</strong> company from Jan/2021. My main role is to design the application UI and develop it with using frontend frameworks. For designing application UI I will use <strong>FIGMA</strong> and for building application I will use <strong>ReactJs</strong> ( for Web Applications) and <strong>React-Native</strong> (for Building Native/Mobile Apps).
            </p>
            <div className=' flex flex-col gap-y-4 my-8'>
              <div className=' flex items-center gap-x-2'>
                <PhoneAndroid className=" w-10 h-10" />
                <p>+91 8985264956</p>
              </div>

              <div className=' flex items-center gap-x-2'>
                <Email className=" w-10 h-10" />
                <p>tjkranthikumar@gmail.com</p>
              </div>
            </div>
          </div>
        </div> */}

      <div className=" w-full h-full bg-[#C36A2D] flex flex-col md:flex-row ">
        <div className=" w-full md:w-[30%] lg:w-[40%] flex md:items-center justify-center md:justify-end relative top-20 md:top-0">
          <DetailsCard />
        </div>

        {/* <div className=" md:w-[60%] relative md:left-20 lg:left-40 px-2 pt-20"> */}
        <div className="relative bg-white w-full md:w-[70%] lg:w-[60%] flex justify-center md:justify-start md:items-center ">
          <div className=" py-20 md:py-10 md:pl-36 flex md:block flex-col items-center">
            <h1 className=" text-[4rem] font-extrabold">Hello</h1>
            <p className=" text-2xl">Here's who I am & what I do</p>
            <div className=" flex items-center gap-x-4 my-4">
              <button
                onClick={() => navigate("/resume")}
                className=" px-2 py-1 bg-blue-800 text-xl text-white rounded-lg"
              >
                Resume
              </button>
              <button
                onClick={() => navigate("/projects")}
                className=" px-2 py-1 border rounded-lg text-xl hover:bg-blue-800 hover:text-white hover:border-none border-black "
              >
                Projects
              </button>
            </div>
            <p className=" w-[75%] xl:w-[60%]">
              I am currently working as a <strong>Frontend Developer</strong> in{" "}
              <strong>SqubeSoftSol.pvt.ltd</strong> company from Jan/2021. My
              main role is to design the application UI and develop it with
              using frontend frameworks. For designing application UI I will use{" "}
              <strong>FIGMA</strong> and for building application I will use{" "}
              <strong>ReactJs</strong> ( for Web Applications) and{" "}
              <strong>React-Native</strong> (for Building Native/Mobile Apps).
            </p>
            <div className=" flex flex-col gap-y-4 my-8">
              <div className=" flex items-center gap-x-2">
                <PhoneAndroid className=" w-10 h-10" />
                <p>+91 8985264956</p>
              </div>

              <div className=" flex items-center gap-x-2">
                <Email className=" w-10 h-10" />
                <p>tjkranthikumar@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Shell>
  );
}
