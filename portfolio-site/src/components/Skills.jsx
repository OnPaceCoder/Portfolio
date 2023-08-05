import React from 'react'
import Solidity from '../assets/Solidity.svg'
import Jira from '../assets/Jira.svg'
import Bootstrap from '../assets/Bootstrap.svg'
import Chakra from '../assets/Chakra.svg'
import CSS from '../assets/Css.svg'
import Docker from '../assets/Docker.svg'
import Express from '../assets/Express.svg'
import Github from '../assets/Github.svg'
import HTML from '../assets/Html.svg'
import Java from '../assets/Java.svg'
import JavaScript from '../assets/Javascript.svg'
import Kubernetes from '../assets/Kubernetes.svg'
import Mongodb from '../assets/Mongodb.svg'
import Mui from '../assets/Mui.svg'
import Node from '../assets/Node.svg'
import Reactjs from '../assets/React.svg'
import Sass from '../assets/Sass.svg'
import Tailwindcss from '../assets/Tailwindcss.svg'
import Typescript from '../assets/Typescript.svg'

const Skills = () => {
    return (
        <div className='w-full'>
            <div className='max-w-[1240px] mx-auto px-5 '>
                <div>
                    <h2>Skills</h2>
                    <div className='mx-auto flex flex-col justify-center items-center gap-4'>
                        <div className='flex gap-12 text-center'>
                            <div className='p-10 shadow-md shadow-orange-100 hover:shadow-orange-400 hover:shadow-xl duration-200 ease-in-out rounded-xl'>
                                <img src={HTML} alt="" className='h-24 w-24' />
                                HTML
                            </div>
                            <div className='p-10 shadow-md shadow-blue-100   hover:shadow-blue-400 hover:shadow-xl duration-200 ease-in-out rounded-xl'>
                                <img src={CSS} alt="" className='h-24 w-24' />CSS</div>
                            <div className='p-10 shadow-md shadow-pink-100 hover:shadow-pink-400 hover:shadow-xl duration-200 ease-in-out rounded-xl'>
                                <img src={Sass} alt="" className='h-24 w-24' />Sass</div>
                            <div className='p-10 shadow-md shadow-pink-100 hover:shadow-pink-400 hover:shadow-xl duration-200 ease-in-out rounded-xl'>
                                <img src={Sass} alt="" className='h-24 w-24' />
                                W3.CSS</div>
                        </div>
                        <div className='flex gap-12 text-center'>
                            <div className='p-10 shadow-md shadow-cyan-100   hover:shadow-cyan-400 hover:shadow-xl duration-200 ease-in-out rounded-xl'>
                                <img src={Tailwindcss} alt="" className='h-24 w-24' />TailWindCSS</div>
                            <div className='p-10 shadow-md shadow-violet-100   hover:shadow-violet-400 hover:shadow-xl duration-200 ease-in-out rounded-xl'>
                                <img src={Bootstrap} alt="" className='h-24 w-24' />Bootstrap</div>
                            <div className='p-10 shadow-md shadow-teal-100   hover:shadow-teal-400 hover:shadow-xl duration-200 ease-in-out rounded-xl'>
                                <img src={Chakra} alt="" className='h-24 w-24' />ChakraUI</div>
                            <div className='p-10 shadow-md shadow-blue-100   hover:shadow-blue-400 hover:shadow-xl duration-200 ease-in-out rounded-xl'>
                                <img src={Mui} alt="" className='h-24 w-24' />MUI</div>
                        </div>
                        <div className='flex gap-12 text-center'>
                            <div className='p-10 shadow-md shadow-cyan-100   hover:shadow-cyan-400 hover:shadow-xl duration-200 ease-in-out rounded-xl'> <img src={JavaScript} alt="" className='h-24 w-24' />JavaScript</div>
                            <div className='p-10 shadow-md shadow-cyan-100   hover:shadow-cyan-400 hover:shadow-xl duration-200 ease-in-out rounded-xl'> <img src={Typescript} alt="" className='h-24 w-24' />TypeScript</div>
                            <div className='p-10 shadow-md shadow-cyan-100   hover:shadow-cyan-400 hover:shadow-xl duration-200 ease-in-out rounded-xl'> <img src={Java} alt="" className='h-24 w-24' />Java</div>
                            <div className='p-10 shadow-md shadow-cyan-100   hover:shadow-cyan-400 hover:shadow-xl duration-200 ease-in-out rounded-xl'>
                                <img src={Solidity} alt="" className='h-24 w-24' />
                                Solidity</div>
                        </div>
                        <div className='flex gap-12 text-center'>
                            <div className='p-10 shadow-md shadow-cyan-100   hover:shadow-cyan-400 hover:shadow-xl duration-200 ease-in-out rounded-xl'> <img src={Node} alt="" className='h-24 w-24' />NodeJS</div>
                            <div className='p-10 shadow-md shadow-cyan-100   hover:shadow-cyan-400 hover:shadow-xl duration-200 ease-in-out rounded-xl'> <img src={Reactjs} alt="" className='h-24 w-24' />ReactJS</div>
                            <div className='p-10 shadow-md shadow-cyan-100   hover:shadow-cyan-400 hover:shadow-xl duration-200 ease-in-out rounded-xl'> <img src={Express} alt="" className='h-24 w-24' />ExpressJS</div>
                            <div className='p-10 shadow-md shadow-cyan-100   hover:shadow-cyan-400 hover:shadow-xl duration-200 ease-in-out rounded-xl'> <img src={Mongodb} alt="" className='h-24 w-24' />MongoDB</div>
                        </div>
                        <div className='flex gap-12 text-center'>
                            <div className='p-10 shadow-md shadow-cyan-100   hover:shadow-cyan-400 hover:shadow-xl duration-200 ease-in-out rounded-xl'> <img src={Docker} alt="" className='h-24 w-24' />Docker</div>
                            <div className='p-10 shadow-md shadow-cyan-100   hover:shadow-cyan-400 hover:shadow-xl duration-200 ease-in-out rounded-xl'> <img src={Kubernetes} alt="" className='h-24 w-24' />Kubernetes</div>
                            <div className='p-10 shadow-md shadow-cyan-100   hover:shadow-cyan-400 hover:shadow-xl duration-200 ease-in-out rounded-xl'> <img src={Github} alt="" className='h-24 w-24' />Github</div>
                            <div className='p-10 shadow-md shadow-cyan-100   hover:shadow-cyan-400 hover:shadow-xl duration-200 ease-in-out rounded-xl'>
                                <img src={Jira} alt="" className='h-24 w-24' />Jira</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Skills