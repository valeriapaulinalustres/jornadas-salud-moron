import { Link } from "react-router-dom";
import "./home.css";
import { HiOutlineDownload } from "react-icons/hi";

function Home() {

  return (
    <div className="home-container">
      <h1>JORNADAS DE SALUD EN MORÓN</h1>
      <h2>25 Y 26 DE OCTUBRE 2022</h2>
   
      <div className="home-buttons-container">
        <Link
          to="./assets/programa.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download="programa Jornadas de Salud.pdf"
        >
          <button className="button">
            <HiOutlineDownload className="home-icons"/>
            Programa
          </button>
        </Link>
        <div className="home-buttons-pages">
          <Link to="/mesas">
            <button className="button">Mesas y Trabajos</button>
          </Link>
          <Link to="/multimedia">
            <button className="button">Fotos y Multimedia</button>
          </Link>
        </div>
        <Link
          to="./assets/libro.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download="Libro Jornadas de Salud.pdf"
        >
          <button className="button">
            <HiOutlineDownload className="home-icons"/>
            Libro de trabajos
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;

/*
   <p className="description-home">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        doloribus consectetur dolor accusamus, veniam qui eius officiis ipsam
        nesciunt optio perspiciatis totam recusandae! Sint perferendis ut
        doloremque perspiciatis assumenda sed.
      </p>
      */
