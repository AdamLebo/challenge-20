import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0E0B16] text-[#E7DFDD]'>
        <div>
            <ul className='flex'>
                <li>   <Link to="about" smooth={true} duration={500}>
          About Me
        </Link></li>
                <li><Link to="portfolio" smooth={true} duration={500}>
          Portfolio
        </Link></li>
                <li><Link to="contact" smooth={true} duration={500}>
          Contact
        </Link></li>
                <li><Link to="resume" smooth={true} duration={500}>
          Resume
        </Link></li>
            </ul>
        </div>
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0E0B16] flex flex-col justify-center items-center'}>
            <li className='py-6 text-3xl'><Link onClick={handleClick} to="about" smooth={true}duration={500}>
          About Me
        </Link></li>
            <li className='py-6 text-3xl'><Link onClick={handleClick} to="portfolio" smooth={true} duration={500}>
          Portfolio
        </Link></li>
            <li className='py-6 text-3xl'><Link onClick={handleClick} to="contact" smooth={true} duration={500}>
          Contact
        </Link></li>
            <li className='py-6 text-3xl'><Link onClick={handleClick} to="resume" smooth={true} duration={500}>
          Resume
        </Link></li>
        </ul>
    </div>
  )
}

export default Navbar