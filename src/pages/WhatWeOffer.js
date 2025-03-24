import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../pages/styling/whatWeOffer.scss'
import whatWePic1 from '../assets/whatWeOffer/whatWeTopPic1.jpeg'
import whatWePic2 from '../assets/whatWeOffer/whatWeTopPic2.jpeg'
import whatWePic3 from '../assets/whatWeOffer/whatWeTopPic3.jpeg'
// import { Link } from 'react-router-dom';

export default function WhatWeOffer() {
  return (
    <div className='container'>
      <Navbar />
        <div id='whatWeOffer'>
          <section className='whatWeOffer'>
            <div className='whatWeOfferContainerTop'>
              <h1 className='whatWeOfferTitle'>WHAT WE OFFER</h1>
              <h2 className='whatWeOfferSubtitle'>Specialised Workshops with Industry Professionals</h2>
              <div className='whatWeOfferBox'>
                <p className='whatWeOfferDescription'>
                Bringing your favourite shows straight to you!
                These workshops offer the unique opportunity to learn material
                directly from the shows, guided by someone who is currently performing in them.
                You'll also have the chance to ask questions about the show and the wider industry,
                with the goal of leaving the workshop not only feeling inspired but having had a truly great time.
                Please note, there will be limited places available to ensure
                each participant gets the most out of the experience
                and receives personalised attention.
                </p>
                <div className='whatWeOfferPicBox'>
                  <img src={whatWePic1} alt="topPhoto" className='whatWeOfferPic' />
                  <img src={whatWePic2} alt="topPhoto" className='whatWeOfferPic' />
                  <img src={whatWePic3} alt="topPhoto" className='whatWeOfferPic' />
                </div>
              </div>
            </div>
            <div className='whatWeOfferContainerMiddle'>
              <h1 className='workshopsTitle'>OUR WORKSHOPS</h1>
              <div className='workshopsSection'>
                <div className='workshopsSectionSingle'>
                  <h3 className='workshopsSectionTitle'>SCHOOLS</h3>
                    <p className='workshopsSectionDescr'>
                    Our dynamic and engaging workshops encourage students
                    to tap into their creativity while offering a unique outlet
                    for self-expression. Through immersive dance and acting sessions,
                    participants are challenged to think outside the box, build confidence,
                    and explore new ways to channel their emotions in a supportive and inspiring environment.
                    </p>
                </div>
                <div className='workshopsSectionSingle'>
                  <h3 className='workshopsSectionTitle'>INSTITUTIONS</h3>
                    <p className='workshopsSectionDescr'>
                    Designed to mirror the intensity and skill required in the industry,
                    these workshops will push students beyond their comfort zones, challenging them to grow
                    and evolve as performers. Through rigorous training and hands-on
                    experience, participants will refine their craft, build resilience, and develop the
                    confidence needed to thrive in a competitive industry. Additionally,
                    these workshops offer valuable, up-to-date insights into the industry,
                    equipping students with the knowledge and tools necessary for success.
                    </p>
                </div>
                <div className='workshopsSectionSingle'>
                  <h3 className='workshopsSectionTitle'>121’s</h3>
                    <p className='workshopsSectionDescr'>
                    Whether you’re auditioning for a project, college or drama school,
                    or simply seeking private coaching, we’re here to help you every step of the way.
                    We will work to understand your needs and match you with the
                    coach we think fits your needs the most. 
                    </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      <Footer />
    </div>
  )
}
