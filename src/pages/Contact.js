import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../pages/styling/contact.scss'
import facebookIcon from '../assets/contact/facebook.png'
import SpotlightIcon from '../assets/contact/spotlight.png'
import instagramIcon from '../assets/contact/instagram.png'
// import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <div className='container'>
      <Navbar />
        <div id='contact'>
          <div className='contactPageLeft'>
            <h1 className='contactTitle'>Contact us</h1>
            <button className='emailButton' onClick={() =>
            {window.location.href ='mailto:info@upnorthworkshops.co.uk';}}>
            Click here to send an email...
            </button>
            <section className="socialLinks">
            <a href="/" rel="noreferrer" target="blank"><img src={facebookIcon} alt="facebook" className="socialLink" /></a>
            <a href="https://app.spotlight.com/9097-9054-2172" rel="noreferrer" target="blank"><img src={SpotlightIcon} alt="spotlight" className="socialLink" /></a>
            <a href="https://www.instagram.com/upnorthworkshops/" rel="noreferrer" target="blank"><img src={instagramIcon} alt="instagram" className="socialLink" /></a>
            </section>
          </div>
          <div className='contactPageRight'>
            <h1 className='rightPicture'>Insert photo here</h1>
          </div>

        </div>
      <Footer />
    </div>
  )
}
