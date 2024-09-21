import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" href="/home">
                    <b>Organika</b>
                    <i className="fa-solid fa-seedling"></i>
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">
                            Home <i className="fa-solid fa-house"></i>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/catalog">
                            Catalog  <i className="fa-solid fa-book-open"></i>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/about">
                            About   <i className="fa-solid fa-store"></i>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/admin">
                            Admin <i className="fa-solid fa-key"></i>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/contact">
                            Contact <i className="fa-solid fa-user"></i>
                        </Link>
                    </li>

                </ul>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success btn-white" type="submit">
                        Search <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </form>

            </div>
        </nav >
    );
}
export default Navbar;