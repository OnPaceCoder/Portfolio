import React from 'react'

const About = () => {
    return (

        <div className='w-full'>
            <div className='max-w-[1240px] px-5 mx-auto py-28 md:py-32'>
                <h2 className='text-center text-5xl font-semibold underline text-gray-600 mb-5'>About</h2>
                <div className='grid  grid-cols-4 px-2 md:px-16 gap-5 py-2'>
                    <div className='col-span-2 '>
                        <p className='text-right text-4xl font-bold text-slate-500'>Hi,I'm Priyank Vasoya, nice to meet you. Please take a look around.</p>
                    </div>
                    <div className='col-span-2'>
                        <p className='text-lg text-slate-600'>
                            I am passionate about building excellent software that imporves the lives of those around me. I specialize in creating software for clients ranging from individuals and small-businesses all the way to large enterprise corporations. What would you do if you had a software expert available at your fingertips?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About