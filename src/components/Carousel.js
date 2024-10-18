import { useEffect, useState, useRef, useCallback } from "react";
import "../style/Carousel.css";

function Carousel({ images }) {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const timeOutRef = useRef(null);

  const slideRight = useCallback(() => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  const slideLeft = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (autoPlay) {
      timeOutRef.current = setTimeout(() => {
        slideRight();
      }, 2500);
    }

    return () => clearTimeout(timeOutRef.current);
  }, [autoPlay, slideRight]);

  return (
    <div
      className="carousel"
      onMouseEnter={() => {
        setAutoPlay(false);
        clearTimeout(timeOutRef.current);
      }}
      onMouseLeave={() => setAutoPlay(true)}
    >
      <div className="carousel_wrapper">
        {images.map((image, index) => (
          <div
            key={index}
            className={
              index === current
                ? "carousel_card carousel_card-active"
                : "carousel_card"
            }
          >
            <img className="card_image" src={image.image} alt="" />
            <div className="card_overlay">
              <h2 className="card_title">{image.title}</h2>
            </div>
          </div>
        ))}
        <div className="carousel_arrow_left" onClick={slideLeft}>
          &lsaquo;
        </div>
        <div className="carousel_arrow_right" onClick={slideRight}>
          &rsaquo;
        </div>
        <div className="carousel_pagination">
          {images.map((_, index) => (
            <div
              key={index}
              className={
                index === current
                  ? "pagination_dot pagination_dot-active"
                  : "pagination_dot"
              }
              onClick={() => setCurrent(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
