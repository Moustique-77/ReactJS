import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const dummyProducts = [
    {
        id: 1,
        name: "Vintage Toy 1",
        description: "A classic toy from the 80s.",
        price: "$20.00",
        imageUrl: "path_to_image1.jpg"
    },
    {
        id: 2,
        name: "Vintage Toy 2",
        description: "A popular toy from the late 80s.",
        price: "$25.00",
        imageUrl: "path_to_image2.jpg"
    },
    {
        id: 3,
        name: "Vintage Toy 3",
        description: "A popular toy from the 80s.",
        price: "$30.00",
        imageUrl: "path_to_image3.jpg"
    }
];

const Products = (props) => {
    
    return (
        <div className="container mt-5">
            <Navbar />
            <h1>Products</h1>
            <div className="product-list">
                {dummyProducts.map(product => (
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
            < Footer />
        </div>
    );
}

export default Products;
