import React from 'react'
import Programmer from '../assets/Programmer.svg'
import Typed from 'react-typed';
const Hero = () => {
    return (
        <div className='w-full'>

            <div className='max-w-[1240px] flex mx-auto px-5  justify-center items-center'>
                <div className='flex flex-col sm:flex-row  gap-12 py-44 justify-center items-center'>


                    <div className='flex flex-col gap-2'>
                        <p className='text-sm md:text-md text-slate-900'>Hi, my name is </p>
                        <p className='text-5xl md:text-7xl font-extrabold text-gray-800'>PRIYANK VASOYA</p>
                        <p className='text-5xl md:text-6xl text-gray-600'>I'm <span> <Typed
                            strings={[
                                'a Full Stack Developer',
                                'a Freelancer',
                                'an IT Engineer',
                                'a Technical Writer']}
                            typeSpeed={40}
                            backSpeed={60}

                            loop >

                        </Typed></span> </p>
                        <p className='text-md md:text-lg font-light mt-3 text-slate-400' >
                            I'm a full-stack developer specializing in building (and occasionally designing) exceptional digital experiences.Currently, I'm focused on building responsive full-stack web applications.
                        </p>
                        <div>

                            <button className='px-6 py-2 border border-gray-400 mt-3 bg-slate-50 rounded-sm hover:scale-110 duration-500 ease-in-out'>View Work</button>
                        </div>

                    </div>
                    <div>
                        <img src={Programmer} alt="" className='h-auto' />
                    </div>



                </div>

            </div>


        </div>
    )
}

export default Hero