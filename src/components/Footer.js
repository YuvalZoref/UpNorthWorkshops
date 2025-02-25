import '../components/styling/footer.scss';
import SpotlightIcon from '../assets/footer/spotlightWhite.png'
import facebookIcon from '../assets/footer/facebookYellow.png'
import instagramIcon from '../assets/footer/instagramYellow.png'



export default function Footer() {
  return (
    <footer id="footer">
      <div className='row'>
        <p className='footerCol'>
            <section className='footerDate'>&copy;{new Date().getFullYear()}</section>Up North Workshops | All rights reserved |
        </p>
        <div className="socialLinksFooter">
          <a href="/" rel="noreferrer" target="blank"><img src={facebookIcon} alt="facebook" className="socialLinkFooter" /></a>
          <a href="https://app.spotlight.com/9097-9054-2172" rel="noreferrer" target="blank"><img src={SpotlightIcon} alt="spotlight" className="socialLinkFooter" /></a>
          <a href="https://www.instagram.com/upnorthworkshops/" rel="noreferrer" target="blank"><img src={instagramIcon} alt="instagram" className="socialLinkFooter" /></a>
        </div>
      </div>
    </footer>
  )
}
