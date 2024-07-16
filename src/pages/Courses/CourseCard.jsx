import React from 'react'

const CourseCard = ({img, title, teacher, oldP, newP}) => {
  return (
    <div className='shadow-2xl shadow-indigo-500/40 border-[2px] border-black rounded-3xl transform hover:scale-105 duration-300'>
      <div>
        <img className='rounded-t-3xl ' src={img} alt="" />
      </div>
      <hr className='bg-black h-[2px]' />
      <h3 className='m-6 text-2xl text-primary '>{title}</h3>
      <p className='m-6 text-md text-gray-600'>{teacher}</p>
      <div className='m-6 flex flex-row items-start justify-start gap-3'>
        <p className='line-through text-blue-400'>₹{oldP}</p>
        <p>₹{newP}</p>
    </div>

    </div>
  )
}

export default CourseCard
