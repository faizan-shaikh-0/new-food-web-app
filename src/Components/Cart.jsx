import React, { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "./Store/CartContext";
import { currencyFormtator } from "../utility/formatting";
import UserProgressContext from "./Store/UserProgressContext";
import Button from "./UI/Button";
import "../index.css";
import CartItem from "./CartItem";

export default function Cart() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);
  const totalCart = cartCtx.items.reduce((totalPrice, item) => {
    totalPrice + item.price * item.quantity;
  }, 0);
  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );
  function hideCartHandler() {
    userProgressCtx.hideCart();
  }
  function showCheckoutHandler(){
      userProgressCtx.showCheckout();
  }
  return (
    <Modal className="cart" open={userProgressCtx.progress === "cart"} onClose={userProgressCtx.progress === "cart"?hideCartHandler:null}>
      <h2>your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            onDecrease={() => cartCtx.removeItem(item.id)}
            onIncrease={() => cartCtx.addItem(item)}
          />
        ))}
      </ul>
      <p className="cart-total">{currencyFormtator.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={hideCartHandler}>
          Close
        </Button>
        { cartCtx.items.length>0 &&
        <Button onClick={showCheckoutHandler}>Checkout</Button>
        }
        </p>
    </Modal>
  );
}
