import './Navbar.css'
import foto from '../Imagenes/fuerte.png'

const Navbar = () => {
  return (
        <nav>
            <ul>
                <img src={foto}></img>
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
            </ul>
        </nav>
  )
}

export default Navbar