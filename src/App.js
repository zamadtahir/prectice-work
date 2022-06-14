import React, { createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Login from "./login/Login";
import Cart from "./Component/Cart";


export default function App() {
  
  return (

    <>
    
      <BrowserRouter>
        <Routes>
          <Route path={ "/"}  exact element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>


    </>
  );
}


