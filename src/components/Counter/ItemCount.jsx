import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ initial, stock, onAdd, buttonText = "Add🛒" }) => {
    const [counter, setCounter] = useState(initial);

    const handleAdd = () => {
        if (counter < stock) setCounter(counter + 1);
    };

    const handleSubtract = () => {
        if (counter > initial) setCounter(counter - 1);
    };

    const handleOnAdd = () => onAdd(counter);

    return (
        <center>
            <h3>Cantidad:</h3>
            <div className="counter">
                <div className="btnCounter">
                    <div className="btns">
                        <button className="btn btn-outline-dark w-10" onClick={handleAdd}>+1</button>
                        <label>
                            <strong className="btn btn-dark w-10">{counter}</strong>
                        </label>
                        <button className="btn btn-outline-dark w-10" onClick={handleSubtract}>-1</button>
                    </div>
                    <button className="btn btn-outline-dark w-100" id="botonADD" onClick={handleOnAdd}>{buttonText}</button>
                </div>
                <div className="noStock">
                    {stock <= 0 && <p>No hay stock disponible.</p>}
                    {stock > 0 && counter >= stock && <p>Stock No Disponible! No puedes agregar más al carrito..</p>}
                </div>
            </div>
        </center>
    );
};

export default ItemCount; 
