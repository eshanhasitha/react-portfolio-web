import React from 'react'
import { Mail, Linkedin, MessageCircle, Instagram, Phone } from 'lucide-react'
import { useSriLankaTime } from '../hooks/useSriLankaTime'

const Footer = () => {
  const { currentTime, eventMessage, timeTheme, greeting } = useSriLankaTime();
  const year = currentTime.getFullYear();

  // Glassmorphism Navbar-style background for footer
  const getFooterBackground = () => {
    return 'bg-[#1E293B]/20 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl';
  };
  return (
    <footer className={`relative left-0 p-6 md:p-8 ${getFooterBackground()} transition-all duration-[2000ms] ease-in-out`}>
      {/* Event Banner */}
      {eventMessage && (
        <div className="absolute top-2 left-1/2 -translate-x-1/2 px-4 py-2 bg-gradient-to-r from-[#3B82F6]/20 to-[#10B981]/20 rounded-full border border-white/20 text-white text-xs font-semibold animate-pulse shadow-lg">
          {eventMessage}
        </div>
      )}
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8'>
          {/* Left Section */}
          <div className='text-center md:text-left'>
            <h1 className='text-2xl md:text-3xl font-bold mb-2'>
              <span className="bg-gradient-to-r from-[#3B82F6] to-[#10B981] bg-clip-text text-transparent">
                Eshan Hasitha
              </span>
            </h1>
            <p className='text-sm text-[#94A3B8] max-w-md'>
              Full-Stack Developer | UI/UX Enthusiast<br/>
              Building innovative solutions
            </p>
          </div>

          {/* Newsletter Section */}
          <div className='flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto'>
            <div className='relative w-full sm:w-auto'>
              <input 
                type='email' 
                placeholder='Enter your email'
                className='w-full sm:w-64 md:w-80 px-5 py-3 pr-11 border border-white/10 rounded-full outline-none bg-[#334155]/40 text-[#F1F5F9] text-sm placeholder-[#94A3B8] focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/30 transition-all duration-500 ease-out hover:border-white/20'
              />
              <Mail className='absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8]' />
            </div>
            <button className='w-full sm:w-auto bg-gradient-to-r from-[#3B82F6] to-[#2563EB] text-white px-8 py-3 rounded-full text-sm font-bold transition-all duration-500 ease-out hover:shadow-lg hover:shadow-[#3B82F6]/50 hover:scale-105 active:scale-95 whitespace-nowrap'>
              Subscribe
            </button>
          </div>
        </div>

        <hr className='border-white/10 my-6 md:my-8'/>

        {/* Bottom Section */}
        <div className='flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6'>
          <div className='flex flex-col sm:flex-row items-center gap-3'>
            <span className='text-sm text-[#94A3B8] font-medium'>Connect with me:</span>
            <div className='flex gap-3'>
              <a 
                href="https://www.linkedin.com/in/eshanhasitha/" 
                target="_blank" 
                rel="noopener noreferrer"
                className='w-10 h-10 bg-[#334155]/40 hover:bg-[#0077B5] rounded-xl flex items-center justify-center transition-all duration-500 ease-out hover:scale-110 border border-white/10 hover:border-[#0077B5] group'
              >
                <Linkedin className='w-5 h-5 text-[#94A3B8] group-hover:text-white transition-colors duration-500' />
              </a>
              <a 
                href="https://discord.com/users/eshanhasitha" 
                target="_blank" 
                rel="noopener noreferrer"
                className='w-10 h-10 bg-[#334155]/40 hover:bg-[#5865F2] rounded-xl flex items-center justify-center transition-all duration-500 ease-out hover:scale-110 border border-white/10 hover:border-[#5865F2] group'
              >
                <MessageCircle className='w-5 h-5 text-[#94A3B8] group-hover:text-white transition-colors duration-500' />
              </a>
              <a 
                href="https://www.instagram.com/eshanhasithas/" 
                target="_blank" 
                rel="noopener noreferrer"
                className='w-10 h-10 bg-[#334155]/40 hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737] rounded-xl flex items-center justify-center transition-all duration-500 ease-out hover:scale-110 border border-white/10 hover:border-transparent group'
              >
                <Instagram className='w-5 h-5 text-[#94A3B8] group-hover:text-white transition-colors duration-500' />
              </a>
              <a 
                href="https://wa.me/+94774506950" 
                target="_blank" 
                rel="noopener noreferrer"
                className='w-10 h-10 bg-[#334155]/40 backdrop-blur-md hover:bg-[#25D366] rounded-xl flex items-center justify-center transition-all duration-500 ease-out hover:scale-110 border border-white/10 hover:border-[#25D366] group'
              >
                <Phone className='w-5 h-5 text-[#94A3B8] group-hover:text-white transition-colors duration-500' />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div>
            <p className='text-sm text-[#94A3B8] text-center'>
              &copy; {year} Eshan Hasitha. All rights reserved.
              {eventMessage && (
                <span className='ml-2 text-[#3B82F6]'>{eventMessage}</span>
              )}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer