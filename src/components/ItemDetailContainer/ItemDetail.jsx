import { CartContext } from "../../Context/CartContext"
import ItemCount from "../Counter/ItemCount"
import { useContext } from "react"
import { toast } from 'react-toastify';

import './ItemDetail.css'

const ItemDetail = ({product}) => {
    const {addProduct, cartList} = useContext(CartContext)
    const onAdd = (count) => {
        addProduct( {...product, quantity: count } )
        toast.success('Producto Agregado!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }
    return (
            <div className="card mb-3">
                <img className="card-img-top" src={product.imageUrl} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="price">Precio: ${product.price}</p>
                    <p className="card-text">{product.description}</p>
                    <ItemCount initial={1} stock={product.stock} onAdd={onAdd} />
                    
                </div>
            </div>
    )
}


export default ItemDetail