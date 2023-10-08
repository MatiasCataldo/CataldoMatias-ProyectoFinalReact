import React, { useContext, useState } from 'react';
import { CartContext } from "../../Context/CartContext";
import { Link } from 'react-router-dom';
import { addDoc, collection, getFirestore, runTransaction, doc, getDoc } from 'firebase/firestore'
import CartError from './CartError';
import { toast } from 'react-toastify';

import './CartContainer.css';

const CartContainer = () => {
  const [dataForm, setDataForm] = useState({
    name: '',
    phone: '',
    email: ''
  });
  const [orderId, setOrderId] = useState('');
  const { cartList, clearCart, removeFromCart, checkout } = useContext(CartContext);

  const handleAddOrder = async (evt) => {
    evt.preventDefault();

    const queryDB = getFirestore();
    const ordersCollection = collection(queryDB, 'orders');
    const productsCollection = collection(queryDB, 'products');

    for (const product of cartList) {
      const productRef = doc(productsCollection, product.id);
      const productDoc = await getDoc(productRef);

      if (!productDoc.exists() || product.quantity > productDoc.data().stock) {
        toast.error(`No hay suficiente stock para ${product.name}`, { autoClose: 3000 });
        return;
      }
    }

    const order = {
      buyer: dataForm,
      items: cartList.map((product) => ({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: product.quantity
      })),
      total: cartList.reduce((total, product) => total + product.price * product.quantity, 0)
    };

    try {
      const docRef = await addDoc(ordersCollection, order);
      setOrderId(docRef.id);
      await runTransaction(queryDB, async (transaction) => {
        for (const product of cartList) {
          const productRef = doc(productsCollection, product.id);
          const productDoc = await transaction.get(productRef);

          if (productDoc.exists()) {
            const currentStock = productDoc.data().stock;
            const newStock = currentStock - product.quantity;

            if (newStock >= 0) {
              transaction.update(productRef, { stock: newStock });
            } else {
              throw new Error(`No hay suficiente stock para ${product.name}`);
            }
          } else {
            throw new Error(`El producto ${product.name} no existe en la base de datos`);
          }
        }
      });
      checkout();
    } catch (err) {
      toast.error(`Error al agregar la orden a Firebase: ${orderId}`, { autoClose: 5000 });
    } finally {
      setDataForm({
        name: '',
        phone: '',
        email: ''
      });
    }
  };

  const totalPrice = cartList.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);

  const handleOnChange = (evt) => {
    setDataForm({
      ...dataForm,
      [evt.target.name]: evt.target.value
    });
  }

  return (
    <div id='carrito'>
      <h3>Carrito de Compras</h3>
      {cartList.length === 0 ? (
        <CartError />
      ) : (
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
                  <button className='delete' onClick={() => removeFromCart(product.id)}>❌</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className='total'>Total: ${totalPrice.toLocaleString()}</p>
        <button className='btn btn-dark' id='clear' onClick={clearCart}>Vaciar Carrito</button>
        <button  className='btn btn-dark' id='seguirComprando'><Link to="/">Seguir Comprando</Link></button>
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
          <button className='btn btn-dark' id='finally'>Finalizar Compra</button>
        </form>
      </div>
    )}
    {orderId && <div className='order'>Se ha generado la orden de compra: {orderId}</div>}
    </div>
  );
};

export default CartContainer;
