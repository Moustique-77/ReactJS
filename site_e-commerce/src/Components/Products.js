import React, { useEffect } from 'react';

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
];

const Products = (props) => {

    // get first two products and pass them to parent component 
    useEffect(() => {
        const firstTwoProducts = dummyProducts.slice(0, 2); // get first two products
        props.getFeaturedProducts(firstTwoProducts); // pass first two products to parent component
    }, []);
    
    return (
        <div className="container mt-5">
            <h1>Products</h1>
            <div className="row">
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
        </div>
    );
}

export default Products;
