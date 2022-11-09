import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './views/home/Home';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Mesas from './views/mesas/Mesas';
import Multimedia from './views/multimedia/Multimedia';
import MesaModelo1 from './components/mesa/MesaModelo1';
import MesaModelo2 from './components/mesa/MesaModelo2';
import MesaRedes from './components/mesa/MesaRedes';
import MesaSexual from './components/mesa/MesaSexual';
import MesaCovid from './components/mesa/MesaCovid';
import MesaLineas from './components/mesa/MesaLineas';
import MesaInfecciones from './components/mesa/MesaInfecciones';
import MesaFormacion from './components/mesa/MesaFormacion';
import MesaPosters from './components/mesa/MesaPosters';
import './app.css'

function App() {

  const tituloInfecciones:string = "Control de Infecciones y Multirresistencia";
  const tituloLineas:string = "Líneas Priorizadas";
  const tituloFormacion:string = "Formación en Salud";
  const tituloPosters:string = "Posters";
  const tituloSexual:string = "Salud Sexual y Líneas Priorizadas";
  const tituloMultimedia:string= "Próximamente subiremos las fotos";
  const tituloRedes:string= "Redes en Salud";
  const tituloCovid:string= "COVID-19";
  const tituloModelo1:string= "Hacia un Modelo Integrado 1";
  const tituloModelo2:string= "Hacia un Modelo Integrado 2";

  return (
  <BrowserRouter>
   <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mesas" element={<Mesas />} />
          <Route path="/multimedia" element={<Multimedia title={tituloMultimedia}/>} />
          <Route path="/mesas/modelo-integrado" element={<MesaModelo1 title={tituloModelo1}/>} />
          <Route path="/mesas/redes" element={<MesaRedes title={tituloRedes}/>} />
          <Route path="/mesas/salud-sexual" element={<MesaSexual title={tituloSexual}/>} />
          <Route path="/mesas/covid" element={<MesaCovid title={tituloCovid}/>} />
          <Route path="/mesas/modelo-integrado-dos" element={<MesaModelo2 title={tituloModelo2}/>} />
          <Route path="/mesas/lineas-priorizadas" element={<MesaLineas title={tituloLineas}/>} />
          <Route path="/mesas/infecciones" element={<MesaInfecciones title={tituloInfecciones}/>} />
          <Route path="/mesas/formacion" element={<MesaFormacion title={tituloFormacion}/>} />
          <Route path="/mesas/posters" element={<MesaPosters title={tituloPosters}/>} />
        </Routes>
        <Footer />
  </BrowserRouter>
   
  );
}

export default App;
