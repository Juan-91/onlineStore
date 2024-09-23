import Product from '../components/Product';
import './Catalog.css';
import { catalog as products, categories } from '../services/DataServices';

function Catalog() {
    return (
        <div className="catalog page">
            <h2><b>Our Catalog</b></h2>

            <div className="filters">
                {categories.map(cat => <button className="btn btn-small btn-outline-light">{cat}</button>)}
            </div>

            {products.map(prod => <Product data={prod}></Product>)}

        </div >
    );
}

export default Catalog;




