
import Trabajos from '../trabajos/Trabajos';
import './mesa.css';


type propsTitle = {
  title: string,
}

function MesaRedes({ title }: propsTitle) {


  interface trabajos {
    nombre: string,
    autor: string,
    link: string,
  }

  const modeloIntegrado: Array<trabajos> = [

    {
      nombre: "Adecuación del PRODIABA en el Municipio de Morón",
      autor: "Marquínez Gobbi ,M.P.; Domínguez, P.; Keimel, S.",
      link: "../../assets/ppt/079.pptx"
    },
    {
      nombre: "Vigilancia Epidemiológica en el Municipio de Morón. Aplicación “Epi”",
      autor: "Lustres, V.; Gómez, L.",
      link: "../../assets/ppt/083.ppt"
    },
    {
      nombre: "Centro de Orientación en Salud: una puerta a la accesibilidad",
      autor: "Mansilla, P.; Giussani, N.; González, M.; Marullio, G.",
      link: "../../assets/ppt/078.pptx"
    },
    {
      nombre: "Circuito de acceso a videocolonoscopia oportuna para el rastreo de cáncer colorrectal",
      autor: "Benfatti, N.; Sabatte, F.; Marquínez Gobbi, M.P.",
      link: "../../assets/ppt/080.pptx"
    },
    {
      nombre: "Referencia y Contrarreferencia con el Hospital Posadas, el Hospital Municipal y el Programa Materno Infantil",
      autor: "González, A.; Marquínez Gobbi, M.P.",
      link: "../../assets/ppt/077.pptx"
    },
    {
      nombre: "Caminando redes",
      autor: "Fritz, A.; Morán, P. M.; Vidal Zinno, R. P.; Cofone, S.; Fernandez, N.",
      link: "../../assets/ppt/057.pptx"
    },
    {
      nombre: "La sonrisa de tu vida. CAPS Ibáñez",
      autor: "Román, M.",
      link: ""
    },
    {
      nombre: "Sabores y saberes de nuestro barrio",
      autor: "Ferrero, A.; Leal, G.; Medina, G.; Mussio, A.",
      link: "../../assets/ppt/072.pptx"
    },
    {
      nombre: "La presencia de la Dirección de Zoonosis en la salud de la población de Morón. Actividades en el 2022",
      autor: "Di Caprio, M. L.; Spinosa, M.; Cicinelli, L.; Rivero, N.; Hernández, P.",
      link: "../../assets/ppt/085.pptx"
    },
    {
      nombre: "Experiencia de trabajo con víctimas del Terrorismo de Estado. Derechos Humanos y Salud",
      autor: "Araujo, R.; Álvarez, A.; Ayala, C.; Cruz, L; David, N.; Quiroga, M.; Maceira, S.; Recoder, C.",
      link: ""
    },


  ]
  return (
    <div className='mesa-container'>
      <h2>{title}</h2>

      <div className=''>
        {modeloIntegrado.map((item: any, index: number) => (
          <Trabajos key={index} nombre={item.nombre} autor={item.autor} link={item.link} />
        ))}
      </div>
    </div>
  )
}

export default MesaRedes