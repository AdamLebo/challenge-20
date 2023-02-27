import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0E0B16] text-[#E7DFDD]'>
        <div>
            <ul className='flex'>
                <li>About Me</li>
                <li>Portfolio</li>
                <li>Contact</li>
                <li>Resume</li>
            </ul>
        </div>
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0E0B16] flex flex-col justify-center items-center'}>
            <li className='py-6 text-3xl'>About Me</li>
            <li className='py-6 text-3xl'>Portfolio</li>
            <li className='py-6 text-3xl'>Contact</li>
            <li className='py-6 text-3xl'>Resume</li>
        </ul>
    </div>
  )
}

export default Navbar