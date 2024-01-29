import React from 'react'
import './header.css'
import Logo from '../assets/logo.png'

const Headers = () => {
  return (
    <header>

        <img src={Logo} alt=""></img>
        <a href='/'>Home</a>
    </header>
  )
}

export default Headers
