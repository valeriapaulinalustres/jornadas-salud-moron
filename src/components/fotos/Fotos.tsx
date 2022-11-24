import './fotos.css'


type propsFotos = {
  url?: any,
  nombre?: string,
  key?: number,
}

function Fotos({ url, nombre, }: propsFotos) {


  return (
    <div className='fotos-container'>
      <img src={url} alt={nombre} width="100%" />
    </div>
  )
}

export default Fotos