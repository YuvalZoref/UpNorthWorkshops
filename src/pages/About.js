import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../pages/styling/about.scss'
// import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className='container'>
      <Navbar />
        <div id='about'>
          <section className='aboutUs'>
            <div className='aboutContainerTop'>
              <h1 className='aboutUsTitle'>WHAT WE OFFER</h1>
              <h2 className='aboutUsSubtitle'>Specialised Workshops with Industry Professionals</h2>
                <p className='aboutUsDescription'>
                Bringing your favourite shows straight to you!
                These workshops offer the unique opportunity to learn material
                directly from the shows, guided by someone who is currently performing in them.
                You'll also have the chance to ask questions about the show and the wider industry,
                with the goal of leaving the workshop not only feeling inspired but having had a truly great time.
                Please note, there will be limited places available to ensure
                each participant gets the most out of the experience
                and receives personalised attention.
                </p>
            </div>
            <div className='aboutContainerMiddle'>
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
            <div className='aboutContainerBottom'>
            <h1 className='whyUsTitle'>WHY CHOOSE US?</h1>
              <p className='whyUsDescription'>
              As industry professionals on our own unique journeys,
              we are passionate about inspiring and guiding aspiring performers.
              Our goal is to provide mentorship, representation,
              and encouragement, showing that a successful career in the arts
              is possible—no matter your background. By sharing our experiences,
              we hope to be role models for those who see themselves
              in us and to help them on their own journeys.
              </p>
            </div>
          </section>
        </div>
      <Footer />
    </div>
  )
}
