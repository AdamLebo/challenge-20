import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const main = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0E0B16]'>
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <h1 className='text-3xl sm:text-6xl font-bold text-[#A239CA]'>Adam Lieberman</h1>
            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#A239CA]'>View Portfolio 
                <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-2'/>
                </span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default main