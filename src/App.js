import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Login from "./login/Login";
import Cart from "./Component/Cart";


export default function App() {
  const [cart , setCart] = useState ([]);

  const handleClick = (item) =>{

     cart.push(item);
     console.log(cart);
     const handleClick = (item) => {
      setCart([...cart,item]);
     }
  };
  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };
  
  
  return (

    <>
    
      <BrowserRouter>
        <Routes>
          <Route path={ "/"}  exact element={<Home />} />
          <Route path="/cart" element={ <Cart  cart={cart} setCart={setCart} handleChange={handleChange}  />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>


    </>
  );
}


