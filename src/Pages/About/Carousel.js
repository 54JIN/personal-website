import { useEffect, useState } from "react";

import "./Carousel.css";

function Carousel({ Contents }) {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  let timeOut = null;

  useEffect(() => {
    timeOut =
      autoPlay &&
      setTimeout(() => {
        slideRight();
      }, 6000);
  });

  const slideRight = () => {
    setCurrent(current === Contents.length - 1 ? 0 : current + 1);
  };

  const slideLeft = () => {
    setCurrent(current === 0 ? Contents.length - 1 : current - 1);
  };

  return (
    <div className="Carousel-blueprint-Frame">
      <div
        className="Carousel-blueprint"
        onMouseEnter={() => {
          setAutoPlay(false);
          clearTimeout(timeOut);
        }}
        onMouseLeave={() => {
          setAutoPlay(true);
        }}
      >
        <div className="Carousel-blueprint-Wrapper">
          {Contents.map((card, idx) => {
            return (
              <div
                key={idx}
                className={
                  idx === current
                    ? "Carousel-blueprint-Card Carousel-blueprint-Card-Active"
                    : "Carousel-blueprint-Card"
                }
              >
                <div className="Card-blueprint-Overlay">
                  <div className="Card-blueprint-Overlay-Content">
                    <h2 className="Card-blueprint-Title">{card.title}</h2>
                    <p className="Card-blueprint-Description">{card.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="Carousel-blueprint-Pagination">
            {Contents.map((_, idx) => {
              return (
                <div
                  key={idx}
                  className={
                    idx === current
                      ? "Pagination-blueprint-Dot Pagination-blueprint-Dot-Active"
                      : "Pagination-blueprint-Dot"
                  }
                  onClick={() => setCurrent(idx)}
                ></div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
