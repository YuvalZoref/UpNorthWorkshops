import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../components/styling/navbar.scss';
import Logo from '../assets/navbar/logoUpNorth.png';
import Burger from '../assets/navbar/burgerWhite.png';

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
      <nav id="navbar">
        <div className='navbarDesktop'>
        </div>
        <img src={Burger} alt='burgerMenu' className='burgerMenu' onClick={()=>setShowMenu(!showMenu)} />
        <div className='navMenu' style={{display: showMenu ? 'flex':'none'}}>
          <div className='navMenuLinksContainer'>
            <Link className='navMenuLink' onClick={()=>setShowMenu(false)} to='../About'>About us</Link>
            <Link className='navMenuLink' onClick={()=>setShowMenu(false)} to='../WhatweOffer'>What we offer</Link>
            <Link className='navMenuLink' onClick={()=>setShowMenu(false)} to='../Contact'>Contact</Link>
            <Link className='navMenuLink' onClick={()=>setShowMenu(false)} to='../'>Home</Link>
          </div>
        </div>
        <Link to='../'><img className='logo' src={Logo} alt='logo'/></Link>
    </nav>
  )
}
