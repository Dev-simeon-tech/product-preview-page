import { useDispatch, useSelector } from "react-redux";

import { removeItemFromCart } from "../../store/cart-store/cart.action";
import { selectCartItems } from "../../store/cart-store/cart.selector";

import deleteIcon from "../../assets/images/icon-delete.svg";
import "./cart-item.styles.scss";
import { use } from "react";

const CartItem = ({ product }) => {
  const { name, price, quantity, imgUrl } = product;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const removeProductHandler = () => {
    dispatch(removeItemFromCart(cartItems, product));
  };
  return (
    <div className='cart-item-container'>
      <div className='cart-item-image'>
        <img src={imgUrl} alt='' />
      </div>
      <div className='cart-item-details'>
        <h3>{name}</h3>
        <p>
          ${price}.00 x {product.quantity}{" "}
          <span className='total'>${price * quantity}.00</span>{" "}
        </p>
      </div>
      <button onClick={removeProductHandler} className='delete-icon'>
        <img src={deleteIcon} alt='delete item from cart' />
      </button>
    </div>
  );
};

export default CartItem;
