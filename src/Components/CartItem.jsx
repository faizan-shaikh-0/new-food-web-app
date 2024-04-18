import React from 'react'
import { currencyFormtator } from '../utility/formatting';

function CartItem({name,quantity,price,onIncrease,onDecrease}) {
  return (
    <li className='cart-item'>
        <p>
            {name} {currencyFormtator.format(price)}x{quantity}
        </p>
        <p className='cart-item-actions'>
            <button onClick={onDecrease}>-</button>
            <span>{quantity}</span>
            <button onClick={onIncrease}>+</button>
        </p>
    </li>
  )
}

export default CartItem;
