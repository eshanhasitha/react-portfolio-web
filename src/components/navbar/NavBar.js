import React from 'react'
import './NavBar.css'

const user = {
  name: 'Esham Hasitha',
  imageUrl: 'https://avatars.githubusercontent.com/u/181459091?s=400&u=6ba444a46d0ac4751acd8c50ada2155a3fb7149d&v=4',
  imageSize: 90,
};

function NavBar() {
  return (
    <div className='navbar'>  
      <a href='#h'><img 
      src={user.imageUrl} 
      alt={'Photo of '+user.name}
      style={{
        width: user.imageSize,
        height: user.imageSize,
        borderRadius: '50%',
        margin: '0 10px 0 0',
      }} />
      </a>
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