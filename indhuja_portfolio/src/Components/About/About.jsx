import React from 'react'
import AboutImg from "../../assets/7358653-removebg-preview.png"
import { IoArrowForward } from "react-icons/io5"

const About = () => {
  return (
    <div id = "About" className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12">
      <div>
        <h1 className="text-2xl md:text-5xl font-bold mb-6">About</h1>

        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="h-64 md:h-100 lg:h-[500px]" src={AboutImg} alt="About img" />

          <ul className="ml-6 hover:-translate-y-2 hover:scale-110">
            <li className="flex gap-3 py-4">
              <IoArrowForward size={40} className="mt-1" />
              <span className="w-96">
                <h1 className="text-sm md:text-lg font-semibold">Python Developer</h1>
                <p className="text-sm opacity-80">
                  Experienced in building logic-driven applications and backend scripts using Python.
                </p>
              </span>
            </li>


            <li className="flex gap-3 py-4">
              <IoArrowForward size={40} className="mt-1" />
              <span className="w-96">
                <h1 className="text-sm md:text-lg font-semibold">AI Projects Explorer</h1>
                <p className="text-sm opacity-80">
                  Worked on AI-based projects focused on automation, intelligent systems, and problem-solving.
                </p>
              </span>
            </li>

            

            <li className="flex gap-3 py-4">
              <IoArrowForward size={40} className="mt-1" />
              <span className="w-96">
                <h1 className="text-sm md:text-lg font-semibold">React Enthusiast</h1>
                <p className="text-sm opacity-80">
                  Focused on component-based UI development and reusable components.
                </p>
              </span>
            </li>

            <li className="flex gap-3 py-4">
              <IoArrowForward size={40} className="mt-1" />
              <span className="w-96">
                <h1 className="text-sm md:text-lg font-semibold">Web Application Developer</h1>
                <p className="text-sm opacity-80">
                    Developing functional and scalable web applications using modern technologies.                </p>
              </span>
            </li>
          </ul>

        </div>
      </div>
    </div>
  )
}

export default About
