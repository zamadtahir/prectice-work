import React from "react";
import {Link} from "react-router-dom";
import "../index.css";

export default function Cart () {

    return(
        <>
         <header>
        <div>
        <Link to="/"  className="logo"><i className="fas fa-utensils"></i>Stiller's</Link>
        <img className="logo-img" src="images/images-removebg-preview1.png" alt="" />
      </div>
        </header>
      <section className="shoping-cart">
      <h1>cart items</h1>
      </section>
          
        </>
    );
}