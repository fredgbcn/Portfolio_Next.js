import React from "react";
import Image from "next/image";
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
import Link from "next/link";
import ContactImg from '/public/assets/contact.png';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
    const Contact = (props) => {
        return(
            <div id='contact' className='w-full lg:h-screen'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full '>
        <p className='mt-10 text-xl tracking-widest uppercase text-[#5651e5]'>
          Contact
        </p>
        <h2 className='py-4'>Get In Touch</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* left side*/}
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='lg:p-4 h-full '>
              <div>
                <Image
                  className='rounded-xl hover:scale-105 ease-in duration-300'
                  src={ContactImg}
                  alt='/'
                />
              </div>
              <div>
                <h2 className='py-2'>Frédéric Gaufichon</h2>
                <p>Front-End Developer</p>
                <p className='py-4'>
                  I am available for freelance or full-time positions. Do not hesitate to contact me to talk about it
                </p>
              </div>
              <div>
                <p className='uppercase pt-8'>Connect With Me</p>
                <div className='flex items-center justify-between py-4'>
                  <Link
                    href='https://www.linkedin.com/in/fr%C3%A9d%C3%A9ric-gaufichon-82080891/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <FaLinkedinIn />
                    </div>
                  </Link>
                  <Link
                    href='https://github.com/fredgbcn'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <FaGithub />
                    </div>
                  </Link>

                  <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiOutlineMail />
                  </div>
                  <Link href='/#about'>
                      <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <BsFillPersonLinesFill />
                      </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
             {/* right side */}
        <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
        <div className='p-4'>
            <form
                action="https://getform.io/f/79ecc087-6b08-4aed-9c9f-8228f79d9ced"
                method="POST"
                encType='multipart/form-data'>
                <div className="grid md:grid-cols-2 gap-4 w-full">
                    <div className="flex flex-col text-slate-500 text-sm py-2 font-medium">
                        <label>NAME</label>
                        <input type="text" name="name" className="my-2 border-2 p-3 flex border-grey-300 rounded-lg"/>
                    </div>
                    <div className="flex flex-col text-sm py-2 text-slate-500 font-medium">
                        <label>PHONE NUMBER</label>
                        <input type="text" name="phone" className="my-2 border p-3 flex border-grey-300 rounded-lg" />
                    </div>
                </div>
                <div className="flex flex-col text-sm py-2 text-slate-500 font-medium">
                        <label>EMAIL</label>
                        <input type="email" name="mail" className="my-2 border p-3 flex border-grey-300 rounded-lg"/>
                    </div>
                    <div className="flex flex-col text-sm py-2 text-slate-500 font-medium">
                    <label>SUBJECT</label>
                    <input type="text" name="subject" className="my-2 border p-3 flex border-grey-300 rounded-lg"/>
                </div>
                <div className="flex flex-col text-sm py-2 text-slate-500 font-medium">
                        <label>MESSAGE</label>
                        <textarea type="text" name="message" rows='10' className="my-2 border p-3 flex border-grey-300 rounded-lg"/>
                </div>
                <button className='w-full p-4 text-gray-100 mt-4 shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white' type="submit">
                  Send Message
                </button>
            </form>
        </div>
 </div>
          </div>
          <div className='flex justify-center py-12'>
          <Link href='/'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <HiOutlineChevronDoubleUp
                  className='text-[#5651e5]'
                  size={30}
                />
              </div>
          </Link>
        </div>
          </div>
          </div>
        )
    }

export default Contact;