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
        <li className='nav-li-co'><a className='nav-link' href='#navbar'>Home<hr></hr></a></li>       
        <li className='nav-li-co'><a className='nav-link' href='#projects'>Projects<hr></hr></a></li>       
        <li className='nav-li-co'><a className='nav-link' href='#resume'>Resume<hr></hr></a></li>
        <li className='nav-li-co'><a className='nav-link' href='#about'>About<hr></hr></a></li>
        <li className='nav-li-co'><a className='nav-link' href='#contact'>Contact<hr></hr></a></li>
      </ul>

      <a className='nav-github' href='https://github.com/eshanhasitha' target='blank'>
        <a href='https://github.com/eshanhasitha' className='github-link' target='blank'>
          <img src='https://skillicons.dev/icons?i=github' alt='github-logo'/>
        </a>
        <a href='https://github.com/eshanhasitha' className='github-link' target='blank'> 
        GitHub
        </a>
      </a>
    </div>
  )
}

export default NavBar