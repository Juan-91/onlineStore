import './Product.css';
import Quantity from './Quantity';

function Product(props) {

    function addToCart() {
        console.log('Added');
    }

    return (
        <div className="product">
            <img src={props.data.image} alt=""></img>

            <h4>{props.data.title}</h4>
            <label>${props.data.price}</label>

            <div className="controls">
                <Quantity></Quantity>

                <button className="btn btn-sm" onClick={addToCart}>
                    Add
                </button>
            </div>
        </div>
    );
}

export default Product;