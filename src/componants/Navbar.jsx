import React from 'react'
import logo from '../images/logo.png'


function Navbar() {
  return (
    <div>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="search">
        <input type="text" placeholder='Type somthing' name="" id="" />
      </div>
      <div className="navlink">
        <li>Home</li>
        <li>Browse</li>
        <li>Details</li>
        <li>Stream</li>
        <li>Profile</li>
      </div>
    </div>
  )
}

export default Navbar
