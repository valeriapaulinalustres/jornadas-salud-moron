import {Link} from 'react-router-dom';
import './trabajos.css';
import { HiOutlineDownload } from "react-icons/hi";

type propsTrabajos = {
link?:any,
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
  {
  link != "" && 
  

     <Link
     to={link}
     target="_blank"
     rel="noopener noreferrer"
     download="Presentación Power Point.pptx"
   > 
      <button className='trabajos-button'>
        <HiOutlineDownload className='trabajos-icon'/>
        </button>    
   </Link>
  

  }
  </div>
  
    </div>
  )
}

export default Trabajos