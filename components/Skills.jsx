import React from "react";
import Image from 'next/image';
import Skill from './Skill'
    const Skills = () => {
        return(
            <div className="w-full lg:h-screen p-2">
                <div className="max-w-[1240px] mx-auto flex flex-col justify-self-center h-full">
                    <p className='uppercase text-xl tracking-widest text-[#5651e5]'>Skills</p>
                    <h2 className='py-4'>What I Can Do</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <Skill name={"HTML 5"} icon={"HTML 5.svg"} />
                        <Skill name={"REACT"} icon={"React-icon.svg"} />
                        <Skill name={"CSS 3"} icon={"CSS3.svg"} />
                        <Skill name={"SASS"} icon={"Sass.svg"} />
                        <Skill name={"JAVASCRIPT"} icon={"JS.svg"} />
                        <Skill name={"MONGODB"} icon={"Mongodb.svg"} />
                        <Skill name={"NODE.JS"} icon={"Node.svg"} />
                        <Skill name={"TAILWIND"} icon={"Tailwind.svg"} />
                        <Skill name={"TYPESCRIPT"} icon={"Typescript.svg"} />
                        <Skill name={"WORDPRESS"} icon={"Wordpress.svg"} />
                    </div>                  
                </div>
            </div>
        )
    }

export default Skills;