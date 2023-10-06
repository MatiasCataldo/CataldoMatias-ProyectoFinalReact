import React, { useContext, useState } from 'react';
import { CartContext } from "../../Context/CartContext";
import './CartContainer.css';
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import CartError from './CartError';
import Cart from './Cart';

const CartContainer = () => {
  const [dataForm, setDataForm] = useState({
    name: '',
    phone: '',
    email: ''
  });
  const [orderId, setOrderId] = useState('');
  const { cartList, clearCart, removeFromCart, finalizarCompra } = useContext(CartContext);

  const handleAddOrder = async (evt) => {
    evt.preventDefault();
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

    const queryDB = getFirestore();
    const ordersCollection = collection(queryDB, 'orders');

    try {
      const docRef = await addDoc(ordersCollection, order);
      setOrderId(docRef.id);
      finalizarCompra();
    } catch (err) {
      console.log('Error al agregar la orden a Firebase:', err);
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
    <div id='cart'>
      <h3>Carrito de Compras</h3>
      {cartList.length === 0 ? (
          <CartError />
      ) : (
        <Cart
          cartList={cartList}
          removeFromCart={removeFromCart}
          clearCart={clearCart}
          finalizarCompra={finalizarCompra}
          handleAddOrder={handleAddOrder}
        />
      )}
      {orderId && <div className='order'>Se ha generado la orden de compra: {orderId}</div>}
    </div>
  );
};

export default CartContainer;
