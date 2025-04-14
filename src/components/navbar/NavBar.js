import React from 'react'
import './NavBar.css'

function NavBar() {
  return (
    <div className='navbar'>  
      <a href='#h'><img src='n' alt='logo'/></a>
      <ul className='nav-links'>
        <li ><a className='nav-link' href='#home'>Home</a></li>       
        <li ><a className='nav-link' href='#projects'>Projects</a></li>       
        <li ><a className='nav-link' href='#resume'>Resume</a></li>
        <li ><a className='nav-link' href='#about'>About</a></li>
        <li ><a className='nav-link' href='#contact'>Contact</a></li>
      </ul>

      <div className='nav-connect'>
        Connect With Me
      </div>
    </div>
  )
}

export default NavBar