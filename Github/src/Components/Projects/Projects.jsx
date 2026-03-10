import React from 'react'
import ProjectCard from './ProjectCard'

import aipic from "../../assets/ai.png"
import electricity from "../../assets/electri.png"
import quiz from "../../assets/quiz.png"


const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl font-bold mb-6">
        Projects
      </h1>

      <div className="
        flex gap-8 overflow-x-auto pb-4
        scrollbar-thin scrollbar-thumb-cyan-500/30 scrollbar-track-transparent
      ">
        <ProjectCard
          title="LawEase - Intelligent Legal Assisant System"
          main="Provides smart legal guidance and instant responses by leveraging intelligent technologies.."
          image={aipic}
        />
        <ProjectCard
          title="Electricity Bill Management System"
          main="Designed to automate electricity bill calculation, payment tracking, and consumer data management in a structured manner."
          image={electricity}
        />
        <ProjectCard
          title="Quiz App"
          main="An interactive mobile app for playing general knowledge quizzes."
          image={quiz}
        />
        
      </div>
    </div>
  )
}

export default Projects
