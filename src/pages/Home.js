import '../pages/styling/home.scss'
import logo from '../assets/home/logoUpNorth.png';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div id='home'>
      <Link className='links' to='../About'>
        <img src={logo} className="home-logo" alt="logo" />
      </Link>
    </div>
  )
}
