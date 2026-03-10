import React from 'react'
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJs,
  FaFigma,
  FaPython,
  FaJava,
} from "react-icons/fa"
import {
  SiMongodb,
  SiRedis,
  SiMysql,
  SiC,
} from "react-icons/si"

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold mb-10">
        Skills
      </h1>

      <div className="flex w-full justify-center">
        
        {/* Skills / Tech Stack */}
        <div className="flex flex-nowrap gap-6 overflow-x-auto scrollbar-hide">

          <span className="p-4 bg-zinc-950 rounded-2xl flex items-center justify-center shrink-0">
            <FaHtml5 size={50} color="#E34F26" />
          </span>

          <span className="p-4 bg-zinc-950 rounded-2xl flex items-center justify-center shrink-0">
            <FaCss3Alt size={50} color="#1572b6" />
          </span>

          <span className="p-4 bg-zinc-950 rounded-2xl flex items-center justify-center shrink-0">
            <FaReact size={50} color="#61dafb" />
          </span>

          <span className="p-4 bg-zinc-950 rounded-2xl flex items-center justify-center shrink-0">
            <FaJs size={50} color="#f7df1e" />
          </span>

          {/*<span className="p-4 bg-zinc-950 rounded-2xl flex items-center justify-center shrink-0">
            <FaFigma size={50} color="#F24E1E" />
          </span>*/}

          <span className="p-4 bg-zinc-950 rounded-2xl flex items-center justify-center shrink-0">
            <FaPython size={50} color="#3776AB" />
          </span>

          <span className="p-4 bg-zinc-950 rounded-2xl flex items-center justify-center shrink-0">
            <FaJava size={50} color="#007396" />
          </span>

          <span className="p-4 bg-zinc-950 rounded-2xl flex items-center justify-center shrink-0">
            <SiC size={50} color="#A8B9CC" />
          </span>

          <span className="p-4 bg-zinc-950 rounded-2xl flex items-center justify-center shrink-0">
            <SiMysql size={50} color="#4479A1" />
          </span>



        </div>
      </div>
    </div>
  )
}

export default Experience
