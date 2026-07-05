import { useEffect, useMemo, useRef, useState } from 'react'
import profileImage from '../assets/img1.png'

const profileSlides = [
  { title: "Hi, I'm Eshan Hasitha" },
  { title: 'Full-Stack Developer' },
  { title: 'MLOps Enthusiast' },
  { title: 'Problem Solver' },
  { title: 'Tech Explorer' }
]

const clamp = (value, min, max) => Math.min(Math.max(value, min), max)

const getSlideState = (scrollPosition, index) => {
  if (index === 0 && scrollPosition < 0.72) {
    return {
      opacity: 1,
      blur: 0,
      y: 0,
      scale: 1,
      dustProgress: 0
    }
  }

  const local = scrollPosition - index

  if (local < 0 || local > 1) {
    return {
      opacity: 0,
      blur: 18,
      y: local < 0 ? 44 : -44,
      scale: 0.96,
      dustProgress: local > 1 ? 1 : 0
    }
  }

  const fadeIn = clamp(local / 0.2, 0, 1)
  const fadeOut = clamp((1 - local) / 0.36, 0, 1)
  const opacity = Math.min(fadeIn, fadeOut)

  return {
    opacity,
    blur: (1 - opacity) * 18,
    y: (1 - fadeIn) * 44 - (1 - fadeOut) * 44,
    scale: 0.96 + opacity * 0.04,
    dustProgress: clamp((local - 0.64) / 0.36, 0, 1)
  }
}

const seededRandom = (seed) => {
  const value = Math.sin(seed) * 10000
  return value - Math.floor(value)
}

const createDustParticles = (title) => {
  const visibleCharacters = title.replace(/\s/g, '').length
  const count = Math.max(72, visibleCharacters * 8)
  const characterSlots = [...title].filter((character) => character !== ' ')

  return Array.from({ length: count }, (_, index) => {
    const seed = title.length * 97 + index * 31
    const characterIndex = index % Math.max(1, characterSlots.length)
    const characterRatio = characterSlots.length > 1 ? characterIndex / (characterSlots.length - 1) : 0.5
    const rowOffset = characterSlots.length > 14 && characterIndex > characterSlots.length / 2 ? 14 : 0
    const x = 8 + characterRatio * 84 + (seededRandom(seed) - 0.5) * 5
    const y = 45 + rowOffset + (seededRandom(seed + 7) - 0.5) * 26
    const driftX = (seededRandom(seed + 13) - 0.5) * 300
    const driftY = -45 - seededRandom(seed + 19) * 150
    const size = 1.2 + seededRandom(seed + 23) * 2.2

    return {
      x,
      y,
      driftX,
      driftY,
      size,
      delay: seededRandom(seed + 29) * 0.22,
      opacity: 0.42 + seededRandom(seed + 41) * 0.58
    }
  })
}

const DustTitle = ({ title, state, isImageLoaded }) => {
  const particles = useMemo(() => createDustParticles(title), [title])
  const dustProgress = isImageLoaded ? state.dustProgress : 0
  const particleProgress = clamp(dustProgress, 0, 1)
  const textOpacity = isImageLoaded ? Math.max(0, state.opacity * (1 - dustProgress * 0.82)) : 0
  const dustOpacity = isImageLoaded ? Math.sin(particleProgress * Math.PI) : 0
  const shouldRenderDust = dustOpacity > 0.015

  return (
    <div className='relative mx-auto max-w-[13ch] text-balance sm:max-w-[15ch] lg:max-w-none'>
      <h1
        className='relative z-10 text-6xl font-semibold leading-[0.92] tracking-normal text-[#F8FAFC] drop-shadow-2xl sm:text-7xl lg:text-8xl'
        style={{
          opacity: textOpacity,
          filter: `blur(${isImageLoaded ? state.blur : 18}px)`
        }}
      >
        {title}
      </h1>

      {shouldRenderDust && (
        <div className='absolute inset-0 z-20' aria-hidden='true'>
          {particles.map((particle, index) => {
            const localProgress = clamp((particleProgress - particle.delay) / (1 - particle.delay), 0, 1)
            if (localProgress <= 0) return null

            return (
              <span
                key={`${title}-${index}`}
                className='absolute rounded-full bg-[#F8FAFC] will-change-transform'
                style={{
                  left: `${particle.x}%`,
                  top: `${particle.y}%`,
                  width: `${particle.size}px`,
                  height: `${particle.size}px`,
                  opacity: dustOpacity * localProgress * particle.opacity * 0.86,
                  transform: `translate3d(${particle.driftX * localProgress}px, ${particle.driftY * localProgress}px, 0) scale(${1 - localProgress * 0.5})`
                }}
              />
            )
          })}
        </div>
      )}
    </div>
  )
}

const Profile = () => {
  const sectionRef = useRef(null)
  const lastScrollPositionRef = useRef(-1)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isImageLoaded, setIsImageLoaded] = useState(false)

  useEffect(() => {
    let frameId = 0

    const updateScrollPosition = () => {
      frameId = 0
      const section = sectionRef.current
      if (!section) return

      const rect = section.getBoundingClientRect()
      const scrollableDistance = Math.max(1, rect.height - window.innerHeight)
      const progress = clamp(-rect.top / scrollableDistance, 0, 0.999)
      const nextScrollPosition = progress * profileSlides.length

      if (Math.abs(nextScrollPosition - lastScrollPositionRef.current) < 0.006) return

      lastScrollPositionRef.current = nextScrollPosition
      setScrollPosition(nextScrollPosition)
    }

    const requestUpdate = () => {
      if (frameId) return
      frameId = window.requestAnimationFrame(updateScrollPosition)
    }

    updateScrollPosition()
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)

    return () => {
      if (frameId) window.cancelAnimationFrame(frameId)
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id='profile'
      className='relative mx-4 min-h-[920vh] md:mx-8 lg:mx-32 xl:mx-44'
    >
      <div className='sticky top-0 flex h-screen items-center justify-center overflow-hidden px-6 pt-24 pb-12 sm:px-8 md:px-12'>
        <div className='absolute inset-x-0 top-24 mx-auto h-px max-w-6xl bg-gradient-to-r from-transparent via-white/15 to-transparent' />

        <div className='relative flex w-full max-w-7xl items-center justify-center'>
          <div className='absolute inset-0 mx-auto h-[min(70vw,38rem)] w-[min(70vw,38rem)] rounded-full bg-white/10 blur-3xl' />

          <img
            src={profileImage}
            alt='Eshan Hasitha'
            loading='eager'
            decoding='sync'
            onLoad={() => setIsImageLoaded(true)}
            className='relative z-10 h-[min(72vh,42rem)] w-auto max-w-[86vw] rounded-[32px] border border-white/10 object-cover grayscale shadow-2xl'
          />

          <div className='pointer-events-none absolute inset-x-0 bottom-10 z-20 flex items-end justify-center px-4 sm:bottom-12 lg:bottom-14'>
            {profileSlides.map((slide, index) => {
              const state = getSlideState(scrollPosition, index)
              const shouldRenderSlide = state.opacity > 0.01 || (state.dustProgress > 0 && state.dustProgress < 1)
              if (!shouldRenderSlide) return null

              return (
                <div
                  key={slide.title}
                  className='absolute max-w-5xl text-center'
                  style={{
                    transform: `translate3d(0, ${state.y}px, 0) scale(${state.scale})`
                  }}
                >
                  <DustTitle title={slide.title} state={state} isImageLoaded={isImageLoaded} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Profile
