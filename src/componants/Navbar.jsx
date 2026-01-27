import React from 'react'
import logo from '../images/logo.png'
import profileImage from '../images/profile-header.jpg'
import './Navbar.css'
import { FaSearch } from "react-icons/fa";
function Navbar() {
  return (
    <div className='navbarContainer'>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="search">
        <FaSearch className='searchIcon' />
        <input type="text" placeholder='Type somthing' name="" id="" />
      </div>
      <div className="navlink">
        <li>Home</li>
        <li>Browse</li>
        <li>Details</li>
        <li>Stream</li>
        <li className='profile'><span>Profile</span><img src={profileImage} alt="" /></li>
      </div>
    </div>
  )
}

export default Navbar
