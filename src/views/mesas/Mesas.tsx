import { Link } from 'react-router-dom';
import './mesas.css'

function Mesas() {
  return (
    <div className='mesas-container'>

      <h2>Mesas y Trabajos</h2>
      <h3>Día 1: 26 de Octubre de 2022</h3>

      <div className='mesas-container-dias'>
        <Link to='./modelo-integrado'>
          <button className='button size'>Mesa 1: HACIA UN MODELO INTEGRADO</button>
        </Link>
        <Link to='./redes'>
          <button className='button size'>Mesa 2: REDES EN SALUD</button>
        </Link>
        <Link to='./salud-sexual'>
          <button className='button size'>Mesa 3: SALUD SEXUAL Y LÍNEAS PRIORIZADAS</button>
        </Link>
        <Link to='./posters'>
          <button className='button size'>POSTERS</button>
        </Link>
      </div>

      <h3>Día 2: 27 de Octubre de 2022</h3>
      <div className='mesas-container-dias'>
        <Link to='./modelo-integrado-dos'>
          <button className='button size'>Mesa 1: HACIA UN MODELO INTEGRADO</button>
        </Link>

        <Link to='./covid'>
          <button className='button size'>Mesa 2: COVID-19</button>
        </Link>

        <Link to='./lineas-priorizadas'>
          <button className='button size'>Mesa 3: LÍNEAS PRIORIZADAS</button>
        </Link>
        <Link to='./infecciones'>
          <button className='button size'>Mesa 4: CONTROL DE INFECCIONES Y MULTIRRESISTENCIA</button>
        </Link>
        <Link to='./formacion'>
          <button className='button size'>Mesa 5: FORMACIÓN EN SALUD</button>
        </Link>


      </div>

    </div>
  )
}

export default Mesas