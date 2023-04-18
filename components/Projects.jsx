import React from "react";
import Image from 'next/image'
    const Projects = () => {
        return(
            <div className="w-full">
                <div className="max-w-[1240px] mx-auto px-2 py-16">
                    <p className='uppercase text-xl tracking-widest text-[#5651e5]'>Projects</p>
                    <h2 className='py-4'>What I Can Do</h2>
                    <div className="grid md:grid-cols-2 gap-8">

                        <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
                        <Image src="/../public/assets/africa1.png" className="rounded-xl group-hover:opacity-10" layout="responsive" width={200} height={200} alt="Frédéric Gaufichon" />

                        </div>
                    </div>
                </div>
            </div>
        )
    }

export default Projects;