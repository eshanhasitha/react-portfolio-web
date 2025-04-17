import React from 'react'
import './App.css'
import NavBar from './components/navbar/NavBar'
import Profile from './components/profile/Profile'
import About from './components/about/About'



function App() {
  return (
    <div>
      <NavBar/>
      <Profile/>
      <About/>
    </div>
  )
}

export default App