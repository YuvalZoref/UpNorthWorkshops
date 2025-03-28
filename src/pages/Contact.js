import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../pages/styling/contact.scss'
import facebookIcon from '../assets/contact/facebook.png'
import instagramIcon from '../assets/contact/instagram.png'
import contactPic from '../assets/contact/contactPic.jpeg'
// import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <div className='container'>
      <Navbar />
        <div id='contact'>
          <div className='contactPageLeft'>
            <h1 className='contactTitle'>Contact us</h1>
            <section className="socialLinks">
            <a href="https://www.facebook.com/people/Up-North-Workshops/61574045660067/" rel="noreferrer" target="blank"><img src={facebookIcon} alt="facebook" className="socialLink" /></a>
            <a href="https://www.instagram.com/upnorthworkshops/" rel="noreferrer" target="blank"><img src={instagramIcon} alt="instagram" className="socialLink" /></a>
            </section>
            <button className='emailButton' onClick={() =>
            {window.location.href ='mailto:info@upnorthworkshops.co.uk';}}>
            Click here to send an email...
            </button>
          </div>
          <div className='contactPageRight'>
            <img src={contactPic} alt="topPhoto" className='rightPicture' />
          </div>

        </div>
      <Footer />
    </div>
  )
}
