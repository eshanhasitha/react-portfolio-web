import React, { useEffect, useRef, useState } from 'react'
import { Code2, Database, GitBranch, Server, Sparkles, Wrench } from 'lucide-react'

const experiences = [
  {
    title: 'Full-Stack Development',
    description: 'Building responsive web applications with React, Node.js, Express, REST APIs, authentication, and database-backed features.',
    icon: <Code2 className='h-6 w-6' />,
    skills: ['React', 'Node.js', 'Express', 'REST APIs']
  },
  {
    title: 'Frontend Engineering',
    description: 'Creating clean user interfaces with reusable components, responsive layouts, interactive states, and polished user flows.',
    icon: <Sparkles className='h-6 w-6' />,
    skills: ['JavaScript', 'TypeScript', 'Tailwind CSS', 'UI Design']
  },
  {
    title: 'Backend & Databases',
    description: 'Working with server-side logic, data models, MongoDB, MySQL, API integration, and application data handling.',
    icon: <Database className='h-6 w-6' />,
    skills: ['MongoDB', 'MySQL', 'JWT', 'Data Modeling']
  },
  {
    title: 'Version Control',
    description: 'Using Git and GitHub for project history, collaboration, branching, code organization, and deployment workflows.',
    icon: <GitBranch className='h-6 w-6' />,
    skills: ['Git', 'GitHub', 'Branching', 'Deployment']
  },
  {
    title: 'MLOps Interest',
    description: 'Exploring machine learning workflows, model deployment concepts, automation, monitoring, and production-ready AI systems.',
    icon: <Server className='h-6 w-6' />,
    skills: ['Python', 'Automation', 'Pipelines', 'Monitoring']
  },
  {
    title: 'Problem Solving',
    description: 'Breaking down technical problems, debugging application issues, improving performance, and learning new tools quickly.',
    icon: <Wrench className='h-6 w-6' />,
    skills: ['Debugging', 'Optimization', 'Learning', 'Planning']
  }
]

const clamp = (value, min, max) => Math.min(Math.max(value, min), max)
const smoothstep = (value) => value * value * (3 - 2 * value)

const ExperienceCard = ({ item, index, stacked = false, style }) => (
  <article
    className={`group border-white/10 transition-colors duration-300 hover:border-[#60A5FA]/40 ${
      stacked
        ? 'absolute inset-0 flex flex-col rounded-[30px] border bg-[#111827] p-7 shadow-2xl transition-[opacity,transform,border-color] duration-200 ease-out 2xl:p-9'
        : 'grid grid-cols-[3rem_1fr] gap-x-5 border-b py-7 sm:gap-x-6 sm:py-8'
    }`}
    style={style}
  >
    <div className={`${stacked ? 'mb-7 flex items-center justify-between gap-4' : 'pt-1'}`}>
      <div className='flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-[#93C5FD] transition-colors duration-300 group-hover:border-[#60A5FA]/40 group-hover:text-[#F8FAFC]'>
        {item.icon}
      </div>
      {stacked && (
        <span className='text-sm font-medium uppercase tracking-[0.18em] text-[#64748B]'>
          0{index + 1}
        </span>
      )}
    </div>

    <div className={stacked ? 'flex flex-1 flex-col' : 'min-w-0'}>
      <div>
        {!stacked && (
          <span className='mb-3 block text-xs font-medium uppercase tracking-[0.18em] text-[#64748B]'>
            0{index + 1}
          </span>
        )}
        <h2 className={`${stacked ? 'mb-4 text-3xl 2xl:text-4xl' : 'mb-3 text-2xl sm:text-3xl'} font-light leading-tight text-[#F8FAFC]`}>
          {item.title}
        </h2>
        <p className={`${stacked ? 'max-w-2xl text-base text-[#CBD5E1]' : 'text-sm text-[#94A3B8] sm:text-base'} leading-relaxed`}>
          {item.description}
        </p>
      </div>

      <div className={`flex flex-wrap gap-x-4 gap-y-2 ${stacked ? 'mt-auto border-t border-white/10 pt-5' : 'mt-5'}`}>
        {item.skills.map((skill) => (
          <span
            key={skill}
            className={`text-xs font-medium uppercase tracking-[0.14em] ${stacked ? 'text-[#94A3B8]' : 'text-[#64748B]'}`}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  </article>
)

const ExperienceStack = () => {
  const stackRef = useRef(null)
  const [stackProgress, setStackProgress] = useState(0)

  useEffect(() => {
    const updateActiveCard = () => {
      const stack = stackRef.current
      if (!stack) return

      const rect = stack.getBoundingClientRect()
      const availableScroll = Math.max(1, rect.height - window.innerHeight)
      const progress = clamp((window.innerHeight * 0.38 - rect.top) / availableScroll, 0, 0.999)

      setStackProgress(progress * experiences.length)
    }

    updateActiveCard()
    window.addEventListener('scroll', updateActiveCard, { passive: true })
    window.addEventListener('resize', updateActiveCard)

    return () => {
      window.removeEventListener('scroll', updateActiveCard)
      window.removeEventListener('resize', updateActiveCard)
    }
  }, [])

  const cardStates = experiences.map((_, index) => {
    const localProgress = stackProgress - index
    const entryProgress = index === 0 ? 1 : smoothstep(clamp(localProgress, 0, 0.35) / 0.35)
    const stackDepth = Math.max(0, localProgress - 0.82)

    return {
      entryProgress,
      isFuture: entryProgress === 0,
      isVisible: entryProgress > 0.05,
      stackDepth,
    }
  })

  return (
    <div ref={stackRef} className='hidden xl:block' style={{ height: `${experiences.length * 98}vh` }}>
      <div className='sticky top-28 mx-auto h-[min(70vh,31rem)] max-w-[36rem] 2xl:h-[34rem] 2xl:max-w-[40rem]'>
        <div className='relative h-full'>
          {experiences.map((item, index) => {
            const { entryProgress, isFuture, stackDepth } = cardStates[index]

            return (
              <ExperienceCard
                key={item.title}
                item={item}
                index={index}
                stacked
                style={{
                  zIndex: index + 1,
                  opacity: entryProgress,
                  pointerEvents: 'none',
                  transform: isFuture
                    ? 'translate3d(0, 10rem, 0) scale(0.96)'
                    : `translate3d(0, ${((1 - entryProgress) * 10) - (stackDepth * 0.7)}rem, 0) scale(${0.96 + entryProgress * 0.04 - stackDepth * 0.012})`
                }}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

const Experience = React.memo(() => (
  <section id='experience' className='mx-4 mt-24 mb-20 p-6 sm:mt-28 sm:mb-24 sm:p-8 md:mx-8 md:p-12 lg:mx-32 xl:mx-44'>
    <div className='mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-20'>
      <div className='lg:sticky lg:top-32 lg:self-start'>
        <p className='mb-8 text-sm font-medium uppercase tracking-[0.18em] text-[#64748B]'>
          Experience
        </p>
        <h1 className='text-5xl font-light leading-[0.95] text-[#F8FAFC] sm:text-6xl lg:text-7xl'>
          What I
          <br />
          Work With
        </h1>
        <p className='mt-8 max-w-md text-base leading-relaxed text-[#94A3B8] sm:text-lg'>
          Practical experience across full-stack development, frontend interfaces, backend systems, databases, and technical problem solving.
        </p>
      </div>

      <div>
        <ExperienceStack />

        <div className='border-t border-white/10 xl:hidden'>
          {experiences.map((item, index) => (
            <ExperienceCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  </section>
))

export default Experience
