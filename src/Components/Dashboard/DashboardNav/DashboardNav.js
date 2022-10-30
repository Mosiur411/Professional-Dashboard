import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './DashboardNav.css'
import { RiAppsFill } from "react-icons/ri";
import { AiOutlineCalendar, AiFillFileAdd, AiOutlineShoppingCart, AiOutlineMail, AiFillProject } from "react-icons/ai";
import { BsChatDotsFill } from "react-icons/bs";
import { BiBookAlt } from "react-icons/bi";
import { RiContactsFill } from "react-icons/ri";
import { SiGnuprivacyguard, SiElement } from "react-icons/si";
import { GiNautilusShell } from "react-icons/gi";
import { MdTransform, MdArrowDropDown, MdArrowRight } from "react-icons/md";
import { VscDebugBreakpointLog } from "react-icons/vsc";



const DashboardNav = () => {

    const [close, setClose] = useState(false);
    const [DropdownEnter, setDropdownEnter] = useState(-1)

    const main_menu = [
        {
            Route: 'Dashboard',
            Path: '/',
            icon: <RiAppsFill />,
            height: '11rem',
            Service: [
                {
                    ServicePath: '/E-commerce',
                    ServiceRoute: 'E-commerce',
                },
                {
                    ServicePath: '/Saas',
                    ServiceRoute: 'Saas',
                },
                {
                    ServicePath: '/Crypto',
                    ServiceRoute: 'Crypto',
                }
            ]
        },
        {
            Route: 'Calendar',
            Path: '/calendar',
            height: '7.4rem',
            icon: <AiOutlineCalendar />,
            Service: [
                {
                    ServicePath: '/',
                    ServiceRoute: 'E-commerce',
                },
                {
                    ServicePath: '/',
                    ServiceRoute: 'Saas',
                }
            ]
        },
        {
            Route: 'Chat',
            Path: '/chat',
            height: '11rem',
            icon: <BsChatDotsFill />,
            Service: [
                {
                    ServicePath: '/',
                    ServiceRoute: 'Ecommerce',
                },
                {
                    ServicePath: '/',
                    ServiceRoute: 'Saas',
                },
                {
                    ServicePath: '/',
                    ServiceRoute: 'Crypto',
                }
            ]
        },
        {
            Route: 'Manager',
            Path: '/',
            height: '11rem',
            icon: <AiFillFileAdd />,
            Service: [
                {
                    ServicePath: '/',
                    ServiceRoute: 'E-commerce',
                },
                {
                    ServicePath: '/',
                    ServiceRoute: 'Saas',
                },
                {
                    ServicePath: '/',
                    ServiceRoute: 'Crypto',
                }
            ]
        },
        {
            Route: 'E_commerce',
            Path: '/',
            height: '11rem',
            icon: <AiOutlineShoppingCart />,
            Service: [
                {
                    ServicePath: '/',
                    ServiceRoute: 'E-commerce',
                },
                {
                    ServicePath: '/',
                    ServiceRoute: 'Saas',
                },
                {
                    ServicePath: '/',
                    ServiceRoute: 'Crypto',
                }
            ]
        },
        {
            Route: 'Email',
            Path: '/email',
            icon: <AiOutlineMail />
        },
        {
            Route: 'Invoices',
            Path: '/invoices',
            icon: <BiBookAlt />
        },
        {
            Route: 'Projects',
            Path: '/projects',
            icon: <AiFillProject />
        },
        {
            Route: 'Contacts',
            Path: '/contacts',
            icon: <RiContactsFill />
        },
        {
            Route: 'Authentication',
            Path: '/authentication',
            icon: <SiGnuprivacyguard />
        },
        {
            Route: 'Utility',
            Path: '/utility',
            icon: <GiNautilusShell />
        },
        {
            Route: 'UI_Element',
            Path: '/ui_element',
            icon: <SiElement />
        },
        {
            Route: 'Forms',
            Path: '/forms',
            height: '11rem',
            icon: <MdTransform />,
            Service: [
                {
                    ServicePath: '/',
                    ServiceRoute: 'E-commerce',
                },
                {
                    ServicePath: '/',
                    ServiceRoute: 'Saas',
                },
                {
                    ServicePath: '/',
                    ServiceRoute: 'Crypto',
                }
            ]
        },
    ]

    return (
        <div className=' h-full'>
            {/* <!-- Component Start --> */}
            <div class={`flex flex-col items-center justify-between h-full overflow-x-hidden scrollbar overflow-y-auto transition-all duration-300  ease-in-out text-gray-700 bg-white shadow-2xl shadow-gray-500 rounded ${close ? 'w-16 duration-500' : 'w-60 '}`}>
                <div className=' w-full flex flex-col justify-between '>
                    <NavLink to='/' className={`w-full  ${close ? 'px-0' : 'px-4'}`}>
                        <div class={` w-full items-center mt-3 h-12  ${close ? '  flex  items-center w-full ml-3' : 'flex flex-row '}`}>
                            <div className={`${close ? '' : 'py-1'}`}>
                                <svg onClick={() => setClose(!close)} class={`w-8 h-8  fill-current text-[#887fed] ${close && 'mx-auto ml-1'} `} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                                </svg>
                            </div>

                            <div className=' overflow-hidden'>
                                <span className={`transition-all duration-300 ease-out overflow-hidden text-sm font-semibold ${close ? ' translate-x-[-24rem] -ml-20  ' : ' translate-x-0 pl-2'}`}  >The App</span>
                            </div>
                        </div>
                    </NavLink>

                    <div class="w-full px-2">
                        <div class="flex flex-col  items-center w-full mt-3 border-t border-gray-300">
                            {
                                main_menu.map((menu, index) =>
                                    <>
                                        <NavLink to={menu?.Path} className='w-full' >
                                            <div class="flex w-full items-center h-12 px-3 mt-2 rounded transition-all duration-150 ease-in hover:pl-5">
                                                <div className={` ${close ? ' py-1 ' : 'py-1'}`}>
                                                    <div class={` text-2xl  stroke-current  ${close && 'mx-auto '} `}>
                                                        {menu?.icon}
                                                    </div>
                                                </div>
                                                <div onClick={() => setDropdownEnter(index)} className=' overflow-hidden flex h-6 w-[80%]  '>
                                                    <span className={`transition-all  w-[80%]  duration-500 ease-out overflow-hidden text-sm font-semibold ${close ? ' translate-x-[-24rem] -ml-28  ' : 'duration-500 translate-x-0 pl-2'}`}  >{menu?.Route}</span>
                                                    <div className={`inline-flex h-full mt-1 float-right ${(menu?.Service) ? 'block' : 'hidden'}  `}>
                                                        {
                                                            (DropdownEnter == index) ? <MdArrowDropDown className=' text-lg' /> : <MdArrowRight className=' text-lg' />
                                                        }
                                                    </div>
                                                </div>
                                            </div>

                                            <div className={`overflow-hidden transition-all duration-500 ease-in ${(menu?.Service) ? 'block' : 'hidden'}  ${(DropdownEnter == index) ? 'h-[11rem]' : 'h-0'}`}>
                                                {menu?.Service?.map(dropmenu =>
                                                    <div>
                                                        <NavLink to={dropmenu?.ServicePath}>
                                                            <div class="flex w-full items-center shadow-[#7267f083] text-white shadow-md bg-gradient-to-r from-[#887fed] to-[#c0b9f9] h-12 px-3 mt-2 rounded transition-all duration-150 ease-in ">
                                                                <div className={` ${close ? ' py-1 ' : 'py-1'}`}>
                                                                    <div class={` text-2xl  stroke-current  ${close && 'mx-auto '} `}>
                                                                        <VscDebugBreakpointLog className=' text-lg' />
                                                                    </div>
                                                                </div>
                                                                <div onClick={() => setDropdownEnter(index)} className='overflow-hidden h-6 w-[80%]'>
                                                                    <span className={`transition-all  w-[80%]  duration-500 ease-out overflow-hidden text-sm font-semibold ${close ? ' translate-x-[-24rem] -ml-28 ' : 'duration-500 translate-x-0 pl-2'}`} >{dropmenu?.ServiceRoute}</span>
                                                                </div>
                                                            </div>
                                                        </NavLink>
                                                    </div>

                                                )}
                                            </div>
                                        </NavLink>
                                    </>
                                )
                            }
                        </div>
                    </div>
                </div>
                <div className=' w-full'>
                    <NavLink to="#" className='w-full'>
                        <div class={`  h-16 mt-auto bg-gray-200 hover:bg-gray-300 px-4 ${close ? 'flex items-center' : 'flex w-full items-center '}`}>
                            <div className={` ${close ? ' py-1  ' : 'py-1'}`}>
                                <svg class={`w-6 h-6  stroke-current  ${close && 'mx-auto '} `} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>


                            <div className=' overflow-hidden'>
                                <span className={`transition-all duration-300 ease-out overflow-hidden text-sm font-semibold${close ? ' translate-x-[-24rem] -ml-20  ' : ' translate-x-0 pl-2'}`}  >Account</span>
                            </div>
                        </div>
                    </NavLink>
                </div>
            </div>
            {/* <!-- Component End  --> */}
        </div>
    );
};

export default DashboardNav;