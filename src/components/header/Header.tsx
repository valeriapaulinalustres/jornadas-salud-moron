import { useNavigate, Link, } from 'react-router-dom';
import './header.css'

function Header() {

  const navigate = useNavigate();

  const actualUrl = window.location.href;

  return (
    <div className='header-container'>
      <Link to="/" className='logo-header'></Link>
      {
        actualUrl != "https://jornadas-salud-moron.vercel.app/" &&
        <button
          onClick={() => navigate(-1)} className="button-volver"
        >
          Volver
        </button>
      }
    </div>
  )
}

export default Header

