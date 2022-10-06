import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const DetailsCard = () => {
  const navigate = useNavigate();
  const socialMedia = [
    {
      name: "facebook",
      icon: Facebook,
      href: "https://www.facebook.com/jayakumar.kranthi",
    },
    {
      name: "twitter",
      icon: Twitter,
      href: "https://twitter.com/KranthiKumar956",
    },
    {
      name: "linkedin",
      icon: LinkedIn,
      href: "https://www.linkedin.com/in/jaya-kranthi-kumar-tatanaboina-70478a228/?trk=org-employees",
    },
    {
      name: "instagram",
      icon: Instagram,
      href: "https://www.instagram.com/jaya_kranthi/",
    },
  ]
  return (
    <div className=' relative md:left-20 lg:left-40 shadow-2xl h-fit'>
      <div className=' bg-[#E2C275] shadow-2xl w-80 px-4 flex flex-col items-center justify-evenly'>
        <div className=' my-8'>
          <img src="/media/home/photo1.png" alt="img" className=' w-52 h-48 rounded-[50%] object-cover' />
        </div>
        <div className=' mb-8 flex flex-col items-center gap-y-4'>
          <p className=' text-white font-bold text-xl text-center flex flex-wrap'>TATANABOINA JAYA KRANTHI KUMAR</p>
          <div className=' w-1/2 h-1 bg-[#DFD3C3]'>.</div>
          <p className=' text-white font-bold text-lg text-center'>REACT DEVELOPER</p>
        </div>
      </div>

      {/* Social Media */}
      <div className=' w-80 py-4 bg-white flex items-center justify-around'>
          {socialMedia.map((item, index) => {
            return(
              <div key={index}>
                <a href={item.href} target="_blank">{item.icon && <item.icon  style={{width: "30px", height: "30px"}} />}</a>
              </div>
            );
          })}
      </div>
    </div>

  )
}
