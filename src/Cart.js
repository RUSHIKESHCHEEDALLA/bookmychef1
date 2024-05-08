import { useContext, useEffect, useState } from 'react'
import SingleProduct from './SingleProduct'
import { Cart } from './Context';
const CartPage = () => {
  const {cart}=useContext(Cart)
  const [total,setTotal]=useState();
  useEffect(()=>{
    setTotal(cart.reduce((acc,curr)=>acc+Number(curr.price),0));
  },[cart]);
  return (
    <div>
      <center>
        <h1>CART PAGE</h1>
        <h2>TOTAL PRICE : ${total}</h2>
        <div className='productContainer'>
          {cart.map((prod)=>(
            <SingleProduct prod={prod} key={prod._id.$oid}/>
          ))}
        </div>
      </center>
    </div>
  )
}

export default CartPage
