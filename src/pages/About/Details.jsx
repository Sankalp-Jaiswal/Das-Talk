import React from 'react'
import bg3 from '../../assets/bg3.jpg'

const Details = () => {
    return (
        <div className='grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 mt-36 m-20 gap-10'>
            <div className='flex items-start justify-center overflow-hidden rounded-xl sm:w-60 col-span-1' >
                <img className='rounded-xl transform hover:scale-105 duration-500 sm:w-[100%]' src={bg3} alt="" />
            </div>
            <div className='flex items-center justify-center flex-col col-span-1 sm:col-span-2'>
                <h1 className='overflow-hidden text-5xl mb-10 font-semibold text-primary hover:animate-pulse '>Meet Pratishek Das</h1>
                <p className='text-2xl text-gray-600 '>Introducing Pratishek Das - a seasoned professional with over nine years of experience in the dynamic field of sales and business leadership. His mission is to empower individuals to excel in their careers by upskilling and staying updated with the latest technology trends.</p>
            </div>
            <div className='col-span-2'>
                <p className='text-2xl text-gray-600 text-justify'>
                    Pratishek is deeply committed to bridging the gap between skill development and industry demands. With a strong background in sales and business development, he has successfully represented leading EdTech companies such as Byju's, Extramarks, Frontrow, and Matific at national and global events. Through these experiences, he has cultivated expertise in building and executing sales strategies, managing end-to-end sales cycles, and orchestrating daily operations.

                    Pratishek's journey is a testament to his entrepreneurial spirit and unwavering pursuit of excellence. He thrives on challenges and continually motivates himself and his teams to surpass benchmarks.

                    Now, in his venture with Das Talks, Pratishek is committed to supporting individuals in their upskilling journeys. His rich experience and deep understanding of sales and business leadership are invaluable assets. With Pratishek's guidance, students can navigate the ever-evolving landscape of technology and emerge as successful professionals.
                </p>
            </div>

        </div>
    )
}

export default Details
