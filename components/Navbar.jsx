import React from "react";
import Image from "next/image"
import Link from "next/link"
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

    const Navbar = () => {
        return (
        <div className="fixed w-full h-20 shadow-xl z-[100]">
            <div className="flex justify-between items-center w-full px-2 2xl:px-16 pt-1 ">
            <Image src="/../public/assets/logo.png" alt="Frédéric Gaufichon" width="180" height="90"/>
                <div>
                    <ul className="hidden md:flex">
                        <Link href='/'>
                            <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
                        </Link>
                        <Link href='/'>
                            <li className="ml-10 text-sm uppercase hover:border-b">About</li>
                        </Link><Link href='/'>
                            <li className="ml-10 text-sm uppercase hover:border-b">Skils</li>
                        </Link><Link href='/'>
                            <li className="ml-10 text-sm uppercase hover:border-b">Projects</li>
                        </Link>
                        <Link href='/'>
                            <li className="ml-10 text-sm uppercase hover:border-b">Contact</li>
                        </Link>
                    </ul>
                    <div className="md:hidden"> 
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>

            <div className="fixed left-0 top-0 w-full h-screen bg-black/70">
                <div className="fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500">
                    <div className="flex w-full items-center justify-between ">
                        <Image src='/../public/assets/logo.png' alt='logo' width="180" height="90"/>
                        <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                        <AiOutlineClose />
                        </div>
                    </div>
                    <div className="border-b border-gray-300 my-4">
                        <p className="w-[85%] md:w-[90%] py-4">Let's build something legendary together</p>
                    </div>
                
                <div className="border border-red-500">
                    <ul className="uppercase">
                        <Link href="/">
                            <li className="py-4 text-sm">Home</li>
                        </Link>
                        <Link href="/">
                            <li className="py-4 text-sm">About</li>
                        </Link>
                        <Link href="/">
                            <li className="py-4 text-sm">Skills</li>
                        </Link>
                        <Link href="/">
                            <li className="py-4 text-sm">Projects</li>
                        </Link>
                        <Link href="/">
                            <li className="py-4 text-sm">Content</li>
                        </Link>
                    </ul>
                </div>
                </div>
            </div>
        </div>)
}


export default Navbar;

/////////////////////////////////
