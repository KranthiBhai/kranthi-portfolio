import React, { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { DesignServices, Home, Info, Notes, PhoneInTalk, WebAsset, Work, WorkOff } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import { XCircleIcon } from '@heroicons/react/solid';
import classNames from '../../lib/classNames';

export const Navbar = () => {

    type navLinkStylesProps = {
        isActive : boolean
    }
    const navLinkStyles = ({ isActive }:navLinkStylesProps) => {
        return {
            fontWeight: isActive ? "bold" : "600",
            // borderBottom: isActive ? "2px solid #000000" : "none",
        }
    }
    return (
        <nav className=' bg-gray-50 shadow-xl w-full h-20 flex items-center justify-between px-2 sm:px-10'>
            <Link to="/">
            <div className=' flex items-center gap-x-2'>
                <div>
                    <img src="/media/home/eco-pic-01.jpg" alt="img" className=' w-14 h-14 border-2 border-white rounded-lg object-cover' />
                </div>
                <div className=' flex flex-col xl:flex-row xl:items-center'>
                <h1 className=' sm:text-lg md:text-xl font-bold'>TATANABOINA JAYA KRANTHI KUMAR</h1>
                <p className='mx-1 hidden xl:block'> / </p>
                <h1 className=' sm:text-base md:text-lg'>FrontEnd Developer</h1>
                </div>
            </div>
            </Link>

            <div className='hidden lg:block'>
                <NavLink style={navLinkStyles} className=' mx-2 font-bold text-[#C36A2D]' to="/">Home</NavLink>
                <NavLink style={navLinkStyles} className=' mx-2 font-bold text-gray-400 hover:text-[#C36A2D]' to="/resume">Resume</NavLink>
                <NavLink style={navLinkStyles} className=' mx-2 font-bold text-gray-400 hover:text-[#C36A2D]' to="/projects">Projects</NavLink>
                <NavLink style={navLinkStyles} className=' mx-2 font-bold text-gray-400 hover:text-[#C36A2D]' to="/blog">Blog</NavLink>
                <NavLink style={navLinkStyles} className=' mx-2 font-bold text-gray-400 hover:text-[#C36A2D]' to="/contact">Contact</NavLink>
            </div>

            {/* Top Nav Mobile Menu */}
            <div className='lg:hidden'>
                <MobMenu />
            </div>
        </nav>
    )
}


function MobMenu() {
    const location = useLocation();
    const [showMobMenu, setShowMobMenu] = useState(false);

    const mobNavigation = [
        {
            name: "HOME",
            href: "/",
            icon: Home,
            current: location.pathname.startsWith("/"),
        },
        {
            name: "RESUME",
            href: "/resume",
            icon: Notes,
            current: location.pathname.startsWith("/about"),
        },
        {
            name: "PROJECTS",
            href: "/projects",
            icon: DesignServices,
            current: location.pathname.startsWith("/services"),
        },
        {
            name: "BLOG",
            href: "/blog",
            icon: WebAsset,
            current: location.pathname.startsWith("/carrier"),
        },
        {
            name: "CONTACT US",
            href: "/contact",
            icon: PhoneInTalk,
            current: location.pathname.startsWith("/contact"),
        },
    ];
    return (
        <div className="flex items-center w-full space-x-2 cursor-pointer group">
            <MenuIcon
                className="w-10 h-auto text-clr2 group-hover:text-gray-500"
                aria-hidden="true"
                onClick={(e) => setShowMobMenu(!showMobMenu)}
            />
            {/* Sidenav for Mobile Menu */}
            {showMobMenu && (
                <div className="absolute top-0 right-0 min-w-[180px] w-[50%] z-50">
                    <nav className="flex-1 h-screen overflow-y-auto px-2 space-y-1 bg-gradient-to-r from-clr2 to-clr4">
                        <div className="relative flex items-center justify-end top-2">
                            <XCircleIcon
                                className="w-8 h-8 text-white "
                                onClick={(e) => setShowMobMenu(!showMobMenu)}
                            />
                        </div>
                        {mobNavigation.map((item) => (
                            <div key={item.name}>
                                <Link
                                    to={item.href}
                                    className={classNames(
                                        item.current
                                            ? "bg-brandColor-500 text-neutral-100 "
                                            : " text-white hover:text-neutral-100 hover:bg-brandColor-500",
                                        "group flex items-center px-3 sm:px-10 py-3 font-medium rounded-sm text-lg"
                                    )}
                                >
                                    <item.icon
                      className="flex-shrink-0 w-5 h-5 mr-2 text-white "
                      aria-hidden="true"
                    />
                                    <span className="inline">{item.name}</span>
                                </Link>
                                <div className=" w-full h-[1px]"></div>
                            </div>
                        ))}
                        {/* <button
                            onClick={() => handleLogout()}
                            className="flex items-center justify-center w-full px-3 py-3 text-lg font-medium text-white rounded-xl hover:text-neutral-100 hover:bg-brandColor-900 bg-brandColor-700"
                        >
                            {"Log Out"}
                        </button> */}
                    </nav>
                </div>
            )}
        </div>
    );
}