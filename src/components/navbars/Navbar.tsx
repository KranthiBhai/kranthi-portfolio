import React from 'react'
import { NavLink } from 'react-router-dom'


export const Navbar = () => {

    type navLinkStylesProps = {
        isActive : boolean
    }
    const navLinkStyles = ({ isActive }:navLinkStylesProps) => {
        return {
            fontWeight: isActive ? "bold" : "normal",
            // borderBottom: isActive ? "2px solid #000000" : "none",
        }
    }
    return (
        <nav className=' bg-gray-50 shadow-xl w-full h-16 lg:h-20 flex items-center justify-between px-10'>
            <div className=' flex items-center gap-x-2'>
                <div>
                    <img src="/media/home/eco-pic-01.jpg" alt="img" className=' w-10 h-10 border-2 border-white rounded-lg' />
                </div>
                <div className=' flex items-center'>
                <h1 className=' text-xl'>TATANABOINA JAYA KRANTHI KUMAR</h1>
                <p className='mx-1'>/</p>
                <h1 className=' text-lg'>React Developer</h1>
                </div>
            </div>

            <div>
                <NavLink style={navLinkStyles} className=' mx-2 font-semibold' to="/">Home</NavLink>
                <NavLink style={navLinkStyles} className=' mx-2 font-semibold' to="/resume">Resume</NavLink>
                <NavLink style={navLinkStyles} className=' mx-2 font-semibold' to="/projects">Projects</NavLink>
                <NavLink style={navLinkStyles} className=' mx-2 font-semibold' to="/blog">Blog</NavLink>
                <NavLink style={navLinkStyles} className=' mx-2 font-semibold' to="/contact">Contact</NavLink>
            </div>
        </nav>
    )
}
