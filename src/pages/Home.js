import '../pages/styling/home.scss'
import logo from '../assets/home/logoUpNorth.png';
import { Link } from 'react-router-dom';
import Navbar from '../components/NavbarHome'

export default function Home() {
  return (
    <div id='home'>
    <Navbar />
      <div className='homeContainer'>
        <Link className='links' to='../WhatWeOffer'>
          <img src={logo} className="home-logo" alt="logo" />
        </Link>
      </div>
    </div>
  )
}
