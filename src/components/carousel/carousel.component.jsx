import productImage_1 from "../../assets/images/image-product-1.jpg";
import productImage_2 from "../../assets/images/image-product-2.jpg";
import productImage_3 from "../../assets/images/image-product-3.jpg";
import productImage_4 from "../../assets/images/image-product-4.jpg";

import productThumnail_1 from "../../assets/images/image-product-1-thumbnail.jpg";
import productThumnail_2 from "../../assets/images/image-product-2-thumbnail.jpg";
import productThumnail_3 from "../../assets/images/image-product-3-thumbnail.jpg";
import productThumnail_4 from "../../assets/images/image-product-4-thumbnail.jpg";

import "./carousel.styles.scss";
export const images = [
  {
    imageUrl: productImage_1,
    thumbnailImg: productThumnail_1,
  },
  {
    imageUrl: productImage_2,
    thumbnailImg: productThumnail_2,
  },
  {
    imageUrl: productImage_3,
    thumbnailImg: productThumnail_3,
  },
  {
    imageUrl: productImage_4,
    thumbnailImg: productThumnail_4,
  },
];

const Carousel = ({ toggleLightbox, imageIndex, setImageIndex }) => {
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
  return (
    <div className='carousel-container'>
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
      <div className='image-container' onClick={toggleLightbox}>
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
  );
};

export default Carousel;
