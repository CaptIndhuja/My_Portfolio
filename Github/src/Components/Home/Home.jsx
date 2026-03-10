import React from 'react'
import avatarImg from "../../assets/7358602-removebg-preview.png"
import TextChange from "../TextChange"

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start pt-40 px-10 md:px-20">

      
      {/* Left content */}
      <div className="md:w-2/4 md:pt-10">
        <h1 className="text-3xl md:text-6xl font-bold leading-normal tracking-tighter">
          <TextChange />
        </h1>

        <p className="text-sm md:text-2xl leading-tight tracking-tight mt-4">
          I’m a developer focused on creating simple, efficient, and meaningful applications.
          Interested in AI, web technologies, and problem-solving through code.
          Currently learning, building projects, and preparing for industry challenges.
        </p>

        <button className="mt-5 text-white py-2 px-4 text-sm md:text-lg 
                           hover:opacity-85 transition duration-300 
                           hover:scale-105 font-semibold rounded-3xl 
                           bg-[#465697]"><a href= "#Footer">
          Contact Me</a>
        </button>
      </div>

      {/* Right image */}
      <div className="md:w-2/4 flex justify-center">
        <img
          src={avatarImg}
          alt="Avatar"
          className="w-4/5 object-contain"
        />
      </div>

    </div>
  )
}

export default Home
