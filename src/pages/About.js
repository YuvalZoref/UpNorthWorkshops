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
          <h1 className='aboutUsTitle'>About us page title</h1>
          <p className='aboutUsDescription'>
           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, nostrum.
           Totam vitae doloremque, id dolorum beatae ducimus! Esse, quae praesentium!
           Facere praesentium tenetur harum ipsam ipsum delectus porro optio. Similique.
           Ad, accusantium cupiditate qui nisi laudantium nostrum fugiat eaque recusandae!
           Non consequuntur ab voluptate similique eius. Quam blanditiis omnis ipsum.
          </p>
          </section>
        </div>
      <Footer />
    </div>
  )
}
