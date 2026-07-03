import React, { useState } from 'react'
import { ArrowLeft, ExternalLink, Github } from 'lucide-react'
import BorderGlow from '../components/BorderGlow.jsx'
import ScrollReveal from '../components/ScrollReveal.jsx'

const projects = [
  {
    id: 1,
    title: 'Chatty',
    description: 'A real-time MERN stack chat application with JWT authentication, image sharing, theme customization, and responsive design powered by Socket.io.',
    images: [
      'https://res.cloudinary.com/dpztt97x8/image/upload/v1762706640/ChatGPT_Image_Nov_9_2025_04_24_06_PM_aai8go.png',
      'https://res.cloudinary.com/dpztt97x8/image/upload/v1762706625/Screenshot_2025-11-09_164416_wtpavy.png',
      'https://res.cloudinary.com/dpztt97x8/image/upload/v1762706629/Screenshot_2025-11-09_164556_ybqpzf.png',
      'https://res.cloudinary.com/dpztt97x8/image/upload/v1762706628/Screenshot_2025-11-09_164613_d0mtjz.png',
      'https://res.cloudinary.com/dpztt97x8/image/upload/v1762706626/Screenshot_2025-11-09_164459_mriydp.png',
      'https://res.cloudinary.com/dpztt97x8/image/upload/v1762706630/Screenshot_2025-11-09_164703_lcg62o.png'
    ],
    technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'Socket.io', 'JWT', 'Tailwind CSS'],
    liveLink: 'https://chattygo.up.railway.app/',
    githubLink: 'https://github.com/eshanhasitha/chat-app'
  },
  {
    id: 2,
    title: 'SmartRent',
    description: 'A modern, responsive rental platform frontend built to simplify browsing and renting items across categories like music, sports, and decor.',
    images: [
      'https://res.cloudinary.com/dpztt97x8/image/upload/v1765291488/Screenshot_2025-12-09_201251_vvlo4h.png',
      'https://res.cloudinary.com/dpztt97x8/image/upload/v1765291485/Screenshot_2025-12-09_201301_nwvvh5.png',
      'https://res.cloudinary.com/dpztt97x8/image/upload/v1765291490/Screenshot_2025-12-09_201338_wfrodw.png',
      'https://res.cloudinary.com/dpztt97x8/image/upload/v1765291485/Screenshot_2025-12-09_201308_cysxsr.png',
      'https://res.cloudinary.com/dpztt97x8/image/upload/v1765291485/Screenshot_2025-12-09_201313_bwm5k0.png',
      'https://res.cloudinary.com/dpztt97x8/image/upload/v1765291485/Screenshot_2025-12-09_201324_rargjc.png',
      'https://res.cloudinary.com/dpztt97x8/image/upload/v1765291486/Screenshot_2025-12-09_201330_tanvbb.png'
    ],
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    liveLink: 'https://smart-rent.pages.dev/',
    githubLink: 'https://github.com/nimeduhansaka/Smart-Rent'
  }
]

const formatProjectUrl = (url) => url.replace(/^https?:\/\//, '').replace(/\/$/, '')

const BrowserFrame = ({ project, image = project.images[0], compact = false }) => (
  <BorderGlow
    edgeSensitivity={28}
    glowColor='205 92 72'
    backgroundColor='#0B1220'
    borderRadius={28}
    glowRadius={34}
    glowIntensity={0.76}
    coneSpread={24}
    animated={false}
    colors={['#60a5fa', '#22d3ee', '#34d399']}
    fillOpacity={0.22}
    className='shadow-[0_24px_80px_rgba(2,6,23,0.35)] transition-transform duration-300 group-hover:-translate-y-1'
  >
    <div className='overflow-hidden rounded-[28px] bg-[#0B1220]'>
      <div className='flex items-center gap-3 border-b border-white/10 bg-white/[0.04] px-4 py-3'>
        <div className='flex shrink-0 items-center gap-1.5'>
          <span className='h-2.5 w-2.5 rounded-full bg-[#F87171]' />
          <span className='h-2.5 w-2.5 rounded-full bg-[#FBBF24]' />
          <span className='h-2.5 w-2.5 rounded-full bg-[#34D399]' />
        </div>
        <div className='min-w-0 flex-1 rounded-full border border-white/10 bg-[#162238] px-4 py-2 text-xs font-medium text-[#CBD5E1]'>
          <span className='block truncate'>{formatProjectUrl(project.liveLink)}</span>
        </div>
      </div>
      <div className={compact ? 'aspect-[16/10] overflow-hidden bg-[#0F172A]' : 'aspect-video overflow-hidden bg-[#0F172A]'}>
        <img
          src={image}
          alt={`${project.title} home screen`}
          loading='lazy'
          decoding='async'
          width='900'
          height='520'
          className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]'
        />
      </div>
    </div>
  </BorderGlow>
)

