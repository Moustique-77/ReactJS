import React, { useState, useEffect, useMemo } from 'react';

const Carousel = () => {
    const [current, setCurrent] = useState(0);
    const images = useMemo(() => [
        "jouet_arbre.png",
        "jouet_caisse.png",
        "jouet_chien.png",
    ], []);

    useEffect(() => {
        const autoSlide = setInterval(() => {
            setCurrent(prevCurrent => prevCurrent === images.length - 1 ? 0 : prevCurrent + 1);
        }, 5000);

        return () => clearInterval(autoSlide);
    }, [images]);

    const nextSlide = () => {
        setCurrent(prevCurrent => prevCurrent === images.length - 1 ? 0 : prevCurrent + 1);
    };

    const prevSlide = () => {
        setCurrent(prevCurrent => prevCurrent === 0 ? images.length - 1 : prevCurrent - 1);
    };

    return (
<div className="carousel">
            <button onClick={prevSlide} className="carousel-btn prev">‹</button>

            {images.map((img, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {index === current && (<img src={`${process.env.PUBLIC_URL}/Images/${img}`} alt="Carousel" className="carousel-image"/>)}
                    </div>
                );
            })}

            <button onClick={nextSlide} className="carousel-btn next">›</button>
        </div>
    );
}

export default Carousel;
