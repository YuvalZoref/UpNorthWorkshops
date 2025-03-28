import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../pages/styling/about.scss'
import Nathan from '../assets/about/nathan.jpeg'
import whyUsPic from '../assets/about/aboutPic.jpg'
import SpotlightIcon from '../assets/about/spotlight.png'
// import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className='container'>
      <Navbar />
        <div id='about'>
        <section className='aboutSection'>
          <div className='aboutContainerTop'>
            <h1 className='aboutTitleTop'>ABOUT US</h1>
            <h2 className='aboutSubtitleTop'>Up North Workshops</h2>
          </div>
          <div className='aboutItemTop'>
          <div className='aboutItem'>
          <div className='aboutItemLeft'>
            <img src={Nathan} alt="nathanPic" className='aboutPic' />
          </div>
          <div className='aboutItemRight'>
            <h2 className='aboutTitle'>About me</h2>
            <p className='aboutDescription'>
            I’m Nathan Graham, and I’ve had the privilege of
            working in the performing arts industry for many years.
            I began my career in theatre, performing in musicals across the West End,
            UK tours, and various international productions.
            As my journey evolved, I shifted my focus towards acting,
            which has opened doors to exciting opportunities in television.
            Along the way, I've had the chance to collaborate with some incredible artists,
            constantly learning and growing both in my craft and within the industry itself.
            While I’m still actively working in the industry,
            my passion for helping others has led me to launch Up North Workshops.
            Through these workshops, I aim to share the insights and experiences
            I’ve gathered over the years, while leaning on the talented network of friends
            and industry professionals I’ve built to come and give specialised workshops.
            My goal is to inspire the next wave of performers in the North.
            </p>
              <a href="https://app.spotlight.com/9097-9054-2172" rel="noreferrer" target="blank"><img src={SpotlightIcon} alt="spotlight" className="socialLink" /></a>
          </div>
          </div>

          </div>
            <div className='aboutItem'>
            <div className='aboutItemLeft'>
              <img src={whyUsPic} alt="bottomPhoto" className='aboutPicBottom' />
            </div>
            <div className='aboutItemRight'>
              <h2 className='aboutTitle'>Why choose us?</h2>
              <p className='aboutDescription'>
                As industry professionals on our own unique journeys,
                we are passionate about inspiring and guiding aspiring performers.
                Our goal is to provide mentorship, representation,
                and encouragement, showing that a successful career in the arts
                is possible—no matter your background. By sharing our experiences,
                we hope to be role models for those who see themselves
                in us and to help them on their own journeys.
              </p>
            </div>
            </div>

        </section>
        </div>
      <Footer />
    </div>
  )
}
