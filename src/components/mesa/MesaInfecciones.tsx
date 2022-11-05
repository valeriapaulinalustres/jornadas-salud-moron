
import Trabajos from '../trabajos/Trabajos';
import './mesa.css'

type propsTitle = {
    title:string,
}

function MesaInfecciones({title}:propsTitle ) {


    interface trabajos {
        nombre: string,
        autor: string,
        link: string,
    }


const modeloIntegrado:Array<trabajos> = [
    {nombre: "Características de los microorganismos causantes de neumonía asociada a la ventilación mecánica – Hospital Municipal de Morón “Ostanciana B. de Lavignolle”. Servicio de terapia intensiva.", autor: "Salguero Yucra, L.; Varrenti, N.; Miglioretti, G.; Marquez, A.; Kulling, S.; Claros Ibáñez, J.; Da Silva Danielle, M.; Hualpa Yucra, E.; Gil, P.; Navarro, N.; Peregrina, V.", link:""},
    {nombre: "Covid-19. Nuestra experiencia en T.I. del Hospital Municipal de Morón", autor: "Gil, P.; Miglioretti, G.; Márquez, A.; Kulling, S.; Claros Ibáñez, J.; Da Silva Danielle, M.; Navarro, N.; Peregrina, V.; Alarcón, A.; Flores, O.; Campero, F.; Hualpa Yucra, E.; Salguero Yucra L. A.; Varrenti, N.; Vidal, D.; Moreno, G.; Geser, M; Quispe, R.; Castelo, G.; Bodner Ma. E.", link:""},
    {nombre: "Situación de infecciones y tratamientos antimicrobianos en pacientes internados en el Servicio de Clínica Médica del Hospital de Morón “Ostaciana B. de Lavignolle”", autor: "Iovanne, A.; Gauto, M.; Rojas Mena, M. P ; Rosas, A.; Mellini, M.; Goberna, L.; Santamaría, C.", link:""},
    {nombre: "Estudio de prevalencia en enterobacteriales productores de carbapenemasas: el desafío de la resistencia a los antimicrobianos post pandemia COVID-19", autor: "Depardo, R. E.; Garrone, M.; Pellegrino, V.; Silvestri, L.", link:""},
    {nombre: "Plan de mejora continua. Comité de Control de Infecciones.", autor: "Valle, G.; Gorosito, I; Alderete, C.", link:""},
    

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

export default MesaInfecciones