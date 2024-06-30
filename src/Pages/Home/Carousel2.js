import { useRef, useState } from "react";
import { Link } from 'react-router-dom';
import "./Carousel2.css";

const Carousel2 = ({ images }) => {
    const carousel = useRef();
    const [count, setCount] = useState(0);

    const incrementCarousel = delta => {
        if (!carousel.current) return;

        const width = carousel.current.offsetWidth;
        
        if (count + delta > images.length - 1) {
            setCount(0);
            carousel.current.scrollTo(0, 0);
            return;
        } else if (count + delta < 0) {
            setCount(images.length - 1);
            carousel.current.scrollTo( width * images.length - 1, 0);
            return;
        }
        
        carousel.current.scrollTo(
            carousel.current.scrollLeft + width * delta, 
            0
        );
        setCount(c => c + delta);
    };

    return (
        <div className="carousel-frame">
            <div className="carousel-container">
                <div className="carousel-btn left-btn" onClick={() => incrementCarousel(-1)}></div>
                <div className="carousel-btn right-btn" onClick={() => incrementCarousel(1)}></div>
                <div className="carousel" ref={carousel}>
                    {images.map((img, idx) => (
                        <div className="carousel-item" key={`${idx}-${img.title}`}>
                            <img src={img.image} alt="imng of carousel" />
                            <div className="carousel-item-overlay">
                                <div className="carousel-item-overlay-wrapper">
                                    <div className="image-overlay"></div>
                                </div>
                                <div className="carousel-item-content">
                                    <h1>{img.title}</h1>
                                    <p>{img.description}</p>
                                    <Link key={img.key} to={img.link} ><button>Visit</button></Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Carousel2;