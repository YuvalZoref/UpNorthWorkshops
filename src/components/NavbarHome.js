import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../components/styling/navbarHome.scss';
import Burger from '../assets/navbarHome/burgerWhite.png';

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
      <nav id="navbarHome">
        <div className='navbarDesktopHome'>
        </div>
        <img src={Burger} alt='burgerMenu' className='burgerMenuHome' onClick={()=>setShowMenu(!showMenu)} />
        <div className='navMenuHome' style={{display: showMenu ? 'flex':'none'}}>
          <div className='navMenuLinksContainerHome'>
            <Link className='navMenuLinkHome' onClick={()=>setShowMenu(false)} to='../WhatWeOffer'>What we offer</Link>
            <Link className='navMenuLinkHome' onClick={()=>setShowMenu(false)} to='../About'>About us</Link>
            <Link className='navMenuLinkHome' onClick={()=>setShowMenu(false)} to='../Contact'>Contact</Link>
          </div>
        </div>
    </nav>
  )
}
