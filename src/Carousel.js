import { useRef, useState } from "react";
import Noteworthy from './Noteworthy';
import "./Carousel.css";

const Carousel = ({ images }) => {
    const carousel = useRef();
    const [count, setCount] = useState(0);

    const incrementCarousel = (delta) => {
        if(!carousel.current) return;

        const width = carousel.current.offsetWidth;

        if(count + delta > images.length - 1) {
        setCount(0);
        carousel.current.scrollTo(0, 0);
        return;
        } 
        else if (count + delta < 0) {
            setCount(images.length - 1);
            carousel.current.scrollTo( width * images.length -1, 0);
            return;
        }

        carousel.current.scrollTo(
            carousel.current.scrollLeft + width * delta,
            0
        );
        setCount(c => c + delta);
    }

    return (
      <div className="carousel-frame">
        <div className="carousel-frame-content">
          <div className="carousel" ref={carousel}>
              {images.map((img, idx) => (
                <div className="carousel-item" key={`${idx}-${img.title}`}>
                  <Noteworthy image={img.image} />
                </div>
              ))}
          </div>
          <div className="carousel-container">
            <div className="carousel-container-2">
              <div className="carousel-overlay"></div>
              <div className="carousel-btn left-btn" onClick={() => incrementCarousel(-1)}/>
              <div className="carousel-btn right-btn" onClick={() => incrementCarousel(1)}/>
            </div>
            <div className="carousel-container-content">
                <h1>Pallets</h1>
                <p>Frontend developer tool to create color themes</p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Carousel;