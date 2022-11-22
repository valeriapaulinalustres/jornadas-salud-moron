
import Trabajos from '../trabajos/Trabajos';
import './mesa.css'


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
    
    {nombre: "Primer Tratamiento Oncohematológico realizado en el Hospital", autor: "Aguilar, F.; Baptista Muñoz Yeseña, Fossati A.; Jofre, D.; Lozada, C. M.B; Ruiz, R. M.", link:"./assets/ppt/005.pptx"},
    {nombre: "Nefritis lúpica", autor: "Riverti, C.; Goberna, L.; Carranza M. B.", link:"./assets/ppt/007.pptx"},
    {nombre: "Crisis comicial como manifestación clave para el diagnóstico de cavernomatosis cerebral", autor: "Coaquira, N.; Ferigo, N.; Martin, F.; Terraza, P.", link:"./assets/ppt/008.pptx"},
    {nombre: "Desafío terapéutico: corticoterapia en tbc pulmonar", autor: "Rodríguez, H.; Ghanem Ahmed, K.; Kneeteman, G.", link:"./assets/ppt/012.pptx"},
    {nombre: "Presencia de Anticuerpos irregulares en paciente Rh + y sus consecuencias", autor: "Suarez Audine, B.; Russo, R.; Cecere, M.; Yauk, M.; Agosto, R; Samaya, D.; Moferrato, Y.; Arleo, L.; Ferrari, L.; Zamora, M.; Ayala, M.; Campagnoli, F.; Doretto, B.; Espeche, C.; Ruiz, R. M.", link:"./assets/ppt/020.pptx"},
    {nombre: "Hallazgos ecográficos de hemorragia de la Matriz Germinal intraventricular en niños prematuros", autor: "Farinati, Ma. V.", link:"./assets/ppt/003.pptx"},
    {nombre: "Importancia del screening de Desarrollo de Displasia de Cadera (DDC) en pediatría.", autor: "Farinati, Ma. V.", link:"./assets/ppt/004.pptx"},
    {nombre: "Hemangioendotelioma en recién nacido. A propósito de un caso.", autor: "Iorio, Y. F.; Farinati, Ma. V.; Savorani, M.; Aguirre, S.; Fernández, S.", link:"./assets/ppt/028.pptx"},
    {nombre: "Diabetes insípida. Trastorno poco frecuente en la paciente gestante.", autor: "Hualpa Yucra, E; Salguero Yucra, L.; Varrenti N.; Miglioretti G.; Márquez, A. K.; Kulling S.; Claros Ibáñez J.; Da Silva Danielle, M.; Gil, P.; Navarro, N.; Peregrina, V.; Alarcón, A.; Flores, O.; Campero, F.", link:"./assets/ppt/026.pptx"},
    {nombre: "Abordaje de eosinofilia en paciente pediátrico.", autor: "Padilla, D.; Arancibia, G.; Gonzáles, A.", link:""},
    {nombre: "Enfermedad por reflujo gastroesofágico. Revisión y Actualización.", autor: "Padilla, D.; Arancibia, G.; Ávila, P.", link:"./assets/ppt/039.pptx"},

    
    

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