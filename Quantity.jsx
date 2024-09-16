import { useState } from 'react';
import './Quantity.css';

function Quantity() {
    const [quantity, setQuantity] = useState(1);

    function handleDecrease() {
        let value = quantity - 1;
        if (quantity == 0) return;

        setQuantity(value);
    }

    function handleIncrease() {
        let value = quantity + 1;
        setQuantity(value);
    }

    return (
        <div className="quantity">
            <button className="btn btn-sm btn-dark" disabled={quantity == 0} onClick={handleDecrease}>-</button>

            <label>{quantity}</label>

            <button className="btn btn-sm btn-dark" onClick={handleIncrease}>+</button>

        </div>
    );
}

export default Quantity;

