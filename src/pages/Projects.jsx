import React from 'react'

const Projects = () => {
  const projects = [
    // Add your projects here
    // Example:
    // {
    //   id: 1,
    //   title: "Project Title",
    //   description: "Project description goes here",
    //   image: "image-url",
    //   technologies: ["React", "Node.js"],
    //   liveLink: "https://...",
    //   githubLink: "https://github.com/..."
    // }
  ]

  // Hide section if no projects
  if (projects.length === 0) {
    return null
  }

  return (
    <div className='mx-5 my-20 md:mx-28 lg:mx-44 p-8 md:p-12 bg-[#161513] rounded-2xl relative' style={{
      boxShadow: '0 0 30px rgba(255, 255, 255, 0.3)'
    }} id='projects'>
      
      {/* Title Section */}
      <div className='text-center'>
        <h1 className='text-5xl lg:text-7xl font-bold text-white mb-4'>My Projects !.</h1>
      </div>

      {/* Subtitle */}
      <div className='text-center mt-6'>
        <p className='text-lg md:text-xl font-light text-gray-300 max-w-3xl mx-auto'>
          Here are some of my recent projects that showcase my skills and experience in web development.
        </p>
      </div>

      {/* Projects Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 md:mt-24'>
        {projects.map((project) => (
          <div 
            key={project.id}
            className='bg-[#32323B] rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-xl'
            style={{
              boxShadow: '0 0 20px rgba(255, 255, 255, 0.1)'
            }}
          >
            {/* Project Image */}
            <div className='h-52 overflow-hidden'>
              <img 
                src={project.image} 
                alt={project.title}
                className='w-full h-full object-cover transition-transform duration-500 hover:scale-110'
              />
            </div>

            {/* Project Content */}
            <div className='p-6'>
              <h2 className='text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#DA7C25] to-[#B923E1] bg-clip-text text-transparent mb-3'>
                {project.title}
              </h2>
              
              <p className='text-gray-300 text-base mb-4 leading-relaxed'>
                {project.description}
              </p>

              {/* Technologies */}
              <div className='flex flex-wrap gap-2 mb-5'>
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className='px-3 py-1 bg-gradient-to-r from-[#DA7C25] to-[#B923E1] rounded-full text-white text-sm font-medium'
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className='flex gap-4'>
                <a 
                  href={project.liveLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex-1 text-center border-none text-white px-4 py-2 rounded-full bg-gradient-to-r from-[#DA7C25] to-[#B923E1] text-base font-bold cursor-pointer transition-all duration-500 hover:scale-105 hover:text-black'
                >
                  Live Demo
                </a>
                <a 
                  href={project.githubLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex-1 text-center border-2 border-white text-white px-4 py-2 rounded-full text-base font-bold cursor-pointer transition-all duration-500 hover:scale-105 hover:bg-white hover:text-black'
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects