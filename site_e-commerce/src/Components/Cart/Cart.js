import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

const Cart = () => {
    // Initialisation de l'état du panier avec le contenu du local storage
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem("cart");
        if (savedCart) {
            return JSON.parse(savedCart);
        } else {
            return [];
        }
    });

    // Calcul du total
    const total = cartItems.reduce((acc, item) => acc + parseFloat(item.price) * item.quantity, 0);

    useEffect(() => {
        // À chaque mise à jour du panier, sauvegardez-le à nouveau dans le local storage
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems]);

    const removeFromCart = (productId) => {
        // Récupérez le panier du local storage
        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        // Vérifiez si le produit est déjà dans le panier
        let cartItem = cart.find(item => item.id === productId);

        if (cartItem) {
            // Si le produit est déjà dans le panier, augmentez sa quantité
            cartItem.quantity -= 1;
        }

        // Sauvegardez le panier dans le local storage
        localStorage.setItem("cart", JSON.stringify(cart));

        // Mettre à jour l'état du panier
        setCartItems(cart);

        // Si la quantité du produit est égale à 0, supprimez-le du panier
        if (cartItem.quantity === 0) {
            // Récupérez le panier du local storage
            let cart = JSON.parse(localStorage.getItem("cart")) || [];

            // Supprimez le produit du panier
            cart = cart.filter(item => item.id !== productId);

            // Sauvegardez le panier dans le local storage
            localStorage.setItem("cart", JSON.stringify(cart));

            // Mettre à jour l'état du panier
            setCartItems(cart);
        }
    }    

    return (
        <div className="container mt-5">
            <Navbar />
            <h2>Your Cart</h2>
            <ul className="cart-list">
                {cartItems.map(item => (
                    <li key={item.id} className="cart-item">
                        <span className="item-name">{item.name} </span>
                        <span className="item-price">${parseFloat(item.price).toFixed(2)} </span>
                        <span className="item-quantity">x{item.quantity} </span>
                        <span className="item-total">${(parseFloat(item.price) * item.quantity).toFixed(2)} </span>
                        <button onClick={() => removeFromCart(item.id)} className="btn btn-danger btn-sm">Remove</button>
                    </li>
                ))}
            </ul>
            <div className="cart-total">
                <b>Total: ${total.toFixed(2)} </b>
            </div>
            <Footer />
        </div>
    );
}

export default Cart;
