import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({product}) => {
    return (
        <div key={product.id} className="card w-25" id="cards"> 
            <div className="card-body">
                <img className="h-auto w-100 card-img-top" id='fotoCard' src={product.imageUrl} alt="imagen prenda"/>
                <h3>{product.name}</h3>
                <p>Precio: ${product.price.toLocaleString()}</p>
            </div>
            <div className="card-footer">
            <Link to={`/detalle/${product.id}`}>
                <button className="btn btn-outline-dark w-100">Detalle</button>
            </Link>
            </div>
        </div> 
    )
}

export default Item