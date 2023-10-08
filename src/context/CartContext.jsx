import { createContext, useState } from "react";
import Swal from 'sweetalert2';

export const CartContext = createContext([]);

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    const addProduct = (newProduct) => {
        const existingProduct = cartList.find((product) => product.id === newProduct.id);

        if (existingProduct) {
            existingProduct.quantity += newProduct.quantity;
            setCartList([...cartList]);
        } else {
            setCartList([...cartList, newProduct]);
        }
    };

    const removeFromCart = (productId) => {
        const updatedCart = cartList.filter((product) => product.id !== productId);
        setCartList(updatedCart);
    };

    const clearCart = () => {
        setCartList([]);
    };

    const checkout = () => {
        clearCart();
        Swal.fire({
            title: 'Compra Realizada con Éxito',
            icon: 'success',
            confirmButtonText: 'Aceptar',
        });
    };

    return (
        <CartContext.Provider value={{ 
            cartList, 
            addProduct, 
            removeFromCart, 
            clearCart,
            checkout
            }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
