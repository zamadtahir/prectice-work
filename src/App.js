import React, { createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Login from "./login/Login";
import ShopingCart from "./Component/ShopingCart";


export default function App() {
  
  return (

    <>
    
      <BrowserRouter>
        <Routes>
          <Route path={ "/"}  exact element={<Home />} />
          <Route path="/shopingcart" element={<ShopingCart />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>


    </>
  );
}


