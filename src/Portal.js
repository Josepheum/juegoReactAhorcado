import logo from './logo.svg';
import './Inicio.css';
import {BrowserRouter,Routes, Route} from "react-router-dom";
import Juego from './paginas/Juego.js'
import Inicio from './paginas/Inicio.js'
import Integrantes from './paginas/Integrantes.js'
//import Error404 from './paginas/404.js'
import Navegador from './paginas/Navegador';
import './paginas/Navegador.css';




export default function Portal() {
  return (
  <BrowserRouter>
  <Navegador/>
  
    <div className="App">
      <header className="App-header">
        <p>
          Esta es la Página de Inicio
        </p>
        <Routes>
			<Route path='/inicio' element={<Inicio />}/>
			<Route path='/juego' element={<Juego />}/>
			<Route path='/integrantes' element={<Integrantes />}/>
			
        </Routes>
      </header>
    </div>
    </BrowserRouter>
  );
  
  ////<Route exact path='*' element={<Error404/>} />
}



//export default Inicio;
