import {Link} from 'react-router-dom';
import './home.css'

function Home() {
  return (
    <div className='home-container'>
      <h1>JORNADAS DE SALUD EN MORÓN</h1>
      <h2>25 Y 26 DE OCTUBRE 2022</h2>
      <p className='description-home'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur doloribus consectetur dolor accusamus, veniam qui eius officiis ipsam nesciunt optio perspiciatis totam recusandae! Sint perferendis ut doloremque perspiciatis assumenda sed.</p>
      <div>
       
        <Link 
                  to="../src/assets/programa.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  download="programa Jornadas de Salud.pdf" 
                 
                  >
                
                    <h3>Programa</h3>
                  </Link>
        <div>
          <Link to='/mesas'>Mesas y Trabajos</Link>
<Link to='/multimedia'>Fotos y Multimedia</Link>
        </div>
        <Link 
                  to="../src/assets/libro.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  download="Libro Jornadas de Salud.pdf" 
                 
                  >
                
                    <h3>Descargar libro de trabajos</h3>
                  </Link>
      </div>
    </div>
  )
}

export default Home