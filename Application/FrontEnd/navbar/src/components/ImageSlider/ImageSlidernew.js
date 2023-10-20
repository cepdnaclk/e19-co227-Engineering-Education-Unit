import React, { useState, useEffect, useRef } from 'react';
import './ImageSlider.css';
import image1 from '../../img/Home1.jpg';
import image2 from '../../img/Home2.jpg';
import image3 from '../../img/Home4.jpg';
import image4 from '../../img/Home5.jpg';

const images = [image1, image2, image3, image4]; // Store your image paths in an array
const delay = 10000;

function Slideshow() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}

      >
        {images.map((image, i) => (
          <img
            key={i}
            className="slide"
            src={image} // Use src attribute to display the image
            alt={`Slide ${i + 1}`}
          />
        ))}
      </div>

      <div className="slideshowDots">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? ' active' : ''}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Slideshow;
