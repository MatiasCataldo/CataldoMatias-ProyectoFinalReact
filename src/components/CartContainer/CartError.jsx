import { Link } from "react-router-dom"


const CartError = () => {
  return (
        <div>
            <article className="card-error">
                <h3>El carrito está vacío</h3>
                <h4>🛒</h4>
            </article>
            <button  className='btn btn-dark' id='seguirComprando'><Link to="/">Seguir Comprando</Link></button>
        </div>
    )
}

export default CartError