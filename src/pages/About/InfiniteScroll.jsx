import React from 'react'
import a from '../../assets/1.png'
import b from '../../assets/2.png'
import c from '../../assets/3.png'
import d from '../../assets/4.png'
import e from '../../assets/5.png'
import f from '../../assets/6.png'
import g from '../../assets/7.png'

const InfiniteScroll = () => {

    const Image = [a, b, c, d, e, f, g]

    return (
        <div className='w-screen overflow-hidden space-x-16 whitespace-nowrap'>
            
            <div className="  animate-loop-scroll space-x-14 inline-block ">
                <img className='h-16 inline-block' src={a} alt="" />
                <img className='h-16 inline-block' src={b} alt="" />
                <img className='h-16 inline-block' src={c} alt="" />
                <img className='h-16 inline-block' src={d} alt="" />
                <img className='h-16 inline-block' src={e} alt="" />
                <img className='h-16 inline-block' src={f} alt="" />
                <img className='h-16 inline-block' src={g} alt="" />
            </div>
            <div className="  animate-loop-scroll space-x-14 inline-block  ">
                <img className='h-16 inline-block' src={a} alt="" />
                <img className='h-16 inline-block' src={b} alt="" />
                <img className='h-16 inline-block' src={c} alt="" />
                <img className='h-16 inline-block' src={d} alt="" />
                <img className='h-16 inline-block' src={e} alt="" />
                <img className='h-16 inline-block' src={f} alt="" />
                <img className='h-16 inline-block' src={g} alt="" />
            </div>
            <div className="  animate-loop-scroll space-x-14 inline-block  ">
                <img className='h-16 inline-block' src={a} alt="" />
                <img className='h-16 inline-block' src={b} alt="" />
                <img className='h-16 inline-block' src={c} alt="" />
                <img className='h-16 inline-block' src={d} alt="" />
                <img className='h-16 inline-block' src={e} alt="" />
                <img className='h-16 inline-block' src={f} alt="" />
                <img className='h-16 inline-block' src={g} alt="" />
            </div>
            <div className="  animate-loop-scroll space-x-14 inline-block  ">
                <img className='h-16 inline-block' src={a} alt="" />
                <img className='h-16 inline-block' src={b} alt="" />
                <img className='h-16 inline-block' src={c} alt="" />
                <img className='h-16 inline-block' src={d} alt="" />
                <img className='h-16 inline-block' src={e} alt="" />
                <img className='h-16 inline-block' src={f} alt="" />
                <img className='h-16 inline-block' src={g} alt="" />
            </div>
            



        </div>
    )
}

export default InfiniteScroll
