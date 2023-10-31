import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header>
            <Link className="navbar-main" to="/">Vintage Toys</Link>
            <div className="collapse navbar-collapse">
                    <Link className="nav-link" to="/products">Products</Link>
                    <Link className="nav-link" to="/contact">Contact</Link>
                    <Link className="nav-link" to="/cart">Cart</Link>
            </div>
        </header>
    );
}

export default Navbar;
