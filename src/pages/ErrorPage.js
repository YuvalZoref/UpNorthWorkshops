import { Link } from 'react-router-dom';
import '../pages/styling/errorPage.scss'

export default function NoPage() {
  return (
    <div className='noPage'>
      <h2>Error 404: Not found</h2>
      <button>
          <Link to='/'>
            Click here to go back to the homepage!
          </Link>
        </button>
    </div>
  )
}
