import React from "react";
import Image from 'next/image'

const Skill = ({ name, icon }) => {
  return (
    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 flex flex-col">
      <div className="grid grid-cols-2 gap-4 justify-center items-center  my-auto">
        <div className="m-auto">
          <Image src={`/skills/${icon}`} alt={name}  layout="responsive" width='64' height='64'/>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3>{name}</h3>
        </div>
      </div>
    </div>
  )
}

export default Skill;