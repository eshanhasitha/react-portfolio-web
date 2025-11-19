import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Profile from './pages/Profile.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'
import About from './pages/About.jsx'
import Navbar from './components/Navbar.jsx'
import Dot from './components/Dot.jsx'
import Background from './components/Background.jsx'
import ScrollToTop from './components/ScrollToTop'

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: -20,
  }
}

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.4
}

const App = () => {
  const location = useLocation()

  return (
    <div className='relative bg-[#0F172A] min-h-screen text-[#F1F5F9]'>
      <Background />
      <Dot/>
      <Navbar/>
      <ScrollToTop />
      
      <main className='relative z-10'>
        <AnimatePresence mode='wait'>
          <Routes location={location} key={location.pathname}>
            <Route path='/' element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Profile/>
              </motion.div>
            }/>
            <Route path='/projects' element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Projects/>
              </motion.div>
            }/>
            <Route path='/contact' element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Contact/>
              </motion.div>
            }/>
            <Route path='/about' element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <About/>
              </motion.div>
            }/>
          </Routes>
        </AnimatePresence>
      </main>
    </div>
  )
}

export default App