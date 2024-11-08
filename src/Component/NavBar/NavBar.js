import React from 'react'
import './NavBar.css'
const NavBar = () => {
  return (
    <>
        <nav>
            <img  className="logo" src='/images/logo.jpg' alt="logo"/>
        <ul>  
            <li><a href="/">Home</a></li>
            <li><a href="/Courses">Courses</a></li>
            <li><a href="/Profile">Profile</a></li>
            <li><a href="/login">logout</a></li>
        </ul>
        <div className="search-container">
            <input type="text" className="search-input" placeholder="Search..."/>
            <button className="search-button">🔍</button>
        </div>
        </nav>
    </>
  )
}
export default NavBar