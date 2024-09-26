import React, { useEffect, useState } from 'react'
import { FaBars } from "react-icons/fa6";
import usaFlag from '../assets/usa-flag.jpg'
import itlyFlag from '../assets/italy-flag.jpg'
import spanishFlag from '../assets/spain-flag.jpg'
import germanFlag from '../assets/germany-flag.jpg'
import russianFlag from '../assets/russia-flag.jpg'
import person from '../assets/avatar-1.jpg'
import { FaAngleDown } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa6";
import { BsBell } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
import { MdOutlineAccountCircle } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { CiLock } from "react-icons/ci";
import BasicElements from './BasicElements';
const Header = ({btnToggle,sidebarToggle}) => {
   
    const [activedropdown, setActiveDropdown] = useState(false);
    const [activedropdown1, setActiveDropdown1] = useState(false);

    let dropdownItems = [
        {
            img: germanFlag,
            text: 'German',
        },
        {
            img: itlyFlag,
            text: 'Italian',
        },
        {
            img: spanishFlag,
            text: 'Spanish',
        },
        {
            img: russianFlag,
            text: 'Russian',
        },

    ];
    let dropdownItems1 = [
        {
            icon: <MdOutlineAccountCircle />,
            text: 'My Account'
        },
        {
            icon: <IoSettingsOutline />,
            text: 'Settings'
        },
        {
            icon: <BiSupport />,
            text: 'Support'
        },
        {
            icon: <CiLock />,
            text: 'Lock Screen'
        },
        {
            icon: <MdOutlineAccountCircle />,
            text: 'Logout'
        },

    ]
    // let headerItems = [
    //     {
    //         img: usaFlag,
    //         text: 'English',
    //         icon: <FaAngleDown />,

    //     },
    //     {
    //         icon: <FaRegEnvelope />,
    //     },
    //     {
    //         icon: <BsBell />,
    //     },
    //     {
    //         icon: <IoSettingsOutline />,
    //     },
    //     {
    //         icon: <IoMoonOutline />,
    //     },
    //     {
    //         img: person,
    //         text: 'Adams',
    //         icon: <FaAngleDown />,

    //     },
    // ];
  


    let dropdownHandler = () => {
        setActiveDropdown(!activedropdown);

    }
    let dropdownHandler1 = () => {
        setActiveDropdown1(!activedropdown1);

    }

    return (
        <>
            <div className={` h-[80px]  border-b border-[#0003] fixed top-0  right-0 bg-[#FAF4F0] transition-all ease-in-out duration-500  ${sidebarToggle ? 'w-[100%]' : 'w-[78%]'}`}>
                <div className='flex justify-between gap-4  items-center h-full px-6'>
                    <div className='flex gap-5 items-center'>
                        <div><img src="src/assets/logo-sm.png" alt="" className='h-[30px] flex sm:hidden'/></div>
                        <div onClick={btnToggle} className='text-[20px] cursor-pointer'><FaBars /></div>
                        <div className='font-bold text-[20px] sm:flex hidden'>Dashboards</div>
                    </div>
                    <div>

                        <ul className='flex items-center gap-5'>


                            <li onClick={dropdownHandler} className='relative flex items-center cursor-pointer gap-2'>
                                <img src={usaFlag} alt="" className={'h-[12px]'} />
                                <span className='sm:flex hidden'>English</span>
                                <span className='text-[14px] sm:flex hidden'> <FaAngleDown /></span>
                                <div className={`absolute top-[65px] right-0 py-2 bg-white  shadow-sm  flex flex-col gap-2 border  w-[172px] transition-transform duration-500 ${activedropdown ? 'translate-y-[-13px]' : 'hidden'}`}>
                                    {
                                        dropdownItems.map((value, index) =>

                                            <li className='flex gap-3  items-center px-4 py-[5px]  hover:bg-[#e5e5e5]' key={index} >
                                                <img src={value.img} alt="" className='h-[12px] ' />
                                                <span className='text-[15px]'>{value.text}</span>
                                            </li>
                                        )}

                                </div>
                            </li>

                            <li className='text-[22px]'><FaRegEnvelope /></li>
                            <li className='text-[22px]'><BsBell /></li>
                            <li className='text-[22px]'><IoSettingsOutline /></li>


                            <li onClick={dropdownHandler1} className='flex items-center cursor-pointer gap-2'>
                                <img src={person} alt="" className='w-[32px] rounded-full' />
                                <span className='sm:flex hidden'>Adams</span>
                                <span className='text-[14px] sm:flex hidden'><FaAngleDown /></span>
                                <div className={`absolute top-[90px] right-6 py-2 bg-white  shadow-sm  flex flex-col gap-2 border w-[170px] transition-transform duration-500 ${activedropdown1? 'translate-y-[-10px]' : 'hidden'}`}>
                                    {dropdownItems1.map((value, index) =>
                                        <li className='flex gap-3  items-center px-4 py-[5px]  hover:bg-[#e5e5e5]' key={index} >
                                            <span>{value.icon}</span>
                                            <span className='text-[15px]'>{value.text}</span>
                                        </li>
                                    )}
                                </div>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
                                

        </>
    )
}

export default Header