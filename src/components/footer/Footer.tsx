import './footer.css';
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <div className='footer-container'>
<Link to="/" className='logo-footer'></Link>

 <div className='footer-links'>
 <Link to='/' className='footer-link-text'>Inicio</Link>
  <Link to='/mesas' className='footer-link-text'>Mesas y Trabajos</Link>
  <Link to='/multimedia' className='footer-link-text'>Fotos y Multimedia</Link>
 </div>
    </div>
   
  )
}

export default Footer