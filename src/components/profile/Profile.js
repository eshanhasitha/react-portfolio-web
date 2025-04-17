import React from 'react'
import './Profile.css'

const user = {
  name: 'Eshan',
  imageUrl:'https://avatars.githubusercontent.com/u/181459091?s=400&u=6ba444a46d0ac4751acd8c50ada2155a3fb7149d&v=4',
  imageAlt: 'Eshan',
  size: 200,
  bio: 'currently following CS degree',
};

function Profile() {
  return (
    <div className='profile'>
        <img  src={user.imageUrl} alt={user.imageAlt} style={{
          width: user.size,
          height: user.size,
          borderRadius: '50%',
        }}/>
        <h1><span>I'm  {user.name},</span> {user.bio}</h1>
        
        <div className='pro-actions'>
          <div className='act-connect'>
            Connect with me!
          </div>
        </div>
    </div>
  )
}

export default Profile