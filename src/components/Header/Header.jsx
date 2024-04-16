import React from 'react'
import Logo from "../../assets/logo.png"
import "./Header.css"
const Header = () => {
  return (
    <div className='Header'>
      <img className="logo" src={Logo} alt="Logo"/>
      <ul className='header-menu'>
        <li>Home</li>
        <li>Program</li>
        <li>Why us</li>
        <li>Plans</li>
        <li>Testimonials</li>
      </ul>
    </div>
  )
}

export default Header