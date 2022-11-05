
import Trabajos from '../trabajos/Trabajos';
import './mesa.css'


type propsTitle = {
  title:string,
}

function MesaModelo1({title}:propsTitle) {

    
    interface trabajos {
        nombre: string,
        autor: string,
        link: string,
    }


const modeloIntegrado:Array<trabajos> = [
    {nombre: "Cuidados progresivos desde la visión de un internista", autor: "Negri, G.", link:""},
    {nombre: "Indicadores Hospitalarios en internación", autor: "Córdoba, S. ; Orellano, P.", link:""},
    {nombre: "Internación en Servicio de Emergencias", autor: "Córdoba, S.; Orellano, P.", link:""},
    {nombre: "Importancia de los procesos administrativos para evaluar calidad de atención y recuperar los costos", autor: "Saavedra, P.; Caffaratti, M.; Valicenti, L.; Montoya, A.; Fleitas,C.; Jaques Colman, A.; Araujo, S.; Stern, C.; Masucci, C.; Dominguez, N.; Piñeyro, M.; Carruego, D.", link:""},
    {nombre: "¿Trabajamos en equipo?", autor: "Saavedra ,P.; Caffaratti, M.", link:""},
    {nombre: "La evaluación cognitiva como instrumento de intervención", autor: "Díaz, C.; Kerbs, K.; Friera, K.", link:""},
    {nombre: "Dispositivo de salud mental integral", autor: "Britti, Y.; Fox, S.; Porce, P.; Fernández Parral, E.; Rodríguez Berisso, A.", link:""},
    {nombre: "Los dispositivos grupales de diagnóstico y tratamiento como una respuesta contra la espera.", autor: "Friera, K.; Kerbs, K.; Díaz, C.", link:""},
    {nombre: "Espacio de orientación psicológica en el primer nivel de atención", autor: "Quiroga, M.; Díaz, V.", link:""},
    {nombre: "Trabajo con niños en dispositivos grupales. Juegoteca", autor: "Rial, C.; Pastoriza, G.; Spada, V.; David, N.", link:""},
    {nombre: "Relatos de experiencia con jubilados / adultos mayores", autor: "Mamani, R.; Lau Melo, K.; Acevedo, V.; Luna, S.", link:""},
    {nombre: "Abordaje de salud mental en espacio interdisciplinario de primera escucha en el CAPS Dr. Luis Winter", autor: "Brambilla, M.; Collavo, M.; Chumbita, N.; Fiscella, C.; Sánchez M.", link:""},


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

export default MesaModelo1