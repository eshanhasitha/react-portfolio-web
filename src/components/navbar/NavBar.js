import React from 'react'
import './NavBar.css'

const user = {
  name: 'Esham Hasitha',
  imageUrl: 'https://avatars.githubusercontent.com/u/181459091?s=400&u=6ba444a46d0ac4751acd8c50ada2155a3fb7149d&v=4',
  imageSize: 70,
};

function NavBar() {
  return (
    <div className='navbar'>  
      <div className='nav-logo'>
        <a href='#h'><img 
        src={user.imageUrl} 
        alt={'Photo of '+user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
          borderRadius: '50%',
          margin: '0 10px 0 0',
          position:'relative',
        }} />
        </a>
      </div>
      <ul className='nav-links'>
        <li ><a className='nav-link' href='#home'>Home</a></li>       
        <li ><a className='nav-link' href='#projects'>Projects</a></li>       
        <li ><a className='nav-link' href='#resume'>Resume</a></li>
        <li ><a className='nav-link' href='#about'>About</a></li>
        <li ><a className='nav-link' href='#contact'>Contact</a></li>
      </ul>

      <div className='nav-Github'>
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