import React from 'react'
import 'remixicon/fonts/remixicon.css'
import map from "../../assets/map-pin-line.png"

const ContactCard = () => {

    const contacts = [
        {
            "icon": map,
            "title" : 'OUR LOCATION',
            "contact" : 'D3 / 154, Vijayant Khand, Gomti Nagar, Lucknow, Uttar Pradesh 226010, India',
        },
        {
            "icon": map,
            "title" : 'OUR LOCATION',
            "contact" : 'D3 / 154, Vijayant Khand, Gomti Nagar, Lucknow, Uttar Pradesh 226010, India',
        },
        {
            "icon": map,
            "title" : 'OUR LOCATION',
            "contact" : 'D3 / 154, Vijayant Khand, Gomti Nagar, Lucknow, Uttar Pradesh 226010, India',
        },
    ]

  return (
    <div className='w-full mt-20 grid grid-cols-3 sm:grid-cols-1 md:grid-cols-1 gap-2'>
        {contacts.map(item=>(
            <>
                <div className='flex items-center justify-center flex-col gap-5 m-10 border border-primary rounded-lg p-8 transform hover:scale-105 duration-300 '>
                    <div > <img src={item.icon} alt="" /></div>
                    <h1 className='text-center text-xl text-primary font-semibold'>{item.title}</h1>
                    <h3 className='text-center text-gray-600 font-medium'>{item.contact}</h3>
                </div>
            </>
        ))}
    </div>
  )
}

export default ContactCard