const ProjectCard = ({ project, index, onSelect }) => (
  <ScrollReveal delay={index * 90}>
    <button
      type='button'
      onClick={() => onSelect(project)}
      className='group flex h-full flex-col text-left outline-none'
      aria-label={`Open ${project.title} project details`}
    >
      <BrowserFrame project={project} compact />
      <div className='mt-6 flex flex-1 flex-col'>
        <p className='mb-4 text-sm font-medium uppercase tracking-[0.18em] text-[#64748B]'>
          0{index + 1}
        </p>
        <h2 className='text-3xl font-semibold leading-tight text-[#F8FAFC] transition-colors duration-300 group-hover:text-[#93C5FD]'>
          {project.title}
        </h2>
        <p className='mt-4 line-clamp-3 text-base leading-relaxed text-[#94A3B8]'>
          {project.description}
        </p>
        <div className='mt-6 flex flex-wrap gap-x-4 gap-y-2'>
          {project.technologies.slice(0, 5).map((tech) => (
            <span key={tech} className='text-xs font-semibold uppercase tracking-[0.14em] text-[#64748B]'>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </button>
  </ScrollReveal>
)

const ProjectDetail = ({ project, onBack }) => (
  <div className='mt-16 border-t border-white/10 pt-10'>
    <button
      type='button'
      onClick={onBack}
      className='inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-[#E2E8F0] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#60A5FA]/50 hover:text-white'
    >
      <ArrowLeft size={18} />
      Back to projects
    </button>

    <div className='mt-10 grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-start'>
      <ScrollReveal>
        <div className='group'>
          <BrowserFrame project={project} />
        </div>
      </ScrollReveal>

      <ScrollReveal delay={120}>
        <div className='lg:pt-4'>
          <p className='mb-6 text-sm font-medium uppercase tracking-[0.18em] text-[#64748B]'>
            Overview
          </p>
          <p className='text-base leading-relaxed text-[#A8B5C8] sm:text-lg'>
            {project.description}
          </p>

          <div className='mt-8 flex flex-wrap gap-x-4 gap-y-3'>
            {project.technologies.map((tech) => (
              <span key={tech} className='rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-xs font-semibold uppercase tracking-[0.13em] text-[#CBD5E1]'>
                {tech}
              </span>
            ))}
          </div>

          <div className='mt-10 flex flex-wrap gap-3'>
            <a
              href={project.liveLink}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 rounded-full bg-[#F8FAFC] px-6 py-3 text-sm font-semibold text-[#0F172A] transition-all duration-300 hover:-translate-y-1 hover:bg-white'
            >
              Live Project
              <ExternalLink size={17} />
            </a>
            <a
              href={project.githubLink}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-[#F8FAFC] transition-all duration-300 hover:-translate-y-1 hover:border-[#60A5FA]/60 hover:text-[#93C5FD]'
            >
              GitHub
              <Github size={17} />
            </a>
          </div>
        </div>
      </ScrollReveal>
    </div>

    <div className='mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3'>
      {project.images.slice(1).map((src, index) => (
        <ScrollReveal key={src} delay={index * 70}>
          <div className='overflow-hidden rounded-2xl border border-white/10 bg-[#0B1220]'>
            <img
              src={src}
              alt={`${project.title} screen ${index + 2}`}
              loading='lazy'
              decoding='async'
              width='640'
              height='360'
              className='aspect-video h-full w-full object-cover'
            />
          </div>
        </ScrollReveal>
      ))}
    </div>
  </div>
)

const Projects = React.memo(() => {
  const [selectedProject, setSelectedProject] = useState(null)
  const headingTitle = selectedProject ? selectedProject.title : 'Selected\nWork'
  const headingDescription = selectedProject
    ? selectedProject.description
    : 'A focused set of recent work demonstrating full-stack development, modern frontend tooling, and practical product thinking.'

  return (
    <section id='projects' className='mx-4 mt-24 mb-20 p-6 sm:mt-28 sm:mb-24 sm:p-8 md:mx-8 md:p-12 lg:mx-32 xl:mx-44'>
      <div className='mx-auto max-w-7xl lg:px-20'>
        <div className='grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-end lg:gap-20'>
          <div>
            <p className='mb-8 text-sm font-medium uppercase tracking-[0.18em] text-[#64748B]'>
              {selectedProject ? 'Project' : 'Projects'}
            </p>
            <h1 className='text-5xl font-light leading-[0.95] text-[#F8FAFC] sm:text-6xl lg:text-7xl'>
              {headingTitle.split('\n').map((line, index, lines) => (
                <React.Fragment key={line}>
                  {line}
                  {index < lines.length - 1 && <br />}
                </React.Fragment>
              ))}
            </h1>
          </div>
          <p className='max-w-xl text-base leading-relaxed text-[#94A3B8] sm:text-lg'>
            {headingDescription}
          </p>
        </div>

        {selectedProject ? (
          <ProjectDetail project={selectedProject} onBack={() => setSelectedProject(null)} />
        ) : (
          <div className='mt-16 grid gap-x-7 gap-y-12 border-t border-white/10 pt-10 md:grid-cols-2 xl:grid-cols-3'>
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onSelect={setSelectedProject}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
})

export default Projects
