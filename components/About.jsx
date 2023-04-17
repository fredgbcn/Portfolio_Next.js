import React from "react";
import Image from "next/image";
import Link from "next/link";

    const About = () => {
        return (
        <div className="w-full md:h-screen p-2 flex items-center py-16">
            <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
                <div className="col-span-2">
                    <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
                    <h2 className='py-4'>Who I am</h2>
                    <p className='py-2 text-gray-600'>// I am not your normal developer</p>
                    <p className='py-2 text-gray-600'>After years of musical career, the aspiration to master more and more the art of communication brought me to web development. I started by creating websites for my artistic projects with CMS like WordPress, then, wanting to improve some aspects I was led to immerse myself in Html5, CSS3 and Javascript languages.</p>
                    <p className='py-2 text-gray-600'>I was quickly driven by the desire to understand and know more possibilities to the point of developing a professional awareness within the Master CAWEB in Strasbourg. I amplified my knowledge in SEO, management, design, localization... but I also confirmed my interest in web development and invested myself in libraries like React, Vue.js, Node.js and the Next.js framework. </p>
                    <p className='py-2 text-gray-600'>Little by little my interest turned to the backend in order to create administrator interfaces for my clients.</p>
                    <Link href='/#projects'>
                        <p className='py-2 text-gray-600 underline cursor-pointer'>
                        Check out some of my latest projects.
                        </p>
                     </Link>                </div>
                <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                    <Image src="/../public/assets/profile.png" layout="responsive" width={200} height={200} alt="Frédéric Gaufichon" />
                </div>
            </div>
        </div>)
    }
export default About;