
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import logo from "../../assets/image/logo.jpg";
import handimg from '../../assets/image/hand.jpg'
import uk from "../../assets/image/uk.jpg";
import ceo from '../../assets/image/ceo.jpg'
import { HiOutlineSearch } from "react-icons/hi";
import './ResponsiveNavbar.css'


const ResponsiveNavbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)


    return (
        // <div className='w-screen h-20 z-10 fixed text-gray-500 bg-zinc-200'>
        <div className='mx-auto relative homebdnav max-w-[1440px] text-gray-500'>
            {/* <div className='absolute right-0 opacity-50'>
                <img className='h-[780px]' src={handimg} alt="" />
            </div> */}
            <div className='pt-10 md:px-28  flex justify-between items-center w-full h-full'>
               
                <img src={logo} alt="" />
                    {/* <h1 className='text-3xl font-bold text-blue-400'>Masarat</h1> */}
                    <div className="md:flex hidden gap-8  text-gray-500">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to='/about'>About Us</NavLink>
                        <NavLink to='/productsService'>Products & Services</NavLink>
                        <NavLink to='/partnerteam'>Partners</NavLink>
                        <NavLink to='/contact'>Contact us</NavLink>
                    </div>

             
                {/* <div className='hidden md:flex pr-4'>
                    <button className='mr-4'>sign in</button>
                    <button>Log out</button>
                </div> */}
                <div className="md:flex hidden items-center">
                       <div className='md:flex hidden'> <HiOutlineSearch className='text-2xl'/></div>
                        <div className='mr-4'>
                        <AiOutlineMenu className='text-[#9BEBA8] md:hidden block text-2xl '/>
                        <AiOutlineClose className='text-[#9BEBA8] md:hidden block text-2xl '/>
                        </div>
                        <div>
                            <div className="border-2 rounded-lg ml-2 hidden md:flex gap-2 px-2 py-2 h-[48px]">
                                <img className="h-8 w-8 rounded-full " src={uk} alt="" />
                                <p className="border-r-2 "></p>
                                <p>Eng (UK)</p>
                            </div>
                        </div>
                        <div>
                            <button className="btn ml-2 md:block hidden">Contact Us</button>
                        </div>
                    </div>
                <div onClick={handleNav} className='md:hidden mr-6'>
                    {!nav ? <AiOutlineMenu size={20} className='w-5' /> : <AiOutlineClose />}

                </div>
            </div>

            {/* mobile menu  */}

            <div className={!nav ? 'hidden' : 'absolute  w-full md:hidden px-8'}>
                <p className='border-b-2 mb-4 border-blue-400 w-full'>
                <NavLink to="/">Home</NavLink>
                </p>
                <p className='border-b-2 mb-4 border-blue-400 w-full'>
                <NavLink to='/about'>About Us</NavLink>
                </p>
                <p className='border-b-2 mb-4 border-blue-400 w-full'>

                <NavLink to='/productsService'>Products & Services</NavLink>
                </p>
                <p className='border-b-2 mb-4 border-blue-400 w-full'>

                <NavLink to='/partnerteam'>Partners</NavLink>
                </p>
                <p className='border-b-2 mb-4 border-blue-400 w-full'>

                <NavLink to='/contact'>Contact us</NavLink>
                </p>
              

                {/* <div className='flex flex-col pr-4'>
                    <button className='bg-transparent text-indigo-500 px-8 mb-4'>sign in</button>
                    <button className='px-8 py-3'>Log out</button>
                </div> */}
            </div>
            {/* bannar  */}
            <div className=' md:px-28 px-6'>
                
            <div className="flex  md:pt-6 pt-56 gap-4 ">
                    <div className="bg-black relative h-8 w-8 rounded-full">
                        <img
                            className=" h-6 w-6 absolute top-1 left-1 rounded-full"
                            src="https://i.pinimg.com/564x/96/c0/f7/96c0f7a7bbbddbf0b03a0c548a12596e.jpg"
                            alt=""
                        />
                        {/* <img className=" h-6 w-6 text-white" src={handshek} alt="" /> */}
                    </div>
                    <div>
                        <h3 className="md:text-2xl font-semibold">Best Supportive Team Ever</h3>
                    </div>
                </div>

                <div className="space-y-8 pt-4">
                    <h1 className="md:text-6xl text-[#1A3D37] font-bold">
                        We Support To <br /> Grow Your Business
                    </h1>
                    <p>
                        Choose Masarat Digital to get software development, AI & Tech <br />
                        Consulting support for your digital products.{" "}
                    </p>
                    <button className="bg-[#9BEBA8] delay-200 text-[#657790] font-semibold hover:text-white hover:bg-[#9fdda8] px-5 py-4 rounded-lg">
                        Contact Us
                    </button>
                </div>
                <div className="pt-16">
                    <div className="rating">
                        <input
                            type="radio"
                            name="rating-2"
                            className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                            type="radio"
                            name="rating-2"
                            className="mask mask-star-2 bg-orange-400"
                        // checked
                        />
                        <input
                            type="radio"
                            name="rating-2"
                            className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                            type="radio"
                            name="rating-2"
                            className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                            type="radio"
                            name="rating-2"
                            className="mask mask-star-2 bg-orange-400"
                        />
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor <br />
                        incididunt ut labore et dolore magna aliqua Utenimad minim veniam.
                    </p>
                </div>
                <div className="pt-6 flex gap-2">
                    <div>
                        <img className="h-[50px] w-[50px] rounded-full" src={ceo} alt="" />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg text-[#0F172A]">Sulli Kiri</h3>
                        <p>CEO, Supreme World.</p>
                    </div>

                </div>
                <div className="flex gap-2 items-center pt-2">
                    <div className="h-3 w-3 rounded-full bg-[#657790]"></div>
                    <div className="w-12 h-2 bg-[#657790] rounded-lg"></div>
                    <div className="h-3 w-3 rounded-full bg-[#657790]"></div>
                    <div className="h-3 w-3 rounded-full bg-[#657790]"></div>
                </div>

            </div>



        </div>
    );
};

export default ResponsiveNavbar;

