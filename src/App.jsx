import { useEffect, useState } from 'react'
import { Send } from 'lucide-react'
import Profile from './pages/Profile.jsx'
import Contact from './pages/Contact.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import Experience from './pages/Experience.jsx'
import Technologies from './pages/Technologies.jsx'
import Navbar from './components/Navbar.jsx'
import Dot from './components/Dot.jsx'
import Background from './components/Background.jsx'
import Preloader from './components/Preloader.jsx'
import Footer from './components/Footer.jsx'
import ScrollReveal from './components/ScrollReveal.jsx'

const ContactCta = ({ onOpenContact }) => (
  <section
    id='contact'
    className='mx-4 flex min-h-screen items-center p-6 sm:p-8 md:mx-8 md:p-12 lg:mx-32 xl:mx-44'
  >
    <div className='mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.15fr_0.85fr] md:items-end lg:px-20'>
      <ScrollReveal>
        <p className='mb-8 text-sm font-medium uppercase tracking-[0.18em] text-[#64748B]'>
          Ready to collaborate?
        </p>
        <h1 className='text-5xl font-light leading-[0.95] text-[#F8FAFC] sm:text-6xl lg:text-7xl'>
          Send Me
          <br />
          a Message
        </h1>
      </ScrollReveal>
      <ScrollReveal delay={120} className='max-w-xl'>
        <p className='text-base leading-relaxed text-[#94A3B8] sm:text-lg'>
          Have an idea, project, or opportunity in mind? Tell me what you are building and I will get back to you.
        </p>
        <button
          type='button'
          onClick={onOpenContact}
          className='group mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-[#F8FAFC] px-7 py-3.5 text-base font-semibold text-[#0F172A] transition-all duration-300 hover:-translate-y-1 hover:bg-white active:scale-95'
        >
          <Send className='h-5 w-5 transition-transform duration-300 group-hover:translate-x-1' />
          Send a Message
        </button>
      </ScrollReveal>
    </div>
  </section>
)

const SectionDivider = () => (
  <div className='mx-auto h-px w-[min(88rem,calc(100%-2rem))] bg-gradient-to-r from-transparent via-white/20 to-transparent' aria-hidden='true' />
)

const SectionBand = ({ children, reveal = true }) => (
  <div className='relative min-h-screen'>
    {reveal ? <ScrollReveal>{children}</ScrollReveal> : children}
  </div>
)

const App = () => {
  const getPageFromHash = () => {
    switch (window.location.hash) {
      case '#about-page':
        return 'about'
      case '#projects-page':
        return 'projects'
      case '#contact-page':
        return 'contact'
      default:
        return 'home'
    }
  }

  const [page, setPage] = useState(getPageFromHash)

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash
      const nextPage = getPageFromHash()

      if (nextPage !== 'home') {
        window.scrollTo(0, 0)
        setPage(nextPage)
        window.requestAnimationFrame(() => window.scrollTo(0, 0))
        return
      }

      window.scrollTo(0, 0)
      setPage('home')

      if (hash) {
        window.setTimeout(() => {
          document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' })
        }, 0)
      }
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const openPage = (nextPage) => {
    window.scrollTo(0, 0)
    window.location.hash = `${nextPage}-page`
    setPage(nextPage)
    window.requestAnimationFrame(() => window.scrollTo(0, 0))
  }

  return (
    <div className='relative bg-[#0F172A] min-h-screen text-[#F1F5F9]'>
      <Preloader />
      <Background />
      <Dot/>
      <Navbar onOpenAbout={() => openPage('about')} onOpenProjects={() => openPage('projects')} onOpenContact={() => openPage('contact')}/>
      
      <main className='relative z-10'>
        {page === 'contact' ? (
          <ScrollReveal>
            <Contact onOpenAbout={() => openPage('about')} onOpenProjects={() => openPage('projects')} onOpenContact={() => openPage('contact')} />
          </ScrollReveal>
        ) : page === 'about' ? (
          <>
            <ScrollReveal>
              <About />
            </ScrollReveal>
            <SectionDivider />
            <ScrollReveal>
              <Footer onOpenAbout={() => openPage('about')} onOpenProjects={() => openPage('projects')} onOpenContact={() => openPage('contact')} />
            </ScrollReveal>
          </>
        ) : page === 'projects' ? (
          <>
            <ScrollReveal>
              <Projects />
            </ScrollReveal>
            <SectionDivider />
            <ScrollReveal>
              <Footer onOpenAbout={() => openPage('about')} onOpenProjects={() => openPage('projects')} onOpenContact={() => openPage('contact')} />
            </ScrollReveal>
          </>
        ) : (
          <>
            <SectionBand reveal={false}>
              <Profile/>
            </SectionBand>
            <SectionDivider />
            <SectionBand tone='light' reveal={false}>
              <Experience/>
            </SectionBand>
            <SectionDivider />
            <SectionBand>
              <Technologies/>
            </SectionBand>
            <SectionDivider />
            <SectionBand tone='light'>
              <ContactCta onOpenContact={() => openPage('contact')} />
            </SectionBand>
            <SectionDivider />
            <SectionBand>
              <Footer onOpenAbout={() => openPage('about')} onOpenProjects={() => openPage('projects')} onOpenContact={() => openPage('contact')} />
            </SectionBand>
          </>
        )}
      </main>
    </div>
  )
}

export default App
