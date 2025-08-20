import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-top'>
            <div className='top-left'>
                <h1>Eshan Hasitha</h1>
                <p>
                    I am a frontend developer from Sri Lanka.<br/>
                    Thank you for visiting my portfolio.
                </p>
            </div>

            <div className='top-right'>
                <div className='input-email'>
                    <img src='https://img.icons8.com/?size=100&id=84020&format=png&color=FFFFFF' alt='user-ico'></img>
                    <input type='email' placeholder='Enter your email' />
                </div>
                <div className='sub-btn'><p>Subecribe</p></div>
            </div>
        </div>

        <hr></hr>

        <div className='footer-bottom'>
            <div className='bottom-left'>
                <p>Follow me on </p>
                <div className='left-links'>
                    <a href="https://www.linkedin.com/in/eshanhasitha/" target="blank"><img align="center" src="https://user-images.githubusercontent.com/88904952/234979284-68c11d7f-1acc-4f0c-ac78-044e1037d7b0.png" alt="linkedin" height="50" width="50" /></a>
                    <a href="https://twitter.com/eshan1122" target="blank"><img align="center" src="https://user-images.githubusercontent.com/88904952/234980676-61bfb021-ecc8-48f7-88e6-34c1b06c4a58.png" alt="twitter" height="50" width="50" /></a> 
                    <a href="https://www.instagram.com/eshanhasithas/" target="blank"><img align="center" src="https://user-images.githubusercontent.com/88904952/234981169-2dd1e58f-4b7e-468c-8213-034ba62156c3.png" alt="instagram" height="50" width="50" /></a>
                    <a href="https://discordapp.com/users/1109302006654451784" target="blank"><img align="center" src="https://user-images.githubusercontent.com/88904952/234982627-019fd336-6248-453c-9b05-97c13fd1d207.png" alt="discord" height="50" width="50" /></a>
                </div>
                
            </div>
            <div className='bottom-right'>
                <p className='left-txt'>&copy; 2025 Eshan Hasitha. All rights reserved.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer