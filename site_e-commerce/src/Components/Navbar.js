import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/home">Vintage Toys</Link>
            <div className="collapse navbar-collapse">
                        <Link className="nav-link" to="/products">Products</Link>
                        <Link className="nav-link" to="/contact">Contact</Link>
            </div>
        </nav>
    );
}

export default Navbar;
