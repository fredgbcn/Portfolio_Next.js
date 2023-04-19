import React from "react";
import Image from "next/image";
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'

    const Contact = (props) => {
        return(
            <div className="w-full lg:h-screen">
                <div className="max-x-[1240px] m-auto px-2 py-16 w-full">
                    <p className="text-xl tracking-widest uppercase text-[#5651e5]">
                        Contact
                    </p>
                    <h2 className="py-4">Get In Touch</h2>
                    <div className="grid lg:grid-cols-5 gap-8">

                        <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
                            <div className="lg:p-4 h-full">
                                <div>
                                    <Image className="rounded-xl hover:scale-105 ease-in duration-300" src="/../public/assets/contact.png" width={200} height={200} alt="contact"/>
                                </div>
                                <div>
                                    <h2 className="py-2">Frédéric Gaufichon</h2>
                                    <p>Front End Developer</p>
                                    <p className="py-4">I am available for freelance or full-time positions. Do not hesitate to contact me to talk about it</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between py-4">
                                <p className="uppercase pt-8">Connect With Me</p>
                                <div>
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
                                   </a>
                                   <a href='https://www.linkedin.com/'
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
                </div>
            </div>
        )
    }

export default Contact;