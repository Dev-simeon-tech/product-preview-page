import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectCartItems } from "../../store/cart-store/cart.selector";
import { selectCartQuantity } from "../../store/cart-store/cart.selector";
import { addItemToCart } from "../../store/cart-store/cart.action";
import ProductQuantity from "../product-quantity/product-quantity.component";
import Button from "../button/button.component";
import "./product-info.styles.scss";

import productImage from "../../assets/images/image-product-1-thumbnail.jpg";

const product = {
  id: 1,
  name: "Fall Limited Edition Sneakers",
  price: 125,
  discount: 50,
  oldPrice: 250.0,
  imgUrl: productImage,
};

const ProductInfo = () => {
  const defaultQuantity = useSelector(selectCartQuantity);
  const initalQuantity = defaultQuantity ? defaultQuantity : 0;
  const [productQuantity, setProductQuantity] = useState(initalQuantity);
  const cartItems = useSelector(selectCartItems);
  const dispact = useDispatch();

  const addProductToCartHandler = () => {
    if (productQuantity === 0) {
      setProductQuantity(1);
    }
    dispact(addItemToCart(cartItems, product, productQuantity));
  };
  return (
    <article className='product-info'>
      <h1>Sneaker Company</h1>
      <h2>{product.name}</h2>
      <p className='product-description'>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className='product-pricings'>
        <p className='main-price'>
          ${product.price}.00{" "}
          <span className='discount'>{product.discount}%</span>
        </p>
        <p className='old-price'>${product.oldPrice}.00</p>
      </div>
      <div className='product-info__footer'>
        <ProductQuantity
          product={product}
          productQuantity={productQuantity}
          setProductQuantity={setProductQuantity}
        />
        <Button onClick={addProductToCartHandler}>
          <svg width='22' height='20' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z'
              fill='hsl(220, 13%, 13%)'
              fill-rule='nonzero'
            />
          </svg>
          <p>Add to cart</p>
        </Button>
      </div>
    </article>
  );
};

export default ProductInfo;
