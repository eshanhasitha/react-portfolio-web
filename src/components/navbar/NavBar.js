import React from 'react'
import './NavBar.css'

const user = {
  name: 'Eshan Hasitha',
  imagePath:require('../../assets/logo.png'),  
  imageSize: 100,
};

function NavBar() {
  return (
    <div className='navbar' id='navbar'>  
      <div className='nav-logo'>
        <a href='#profile'><img 
        src={user.imagePath} 
        alt={'Photo of '+user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
          borderRadius: '50%',
          margin: '0',
          position:'relative',
        }} />
        </a>
      </div>
      <ul className='nav-links'>
        <li ><a className='nav-link' href='#navbar'>Home</a></li>       
        <li ><a className='nav-link' href='#projects'>Projects</a></li>       
        <li ><a className='nav-link' href='#resume'>Resume</a></li>
        <li ><a className='nav-link' href='#about'>About</a></li>
        <li ><a className='nav-link' href='#contact'>Contact</a></li>
      </ul>

      <div className='nav-github'>
        <a href='https://github.com/eshanhasitha' className='github-link'>
          <img src='https://skillicons.dev/icons?i=github' alt='github-logo'/>
        </a>
        <a href='https://github.com/eshanhasitha' className='github-link'> 
        GitHub
        </a>
      </div>
    </div>
  )
}

export default NavBar