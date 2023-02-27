import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0E0B16] text-[#E7DFDD] flex justify-center items-center p-4'>
        <form action="" className='flex flex-col max-w-[600px] w-full'>
            <div className='sm:text-left pb-8 pl-4'>
                <p className='text-4xl font-bold border-b-4 border-[#A239CA] text-[#E7DFDD] flex justify-center'>Contact</p>
                <p className='py-4 flex justify-center'>Please fill out the form below</p>
            </div>
            <input className='bg-white my-1 p-2 pl-4' type="text" placeholder='Name' name='name'/>
            <input className='my-2 p-2 bg-white pl-4' type="text" placeholder='Email' name='email'/>
            <textarea className='bg-white p-2 pl-4' name="message" id="" cols="30" rows="10" placeholder='Message'></textarea>
            <button className='text-[#E7DFDD] border-2 hover:bg-[#A239CA] px-4 py-3 my-8 mx-auto flex items-center'>Connect!</button>
        </form>
    </div>
  )
}

export default Contact