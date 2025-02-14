import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../pages/styling/team.scss'
// import { Link } from 'react-router-dom';

export default function Team() {
  return (
    <div className='container'>
      <Navbar />
        <div id='team'>
        <h1>Team page</h1>
        </div>
      <Footer />
    </div>
  )
}
