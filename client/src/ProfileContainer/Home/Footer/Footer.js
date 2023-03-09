import React from 'react'
import './Footer.css'
import me from '../../../../src/assets/Home/shape-bg.png'
export default function Footer() {
  return (
    <div className='footer-container'>
        <div className='footer-parent'>
            <img 
            src={me}
            alt='no internet connection'/>
        </div>
      
    </div>
  )
}

