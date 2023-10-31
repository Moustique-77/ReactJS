import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Carousel from './Carrousel';

const Home = () => {

    return (
        <div className="container mt-5">
            <Navbar />
            <h1>Welcome to Vintage Toys!</h1>
            <p>Discover our exclusive collection of vintage toys from the 1980s.</p>
            <Carousel />
            <div className="content">
                <h2>Why Vintage Toys?</h2>
                <p>Vintage toys are not just playthings; they are a trip down memory lane. They remind us of a simpler time when imagination was the only limit. Dive into our collection and relive the magic of childhood.</p>
                <h2>Our Collection</h2>
                <p>We have a wide range of toys from action figures to board games. Each toy tells a story, waiting to be rediscovered by you.</p>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
