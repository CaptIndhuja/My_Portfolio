import React from 'react'

const ProjectCard = ({ title, main, image }) => {
  return (
    <div
      className="
        p-4 md:p-6 flex flex-col w-80 shrink-0
        bg-[#0c0e19] rounded-2xl
        border border-white/10
        transition-all duration-300
        hover:bg-[#161a33]
        hover:-translate-y-1
        hover:shadow-lg hover:shadow-black/60
      "
    >
      {/* Image */}
      <div className="overflow-hidden rounded-xl">
        <img
          className="w-full h-40 object-cover transition-transform duration-300
                     hover:scale-105"
          src={image}
          alt={title}
        />
      </div>

      <h3 className="mt-4 px-1 text-xl font-semibold text-white">
        {title}
      </h3>

      <p className="px-1 mt-2 text-sm text-gray-400 leading-tight">
        {main}
      </p>
        {/* Image 

        <div className="mt-4 flex gap-3">
            <button className="px-4 py-1 text-sm rounded-full border border-cyan-400/50 text-cyan-300 hover:bg-cyan-400/10 transition">
            Live
            </button>
            <button className="px-4 py-1 text-sm rounded-full border border-gray-500 text-gray-300 hover:bg-gray-500/10 transition">
            GitHub
            </button>
        </div>   
           */}
    </div>
  )
}

export default ProjectCard
