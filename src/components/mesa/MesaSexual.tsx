
import Trabajos from '../trabajos/Trabajos';
import './mesa.css'

type propsTitle = {
  title:string,
}

function MesaSexual({title}:propsTitle ) {

    
    interface trabajos {
        nombre: string,
        autor: string,
        link: string,
    }


const modeloIntegrado:Array<trabajos> = [
    
    {nombre: "Aborto legal: 1er año ley de IVE contado desde el Caps Dr. Monte: un equipo con 10 años acompañando historias de personas en situación de aborto.", autor: "Ayala, C.; Carattozolo, C. G.", link:""},
    {nombre: "Dispositivo IVE/ILE, nuestra experiencia hospitalaria. Hospital Municipal “Ostaciana B. de Lavignolle”. Morón.", autor: "Repetto, L.; Santiago, D.; Nogueras, B.; Roa, M.; Del Vecchio, A.; Muzio, C.", link:""},
    {nombre: "En-redadas: Relato de la conformación de un equipo IVE en tiempos de pandemia.", autor: "Alonso, C.; Gómez, M.; Leanza, E.; Miner Jaume, M.J.; Rossello, F.; Torchetti, C.", link:""},
    {nombre: "Acompañamiento y atención a la mujer y persona gestante en situación de aborto. Reflexiones sobre la experiencia de las Consejerías en el Hospital de Morón.", autor: "Briti, Y.; Mariñelarena, P.; Maceira, S.; Sobrino, R.", link:""},
    {nombre: "Implementación de AMEU en el primer nivel de atención de salud", autor: "Ireizo, J.; Recoder, C.", link:""},
    {nombre: "Posibilidades y desafíos en el abordaje de situaciones de violencia por razones de género desde el Hospital, una mirada hacia el futuro", autor: "Sueldo, C.; Sobrino, R.", link:""},
    {nombre: "Garantizando derechos: respetando los nacimientos", autor: "González, G.; Rodríguez, S.; Martínez, C.; Peque, M.; Stella, T.", link:""},
    {nombre: "Consumo problemático de sustancias, bajo la mirada multidisciplinaria del Hospital de Morón. Futuro lineamiento de trabajo", autor: "Fernández, S. M.; Aguirre, S.; Guerra, A.; Savorani, M.", link:""},
    {nombre: "Experiencia en Atención Primaria para la prevención de cáncer de cuello de útero", autor: "Palazzolo, R.; Gómez, M.", link:""},
    {nombre: "Estrategia Municipal para la implementación del Plan 1000 días.", autor: "Frías, M.; González, A.; Sala, G.; Lozano, S.; Marquínez Gobbi, M.P.", link:""},
    {nombre: "Monitoreo de las estrategias de testeo de VPH en el Municipio de Morón", autor: "Gómez, L.; Marquínez Gobbi, M.P; Mahffuz, R.", link:""},

   


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

export default MesaSexual