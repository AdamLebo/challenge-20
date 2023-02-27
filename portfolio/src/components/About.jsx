import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h screen bg-[#0E0B16] text-[#E7DFDD]'>
        <div className='flex flex-col justify-center place-items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid-col gap-8'>
                <div className='sm:text-left pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#A239CA]'>About Me</p>
                </div>
                <div>
                </div>
                <div>
                    <p>Hi, I'm Adam, a full stack developer with a passion for creating elegant, efficient, 
                    and user-friendly web applications. When I'm not coding, you can find me playing hockey. 
                    I'm excited to continue expanding my skills and working on projects that make a difference
                    in people's lives. 
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About