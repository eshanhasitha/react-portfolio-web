import React from 'react'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <>
      <div className='absolute flex flex-col items-center justify-center mx-4 my-25 md:mx-16 lg:mx-32 xl:mx-44 p-8 md:p-12 bg-[#1E293B] rounded-2xl shadow-2xl border border-[#475569]/30' id='contact'>
        
        <div className='text-center mb-16'>
          <h1 className='text-5xl lg:text-7xl font-bold mb-4'>
            <span className="bg-gradient-to-r from-[#3B82F6] to-[#10B981] bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#3B82F6] to-[#10B981] mx-auto rounded-full mb-6"></div>
          <p className='text-lg text-[#94A3B8] max-w-2xl mx-auto'>
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </div>

       
        <div className='flex flex-col lg:flex-row gap-12 lg:gap-16'>
          
          <div className='flex flex-col gap-8 flex-1'>
            <div className="space-y-4">
              <h2 className='text-3xl md:text-4xl font-bold text-[#F1F5F9]'>
                Let's Work Together
              </h2>
              <p className='text-lg text-[#94A3B8] leading-relaxed'>
                I'm currently available for freelance work and new opportunities. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>
            
            <div className='flex flex-col gap-6 mt-4'>
              <div className='flex gap-5 items-center p-4 bg-[#334155] rounded-xl hover:bg-[#475569]/50 transition-all duration-300 group'>
                <div className="w-14 h-14 bg-gradient-to-r from-[#3B82F6] to-[#10B981] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 16">
                    <path d="M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 4L10 9L2 4V2L10 7L18 2V4Z"/>
                  </svg>
                </div>
                <div>
                  <p className='text-sm text-[#94A3B8]'>Email</p>
                  <p className='text-[#F1F5F9] font-semibold text-lg'>eshanhasitha13@gmail.com</p>
                </div>
              </div>

              <div className='flex gap-5 items-center p-4 bg-[#334155] rounded-xl hover:bg-[#475569]/50 transition-all duration-300 group'>
                <div className="w-14 h-14 bg-gradient-to-r from-[#3B82F6] to-[#10B981] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12.5 7.5L8.5 11.5L12.5 15.5"/>
                  </svg>
                </div>
                <div>
                  <p className='text-sm text-[#94A3B8]'>Phone</p>
                  <p className='text-[#F1F5F9] font-semibold text-lg'>+94 77 4506 950</p>
                </div>
              </div>

              <div className='flex gap-5 items-center p-4 bg-[#334155] rounded-xl hover:bg-[#475569]/50 transition-all duration-300 group'>
                <div className="w-14 h-14 bg-gradient-to-r from-[#3B82F6] to-[#10B981] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <p className='text-sm text-[#94A3B8]'>Location</p>
                  <p className='text-[#F1F5F9] font-semibold text-lg'>Sri Lanka</p>
                </div>
              </div>
            </div>
          </div>

          <div className='flex-1'>
            <form action="https://formsubmit.co/eshanhasitha13@gmail.com" method='POST' className='space-y-5'>
              <div>
                <label className='block text-[#94A3B8] text-sm font-semibold mb-2'>Your Name</label>
                <input 
                  type="text" 
                  name='name' 
                  placeholder='John Doe' 
                  required
                  className='w-full p-4 rounded-lg border border-[#475569]/30 outline-none bg-[#334155] text-[#F1F5F9] text-base placeholder-[#94A3B8] focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/20 transition-all'
                />
              </div>

              <div>
                <label className='block text-[#94A3B8] text-sm font-semibold mb-2'>Your Email</label>
                <input 
                  type="email" 
                  name='email' 
                  placeholder='john@example.com' 
                  required
                  className='w-full p-4 rounded-lg border border-[#475569]/30 outline-none bg-[#334155] text-[#F1F5F9] text-base placeholder-[#94A3B8] focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/20 transition-all'
                />
              </div>

              <div>
                <label className='block text-[#94A3B8] text-sm font-semibold mb-2'>Your Message</label>
                <textarea 
                  name="message" 
                  rows="6" 
                  placeholder='Tell me about your project...' 
                  required
                  className='w-full p-4 rounded-lg border border-[#475569]/30 outline-none bg-[#334155] text-[#F1F5F9] text-base placeholder-[#94A3B8] focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/20 transition-all resize-none'
                />
              </div>
              
              <input type="hidden" name="_next" value="https://eshanhasitha.github.io/react-portfolio-web/"/>
              <input type="hidden" name="_captcha" value="false"/>
              
              <div className='flex flex-col sm:flex-row gap-4 pt-2'>
                <button 
                  type='reset' 
                  className='flex-1 border-2 border-[#94A3B8] text-[#94A3B8] px-6 py-4 rounded-full text-lg font-bold transition-all duration-300 hover:border-[#F1F5F9] hover:text-[#F1F5F9] hover:scale-105'
                >
                  Reset
                </button>
                <button 
                  type='submit' 
                  className='flex-1 bg-gradient-to-r from-[#3B82F6] to-[#2563EB] text-white px-6 py-4 rounded-full text-lg font-bold transition-all duration-300 hover:shadow-lg hover:shadow-[#3B82F6]/50 hover:scale-105'
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
        
      </div>
      <Footer/>
    </>
  )
}

export default Contact