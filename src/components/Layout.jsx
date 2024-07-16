import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from'../assets/logo.png'
import avatar from "../assets/avatar.png"
import closed from '../assets/close-large-fill.png'
import opend from '../assets/menu-line.svg' 

const Layout = ({children}) => {
    const menuItems =[
        {
            title : "Home",
            path: "/"
        },
        {
            title : "Courses",
            path: "/courses"
        },
        {
            title : "About",
            path: "/about"
        },
        {
            title : "Contact",
            path: "/contact"
        },
        {
            title : "Article",
            path: "/articles"
        },
        {
            title : "Webinars",
            path: "/webinars"
        },
        {
            title : "Dashboard ",
            path: "/dashboard"
        },
        
    ]
    const [close , setClose] = useState(false)
    const [logged, setLogged] =useState(false)
    const location = useLocation()

    

  return (
    <div>
        {/* header */}
        <div className="fixed sm:relative top-0 left-0 right-0 text-center w-full sm:mb-10 z-10 bg-primary rounded-b-xl min-h-20 ">
            <div className='flex w-full justify-center sm:flex-col'>

            {close ? <button className='w-full hidden sm:block' onClick={()=>setClose(false)}><img className='absolute right-4 top-6 w-[30px]' src={closed} alt="" /></button> : 
            <div>
                <Link to={'/'} className='hidden sm:block absolute left-6 top-3'><img className='w-[50px]' src={logo} alt="" /></Link>

                <button className='w-full hidden sm:block' >{logged ? <img onClick={()=>setLogged(false)} src={avatar} className='w-[40px] absolute right-16 top-5 border border-white rounded-full'  alt="" /> : <button onClick={()=>setLogged(true)} className=' absolute right-16 top-5 p-2 rounded-xl bg-white border text-primary border-white hover:bg-light font-medium'>Sign In</button>}</button>

                <button className='w-full md:hidden lg:hidden xl:hidden sm:block' onClick={()=>setClose(true)}><img className='absolute right-4 top-6 w-[30px]' src={opend} alt="" /></button>
            </div>}

            {close ? menuItems.map((item,index)=>(
                <div className={`px-10  py-5 md:px-6   bg-primary ${index===0 && 'rounded-l'} ${index == menuItems.length-1 && 'rounded-r'}`}>
                    <Link to={item.path}  className={`text-secondary  `}><h2 className={`${location.pathname==item.path && 'border-b-2 sm:border-l-2 sm:border-b-0 font-medium border-secondary'}`}><button onClick={()=>setClose(false)}>{item.title}</button></h2></Link>
                </div>

                 ))
            : menuItems.map((item,index)=>(
                <div className={`px-10 sm:hidden  py-5 md:px-6   bg-primary ${index===0 && 'rounded-l'} ${index == menuItems.length-1 && 'rounded-r'}`}>
                    <Link to={item.path} className={`text-secondary  `}><h2 className={`${location.pathname==item.path && 'border-b-2 sm:border-l-2 sm:border-b-0 font-medium border-secondary'}`}>{item.title}</h2></Link>
                </div>

                 ))}
            </div>
        </div>

        {/* content */}
        <div className="pb-44">
            {children}
        </div>

        {/* footer */}
        <div className='grid lg:grid-cols-3 md:grid-cols-1 sm:grid-rows-1 bg-primary gap-5'>
            <div className="m-16 p-16 sm:mx-auto sm:my-2 md:col-span-2 sm:col-span-1"><Link to={'/'}><img className='w-70px' src={logo} alt="" /></Link></div>
            <div className='sm:mx-0 sm:my-2 sm:px-16 sm:col-span-1'>
                <h1 className='text-4xl font-semibold text-secondary mt-16 pt-16 overflow-hidden'>Contact Us</h1>
                <p className='mt-10 text-xl font-semibold text-white'>D3 / 154, Vijayant Khand, Gomti Nagar, Lucknow, Uttar Pradesh 226010, India</p>
                <p className='mt-10 text-xl font-semibold text-white'>(+91)-7388145880 </p>
                <p className='mt-10 text-xl font-semibold text-white'>info@digitaldas.com</p>
            </div>
            <div className='sm:mx-0 sm:my-2 sm:px-16 sm:col-span-1'>
                <h1 className='text-4xl font-semibold text-secondary mt-16 pt-16 overflow-hidden '>Follow Us</h1>
                <div className='mt-10 flex items-center gap-4'>
                    <img src={avatar} className='w-[45px] rounded-full' alt="" />
                    <img src={avatar} className='w-[45px] rounded-full' alt="" />
                    <img src={avatar} className='w-[45px] rounded-full' alt="" />
                </div>
            </div>

            <div className='text-4xl font-semibold text-secondary mt-16 pt-16 col-span-3 md:col-span-2 sm:col-span-1 text-center mb-5 pb-10'>© Copyright 2024 Digital Das</div>

        </div>

    </div>
  )
}

export default Layout
