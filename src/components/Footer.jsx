import React from 'react'

const Footer = () => {
  return (
    <div className='p-5 md:p-8 bg-[#161513]'>
      <div className='flex flex-col md:flex-row justify-between items-center pb-8 gap-8'>
        <div className='text-center md:text-left'>
          <h1 className='text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#DA7C25] via-[#FF69B4] to-[#B923E1] bg-clip-text text-transparent'>
            Eshan Hasitha
          </h1>
          <p className='text-sm md:text-base font-light mt-3 text-gray-300'>
            I am a frontend developer from Sri Lanka.<br/>
            Thank you for visiting my portfolio.
          </p>
        </div>

        <div className='flex flex-col md:flex-row items-center gap-4 w-full md:w-auto'>
          <div className='flex flex-row items-center bg-[#2a2a35] px-6 py-2 rounded-full w-full md:w-auto'>
            <img 
              src='https://img.icons8.com/?size=100&id=84020&format=png&color=FFFFFF' 
              alt='user-ico'
              className='w-6 h-6 mr-3'
            />
            <input 
              type='email' 
              placeholder='Enter your email'
              className='w-full md:w-80 h-12 px-2 border-none outline-none bg-transparent text-base text-gray-300 placeholder-gray-500'
            />
          </div>
          <button className='border-none text-white px-8 py-4 rounded-full bg-gradient-to-r from-[#DA7C25] via-[#FF69B4] to-[#B923E1] text-xl font-bold cursor-pointer transition-all duration-500 hover:scale-105 hover:opacity-90 whitespace-nowrap'>
            Subscribe
          </button>
        </div>
      </div>

      <hr className='border-gray-800'/>

      <div className='flex flex-col md:flex-row justify-between items-center pt-6 gap-4'>
        <div className='flex flex-col md:flex-row gap-3 items-center'>
          <p className='text-sm font-light text-gray-400'>Follow me on</p>
          <div className='flex flex-row gap-3'>
            <a 
              href="https://www.linkedin.com/in/eshanhasitha/" 
              target="_blank" 
              rel="noopener noreferrer"
              className='w-10 h-10 flex items-center justify-center rounded-lg bg-[#0077B5] hover:opacity-80 transition-opacity'
            >
              <svg className='w-5 h-5 text-white' fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a 
              href="https://twitter.com/eshan1122" 
              target="_blank" 
              rel="noopener noreferrer"
              className='w-10 h-10 flex items-center justify-center rounded-lg bg-[#1DA1F2] hover:opacity-80 transition-opacity'
            >
              <svg className='w-5 h-5 text-white' fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a 
              href="https://www.instagram.com/eshanhasithas/" 
              target="_blank" 
              rel="noopener noreferrer"
              className='w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-80 transition-opacity'
            >
              <svg className='w-5 h-5 text-white' fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a 
              href="https://discordapp.com/users/1109302006654451784" 
              target="_blank" 
              rel="noopener noreferrer"
              className='w-10 h-10 flex items-center justify-center rounded-lg bg-[#5865F2] hover:opacity-80 transition-opacity'
            >
              <svg className='w-5 h-5 text-white' fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
            </a>
          </div>
        </div>
        <div>
          <p className='text-sm font-light text-gray-400'>&copy; 2025 Eshan Hasitha. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer