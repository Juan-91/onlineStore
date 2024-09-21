import './Product.css';
import Quantity from './Quantity';

function Product(props) {

    function addToCart() {
        console.log('Added');
    }

    return (
        <div className="product page">
            <img src={props.data.image} alt=""></img>

            <h4>{props.data.title}</h4>
            <label>${props.data.price}</label>

            <div className="controls">
                <Quantity></Quantity>

                <button className="btn btn-sm" onClick={addToCart}>
                    Add
                    <i class="fa-solid fa-cart-arrow-down"></i>                </button>
            </div>
        </div>
    );
}

export default Product;