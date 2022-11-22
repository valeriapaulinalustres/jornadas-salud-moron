
import Trabajos from '../trabajos/Trabajos';
import './mesa.css'

type propsTitle = {
  title:string,
}

function MesaCovid({title}:propsTitle) {

    
    interface trabajos {
        nombre: string,
        autor: string,
        link: string,
    }


const modeloIntegrado:Array<trabajos> = [
  {nombre: "Algunos de los dispositivos de acompañamiento telefónico en Salud Mental durante la Pandemia COVID-19.", autor: "Collado, F.; David, N.; Díaz, V.; Graziano, M. C.; Maceira, S.; Novaro, C; Quiroga, M; Sobrino, R.; Sueldo, C.", link:"./assets/ppt/084.pptx"},
  {nombre: "Angustia y pandemia. La lógica de la entrada en análisis.", autor: "Mandet, D.", link:"./assets/ppt/066.pptx"},
  {nombre: "El papel de Enfermería en los testeos de COVID-19.", autor: "Zampini, V.; Toledo. V.", link:""},
  {nombre: "Reconfiguración del Servicio de Emergencias ante la aparición de una Pandemia Infectocontagiosa", autor: "Algieri, R.; Ruschioni, C.; Gillardot, A.", link:""},
  {nombre: "Análisis de la aparición de alteraciones traqueales en pacientes en asistencia ventilatoria mecánica prolongada y traqueostomizados con COVID-19", autor: "Campos, V.; Packauskas, L.", link:"./assets/ppt/001.pptx"},
  {nombre: "Deglución y alimentación en pacientes traqueostomizados", autor: "Campos, V.; Packauskas, L.", link:"./assets/ppt/002.pptx"},
  {nombre: "Deglución y alimentación en pacientes traqueostomizados", autor: "Stepaniuk, R.; Cobarrubia, C.", link:""},
]
  return (
    <div className='mesa-container'>
      
<h2>{title}</h2>

  <div className=''>
    {modeloIntegrado.map((item:any, index:number) => (
        <Trabajos key={index} nombre={item.nombre} autor={item.autor} link={item.link}/>
    ))}
</div>
    </div>
  )
}

export default MesaCovid