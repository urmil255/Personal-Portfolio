import Typical from 'react-typical';
import React from 'react';
import './Profile.css'
import ScrollService from '../../../../utilities/ScrollService';

export default function Profile() {
  return (
    <div className='profile-container'>
        <div className='profile-parent'>
            <div classname='profile-details'>
                <div classname='colz'>
                    <div className='colz-icon'>

                    </div>
                    <a href ="https://www.linkedin.com/in/urmil-trivedi-809911202/">
                        <i className='fa fa-linkedin-square'> 
                        </i>
                    </a>
                </div>
                
            
            <div className='profile-details-name'>
                <span className='primary-text'>
                    {" "}
                    Hello I am <span className='highlighted-text'>Urmil Trivedi</span>
                </span>
            </div>
            
            <div classname='profile-details-role'>
                <span className='primary-text'>
                    {" "}
                <h1 >
                    <Typical
                     loop={Infinity}
                     steps={
                        [
                            "Front-end Developer",
                            2000,

                            "Back-End Developer",
                            2000,

                            "Odoo Developer",
                            2000,
                        ]
                     }
                     />
                </h1>
                
                <span className='profile-role-tagline'>
                    <p>Utilizing coding to usher in a glorious age of digital visions</p>
                    <p>Having a knack of building mobile and web-based apllications with</p>
                    <p>a Strong found of software-related knowledge to work more effectively.</p>
                </span>
                </span>
                
            </div>
            
            <div className='profile-options'>
                <button className='btn primary-btn'
                    onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
                    >
                    Hire me
                    </button>
                    <a href="Resume-Urmil.pdf" download="Resume-Urmil.pdf">
                    <button className='btn highlighted-btn'>Get Resume</button>
                    </a>
                    
                
                     
            </div>
            </div>
            <div className='profile-picture'>
            <div className='profile-picture-background'>
            </div>
            </div>
        </div>
      
    </div>
  )
}
