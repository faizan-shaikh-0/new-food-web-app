import Header from "./Components/Header";
import Meals from "./Components/Meals";
import  {CartContextProvider}  from "./Components/Store/CartContext";
import CartContext from "./Components/Store/CartContext";
import { UserProgressContextProvider } from "./Components/Store/UserProgressContext";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";

function App() {
  return (
    <UserProgressContextProvider>
   <CartContextProvider>
    <Header/>
     <Meals/>  
     <Cart/>
     <Checkout/>
     </CartContextProvider>
     </UserProgressContextProvider>
  );
}

export default App;