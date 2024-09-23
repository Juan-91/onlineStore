import { useContext } from 'react';
import './Navbar.css';

import { Link } from 'react-router-dom';
import DataContext from '../state/DataContext';

function Navbar() {

    const user = useContext(DataContext).user;

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
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

                    <label className="btn btn-outline-light">{user.name}</label>

                    <Link className="btn btn-outline-success btn-white" type="submit">
                        View Cart <i className="fa-solid fa-magnifying-glass"></i>
                    </Link>
                </form>

            </div>
        </nav >
    );
}
export default Navbar;