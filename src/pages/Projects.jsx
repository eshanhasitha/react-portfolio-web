import { useEffect, useRef, useState } from 'react'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Chatty",
      description: "A real-time MERN stack chat application with JWT authentication, image sharing, theme customization, and responsive design powered by Socket.io.",
      images: [
        "https://res.cloudinary.com/dpztt97x8/image/upload/v1762706640/ChatGPT_Image_Nov_9_2025_04_24_06_PM_aai8go.png",
        "https://res.cloudinary.com/dpztt97x8/image/upload/v1762706625/Screenshot_2025-11-09_164416_wtpavy.png",
        "https://res.cloudinary.com/dpztt97x8/image/upload/v1762706629/Screenshot_2025-11-09_164556_ybqpzf.png",
        "https://res.cloudinary.com/dpztt97x8/image/upload/v1762706628/Screenshot_2025-11-09_164613_d0mtjz.png",
        "https://res.cloudinary.com/dpztt97x8/image/upload/v1762706626/Screenshot_2025-11-09_164459_mriydp.png",
        "https://res.cloudinary.com/dpztt97x8/image/upload/v1762706630/Screenshot_2025-11-09_164703_lcg62o.png"
      ],
      technologies: ["MongoDB", "Express", "React", "Node.js", "Socket.io", "JWT", "Tailwind CSS"],
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
    }, 2000)

    return () => {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }, [hoverId, projects])

  if (projects.length === 0) {
    return null
  }

  return (
    <div className='absolute flex flex-col items-center justify-center mx-4 mt-24 sm:mt-28 mb-20 sm:mb-24 md:mx-8 lg:mx-32 xl:mx-44 p-6 sm:p-8 md:p-12 bg-[#1E293B]/40 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-500 ease-out' id='projects'>
      
      
      <div className='text-center mb-8 sm:mb-12 md:mb-16'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4'>
          <span className="bg-gradient-to-r from-[#3B82F6] to-[#10B981] bg-clip-text text-transparent">
            My Projects
          </span>
        </h1>
        <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-[#3B82F6] to-[#10B981] mx-auto rounded-full mb-4 sm:mb-6"></div>
        <p className='text-sm sm:text-base md:text-lg lg:text-xl text-[#94A3B8] max-w-3xl mx-auto leading-relaxed px-4'>
          Showcase of my recent work demonstrating skills in full-stack development, 
          modern frameworks, and creative problem-solving.
        </p>
      </div>

      {/* Projects Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full'>
        {projects.map((project) => {
          const images = project.images?.length ? project.images : [project.image]
          const idx = slideIndex[project.id] ?? 0

          return (
            <div 
              key={project.id}
              className='group bg-[#334155]/40 backdrop-blur-md rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 ease-out hover:scale-105 hover:shadow-2xl hover:shadow-[#3B82F6]/30'
              onMouseEnter={() => setHoverId(project.id)}
              onMouseLeave={() => {
                setHoverId(null)
                setSlideIndex(prev => ({ ...prev, [project.id]: 0 }))
              }}
            >
             
              <div className='relative h-48 sm:h-52 md:h-56 overflow-hidden bg-[#1E293B]'>
                <div
                  className='flex h-full transition-transform duration-150 ease-in-out'
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
                <div className="absolute inset-0 bg-gradient-to-t from-[#334155] to-transparent opacity-60"></div>
              </div>

             
              <div className='p-4 sm:p-5 space-y-2 sm:space-y-3'>
                <h2 className='text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#3B82F6] to-[#10B981] bg-clip-text text-transparent'>
                  {project.title}
                </h2>
                
                <p className='text-[#94A3B8] text-sm sm:text-base leading-relaxed line-clamp-3'>
                  {project.description}
                </p>

                <div className='flex flex-wrap gap-2'>
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className='px-3 py-1 bg-[#1E293B]/40 backdrop-blur-sm border border-[#3B82F6]/30 rounded-full text-[#3B82F6] text-xs font-semibold hover:bg-[#3B82F6]/20 hover:border-[#3B82F6]/50 transition-all duration-500 ease-out hover:scale-105'
                    >
                      {tech}
                    </span>
                  ))}
                </div>

   
                <div className='flex gap-2 sm:gap-3 pt-3 sm:pt-4'>
                  <a 
                    href={project.liveLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex-1 text-center bg-gradient-to-r from-[#3B82F6] to-[#2563EB] text-white px-4 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 hover:shadow-lg hover:shadow-[#3B82F6]/50 hover:scale-105 active:scale-95'
                  >
                    Live Demo
                  </a>
                  <a 
                    href={project.githubLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex-1 text-center border-2 border-[#94A3B8] text-[#94A3B8] px-4 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 hover:border-[#3B82F6] hover:text-[#3B82F6] hover:scale-105 active:scale-95'
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