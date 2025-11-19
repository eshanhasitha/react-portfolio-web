import React from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <>
      <div className='flex flex-col'>
        <div className='flex flex-col items-center justify-center mx-4 mt-24 sm:mt-28 mb-20 sm:mb-24 md:mx-8 lg:mx-32 xl:mx-44 p-6 sm:p-8 md:p-12 bg-[#1E293B]/40 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-500 ease-out' id='contact'>
          
          <div className='text-center mb-8 sm:mb-12 md:mb-16'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4'>
              <span className="bg-gradient-to-r from-[#3B82F6] to-[#10B981] bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h1>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-[#3B82F6] to-[#10B981] mx-auto rounded-full mb-4 sm:mb-6"></div>
            <p className='text-sm sm:text-base md:text-lg text-[#94A3B8] max-w-2xl mx-auto px-4'>
              Have a project in mind or just want to chat? Feel free to reach out!
            </p>
          </div>
          <div className='flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-16'>
            
            <div className='flex flex-col gap-6 sm:gap-8 flex-1'>
              <div className="space-y-3 sm:space-y-4">
                <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-[#F1F5F9]'>
                  Let's Work Together
                </h2>
                <p className='text-sm sm:text-base md:text-lg text-[#94A3B8] leading-relaxed'>
                  I'm currently available for freelance work and new opportunities. 
                  Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
              </div>
              
              <div className='flex flex-col gap-4 sm:gap-6 mt-2 sm:mt-4'>
                <div className='flex gap-3 sm:gap-5 items-center p-3 sm:p-4 bg-[#334155]/40 backdrop-blur-md rounded-xl border border-white/10 hover:border-white/20 hover:bg-[#475569]/30 transition-all duration-500 ease-out group hover:scale-105'>
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-[#3B82F6] to-[#10B981] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div className='min-w-0 flex-1'>
                    <p className='text-xs sm:text-sm text-[#94A3B8]'>Email</p>
                    <p className='text-[#F1F5F9] font-semibold text-sm sm:text-base md:text-lg break-all'>eshanhasitha13@gmail.com</p>
                  </div>
                </div>

                <div className='flex gap-3 sm:gap-5 items-center p-3 sm:p-4 bg-[#334155]/40 backdrop-blur-md rounded-xl border border-white/10 hover:border-white/20 hover:bg-[#475569]/30 transition-all duration-500 ease-out group hover:scale-105'>
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-[#3B82F6] to-[#10B981] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div className='min-w-0 flex-1'>
                    <p className='text-xs sm:text-sm text-[#94A3B8]'>Phone</p>
                    <p className='text-[#F1F5F9] font-semibold text-sm sm:text-base md:text-lg'>+94 77 4506 950</p>
                  </div>
                </div>

                <div className='flex gap-3 sm:gap-5 items-center p-3 sm:p-4 bg-[#334155]/40 backdrop-blur-md rounded-xl border border-white/10 hover:border-white/20 hover:bg-[#475569]/30 transition-all duration-500 ease-out group hover:scale-105'>
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-[#3B82F6] to-[#10B981] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div className='min-w-0 flex-1'>
                    <p className='text-xs sm:text-sm text-[#94A3B8]'>Location</p>
                    <p className='text-[#F1F5F9] font-semibold text-sm sm:text-base md:text-lg'>Sri Lanka</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='flex-1'>
              <form action="https://formsubmit.co/eshanhasitha13@gmail.com" method='POST' className='space-y-4 sm:space-y-5'>
                <div>
                  <label className='block text-[#94A3B8] text-xs sm:text-sm font-semibold mb-2'>Your Name</label>
                  <input 
                    type="text" 
                    name='name' 
                    placeholder='John Doe' 
                    required
                    className='w-full p-3 sm:p-4 rounded-lg border border-white/10 outline-none bg-[#334155]/40 backdrop-blur-md text-[#F1F5F9] text-sm sm:text-base placeholder-[#94A3B8] focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/30 transition-all duration-500 ease-out hover:border-white/20'
                  />
                </div>

                <div>
                  <label className='block text-[#94A3B8] text-xs sm:text-sm font-semibold mb-2'>Your Email</label>
                  <input 
                    type="email" 
                    name='email' 
                    placeholder='john@example.com' 
                    required
                    className='w-full p-3 sm:p-4 rounded-lg border border-white/10 outline-none bg-[#334155]/40 backdrop-blur-md text-[#F1F5F9] text-sm sm:text-base placeholder-[#94A3B8] focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/30 transition-all duration-500 ease-out hover:border-white/20'
                  />
                </div>

                <div>
                  <label className='block text-[#94A3B8] text-xs sm:text-sm font-semibold mb-2'>Your Message</label>
                  <textarea 
                    name="message" 
                    rows="5" 
                    placeholder='Tell me about your project...' 
                    required
                    className='w-full p-3 sm:p-4 rounded-lg border border-white/10 outline-none bg-[#334155]/40 backdrop-blur-md text-[#F1F5F9] text-sm sm:text-base placeholder-[#94A3B8] focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/30 transition-all duration-500 ease-out resize-none hover:border-white/20'
                  />
                </div>
                
                <input type="hidden" name="_next" value="https://eshanhasitha.github.io/react-portfolio-web/"/>
                <input type="hidden" name="_captcha" value="false"/>
                
                <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2'>
                  <button 
                    type='reset' 
                    className='flex-1 border-2 border-[#94A3B8] text-[#94A3B8] px-6 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold transition-all duration-300 hover:border-[#F1F5F9] hover:text-[#F1F5F9] hover:scale-105 active:scale-95'
                  >
                    Reset
                  </button>
                  <button 
                    type='submit' 
                    className='flex-1 bg-gradient-to-r from-[#3B82F6] to-[#2563EB] text-white px-6 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold transition-all duration-300 hover:shadow-lg hover:shadow-[#3B82F6]/50 hover:scale-105 active:scale-95'
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
          
        </div>

        <Footer />
      </div>
    </>
  )
}

export default Contact