import React from "react";

    const Main = () => {
        return(
            <div className="w-full h-screen text-center">
                <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
                    <div>
                        <p className="uppercase text-sm tracking-idest text-gray-600">WELCOME TO MY WEBSITE</p>
                        <h1 className="py-4 text-gray-700">Hi, I’m <span className="text-[#6C47B2]">FRED</span></h1>
                        <h1 className="py-4 text-gray-700"> A Front-End Web Developer</h1>
                        <p className="py-4 text-gray-600 max-w-[70%] m-auto">I am a Front-End developer with backend experience as well. Specialized in creating exceptional digital experiences, I also have experience in content creation, SEO and design.</p>
                    </div>
                </div>
            </div>
        )
    } 

export default Main;