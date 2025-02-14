import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../pages/styling/about.scss'
// import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className='container'>
      <Navbar />
        <div id='about'>
        <h1>About us page</h1>
        </div>
      <Footer />
    </div>
  )
}
