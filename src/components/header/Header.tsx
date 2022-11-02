import { useNavigate, Link } from 'react-router-dom';
import './header.css'

function Header() {

  const navigate = useNavigate();

  return (
    <div className='header-container'>
<Link to="/" className='logo-footer'></Link>
  <button onClick={() => navigate(-1)} className="button right">
            Volver
          </button>
    </div>
  )
}

export default Header