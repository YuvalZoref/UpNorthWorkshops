import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../pages/styling/team.scss'
import Nathan from '../assets/team/nathan.jpeg'
// import { Link } from 'react-router-dom';

export default function Team() {
  return (
    <div className='container'>
      <Navbar />
        <div id='team'>
        <section className='teamSection'>
          <div className='teamItem'>
          <div className='teamItemLeft'>
            <img src={Nathan} alt="nathanPic" className='teamPic' />
          </div>
          <div className='teamItemRight'>
            <h2 className='teamTitle'>About Me / Up North Workshops</h2>
            <p className='teamDescription'>
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
          </div>
          </div>
        </section>
        </div>
      <Footer />
    </div>
  )
}
