import React, { Suspense } from 'react'
import './App.css'
import NavBar from './components/navbar/NavBar'
import Profile from './components/profile/Profile'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Dot from './components/dot/Dot'
import Background from './components/background/Background'
const Projects = React.lazy(() => import('./components/projects/Projects'))

function App() {
  return (
    <>
      <Background />
      <Dot />
      <header>
        <NavBar />
      </header>
      <main>
        <Profile />
        <About />
        <Suspense fallback={<div>Loading Projects...</div>}>
          <Projects />
        </Suspense>
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App