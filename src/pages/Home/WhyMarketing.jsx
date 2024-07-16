import React from 'react'
import { Link } from 'react-router-dom'

const WhyMarketing = () => {
  return (
    <div className="mt-20 mx-auto w-[80%] flex items-center justify-center flex-col">
        <h1 className='text-center text-6xl font-semibold text-primary mb-10 block overflow-y-hidden sm:pb-4'>Why <b className='text-secondary'>Marketing ?</b></h1>

        <div className='h-[250px] my-10'>
            <dotlottie-player src="https://lottie.host/a3dbfde2-f1b3-4772-a76a-d8241caecf45/US58Op7IQ0.json" background="transparent" speed="1"  loop autoplay></dotlottie-player>
        </div>
        <p className='text-gray-600 text-md mt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt maxime quibusdam, id laudantium veritatis quasi quis laboriosam ratione nemo saepe explicabo iure voluptates alias deserunt itaque quam sapiente corporis. Perferendis vel laborum quisquam blanditiis asperiores debitis eos voluptas tempore ratione aliquid quibusdam aliquam magni in hic, sit tempora dignissimos ipsam saepe et quod voluptate ab, explicabo quasi autem. Debitis dolor repudiandae adipisci eligendi voluptas maiores in distinctio at, ea incidunt quisquam suscipit. Et eum ipsum minima modi accusantium aperiam a!</p>

        <Link to={'/contact'}>
        <button className='mt-10  outline-none border-[2px] border-primary text-xl hover:border-[2px] hover:border-secondary text-white bg-primary p-4 rounded-lg hover:text-primary hover:bg-white' >Contact Us</button>
        </Link>
    </div>
  )
}

export default WhyMarketing
