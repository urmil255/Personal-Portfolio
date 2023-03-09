import React from 'react'
import Header from '../../ProfileContainer/Home/Home/Header/Header'
import Profile from '../../ProfileContainer/Home/Home/Profile/Profile'
import Footer from '../../ProfileContainer/Home/Footer/Footer'
import './Home.css'

export default function Home(){
  return (
    <div className='home-container'>
      <Header/>
      <Profile/>
      <Footer/>
      
    </div>
  )
}
