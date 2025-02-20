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
              <h1 className='aboutUsTitle'>About us</h1>
              <p className='aboutUsDescription'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, nostrum.
              Totam vitae doloremque, id dolorum beatae ducimus! Esse, quae praesentium!
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, nostrum.
              Totam vitae doloremque, id dolorum beatae ducimus! Esse, quae praesentium!
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, nostrum.
              Totam vitae doloremque, id dolorum beatae ducimus! Esse, quae praesentium!
              </p>
            </div>
            <div className='aboutContainerMiddle'>
              <h1 className='workshopsTitle'>Our Workshops</h1>
              <div className='workshopsSection'>
                <div className='workshopsSectionSingle'>
                  <h3 className='workshopsSectionTitle'>Classes</h3>
                  <p className='workshopsSectionDescr'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, nostrum.
                    Totam vitae doloremque, id dolorum beatae ducimus! Esse, quae praesentium!
                  </p>
                </div>
                <div className='workshopsSectionSingle'>
                  <h3 className='workshopsSectionTitle'>Teachers</h3>
                  <p className='workshopsSectionDescr'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, nostrum.
                    Totam vitae doloremque, id dolorum beatae ducimus! Esse, quae praesentium!
                  </p>
                </div>
                <div className='workshopsSectionSingle'>
                  <h3 className='workshopsSectionTitle'>Vision</h3>
                  <p className='workshopsSectionDescr'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, nostrum.
                    Totam vitae doloremque, id dolorum beatae ducimus! Esse, quae praesentium!
                  </p>
                </div>
              </div>
            </div>
            <div className='aboutContainerBottom'>
            <h1 className='whatWeTitle'>What we do</h1>
              <p className='whatWeDescription'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, nostrum.
                Totam vitae doloremque, id dolorum beatae ducimus! Esse, quae praesentium!
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, nostrum.
                Totam vitae doloremque, id dolorum beatae ducimus! Esse, quae praesentium!
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, nostrum.
                Totam vitae doloremque, id dolorum beatae ducimus! Esse, quae praesentium!
                </p>
            </div>
          </section>
        </div>
      <Footer />
    </div>
  )
}
