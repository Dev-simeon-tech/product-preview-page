import { useState } from "react";

import "./App.css";

import Navigation from "./components/navigation/navigation.component";
import Carousel from "./components/carousel/carousel.component";
import ProductInfo from "./components/product-info/product-info.component";
import Lightbox from "./components/lightbox/lightbox.component";

function App() {
  const [lightboxVisibility, setLightboxVisibility] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const toggleLightbox = () => {
    setLightboxVisibility(!lightboxVisibility);
  };
  return (
    <>
      <Navigation />
      <div className='main-content'>
        <Carousel
          toggleLightbox={toggleLightbox}
          imageIndex={imageIndex}
          setImageIndex={setImageIndex}
        />
        <ProductInfo />
      </div>
      {lightboxVisibility && (
        <Lightbox toggleLightbox={toggleLightbox} initialIndex={imageIndex} />
      )}
    </>
  );
}

export default App;
