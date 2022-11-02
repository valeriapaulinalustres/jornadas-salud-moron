
import Trabajos from '../trabajos/Trabajos'


type propsTitle = {
  title:string,
}

function MesaModelo2({title}:propsTitle) {

    
    interface trabajos {
        nombre: string,
        autor: string,
        link: string,
    }


const modeloIntegrado:Array<trabajos> = [
    
    {nombre: "Dispositivo Interdisciplinaria de atención conjunta a las adolescencias en el Hospital de Morón", autor: "Scholles, A.; Sobrino, R.; Maceira, S.; Alomo, M.; Bataglia, G.; Robles, G.; Meichtry, F.; Vilares, T.; Luchetta, M.; Pérez Costa, A.", link:""},
    {nombre: "Lunes en movimiento", autor: "Silva, N.; Palazzolo, R.; Gomez, M.; Velazquez, Ma C.", link:""},
    {nombre: "Acompañamiento integral del desarrollo infantil. Consultorio Interdisciplinario de desarrollo infantil.", autor: "Lozano, S.; Merodio, L.; Muñoz Herrera, L.; Blanco, K; Sousa, V.; Botticeli, A.; Díaz, C.; Kerbs, K.; Friera, K.", link:""},
    {nombre: "Consultorio Integral Adolescente en primer nivel de atención", autor: "Quiroga, M.; Díaz, V.; Araujo, R.; Altaraz, G.", link:""},
    {nombre: "Espacio lúdico para niñes en el Centro de Salud Santa Laura", autor: "Araujo, R.; Novaro, C.; Díaz, F.", link:""},
    {nombre: "Taller de crianza en CAPS Santa Laura", autor: "Savoia, N.; Ferrara, R.; Chucarelli, E.; Frete, E.", link:""},
    {nombre: "Rol del equipo de promotores de salud y administración en la recaptación de usuaries.", autor: "Delgado, C.; Samuel, Y.; Denti, A.", link:""},
    {nombre: "La educación como pilar de tratamiento", autor: "Miner Jaume, Ma. J.; Vidal Zinno, P. A.", link:""},
    {nombre: "Reinventando-nos: PIM", autor: "Persampieri, J.M.; Etchepare, P.; Ramírez, M.L.; Argüello, L. D.; Del Vecchio, A.M.; Torres, E.", link:""},
    {nombre: "Estados emocionales en la persona gestante", autor: "Piera, Ma.B.; Buccheri, R.; Gómez, M.; Perez,S.", link:""},
    {nombre: "Relato de una experiencia de trabajo grupal interdisciplinario en salud mental: reflexión sobre los primeros pasos. Desafíos y perspectivas.", autor: "Calzada, J.; Goncálvez, A.; Pleszak, C.", link:""},
    {nombre: "Pautas de crianza y desarrollo del lenguaje. Un abordaje interdisciplinario en los jardines.", autor: "Fernández Parrau, S.; Rial, C.; De Langhe,G.; Rojas, G.; De la Zota, L.", link:""},
    {nombre: "Arte y Salud Mental", autor: "Cruz, L.; Recoder, C.; Pascielli, K.; Cracco, V.", link:""},
    {nombre: "Abordaje de problemática de suicidio en el barrio Santa Rosa.", autor: "Alomo, B.; Cifrodelli, F.; Escalada, A.; Garzón, C.; Morono, T.; Pitaluga, V.", link:""},
    {nombre: "Informe de evaluación de proyecto adultes mayores por distanciamiento social, preventivo y obligatorio", autor: "Equipo de salud mental de CAPS Gelpi.", link:""},
    {nombre: "Acompañamiento a referentes afectivos de lxs adolescentes: sistematización de una experiencia", autor: "Alomo, M.; Robles, G; Bataglia,G.; Yornet, P.", link:""},


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

export default MesaModelo2