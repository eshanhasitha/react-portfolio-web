import React from 'react'
import './App.css'
import NavBar from './components/navbar/NavBar'
import Profile from './components/profile/Profile'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'



function App() {
  return (
    <div>
      <NavBar/>
      <Profile/>
      <Projects/>
      <About/>
      <Contact/>
      <Footer/>
      <div className='dot'></div>
    </div>
  )
}

export default App