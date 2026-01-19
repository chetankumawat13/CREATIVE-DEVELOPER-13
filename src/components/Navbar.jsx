import React from 'react'
import '../style/style.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="left">
            <div className="logo"></div>
            <h4>Chetan</h4>
        </div>
        <div className="right">
            <div className="icon">
            <i className="ri-menu-2-line"></i>
            </div>
            <a href="">Work</a>
            <a href="">About</a>
            <a href="">Blog</a>
            <a href="">Contact</a>
        </div>
    </div>
  )
}

export default Navbar