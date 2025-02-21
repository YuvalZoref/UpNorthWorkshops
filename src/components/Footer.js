import '../components/styling/footer.scss';
import SpotlightIcon from '../assets/footer/facebookWhite.png'
import linkedInIcon from '../assets/footer/linkedinYellow.png'
import instagramIcon from '../assets/footer/instagramWhite.png'



export default function Footer() {
  return (
    <footer id="footer">
      <div className='row'>
        <p className='footerCol'>
            <section className='footerDate'>&copy;{new Date().getFullYear()}</section>Up North Workshops | All rights reserved |
        </p>
        <div className="socialLinksFooter">
          <a href="/" rel="noreferrer" target="blank"><img src={linkedInIcon} alt="spotlight" className="socialLinkFooter" /></a>
          <a href="/" rel="noreferrer" target="blank"><img src={SpotlightIcon} alt="spotlight" className="socialLinkFooter" /></a>
          <a href="/" rel="noreferrer" target="blank"><img src={instagramIcon} alt="instagram" className="socialLinkFooter" /></a>
        </div>
      </div>
    </footer>
  )
}
