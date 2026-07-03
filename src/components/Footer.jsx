import React from 'react'
import { ArrowUp } from 'lucide-react'
import { useSriLankaTime } from '../hooks/useSriLankaTime'

const Footer = ({ onOpenAbout, onOpenProjects, onOpenContact }) => {
  const { currentTime } = useSriLankaTime();
  const year = currentTime.getFullYear();

  const navLinks = [
    { label: 'Home', href: '#profile' },
    { label: 'About', href: '#about-page', action: onOpenAbout },
    { label: 'Projects', href: '#projects-page', action: onOpenProjects },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className='relative left-1/2 w-screen -translate-x-1/2 bg-transparent text-[#F1F5F9]'>
      <button
        type='button'
        onClick={scrollToTop}
        aria-label='Scroll to top'
        className='fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#F1F5F9] text-[#0F172A] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white focus:outline-none focus:ring-2 focus:ring-white/30 sm:bottom-8 sm:right-8 sm:h-14 sm:w-14'
      >
        <ArrowUp className='h-5 w-5 sm:h-6 sm:w-6' />
      </button>

      <div className='mx-auto max-w-7xl px-6 py-10 sm:px-8 md:px-12 lg:px-16'>
        <div className='text-base font-medium text-[#F8FAFC] sm:text-lg'>
          Eshan Hasitha
        </div>

        <div className='grid gap-12 py-20 sm:py-24 md:grid-cols-2 md:gap-20 lg:px-36'>
          <div>
            <p className='mb-8 text-sm font-medium uppercase tracking-[0.16em] text-[#64748B]'>
              Navigate
            </p>
            <nav aria-label='Footer navigation' className='flex flex-col items-start'>
              {navLinks.map((link) => (
                (link.action || (link.label === 'Contact' && onOpenContact)) ? (
                  <button
                    key={link.href}
                    type='button'
                    onClick={link.action || onOpenContact}
                    className='text-left text-5xl font-light leading-[0.95] text-[#F8FAFC] transition-colors duration-300 hover:text-[#60A5FA] sm:text-6xl lg:text-7xl'
                  >
                    {link.label}
                  </button>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    className='text-5xl font-light leading-[0.95] text-[#F8FAFC] transition-colors duration-300 hover:text-[#60A5FA] sm:text-6xl lg:text-7xl'
                  >
                    {link.label}
                  </a>
                )
              ))}
            </nav>
          </div>

          <div>
            <p className='mb-8 text-sm font-medium uppercase tracking-[0.16em] text-[#64748B]'>
              Connect
            </p>
            <a
              href='https://www.linkedin.com/in/eshanhasitha/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-5xl font-light leading-none text-[#CBD5E1] transition-colors duration-300 hover:text-[#60A5FA] sm:text-6xl lg:text-7xl'
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className='border-t border-white/10 pt-8'>
          <div className='flex flex-col gap-4 text-sm text-[#94A3B8] sm:flex-row sm:items-center sm:justify-between'>
            <p>All Rights Reserved &copy; Eshan Hasitha</p>
            <p>{year}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
