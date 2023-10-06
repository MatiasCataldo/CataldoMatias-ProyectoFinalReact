import { useState } from "react";
import { Link } from "react-router-dom"

const Cart = ({ cartList, removeFromCart, clearCart, finalizarCompra, handleAddOrder }) => {
    const totalPrice = cartList.reduce((total, product) => {
        return total + product.price * product.quantity;
      }, 0);
    const [dataForm, setDataForm] = useState({
        name: '',
        phone: '',
        email: ''
      });
    
      const handleOnChange = (evt) => {
        setDataForm({
          ...dataForm,
          [evt.target.name]: evt.target.value
        });
      };
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Cantidad</th>
                        <th>Precio Unitario</th>
                        <th>Precio Total</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {cartList.map((product) => (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{product.quantity}</td>
                            <td>${product.price.toLocaleString()}</td>
                            <td>${(product.price * product.quantity).toLocaleString()}</td>
                            <td>
                                <button className='delete' onClick={() => removeFromCart(product.id)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p className='total'>Total: ${totalPrice.toLocaleString()}</p>
            <button className='clear' onClick={clearCart}>Vaciar Carrito</button>
            <button className='continue'><Link to="/">Seguir Comprando</Link> { }</button>
            <form onSubmit={handleAddOrder}>
                <input
                    type='text'
                    name='name'
                    required placeholder='ingresar el nombre'
                    value={dataForm.name}
                    onChange={handleOnChange}
                />
                <input
                    type='text'
                    name='phone'
                    required placeholder='ingresar el teléfono'
                    value={dataForm.phone}
                    onChange={handleOnChange}
                />
                <input
                    type='text'
                    name='email'
                    required placeholder='ingresar el email'
                    value={dataForm.email}
                    onChange={handleOnChange}
                />
                <button className='finally'>Finalizar Compra</button>
            </form>
        </div>
    )
}

export default Cart