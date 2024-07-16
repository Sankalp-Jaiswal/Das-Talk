import React from 'react'

const MarketingStrat = () => {

    const services = [
        {
            'id' : '01',
            'title' : 'Professional Branding',
            'desc': 'Elevate your professional image with our expert Professional Branding services. '
        },
        {
            'id' : '02',
            'title' : 'Sales Training',
            'desc': 'Unlock your Sales potential with our On-Demand Sales Training program crafted for entry-level executives.  '
        },
        {
            'id' : '03',
            'title' : 'Interviews ',
            'desc': 'Gain insights from industry experts through our exclusive Interviews. '
        },
    ]

  return (
    <div className='mx-auto w-[80%] mt-10'>
      <h1 className='text-5xl font-semibold text-primary overflow-hidden sm:pb-4'>Want to boost your business growth ?</h1>
      <h1 className='text-7xl font-semibold text-primary overflow-hidden'>The <b className='text-secondary'>Solution</b> is here ..</h1>
      <p className='text-gray-600 text-xl mt-10'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quod eaque voluptatibus voluptatem eveniet, laborum dolorum error voluptate qui nisi suscipit debitis, inventore totam expedita consequatur maxime voluptas, tempora quaerat odit modi! Repellat ipsa odio, expedita magni dolor, perferendis laboriosam quos cum nostrum laudantium placeat.
      </p>
      <div className='inline-block  text-center'><h1 className='text-6xl overflow-hidden text-center mt-20 font-semibold text-primary pb-2 border-b-2 border-secondary'>Our Services</h1></div>
      
      <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2">
        {services.map(item => {
            return (
                <div className='flex flex-col items-start justify-start my-20 sm:my-4 mx-10 border-4 p-8 border-primary rounded-xl gap-5 transform hover:scale-105 duration-300'>
                    <h1 className='text-4xl font-semibold overflow-hidden sm:pb-2'>{item.id}</h1>
                    <h2 className='text-4xl font-bold overflow-hidden sm:pb-2'>{item.title}</h2>
                    <p className='text-gray-600 text-xl hover:text-primary sm:pb-2'>{item.desc}</p>
                </div>
            )
        })
        }
      </div>
    </div>
  )
}

export default MarketingStrat
