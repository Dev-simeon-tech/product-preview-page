import { useContext, useState } from "react";

import "./lightbox.styles.scss";
import { images } from "../carousel/carousel.component";

const Lightbox = ({ toggleLightbox, initialIndex }) => {
  const [imageIndex, setImageIndex] = useState(initialIndex);
  const nextImageHandler = () => {
    const newIndex = imageIndex === images.length - 1 ? 0 : imageIndex + 1;
    setImageIndex(newIndex);
  };
  const previousImageHandler = () => {
    const newIndex = imageIndex === 0 ? images.length - 1 : imageIndex - 1;
    setImageIndex(newIndex);
  };
  const updateImageIndex = (index) => {
    setImageIndex(index);
  };

  const toggleLightboxHandler = (e) => {
    if (e.target.classList.contains("lightbox-container")) {
      toggleLightbox();
    }
  };

  return (
    <div className='lightbox-container' onClick={toggleLightboxHandler}>
      <div className='carousel-container'>
        <button className='close-lightbox-icon' onClick={toggleLightbox}>
          <svg width='14' height='15' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z'
              fill='#69707D'
              fill-rule='evenodd'
            />
          </svg>
        </button>
        <button
          className='carousel-controller prev'
          onClick={previousImageHandler}
        >
          <svg width='12' height='18' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M11 1 3 9l8 8'
              stroke='#1D2026'
              stroke-width='3'
              fill='none'
              fill-rule='evenodd'
            />
          </svg>
        </button>
        <div className='image-container'>
          {images.map((image, index) => (
            <img
              key={`product-image-${index}`}
              className='carousel-img'
              src={image.imageUrl}
              style={{ transform: `translateX(-${100 * imageIndex}%)` }}
              alt={`product-image-${index}`}
            />
          ))}
        </div>

        <button className='carousel-controller next' onClick={nextImageHandler}>
          <svg width='13' height='18' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='m2 1 8 8-8 8'
              stroke='#1D2026'
              stroke-width='3'
              fill='none'
              fill-rule='evenodd'
            />
          </svg>
        </button>

        <div className='thumbnail-container '>
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => updateImageIndex(index)}
              className={`thumbnail-img-cont ${
                imageIndex === index ? "active" : ""
              }`}
            >
              <img
                key={`product-thumbnail-${index}`}
                className={`thumbnail-img `}
                src={image.thumbnailImg}
                alt={`product-thumbnail-${index}`}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
