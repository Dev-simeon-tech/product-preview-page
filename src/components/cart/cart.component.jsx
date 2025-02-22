import { useEffect } from "react";
import { useSelector } from "react-redux";

import { selectCartItems } from "../../store/cart-store/cart.selector";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import "./cart.styles.scss";

const Cart = ({ cartVisibility, setCartVisibility }) => {
  const cartItems = useSelector(selectCartItems);

  useEffect(() => {
    const handleClickOutsideCart = (e) => {
      if (
        e.target.closest(".cart-container") ||
        e.target.closest(".cart-icon-container")
      )
        return;
      setCartVisibility(false);
    };
    cartVisibility
      ? document.addEventListener("click", handleClickOutsideCart)
      : document.removeEventListener("click", handleClickOutsideCart);

    return () => {
      document.removeEventListener("click", handleClickOutsideCart);
    };
  }, [cartVisibility]);

  return (
    <div className='cart-container'>
      <div className='cart-container__header'>
        <h3>Cart</h3>
      </div>
      <div
        style={{ height: cartItems.length ? "fit-content" : "10rem" }}
        className='cart-container__main'
      >
        {cartItems.length ? (
          <>
            {cartItems.map((cartItem) => (
              <CartItem key={cartItem.id} product={cartItem} />
            ))}
            <Button>Checkout</Button>
          </>
        ) : (
          <p className='empty-message'>Your cart is empty</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
