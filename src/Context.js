import { createContext, useContext, useReducer } from "react";
import menu from './menu.json';
import { cartReducer } from "./Reducer";
const Cart =createContext();
const Context=({children})=>{
    const products=menu;
    //console.log(products)
    const [state,dispatch]=useReducer(cartReducer,{
        products:products,
        cart:[]
    })
    return <Cart.Provider value={{state,dispatch}}>{children}</Cart.Provider>
};
export default Context;

export const CartState=()=>{
    return useContext(Cart)
}

