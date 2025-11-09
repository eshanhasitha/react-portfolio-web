import React, { useEffect, useRef, useState } from 'react'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Chatty",
      description: "Chatty is a real-time MERN chat app with JWT auth, image sharing, themes, and responsive design powered by Socket.io.",
      images: [
        "https://res.cloudinary.com/dpztt97x8/image/upload/v1762706640/ChatGPT_Image_Nov_9_2025_04_24_06_PM_aai8go.png",
        "https://res.cloudinary.com/dpztt97x8/image/upload/v1762706625/Screenshot_2025-11-09_164416_wtpavy.png",
        "https://res.cloudinary.com/dpztt97x8/image/upload/v1762706629/Screenshot_2025-11-09_164556_ybqpzf.png",
        "https://res.cloudinary.com/dpztt97x8/image/upload/v1762706628/Screenshot_2025-11-09_164613_d0mtjz.png",
        "https://res.cloudinary.com/dpztt97x8/image/upload/v1762706626/Screenshot_2025-11-09_164459_mriydp.png",
        "https://res.cloudinary.com/dpztt97x8/image/upload/v1762706630/Screenshot_2025-11-09_164703_lcg62o.png"
      ],
      technologies: ["MERN", "Socket.io", "JWT", "Tailwind CSS"],
      liveLink: "https://chattygo.up.railway.app/",
      githubLink: "https://github.com/eshanhasitha/chat-app"
    }
  ]

  const [hoverId, setHoverId] = useState(null)
  const [slideIndex, setSlideIndex] = useState({})
  const intervalRef = useRef(null)

  useEffect(() => {
    if (hoverId == null) return

    const proj = projects.find(p => p.id === hoverId)
    const imgs = (proj?.images?.length ? proj.images : [proj?.image]).filter(Boolean)
    if (!imgs || imgs.length < 2) return

    intervalRef.current = setInterval(() => {
      setSlideIndex(prev => {
        const current = prev[hoverId] ?? 0
        const next = (current + 1) % imgs.length
        return { ...prev, [hoverId]: next }
      })
    }, 1500)

    return () => {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }, [hoverId, projects])

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
        {projects.map((project) => {
          const images = project.images?.length ? project.images : [project.image]
          const idx = slideIndex[project.id] ?? 0

          return (
            <div 
              key={project.id}
              className='bg-[#32323B] rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-xl'
              style={{ boxShadow: '0 0 20px rgba(255, 255, 255, 0.1)' }}
              onMouseEnter={() => setHoverId(project.id)}
              onMouseLeave={() => {
                setHoverId(null)
                setSlideIndex(prev => ({ ...prev, [project.id]: 0 }))
              }}
            >
              {/* Project Image Slideshow */}
              <div className='relative h-52 overflow-hidden'>
                <div
                  className='flex h-full transition-transform duration-300 ease-out will-change-transform'
                  style={{ transform: `translateX(-${idx * 100}%)` }}
                >
                  {images.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`${project.title} ${i + 1}`}
                      className='min-w-full h-full object-cover'
                    />
                  ))}
                </div>
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
                    className='flex-1 text-center border-none text-white px-4 py-2 rounded-full bg-gradient-to-r from-[#DA7C25] to-[#B923E1] text-base font-bold cursor-pointer transition-all duration-500 hover:scale-105 hover:text.black'
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
          )
        })}
      </div>
    </div>
  )
}

export default Projects