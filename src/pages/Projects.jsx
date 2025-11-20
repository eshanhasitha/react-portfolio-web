import React, { useEffect, useRef, useState } from 'react'
import { useSriLankaTime } from '../hooks/useSriLankaTime'

const Projects = React.memo(() => {
  const { eventMessage, timeTheme } = useSriLankaTime();
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

  // Glassmorphism Navbar-style background
  const getNavbarGlassBg = () => {
    return 'bg-[#1E293B]/20 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl';
  };

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
    }, 600)

    return () => {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }, [hoverId, projects])

  if (projects.length === 0) {
    return null
  }

  return (
    <div className={`flex flex-col items-center justify-center mx-4 mt-24 sm:mt-28 mb-20 sm:mb-24 md:mx-8 lg:mx-32 xl:mx-44 p-6 sm:p-8 md:p-12 ${getNavbarGlassBg()} hover:border-white/20 transition-colors duration-300`} id='projects'>
      
      {/* Event Banner */}
      {eventMessage && (
        <div className="absolute top-4 right-4 px-4 py-2 bg-gradient-to-r from-[#3B82F6]/20 to-[#10B981]/20 rounded-full border border-white/20 text-white text-xs sm:text-sm font-semibold animate-pulse">
          {eventMessage}
        </div>
      )}
      
      
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
              className='group relative bg-gradient-to-br from-[#2D3B4E]/25 via-[#1F2937]/20 to-[#1E293B]/25 backdrop-blur-2xl rounded-3xl border border-[#3B4B63]/40 shadow-2xl overflow-hidden hover:border-[#4A90E2]/70 hover:shadow-[0_0_30px_rgba(74,144,226,0.2)] transition-all duration-500 hover:scale-[1.02]'
              onMouseEnter={() => setHoverId(project.id)}
              onMouseLeave={() => {
                setHoverId(null)
                setSlideIndex(prev => ({ ...prev, [project.id]: 0 }))
              }}
            >
              {/* Glass Shine Effect */}
              <div className="absolute top-4 left-4 w-16 h-16 bg-white/3 rounded-full blur-2xl group-hover:bg-white/8 transition-all duration-500"></div>
              
              {/* Animated Border Glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#4A90E2]/0 via-transparent to-[#5DADE2]/0 group-hover:from-[#4A90E2]/15 group-hover:to-[#5DADE2]/15 transition-all duration-500"></div>
             
              <div className='relative h-48 sm:h-52 md:h-56 overflow-hidden'>
                <div
                  className='flex h-full'
                  style={{ 
                    transform: `translateX(-${idx * 100}%)`,
                    transition: 'transform 150ms linear'
                  }}
                >
                  {images.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`${project.title} ${i + 1}`}
                      loading="lazy"
                      decoding="async"
                      width="400"
                      height="224"
                      className='min-w-full h-full object-cover'
                    />
                  ))}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B]/80 via-[#1E293B]/20 to-transparent"></div>
                
                {/* Image Overlay Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#4A90E2]/0 to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              </div>

             
              <div className='p-5 sm:p-6 space-y-3 sm:space-y-4 relative'>
                <h2 className='text-xl sm:text-2xl md:text-2xl font-bold bg-gradient-to-r from-white via-[#4A90E2] to-[#5DADE2] bg-clip-text text-transparent group-hover:from-[#5DADE2] group-hover:to-[#4A90E2] transition-all duration-500'>
                  {project.title}
                </h2>
                
                <p className='text-[#A8B8D0] text-sm sm:text-base leading-relaxed line-clamp-3 group-hover:text-[#B8C8E0] transition-colors duration-300'>
                  {project.description}
                </p>

                <div className='flex flex-wrap gap-2 pt-1'>
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className='px-2.5 py-1 bg-gradient-to-r from-[#2D3B4E]/40 to-[#1E293B]/40 border border-[#4A90E2]/25 rounded-full text-[#5DADE2] text-xs font-medium hover:border-[#4A90E2]/70 hover:bg-[#4A90E2]/15 hover:scale-105 transition-all duration-300'
                    >
                      {tech}
                    </span>
                  ))}
                </div>

   
                <div className='flex gap-3 pt-3'>
                  <a 
                    href={project.liveLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='group/btn flex-1 relative px-4 py-2.5 bg-gradient-to-r from-[#3B82F6] to-[#2563EB] text-white font-bold text-sm rounded-full transition-all duration-300 overflow-hidden text-center hover:shadow-[0_0_20px_rgba(74,144,226,0.4)] hover:scale-105'
                  >
                    <span className="relative z-10">Live Demo</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#2563EB] to-[#3B82F6] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                  </a>
                  <a 
                    href={project.githubLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex-1 px-4 py-2.5 border-2 border-[#4A90E2] text-[#4A90E2] font-bold text-sm rounded-full transition-all duration-300 hover:bg-[#3B82F6]/10  hover:shadow-[0_0_15px_rgba(74,144,226,0.2)] text-center hover:scale-105'
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
})

export default Projects