import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const dummyProducts = [
    {
        id: 1,
        name: "Vintage Toy 1",
        description: "A classic toy from the 80s.",
        price: "20.00",
        imageUrl: "path_to_image1.jpg"
    },
    {
        id: 2,
        name: "Vintage Toy 2",
        description: "A popular toy from the late 80s.",
        price: "25.00",
        imageUrl: "path_to_image2.jpg"
    },
    {
        id: 3,
        name: "Vintage Toy 3",
        description: "A popular toy from the 80s.",
        price: "30.00",
        imageUrl: "path_to_image3.jpg"
    }
];

const Products = (props) => {

    const addToCart = (product) => {
        // Récupérez le panier du local storage
        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        // Vérifiez si le produit est déjà dans le panier
        let cartItem = cart.find(item => item.id === product.id);

        if (cartItem) {
            // Si le produit est déjà dans le panier, augmentez sa quantité
            cartItem.quantity += 1;
        } else {
            // Sinon, ajoutez le produit au panier avec une quantité de 1
            product.quantity = 1;
            cart.push(product);
        }

        // Sauvegardez le panier dans le local storage
        localStorage.setItem("cart", JSON.stringify(cart));
    }

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
                                <p className="card-text"><strong>{product.price} $</strong></p>
                                <button className="btn btn-primary" onClick={() => addToCart(product)}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default Products;
