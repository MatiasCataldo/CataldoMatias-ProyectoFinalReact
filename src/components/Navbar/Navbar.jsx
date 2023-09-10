import './Navbar.css'
import foto from '../Imagenes/fuerte.png'
import CartWidget from './CartWidget'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md bg-dark navbar-dark">
            <Link to='/'>
                <img src={foto} className='logo' />
            </Link>
            <NavLink to='/' className="navbar-brand" href="">Strong Suplementos</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to='/category/Proteina'>Proteinas</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/category/Creatina'>Creatinas</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink NavLink to='/category/Bcaa'>BCAAs</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink NavLink to='/category/Pre'>Pre Entreno</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/category/Accesorios'>Accesorios</NavLink>
                    </li>
                </ul>
            </div>
            <Link to='/cart'>
                <CartWidget />
            </Link>
        </nav>
    )
}

export default Navbar