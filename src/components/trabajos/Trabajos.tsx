import { Link } from 'react-router-dom';
import './trabajos.css';
import { HiOutlineDownload } from "react-icons/hi";

type propsTrabajos = {
  link?: any,
  autor?: string,
  nombre?: string,
  key?: number,
}

function Trabajos({ link, autor, nombre, }: propsTrabajos) {

  return (
    <div className='trabajos-container'>
      <h3>{nombre}</h3>
      <h4>{autor}</h4>
      {
        link != "" &&
        <Link
          to={link}
          target="_blank"
          rel="noopener noreferrer"
          download={`Presentación ${nombre}.pptx`}
        >
          <button className='trabajos-button'>
            <HiOutlineDownload className='trabajos-icon' />
          </button>
        </Link>
      }
    </div>
  )
}

export default Trabajos
