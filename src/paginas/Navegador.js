import './Navegador.css';
import {NavLink} from 'react-router-dom';


export default function Navegador() {
  return (
  
  <div>
	<ul>
		<li>
			<NavLink className={({isActive}) => isActive ? "activo" : "negro"}to='/inicio'>Inicio< /NavLink>
		</li>
		<li>
			<NavLink className={({isActive}) => isActive ? "activo" : "negro"}to='/juego'>Juego< /NavLink>
		</li>
		<li>
			<NavLink className={({isActive}) => isActive ? "activo" : "negro"}to='/integrantes'>Integrantes </NavLink>
        </li>
    </ul>
  </div>
  
  );
}

