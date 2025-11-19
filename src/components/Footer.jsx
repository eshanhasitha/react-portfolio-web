import React from 'react'
import { Mail, Linkedin, MessageCircle, Instagram, Phone } from 'lucide-react'

const Footer = () => {
  return (
    <footer className='relative left-0 p-4 md:p-6 bg-[#1E293B]/40 backdrop-blur-xl border-t border-white/10'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6'>
          {/* Left Section */}
          <div className='text-center md:text-left'>
            <h1 className='text-2xl md:text-3xl font-bold mb-1.5 md:mb-2'>
              <span className="bg-gradient-to-r from-[#3B82F6] to-[#10B981] bg-clip-text text-transparent">
                Eshan Hasitha
              </span>
            </h1>
            <p className='text-xs md:text-sm text-[#94A3B8] max-w-md'>
              Full-Stack Developer | UI/UX Enthusiast<br/>
              Building innovative solutions
            </p>
          </div>

          {/* Newsletter Section */}
          <div className='flex flex-col sm:flex-row items-center gap-2 md:gap-3 w-full md:w-auto'>
            <div className='relative w-full sm:w-auto'>
              <input 
                type='email' 
                placeholder='Enter your email'
                className='w-full sm:w-64 md:w-72 px-4 py-2.5 md:py-3 pr-10 border border-white/10 rounded-full outline-none bg-[#334155]/40 backdrop-blur-md text-[#F1F5F9] text-sm placeholder-[#94A3B8] focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/30 transition-all duration-500 ease-out hover:border-white/20'
              />
              <Mail className='absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8]' />
            </div>
            <button className='w-full sm:w-auto bg-gradient-to-r from-[#3B82F6] to-[#2563EB] text-white px-6 py-2.5 md:py-3 rounded-full text-sm font-bold transition-all duration-500 ease-out hover:shadow-lg hover:shadow-[#3B82F6]/50 hover:scale-105 active:scale-95 whitespace-nowrap'>
              Subscribe
            </button>
          </div>
        </div>

        <hr className='border-white/10 my-4 md:my-6'/>

        {/* Bottom Section */}
        <div className='flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4'>
          <div className='flex flex-col sm:flex-row items-center gap-2 sm:gap-3'>
            <span className='text-xs md:text-sm text-[#94A3B8]'>Connect with me:</span>
            <div className='flex gap-2'>
              <a 
                href="https://www.linkedin.com/in/eshanhasitha/" 
                target="_blank" 
                rel="noopener noreferrer"
                className='w-9 h-9 bg-[#334155]/40 backdrop-blur-md hover:bg-[#0077B5] rounded-lg flex items-center justify-center transition-all duration-500 ease-out hover:scale-110 border border-white/10 hover:border-[#0077B5] group'
              >
                <Linkedin className='w-4 h-4 text-[#94A3B8] group-hover:text-white transition-colors duration-500' />
              </a>
              <a 
                href="https://discord.com/users/eshanhasitha" 
                target="_blank" 
                rel="noopener noreferrer"
                className='w-9 h-9 bg-[#334155]/40 backdrop-blur-md hover:bg-[#5865F2] rounded-lg flex items-center justify-center transition-all duration-500 ease-out hover:scale-110 border border-white/10 hover:border-[#5865F2] group'
              >
                <MessageCircle className='w-4 h-4 text-[#94A3B8] group-hover:text-white transition-colors duration-500' />
              </a>
              <a 
                href="https://www.instagram.com/eshanhasithas/" 
                target="_blank" 
                rel="noopener noreferrer"
                className='w-9 h-9 bg-[#334155]/40 backdrop-blur-md hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737] rounded-lg flex items-center justify-center transition-all duration-500 ease-out hover:scale-110 border border-white/10 hover:border-transparent group'
              >
                <Instagram className='w-4 h-4 text-[#94A3B8] group-hover:text-white transition-colors duration-500' />
              </a>
              <a 
                href="https://wa.me/+94774506950" 
                target="_blank" 
                rel="noopener noreferrer"
                className='w-9 h-9 bg-[#334155]/40 backdrop-blur-md hover:bg-[#25D366] rounded-lg flex items-center justify-center transition-all duration-500 ease-out hover:scale-110 border border-white/10 hover:border-[#25D366] group'
              >
                <Phone className='w-4 h-4 text-[#94A3B8] group-hover:text-white transition-colors duration-500' />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div>
            <p className='text-xs md:text-sm text-[#94A3B8] text-center'>
              &copy; 2025 Eshan Hasitha. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer