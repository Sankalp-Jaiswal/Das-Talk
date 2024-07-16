import React from 'react'
import avatar from '../../assets/avatar.png'

const Panel = () => {
    const member = [
        {
            "img" : avatar,
            'name' : 'Jane Biden',
            'prof' : 'Lorem ipsum dolor sit amet fg'
        },
        {
            "img" : avatar,
            'name' : 'Jane Biden',
            'prof' : 'Lorem ipsum dolor sit amet fg'
        },
        {
            "img" : avatar,
            'name' : 'Jane Biden',
            'prof' : 'Lorem ipsum dolor sit amet fg'
        },
        {
            "img" : avatar,
            'name' : 'Jane Biden',
            'prof' : 'Lorem ipsum dolor sit amet fg'
        },
        {
            "img" : avatar,
            'name' : 'Jane Biden',
            'prof' : 'Lorem ipsum dolor sit amet fg'
        },
        {
            "img" : avatar,
            'name' : 'Jane Biden',
            'prof' : 'Lorem ipsum dolor sit amet fg'
        },
        {
            "img" : avatar,
            'name' : 'Jane Biden',
            'prof' : 'Lorem ipsum dolor sit amet fg'
        },
        {
            "img" : avatar,
            'name' : 'Jane Biden',
            'prof' : 'Lorem ipsum dolor sit amet fg'
        },
    ]
  return (
    <>
    <h1 className='bg-light/100 w-full  pt-12 text-center text-6xl text-primary font-semibold overflow-hidden'>Board Members</h1>
    <div className='bg-light/100 w-full mb-20 p-20 grid grid-cols-4 sm:grid-cols-1 md:grid-cols-2 gap-10'>

        {member.map(item=>(
            <div className='flex items-center justify-center flex-col gap-4 transform hover:translate-y-1 duration-300 rounded-xl py-10 bg-white'>
                <img className='rounded-full' src={item.img} alt="" />
                <button className='hover:bg-white hover:text-primary bg-primary text-white rounded-xl py-3 px-3'>READ MORE</button>
                <h2 className='text-4xl font-bold text-pretty overflow-hidden'>{item.name}</h2>
                <h3 className='text-xl text-black p-4 text-center pt-0'>{item.prof}</h3>
            </div>
        ))}
      
    </div>
    </>
  )
}

export default Panel
