
import Trabajos from '../trabajos/Trabajos';
import './mesa.css'


type propsTitle = {
    title:string,
}

function MesaLineas({title}:propsTitle) {

    
    interface trabajos {
        nombre: string,
        autor: string,
        link: string,
    }


const modeloIntegrado:Array<trabajos> = [
    {nombre: "Estrategia Municipal para la prevención y el abordaje de la sífilis gestacional y congénita.", autor: "Frías, M.; Sala, G.; Lozano, S.", link:"./assets/ppt/075.pptx"},
    {nombre: "Características de las personas con diagnóstico reciente de infección por vih/sida. Período 2017- julio 2022", autor: "Varrenti, N.; Mellino, M.; Perez, S.; Steinbrecher, L., Rosas, A., Warley, E.", link:"./assets/ppt/010.pptx"},
    {nombre: "Test rápido de VIH y Sífilis en la Consejería Vespertina", autor: "Boero, B.; Mellino, M.; Merlo, N.; Montes, V.; Navarro, M.; Melina, M.; Salvatierra, N.", link:"./assets/ppt/021.pptx"},
    {nombre: "Situación de Tuberculosis en el Municipio de Morón", autor: "Gómez, L.; Lustres, V.; Cieri, N.; Navarro, M.; Marquínez Gobbi, M.P.", link:"./assets/ppt/081.pdfx"},
    {nombre: "Capacitación uso de test rápidos y control de calidad. Estrategia para un acceso oportuno y descentralizado en el control de sífilis y HIV.", autor: "Lukjaniec, V.; Pellegrino, V.; Silvestri, L.; Marquínez Gobbi, M.P.", link:"./assets/ppt/015.pptx"},
    {nombre: "Salud Escolar", autor: "Toledo, V.", link:""},
    {nombre: "Dispositivo de detección, recupero y seguimiento de calendarios de vacunación atrasados. Una oportunidad ganada para el equipo de salud.", autor: "Equipo de enfermería y promotoras del CAPS Dr. Monte.", link:"./assets/ppt/043.pptx"},
    {nombre: "Seguimiento de personas con patologías crónicas desde Enfermería.", autor: "Migueles, S.; Roa, A.", link:""},
    {nombre: "Trabajo con adultos mayores en el Primer Nivel de Atención de la Salud: historia, actualidad y desafíos.", autor: "Calzada, J.", link:""},
    {nombre: "Dispositivos Interdisciplinarios para la prevención y el tratamiento de Enfermedades Crónicas no Transmisibles.", autor: "Megy, Ma. L.; Norte, D.; Fragomeno, I.; Frank, G.", link:"./assets/ppt/065.pptx"},
    {nombre: "Prescripción de medicamentos por su nombre genérico.", autor: "Basini, C.", link:"./assets/ppt/069.pptx"},

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

export default MesaLineas