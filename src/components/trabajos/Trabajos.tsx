import {Link} from 'react-router-dom'

type propsTrabajos = {
link?:string,
autor?:string,
nombre?:string,
key?:number,
}

function Trabajos({link, autor, nombre,}:propsTrabajos) {
  
  return (

  
    <div>


  <div>
  <h3>{nombre}</h3>
  <h4>{autor}</h4>
  {link != "" && <h4>Descargue <Link to="">aquí</Link> el .ppt</h4>}
  </div>
  
    </div>
  )
}

export default Trabajos