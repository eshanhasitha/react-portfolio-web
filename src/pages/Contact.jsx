import React from 'react'
import { Github, Linkedin, Mail, MapPin, MessageCircle, Phone, RotateCcw, Send } from 'lucide-react'
import Footer from '../components/Footer'
import ScrollReveal from '../components/ScrollReveal.jsx'

const contactDetails = [
  { label: 'Email', value: 'eshanhasitha13@gmail.com', icon: <Mail className='h-5 w-5' /> },
  { label: 'Phone', value: '+94 77 4506 950', icon: <Phone className='h-5 w-5' /> },
  { label: 'Location', value: 'Sri Lanka', icon: <MapPin className='h-5 w-5' /> },
]

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/eshanhasitha', icon: <Github className='h-5 w-5' /> },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/eshanhasitha', icon: <Linkedin className='h-5 w-5' /> },
  { label: 'Discord', href: 'https://discord.com/users/eshanhasitha', icon: <MessageCircle className='h-5 w-5' /> },
]

const ContactRow = ({ item, href }) => {
  const content = (
    <>
      <div className='flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-[#93C5FD]'>
        {item.icon}
      </div>
      <div className='min-w-0'>
        <p className='text-xs font-medium uppercase tracking-[0.16em] text-[#64748B]'>{item.label}</p>
        <p className='mt-2 break-words text-base text-[#F8FAFC]'>{item.value}</p>
      </div>
    </>
  )

  if (!href) {
    return <div className='grid grid-cols-[auto_1fr] gap-4 border-b border-white/10 py-5'>{content}</div>
  }

  return (
    <a
      href={href}
      target='_blank'
      rel='noreferrer noopener'
      className='grid grid-cols-[auto_1fr] gap-4 border-b border-white/10 py-5 transition-colors duration-300 hover:text-[#93C5FD]'
    >
      {content}
    </a>
  )
}

const Contact = React.memo(({ onOpenAbout, onOpenProjects, onOpenContact }) => (
  <div className='flex flex-col overflow-hidden pt-20 sm:pt-24'>
    <section id='contact' className='mx-4 mb-20 p-6 sm:mb-24 sm:p-8 md:mx-8 md:p-12 lg:mx-32 xl:mx-44'>
      <div className='mx-auto max-w-7xl lg:px-20'>
        <div className='grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-end lg:gap-20'>
          <div>
            <p className='mb-8 text-sm font-medium uppercase tracking-[0.18em] text-[#64748B]'>
              Contact
            </p>
            <h1 className='text-5xl font-light leading-[0.95] text-[#F8FAFC] sm:text-6xl lg:text-7xl'>
              Send Me
              <br />
              a Message
            </h1>
          </div>
          <p className='max-w-xl text-base leading-relaxed text-[#94A3B8] sm:text-lg'>
            Share a few details about your project, idea, or opportunity. I will review it and reply as soon as possible.
          </p>
        </div>

        <div className='mt-14 grid gap-12 border-t border-white/10 pt-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20'>
          <aside className='space-y-12'>
            <div>
              <p className='mb-4 text-sm font-medium uppercase tracking-[0.18em] text-[#64748B]'>
                Contact Details
              </p>
              <div className='border-t border-white/10'>
                {contactDetails.map((item, index) => (
                  <ScrollReveal key={item.label} delay={index * 70}>
                    <ContactRow item={item} />
                  </ScrollReveal>
                ))}
              </div>
            </div>

            <div>
              <p className='mb-4 text-sm font-medium uppercase tracking-[0.18em] text-[#64748B]'>
                Connect
              </p>
              <div className='border-t border-white/10'>
                {socialLinks.map((item, index) => (
                  <ScrollReveal key={item.label} delay={index * 70}>
                    <ContactRow
                      item={{ ...item, value: item.href.replace('https://', '') }}
                      href={item.href}
                    />
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </aside>

          <ScrollReveal delay={120}>
            <form
              action='https://formsubmit.co/eshanhasitha13@gmail.com'
              method='POST'
              className='rounded-[32px] border border-white/10 bg-white/[0.03] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:p-8 lg:p-10'
            >
            <div className='grid gap-7'>
              <div>
                <label className='mb-3 block text-sm font-medium uppercase tracking-[0.14em] text-[#64748B]'>Your Name</label>
                <input
                  type='text'
                  name='name'
                  placeholder='John Doe'
                  required
                  className='w-full border-b border-white/20 bg-transparent px-0 py-4 text-base text-[#F8FAFC] outline-none transition-colors duration-300 placeholder:text-[#64748B] focus:border-[#93C5FD]'
                />
              </div>

              <div>
                <label className='mb-3 block text-sm font-medium uppercase tracking-[0.14em] text-[#64748B]'>Your Email</label>
                <input
                  type='email'
                  name='email'
                  placeholder='john@example.com'
                  required
                  className='w-full border-b border-white/20 bg-transparent px-0 py-4 text-base text-[#F8FAFC] outline-none transition-colors duration-300 placeholder:text-[#64748B] focus:border-[#93C5FD]'
                />
              </div>

              <div>
                <label className='mb-3 block text-sm font-medium uppercase tracking-[0.14em] text-[#64748B]'>Your Message</label>
                <textarea
                  name='message'
                  rows='7'
                  placeholder='Tell me about your project...'
                  required
                  className='w-full resize-none border-b border-white/20 bg-transparent px-0 py-4 text-base text-[#F8FAFC] outline-none transition-colors duration-300 placeholder:text-[#64748B] focus:border-[#93C5FD]'
                />
              </div>
            </div>

            <input type='hidden' name='_next' value='https://www.eshanhasitha.me/' />
            <input type='hidden' name='_captcha' value='false' />

            <div className='mt-8 flex flex-col gap-3 sm:flex-row'>
              <button
                type='submit'
                className='inline-flex items-center justify-center gap-3 rounded-full bg-[#F8FAFC] px-7 py-3.5 text-base font-semibold text-[#0F172A] transition-all duration-300 hover:-translate-y-1 hover:bg-white active:scale-95'
              >
                <Send className='h-5 w-5' />
                Send Message
              </button>
              <button
                type='reset'
                className='inline-flex items-center justify-center gap-3 rounded-full border border-white/20 px-7 py-3.5 text-base font-semibold text-[#F8FAFC] transition-all duration-300 hover:-translate-y-1 hover:border-[#60A5FA]/60 hover:text-[#93C5FD] active:scale-95'
              >
                <RotateCcw className='h-5 w-5' />
                Reset
              </button>
            </div>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <div className='mx-auto h-px w-[min(88rem,calc(100%-2rem))] bg-gradient-to-r from-transparent via-white/20 to-transparent' aria-hidden='true' />
    <Footer onOpenAbout={onOpenAbout} onOpenProjects={onOpenProjects} onOpenContact={onOpenContact} />
  </div>
))

export default Contact
