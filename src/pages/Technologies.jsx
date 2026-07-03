import React from 'react'
import {
  SiCss,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'
import BorderGlow from '../components/BorderGlow.jsx'
import LogoLoop from '../components/LogoLoop.jsx'
import ScrollReveal from '../components/ScrollReveal.jsx'

const techLogos = [
  { node: <SiReact />, title: 'React', href: 'https://react.dev', color: '#61DAFB' },
  { node: <SiJavascript />, title: 'JavaScript', href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', color: '#F7DF1E' },
  { node: <SiTypescript />, title: 'TypeScript', href: 'https://www.typescriptlang.org', color: '#3178C6' },
  { node: <SiTailwindcss />, title: 'Tailwind CSS', href: 'https://tailwindcss.com', color: '#06B6D4' },
  { node: <SiNodedotjs />, title: 'Node.js', href: 'https://nodejs.org', color: '#5FA04E' },
  { node: <SiExpress />, title: 'Express', href: 'https://expressjs.com', color: '#F8FAFC' },
  { node: <SiMongodb />, title: 'MongoDB', href: 'https://www.mongodb.com', color: '#47A248' },
  { node: <SiMysql />, title: 'MySQL', href: 'https://www.mysql.com', color: '#4479A1' },
  { node: <SiPython />, title: 'Python', href: 'https://www.python.org', color: '#3776AB' },
  { node: <FaJava />, title: 'Java', href: 'https://www.java.com', color: '#F89820' },
  { node: <SiHtml5 />, title: 'HTML5', href: 'https://developer.mozilla.org/en-US/docs/Web/HTML', color: '#E34F26' },
  { node: <SiCss />, title: 'CSS', href: 'https://developer.mozilla.org/en-US/docs/Web/CSS', color: '#663399' },
  { node: <SiGit />, title: 'Git', href: 'https://git-scm.com', color: '#F05032' },
  { node: <SiGithub />, title: 'GitHub', href: 'https://github.com', color: '#F8FAFC' }
]

const renderTechnology = (item) => {
  const content = (
    <BorderGlow
      edgeSensitivity={30}
      glowColor='200 90 70'
      backgroundColor='#202936'
      borderRadius={18}
      glowRadius={24}
      glowIntensity={0.7}
      coneSpread={25}
      animated={false}
      colors={['#60a5fa', '#22d3ee', '#34d399']}
      fillOpacity={0.28}
      boxShadow='0 10px 28px rgba(2,6,23,0.18), inset 0 1px 0 rgba(255,255,255,0.04)'
      className='min-w-32 overflow-visible transition-transform duration-300 hover:-translate-y-1'
    >
      <div className='flex min-w-32 flex-col items-center justify-center gap-3 px-6 py-6 text-center'>
        <span className='text-5xl leading-none drop-shadow-sm' style={{ color: item.color }}>
          {item.node}
        </span>
        <span className='whitespace-nowrap text-sm font-medium text-[#E2E8F0]'>
          {item.title}
        </span>
      </div>
    </BorderGlow>
  )

  if (!item.href) return content

  return (
    <a href={item.href} target='_blank' rel='noreferrer noopener' aria-label={item.title}>
      {content}
    </a>
  )
}

const Technologies = React.memo(() => {
  return (
    <section id='technologies' className='mx-4 mt-24 mb-20 p-6 sm:mt-28 sm:mb-24 sm:p-8 md:mx-8 md:p-12 lg:mx-32 xl:mx-44'>
      <div className='mx-auto max-w-7xl lg:px-20'>
        <div className='grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-end lg:gap-20'>
          <ScrollReveal>
            <p className='mb-8 text-sm font-medium uppercase tracking-[0.18em] text-[#64748B]'>
              Tech Stack
            </p>
            <h1 className='text-5xl font-light leading-[0.95] text-[#F8FAFC] sm:text-6xl lg:text-7xl'>
              Technologies
              <br />
              I Work With
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={120}>
            <p className='max-w-xl text-base leading-relaxed text-[#94A3B8] sm:text-lg'>
            Tools and technologies I use to build responsive interfaces, APIs, databases, and full-stack applications.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={180}>
          <div className='relative mt-14 overflow-visible border-y border-white/10 py-8 text-[#E2E8F0] sm:mt-16'>
            <LogoLoop
              logos={techLogos}
              speed={70}
              direction='left'
              logoHeight={92}
              gap={18}
              hoverSpeed={0}
              scaleOnHover
              renderItem={renderTechnology}
              ariaLabel='Technologies I work with'
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
})

export default Technologies
