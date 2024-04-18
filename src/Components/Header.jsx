import React, { useContext } from 'react'
import"../index.css"
import Button from './UI/Button'
import logo from "../assets/logo.jpg"
import CartContext from './Store/CartContext'
import UserProgressContext from './Store/UserProgressContext'
function Header() {
  const cartctx= useContext(CartContext)
  const userProgressCtx= useContext(UserProgressContext)
  const totalCartItems=cartctx.items.reduce((totalnumber,item)=>{ 
    return totalnumber+item.quantity;
  },0)

  function showCartHandler(){
    userProgressCtx.showCart();
    console.log("clicked open")
  }
  return (
    <header id= "main-header">
        <div id="title">
            <img src={logo} alt="logo food"/>
            <h1>React Food</h1>
        </div>
        <nav>
            <Button textOnly onClick={showCartHandler}>cart({totalCartItems} ) </Button>
        </nav>
    </header>

  )
}

export default Header;
