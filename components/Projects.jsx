import React from "react";
import ProjectItem from "./ProjectItem"
import AfricaImg from "../public/assets/africa1.png"
import CSS from "../public/assets/m-i-m1.png"
import FlagQuiz from "../public/assets/flags.png"
import DevisPlus from "../public/assets/Devis-Plus.png"
import EAH from "../public/assets/E-a-h.png"
import Tcloc from "../public/assets/tcloc1.png"
import FlagDB from "../public/assets/Flags1.png"


    const Projects = () => {
        return(
            <div className="w-full">
                <div className="max-w-[1240px] mx-auto px-2 py-16">
                    <p className='uppercase text-xl tracking-widest text-[#5651e5]'>Projects</p>
                    <h2 className='py-4'>What I Can Do</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <ProjectItem
                            title='Website From Scratch'
                            backgroundImg={AfricaImg}
                            projectUrl='/africa'
                            tech='React/Node JS and MongoDB'
                        />
                        <ProjectItem
                            title='CSS Animations Tutorial'
                            backgroundImg={CSS}
                            projectUrl='/MIM'
                            tech='VUE.JS and CSS Animations'
                        /><ProjectItem
                            title='Flag Quiz'
                            backgroundImg={FlagQuiz}
                            projectUrl='Flag-quiz'
                            tech='Typescript'
                        /><ProjectItem
                            title='SEO Audit'
                            backgroundImg={DevisPlus}
                            projectUrl='Devis-Plus'
                            tech='SemRush, Spyfu, Analytics...'
                        /><ProjectItem
                            title='Rock Band Portfolio'
                            backgroundImg={EAH}
                            projectUrl='EAH'
                            tech='Wordpress'
                        /><ProjectItem
                            title='Manager, Writer and SEO'
                            backgroundImg={Tcloc}
                            projectUrl='Tcloc'
                            tech='Semrush, Spyfu, YOAST'
                        /><ProjectItem
                            title='Flag Database'
                            backgroundImg={FlagDB}
                            projectUrl='Flag-Database'
                            tech='React.JS'
                        />
                    
                    </div>
                </div>
            </div>
        )
    }

export default Projects;