import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Products from './Products';

const Home = () => {
    const [featuredProducts, setFeaturedProducts] = useState([]); // state to hold featured products

    // get first two products and pass them to parent component
    const handleProducts = (products) => {
        setFeaturedProducts(products);
    }

    return (
        <div className="container mt-5">
            <Navbar />
            <h1>Welcome to Vintage Toys!</h1>
            <p>Discover our exclusive collection of vintage toys from the 1980s.</p>
            
            {/* Display Products */}
            <h2>Featured Products</h2>
            <div className="row">
                {featuredProducts.map(product => (
                    <div key={product.id} className="col-md-4">
                        <div className="card mb-4">
                            <img src={product.imageUrl} alt={product.name} className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">{product.description}</p>
                                <p className="card-text"><strong>{product.price}</strong></p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default Home;
