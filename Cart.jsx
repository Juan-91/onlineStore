import "./Cart.css";
import DataContext from '../state/DataContext';
import { useContext } from 'react';


function Cart() {
    const { cart } = useContext(DataContext);

    return (
        <div className="cart page">
            <h1>Got Everything?</h1>
            <h4>Let's process to checkout.
                You have <span>{cart.length}</span> item(s) in your Cart.</h4>

            <div className="parent">
                <div className="list">
                    {cart.map((prod) => (
                        <div className="prod-cart">
                            <img src={prod.image} alt="" />
                            <h5>{prod.title}</h5>
                            <label>${prod.price}</label>
                            <label>#{prod.quantity}</label>
                            <label>${prod.quantity * prod.price}</label>
                            <button className='btn btn=+-sm btn-outline-danger'>
                                <i className="fa-regular fa-trash-can"></i></button>
                        </div>
                    ))}
                </div >

                <div className="side">
                    <h4>Total</h4>
                    <h3>$9,999.00</h3>

                    <button className='btn btn-primary'>Proceed to Payment</button>
                </div>
            </div >
        </div >
    );
}

export default Cart;