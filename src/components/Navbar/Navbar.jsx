import './Navbar.css'
import foto from '../Imagenes/fuerte.png'
import carrito from '../Imagenes/iconoCarrito.png'

const Navbar = () => {
  return (
        <nav>
            <ul>
                <img src={foto} className='logo'/>
                <li>
                    <a href="#">Proteinas</a>
                </li>
                <li>
                    <a href="#">Creatinas</a>
                </li>
                <li>
                    <a href="#">BCAAs</a>
                </li>
                <li>
                    <a href="#">Pre Entreno</a>
                </li>
                <li>
                    <a href="#">Accesorios</a>
                </li>
                <a href="#" className="carrito">
                    <img src={carrito}  alt="icono carrito"/>
                </a>
            </ul>
        </nav>
  )
}

export default Navbar