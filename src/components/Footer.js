import '../components/styling/footer.scss';
import SpotlightIcon from '../assets/footer/facebook.png'
import linkedInIcon from '../assets/footer/linkedin.png'
import instagramIcon from '../assets/footer/instagram.png'


export default function Footer() {
  return (
    <footer id="footer">
      <section className="socialLinks">
        <a href="/" rel="noreferrer" target="blank"><img src={SpotlightIcon} alt="spotlight" className="link" /></a>
        <a href="/" rel="noreferrer" target="blank"><img src={linkedInIcon} alt="linkedIn" className="link" /></a>
        <a href="/" rel="noreferrer" target="blank"><img src={instagramIcon} alt="instagram" className="link" /></a>
      </section>
    </footer>
  )
}
