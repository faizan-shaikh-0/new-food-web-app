import { useState } from "react";
import { createContext } from "react";

 const UserProgressContext=createContext({
    progress:"",// cart or checkout
    showCart:()=>{},
    hideCart:()=>{},
    showCheckout:()=>{},
    hideCheckout:()=>{}
})
export function UserProgressContextProvider({children}){
    const [userProgress,setUserProgess]=useState("");
    const showCart=()=>setUserProgess("cart");
    const hideCart=()=>setUserProgess("")
    const showCheckout=()=>setUserProgess("checkout")
    const hideCheckout=()=>setUserProgess("")

    const userProgressContext={
        progress:userProgress,
        showCart,
        hideCart,
        showCheckout,
        hideCheckout
    }
    return(<UserProgressContext.Provider value={userProgressContext}>{children}</UserProgressContext.Provider>)
}
export default UserProgressContext;