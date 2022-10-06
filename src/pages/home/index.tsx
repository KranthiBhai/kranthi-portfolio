import { Email, PhoneAndroid } from '@mui/icons-material';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { DetailsCard } from '../../components/DetailsCard'
import Shell from '../../components/Shell'

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <Shell >
        <div className=' w-full h-full flex flex-wrap justify-center md:justify-start bg-[#C36A2D] md:bg-white'>
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
              I am currently working as a <strong>React Developer</strong> in <strong>SqubeSoftSol.pvt.ltd</strong> company from july/14/21. My strength is the HTML & CSS , I can work any kind of project in HTML & CSS. I have good experiance and expert in css frameworks like Tailwindcss, Radix-Ui, Material-Ui, Bootstrap etc.,
            </p>
            <div className=' flex flex-col gap-y-4 my-8'>
              <div className=' flex items-center gap-x-2'>
                <PhoneAndroid className=" w-10 h-10" />
                <p>+91 7659818566</p>
              </div>

              <div className=' flex items-center gap-x-2'>
                <Email className=" w-10 h-10" />
                <p>jayakranthi956@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </Shell>
    </div>
  )
}
