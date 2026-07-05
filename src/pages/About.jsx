import React from 'react'
import profileImage from '../assets/img2.jpg'
import ScrollReveal from '../components/ScrollReveal.jsx'

const experienceItems = [
  {
    role: 'Full-Stack Development',
    period: '2024 - Present',
    detail: 'Building full-stack web applications with React, Node.js, Express, authentication, APIs, and database-backed features.'
  },
  {
    role: 'Frontend Development',
    period: '2023 - Present',
    detail: 'Creating responsive interfaces, reusable components, polished interactions, and clean layouts for modern web projects.'
  },
  {
    role: 'Backend & Database Work',
    period: '2023 - Present',
    detail: 'Working with server-side logic, MongoDB, MySQL, API integrations, and structured data flows.'
  },
  {
    role: 'Technical Problem Solving',
    period: 'Ongoing',
    detail: 'Debugging application issues, learning new tools, improving performance, and turning requirements into practical solutions.'
  }
]

const educationItems = [
  {
    title: 'BSc (Hons) in Information Systems',
    issuer: 'Sabaragamuwa University of Sri Lanka',
    status: 'Undergraduate'
  }
]

const About = React.memo(() => {
  return (
    <section id='about' className='mx-4 pt-24 md:mx-8 lg:mx-32 xl:mx-44'>
      <div className='mx-auto max-w-7xl lg:px-20'>
        <section className='grid min-h-screen items-center gap-12 py-16 md:grid-cols-[0.9fr_1.1fr] lg:gap-20'>
          <ScrollReveal>
            <img
              src={profileImage}
              alt='Eshan Hasitha'
              loading='lazy'
              decoding='async'
              className='aspect-[4/5] w-full max-w-md rounded-[32px] border border-white/10 object-cover shadow-2xl'
            />
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <p className='mb-8 text-sm font-medium uppercase tracking-[0.18em] text-[#64748B]'>
              About
            </p>
            <h1 className='text-5xl font-light leading-[0.95] text-[#F8FAFC] sm:text-6xl lg:text-7xl'>
              About
              <br />
              Me
            </h1>
            <div className='mt-10 max-w-2xl border-t border-white/10 pt-8'>
              <h2 className='text-2xl font-light text-[#F8FAFC] sm:text-3xl'>
                Hello, I am Eshan Hasitha.
              </h2>
              <p className='mt-5 text-base leading-relaxed text-[#94A3B8] sm:text-lg'>
                I am an undergraduate student at <span className='text-[#F8FAFC]'>Sabaragamuwa University of Sri Lanka</span>, pursuing a BSc (Hons) in Information Systems.
              </p>
              <p className='mt-4 text-base leading-relaxed text-[#94A3B8] sm:text-lg'>
                I focus on building clean, practical web solutions with strong fundamentals, clear problem solving, and user-centered execution.
              </p>
              <p className='mt-4 text-base leading-relaxed text-[#94A3B8] sm:text-lg'>
                People may also search for me as Eshan, Hasitha, Eshan Hasitha, or eshanhasitha.
              </p>
            </div>
          </ScrollReveal>
        </section>

        <section className='grid min-h-screen gap-12 border-t border-white/10 py-16 md:grid-cols-[0.8fr_1.2fr] lg:gap-20'>
          <div className='md:sticky md:top-32 md:self-start'>
            <p className='mb-8 text-sm font-medium uppercase tracking-[0.18em] text-[#64748B]'>
              Experience
            </p>
            <h2 className='text-5xl font-light leading-[0.95] text-[#F8FAFC] sm:text-6xl'>
              Work
              <br />
              Focus
            </h2>
          </div>

          <div className='border-t border-white/10'>
            {experienceItems.map((item, index) => (
              <ScrollReveal key={item.role} delay={index * 80}>
                <article className='border-b border-white/10 py-7'>
                <div className='flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between'>
                  <h3 className='text-2xl font-light text-[#F8FAFC]'>{item.role}</h3>
                  <p className='text-sm font-medium uppercase tracking-[0.14em] text-[#64748B]'>{item.period}</p>
                </div>
                <p className='mt-3 max-w-2xl text-base leading-relaxed text-[#94A3B8]'>{item.detail}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </section>

        <section className='grid min-h-screen gap-12 border-t border-white/10 py-16 md:grid-cols-[0.8fr_1.2fr] lg:gap-20'>
          <div className='md:sticky md:top-32 md:self-start'>
            <p className='mb-8 text-sm font-medium uppercase tracking-[0.18em] text-[#64748B]'>
              Education
            </p>
            <h2 className='text-5xl font-light leading-[0.95] text-[#F8FAFC] sm:text-6xl'>
              Academic
              <br />
              Path
            </h2>
          </div>

          <div className='border-t border-white/10'>
            {educationItems.map((item) => (
              <ScrollReveal key={item.title}>
                <article className='border-b border-white/10 py-7'>
                <div className='flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between'>
                  <h3 className='text-2xl font-light text-[#F8FAFC]'>{item.title}</h3>
                  <p className='text-sm font-medium uppercase tracking-[0.14em] text-[#64748B]'>{item.status}</p>
                </div>
                <p className='mt-3 text-base leading-relaxed text-[#94A3B8]'>{item.issuer}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </section>

        <section className='grid min-h-screen gap-12 border-t border-white/10 py-16 md:grid-cols-[0.8fr_1.2fr] lg:gap-20'>
          <div className='md:sticky md:top-32 md:self-start'>
            <p className='mb-8 text-sm font-medium uppercase tracking-[0.18em] text-[#64748B]'>
              Certifications
            </p>
            <h2 className='text-5xl font-light leading-[0.95] text-[#F8FAFC] sm:text-6xl'>
              Certificates
              <br />
              List
            </h2>
          </div>

          <div className='border-t border-white/10'>
            <ScrollReveal>
              <div className='border-b border-white/10 py-7'>
              <p className='text-base leading-relaxed text-[#94A3B8] sm:text-lg'>
                Certifications will be added here later.
              </p>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </section>
  )
})

export default About
