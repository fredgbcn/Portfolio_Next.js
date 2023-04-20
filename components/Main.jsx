import React from "react";
import Link from "next/link"
import {AiOutlineMail} from 'react-icons/ai'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
    const Main = () => {
        return(
            <div id="main" className="w-full h-screen text-center">
                <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
                    <div>
                        <p className="uppercase text-sm tracking-idest text-gray-600">WELCOME TO MY WEBSITE</p>
                        <h1 className="py-4 text-gray-700">Hi, I’m <span className="text-[#6C47B2]">FRED</span></h1>
                        <h1 className="py-4 text-gray-700"> A Front-End Web Developer</h1>
                        <p className="py-4 text-gray-600 max-w-[70%] m-auto">I am a Front-End developer with backend experience as well. Specialized in creating exceptional digital experiences, I also have experience in content creation, SEO and design.</p>
                        <div className="flex items-center justify-between max-w-[330px] m-auto py-4"> 
                        <a href='https://www.linkedin.com/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaLinkedinIn fill="#6C47B2"/>
                  </div>
                </a>
                <a
                  href='https://github.com/fredgbcn'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaGithub fill="#6C47B2" />
                  </div>
                </a>
                <a href='https://www.linkedin.com/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <AiOutlineMail fill="#6C47B2"/>
                  </div>
                </a><a href='https://www.linkedin.com/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <BsFillPersonLinesFill fill="#6C47B2"/>
                  </div>
                </a>
               
                </div>
                    </div>
                </div>
            </div>
        )
    } 

export default Main;