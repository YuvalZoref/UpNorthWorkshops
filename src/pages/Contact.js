// import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'
import '../pages/styling/contact.scss'
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <div className='container'>
      {/* <Navbar /> */}
        <div id='contact'>
        <h1>Contact page</h1>
        <Link className='links' to='/'>Home</Link>
        <Link className='links' to='../About'>About</Link>
        </div>
      {/* <Footer /> */}
    </div>
  )
}
