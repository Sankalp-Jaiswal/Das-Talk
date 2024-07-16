import React from 'react'
import bg2 from '../../assets/bg2.png'

const Image = () => {
  return (
    <div className='w-full relative top-[50px] overflow-hidden h-[80%] z-0 sm:top-2'>
        <div className='overflow-hidden'>
            <img className='transform hover:translate-y-2 duration-700 overflow-hidden' src={bg2} alt="" />
        </div>
      
    </div>
  )
}

export default Image
