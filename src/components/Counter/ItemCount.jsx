import { useEffect, useState } from "react"

import './ItemCount.css'

const useCounter = (min, max) => {
    const [count, setCount] = useState(min)

    const handleAdd = () => {
        if(count < max) {
            setCount(count + 1)
        }
    }

    const handleSubtract = () => {
        if(count > min) {
            setCount(count - 1)
        }
    }

    return {
        count,
        handleAdd,
        handleSubtract
    }
}

// un re-render se produce con un cambio de estado o de props - evento
const ItemCount = ({initial, stock, onAdd}) => { 

    const { count, handleAdd, handleSubtract } = useCounter(initial, stock)

    const handleOnAdd = () => {
        onAdd(count)
    }
    
    return (
        <center>
            <h3>Cantidad:</h3>
            <div className="contador">
                <button className="btn btn-outline-dark w-10" onClick={handleSubtract}> - 1 </button> 
                <label>
                    <strong className="btn btn-dark w-10">{ count }</strong>
                </label>
                <button className="btn btn-outline-dark w-10" onClick={handleAdd}> + 1 </button>     
            </div>
        </center>
    )
} 

export default ItemCount