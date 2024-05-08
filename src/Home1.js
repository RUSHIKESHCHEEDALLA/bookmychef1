import React, { useContext, useState } from 'react'
import menu from './menu.json';
import Single from './SingleProduct';
import { Cart } from './Context';
import './App.css'
import { useNavigate } from 'react-router-dom';
import logo1 from './logo1.jpg'

function Header() {
    const {cart}=useContext(Cart);
    const navigate=useNavigate();
    function clicklogut() {
        navigate("/cart");
    }
    return (
      <header className="header">
        <div className="logo-container">
          <img src={logo1} alt='YourPhoto' className="logo"></img>
          <h1>Pick Your Menu</h1>
        </div>
        <button className="right-corner-button" onClick={clicklogut}>CART({cart.length})</button>
      </header>
    );
  }
const Home = () => {
  const productsArray=menu;
  const [products]=useState(productsArray);
  console.log(useContext(Cart));
  return (
    <div>
      <Header/>
      <div className='productContainer'>
        {products.map((prod)=>(
          <Single prod={prod} key={prod._id.$oid}/>
        ))}
      </div>

    </div>
  )
}

export default Home
