import logo from '../../assets/img/logoTienda.png'
import { Carrito } from './carrito'

import { Link } from 'react-router-dom'

export const Navbar = () => {

return (

            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img src={logo}></img></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
                        aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#">Productos Sellados</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link">Accesorios</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link">Eventos</Link>
                            </li>
                        </ul>
                    </div>
                </div>
               
                    <Carrito />
                
            </nav>
)

}