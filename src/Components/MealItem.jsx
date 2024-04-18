import React from 'react'
import'../index.css'
import Button from './UI/Button';
import { useContext } from 'react';
import CartContext from './Store/CartContext';
import { currencyFormtator } from '../utility/formatting';
export default function MealItem({meal}) {
  const cartCtx=useContext(CartContext);
  function handleAddMealToCart() {
    cartCtx.addItem(meal);
    
  }
  return (
    <li className="meal-item">
    <article>
        <div>
        <img src={`http://localhost:3000/${meal.image}`}alt={meal.name}/>
            <h3>{meal.name}</h3>
            <p className="meal-item-price">{currencyFormtator.format(meal.price)}</p>
            <p className="meal-item-description">{meal.description}</p>
        </div>
        <p className="meal-item-actions">
            <Button onClick={handleAddMealToCart}>
                Add to Cart
            </Button>
        </p>
    </article>
    </li>
  )
}