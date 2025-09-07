import React, { useEffect } from 'react';
import './Profile.css';
import Typed from 'typed.js';

const user = {
  name: 'Eshan',
  imageUrl: 'https://avatars.githubusercontent.com/u/181459091?s=400&u=6ba444a46d0ac4751acd8c50ada2155a3fb7149d&v=4',
  imageAlt: 'Eshan',
  size: 200,
};

function Profile() {
  useEffect(() => {
    const typed = new Typed("#typed-text", {
      strings: [
        `I'm ${user.name},`,
        "Currently following IT degree",
        "I've been interest in Full-Stack Development",
        "I love coding and learning new technologies",
        "Welcome to my portfolio!"
      ],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1000,  
      loop: true,       
      showCursor: true,
      cursorChar: "|"
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className='profile' id='profile'>
      <img
        src={user.imageUrl}
        alt={user.imageAlt}
        style={{
          width: user.size,
          height: user.size,
          borderRadius: '50%',
        }}
      />

      
      <h1>
        <span id="typed-text"></span>
      </h1>

      <div className='pro-actions'>
        <div className='act-connect'>
          <a href='#contact'>Connect with me!</a>
        </div>
      </div>
      <br></br>
      <br></br>
    </div>
    
  );
}

export default Profile;
