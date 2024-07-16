import React, { useState } from 'react'
import logo from '../../assets/logo.png'

const Intro = () => {

    

  return (
    
    <>
    <div className='h-screen flex items-center justify-center'>
        {/* <div className='h-[64px] pb-0 mb-0 flex items-center bg-primary'>
            <img className='m-auto mt-2 w-[50px]' src={logo} alt="" />
        </div> */}
        <div className='pt-0 mt-0 grid grid-cols-2 sm:grid-cols-1 items-center justify-center' >
            <div>
                <div className='flex flex-col items-center gap-4 border-4 border-primary h-[40%] w-[80%] ml-20 p-20 sm:mx-auto sm:mt-4 rounded-3xl backdrop-blur-sm'>
                    <h1 className={` sm:text-center text-7xl font-semibold text-primary overflow-y-hidden inline-block`}>DAS <b className='text-secondary'> TALK</b>
                    </h1>
                    <h1 className={`text-2xl sm:text-center font-semibold hover:text-secondary `}>One stop marketing solution</h1>
                    <button className={`mt-4 sm:mx-auto outline-none border-[2px] border-primary bg-primary text-white p-4 rounded-xl hover:border-secondary hover:text-primary hover:bg-white  `} onClick={()=>handleread()}>Get Started</button>
                
                </div> 
            </div>
            

            <div className='p-20 mr-10 sm:mx-auto'>
                <dotlottie-player src="https://lottie.host/45b78f9e-b833-497c-a0e1-dd55fb6b9772/yB7ppCQFkM.json" background="transparent" speed="1" loop autoplay></dotlottie-player>
            </div>
      
        </div>
        
    </div>
    <hr className='h-[2px] bg-gray-300'/>
    </>
  )
}

export default Intro
