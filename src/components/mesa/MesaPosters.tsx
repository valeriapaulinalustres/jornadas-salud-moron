
import Trabajos from '../trabajos/Trabajos'


type propsTitle = {
    title:string,
}

function MesaPosters({title}:propsTitle ) {

    
    interface trabajos {
        nombre: string,
        autor: string,
        link: string,
    }


const modeloIntegrado:Array<trabajos> = [
    
    {nombre: "Primer Tratamiento Oncohematológico realizado en el Hospital", autor: "Aguilar, F.; Baptista Muñoz Yeseña, Fossati A.; Jofre, D.; Lozada, C. M.B; Ruiz, R. M.", link:""},
    {nombre: "Nefritis lúpica", autor: "Riverti, C.; Goberna, L.; Carranza M. B.", link:""},
    {nombre: "Crisis comicial como manifestación clave para el diagnóstico de cavernomatosis cerebral", autor: "Coaquira, N.; Ferigo, N.; Martin, F.; Terraza, P.", link:""},
    {nombre: "Desafío terapéutico: corticoterapia en tbc pulmonar", autor: "Rodríguez, H.; Ghanem Ahmed, K.; Kneeteman, G.", link:""},
    {nombre: "Presencia de Anticuerpos irregulares en paciente Rh + y sus consecuencias", autor: "Suarez Audine, B.; Russo, R.; Cecere, M.; Yauk, M.; Agosto, R; Samaya, D.; Moferrato, Y.; Arleo, L.; Ferrari, L.; Zamora, M.; Ayala, M.; Campagnoli, F.; Doretto, B.; Espeche, C.; Ruiz, R. M.", link:""},
    {nombre: "Hallazgos ecográficos de hemorragia de la Matriz Germinal intraventricular en niños prematuros", autor: "Farinati, Ma. V.", link:""},
    {nombre: "Importancia del screening de Desarrollo de Displasia de Cadera (DDC) en pediatría.", autor: "Farinati, Ma. V.", link:""},
    {nombre: "Hemangioendotelioma en recién nacido. A propósito de un caso.", autor: "Iorio, Y. F.; Farinati, Ma. V.; Savorani, M.; Aguirre, S.; Fernández, S.", link:""},
    {nombre: "Diabetes insípida. Trastorno poco frecuente en la paciente gestante.", autor: "Hualpa Yucra, E; Salguero Yucra, L.; Varrenti N.; Miglioretti G.; Márquez, A. K.; Kulling S.; Claros Ibáñez J.; Da Silva Danielle, M.; Gil, P.; Navarro, N.; Peregrina, V.; Alarcón, A.; Flores, O.; Campero, F.", link:""},
    {nombre: "Abordaje de eosinofilia en paciente pediátrico.", autor: "Padilla, D.; Arancibia, G.; Gonzáles, A.", link:""},
    {nombre: "Enfermedad por reflujo gastroesofágico. Revisión y Actualización.", autor: "Padilla, D.; Arancibia, G.; Ávila, P.", link:""},
    {nombre: "", autor: "", link:""},
    {nombre: "", autor: "", link:""},
    {nombre: "", autor: "", link:""},
    {nombre: "", autor: "", link:""},
    
    

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

export default MesaPosters