import React, { useContext } from "react";
import Modal from "./UI/Modal";
import { currencyFormtator } from "../utility/formatting";
import Input from "./UI/Input";
import Button from "./UI/Button";
import UserProgressContext from "./Store/UserProgressContext";
import CartContext from "./Store/CartContext";

function Checkout() {
  const cartCtx = useContext(CartContext);
  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );
  const userProgressCtx = useContext(UserProgressContext);
  const hideCheckoutHandler = () => {
    userProgressCtx.hideCheckout();
  };
  const submithandler = (event) => {
    event.preventDefault();
    const fd = new FormData(event.target);
    const customerData = Object.fromEntries(fd.entries());
   const  uploadData={
      order: {
        items: cartCtx.items,
        customer: customerData,
      }
    }
    console.log(uploadData)
    fetch("http://localhost:3000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(uploadData),
    });
  };

  return (
    <Modal
      open={userProgressCtx.progress === "checkout"}
      onClose={hideCheckoutHandler}
    >
      <form onSubmit={submithandler}>
        <h2>Checkout</h2>
        <p>total amount : {currencyFormtator.format(cartTotal)}</p>
        <Input label="Full Name" type="text" id="name" />
        <Input label="Email" type="emai;" id="email" />
        <Input label="Street " type="text" id="street" />
        <div>
          <Input label="Postal code" type="number" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>
        <p className="modal-actions">
          <Button type="button" textOnly onClick={hideCheckoutHandler}>
            Close
          </Button>
          <Button>Submit Order</Button>
        </p>
      </form>
    </Modal>
  );
}

export default Checkout;
