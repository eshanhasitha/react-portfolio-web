import React from 'react'
import './App.css'
import NavBar from './components/navbar/NavBar'
import Profile from './components/profile/Profile'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Dot from './components/dot/Dot'



function App() {
  return (
    
    <div>
      <Dot/>
      <NavBar/>
      <Profile/>
      <Projects/>
      <About/>
      <Contact/>
      <Footer/>
      
    </div>
  )
}

export default App