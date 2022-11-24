
import Trabajos from '../trabajos/Trabajos';
import './mesa.css'


type propsTitle = {
    title: string,
}

function MesaFormacion({ title }: propsTitle) {

    interface trabajos {
        nombre: string,
        autor: string,
        link: string,
    }

    const modeloIntegrado: Array<trabajos> = [

        {
            nombre: "Ateneos clínicos ¿Por qué y Para qué?",
            autor: "Rosas, A.; Delavalle, A.; Negri, G.; Lozada, C.; Carranza, B.; Mellino, M.; Ghanem, K.; Coaquira, E.; Ferigo, N.; Aguilar, F.; Fossati, A.; Goberna, L.; Baptista, Y.; Ghanem, I.",
            link: "../../assets/ppt/009.pptx"
        },
        {
            nombre: "Avances educativos y personales en épocas de pandemia. Servicio de Tocoginecología.",
            autor: "Britos, N., Casco, J., Orlandi, M., De Stefano, Y., González, G., Torres, E.",
            link: ""
        },
        {
            nombre: "Programa de Educación Continua en Trauma y Urgencias al final de una Pandemia Viral.",
            autor: "Algieri, R. ; Ferrante, S.; Fernández, J. P. ; Ruschioni Martín, C.; Brofman, C. C.; Insfrán, H.;Gillardot, A.; Martínez, M.; Mazola, S.; González, M.; Carranza, R.",
            link: ""
        },
        {
            nombre: "Educación: Formación de Liderazgo y Trabajo en Equipo en Emergencias y Urgencias durante el Período de Pandemia por COVID-19",
            autor: "Algieri, R.; Ferrante, S.; Fernández, J.P; ; Brofman, C.; Insfran, H.",
            link: ""
        },
        {
            nombre: "Consultorio externo docente",
            autor: "Barril, Ma. F.; Friera, K.; Díaz, C.; Boticelli, A; Scholles, A.",
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

export default MesaFormacion