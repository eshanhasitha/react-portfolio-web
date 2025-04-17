import React from 'react'
import './About.css'

function About() {
  return (
    <div className='about'>
        <div className='about-title'>
            <h1>About me</h1>
        </div>
        <div className='about-body-s1'>
            <div className='about-left'>
                <img src='https://avatars.githubusercontent.com/u/181459091?s=400&u=6ba444a46d0ac4751acd8c50ada2155a3fb7149d&v=4' alt='eshan-img'></img>
            </div>
            <div className='about-right'>
                <div className='about-text'>
                    <p>
                        I am an undergraduate student at Sabaragamuwa University of Sri Lanka, currently pursuing a BSc (Hons) in Information Systems. I am passionate about technology and software development, and I aspire to become a skilled Software Engineer in the future. I'm always eager to learn new concepts, improve my coding skills, and contribute to meaningful tech projects.
                    </p>
                </div>
                <div className='about-skills-cont'>
                    <h3>My Skills</h3>
                    <div className='skills-list'>
                        <div className='skill'><img src='https://skillicons.dev/icons?i=html' alt='html'/><hr style={{width: '70%'}}></hr></div>
                        <div className='skill'><img src='https://skillicons.dev/icons?i=css' alt='css'/><hr style={{width: '55%'}}></hr></div>
                        <div className='skill'><img src='https://skillicons.dev/icons?i=js' alt='js'/><hr style={{width: '30%'}}></hr></div>
                        <div className='skill'><img src='https://skillicons.dev/icons?i=mysql' alt='mysql'/><hr style={{width: '60%'}}></hr></div>
                        <div className='skill'><img src='https://skillicons.dev/icons?i=c' alt='c'/><hr style={{width: '50%'}}></hr></div>
                    </div>
                </div>
            </div>
        </div>
        <div className='achievements'>
            <div className='achievement'>
                <h1>1+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr/>
            <div className='achievement'>
                <h1>0+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr/>
            <div className='achievement'>
                <h1>0+</h1>
                <p>INTERNSHIPS</p>
                
            </div>
        </div>
    </div>
  )
}

export default About