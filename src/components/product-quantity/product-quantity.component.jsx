import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./product-quantity.styles.scss";
import { selectCartItems } from "../../store/cart-store/cart.selector";
import { updateQuantity } from "../../store/cart-store/cart.action";

import iconMinus from "../../assets/images/icon-minus.svg";
import iconPlus from "../../assets/images/icon-plus.svg";

const ProductQuantity = ({ product, productQuantity, setProductQuantity }) => {
  const cartItems = useSelector(selectCartItems);
  const dispact = useDispatch();

  const incrementQuantityHandler = () => {
    setProductQuantity((quantity) => quantity + 1);
  };
  const decrementQuantityHandler = () => {
    setProductQuantity((quantity) => (quantity === 0 ? 0 : quantity - 1));
  };
  useEffect(() => {
    dispact(updateQuantity(cartItems, product, productQuantity));
  }, [productQuantity]);

  return (
    <div className='product-quantity-container'>
      <button className='icon-minus' onClick={decrementQuantityHandler}>
        <img src={iconMinus} alt='add to quantity' />
      </button>

      <span>{productQuantity}</span>
      <button className='icon-plus' onClick={incrementQuantityHandler}>
        <img src={iconPlus} alt='remove from quantity' />
      </button>
    </div>
  );
};

export default ProductQuantity;
