import ItemCount from "../Counter/ItemCount"
import './ItemDetail.css'

const ItemDetail = ({product}) => {
    const onAdd = (count) => {
        console.log(count)
    }
    return (
            <div className="card mb-3">
                <img className="card-img-top" src={product.imageUrl} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="precio">Precio: ${product.price}</p>
                    <p className="card-text">{product.description}</p>
                    <ItemCount initial={1} stock={10} onAdd={onAdd} />
                    <button className="btn btn-outline-dark w-50" id="botonADD">Add🛒</button>
                </div>
            </div>
    )
}


export default ItemDetail