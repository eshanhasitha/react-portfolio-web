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
    // First line typing
    const typed1 = new Typed("#typed-line1", {
      strings: [`I'm ${user.name},`],
      typeSpeed: 60,
      showCursor: false,
      onComplete: () => {
        // Start second line after first finishes
        new Typed("#typed-line2", {
          strings: ["currently following IT degree"],
          typeSpeed: 60,
          showCursor: true,
          cursorChar: "|",
        });
      }
    });

    return () => {
      typed1.destroy();
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

      {/* Typed text */}
      <h1>
        <div id="typed-line1"></div>
        <div id="typed-line2"></div>
      </h1>

      <div className='pro-actions'>
        <div className='act-connect'>
          <a href='#contact'>Connect with me!</a>
        </div>
      </div>
    </div>
  );
}

export default Profile;
