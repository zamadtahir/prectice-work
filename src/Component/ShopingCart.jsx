import React from "react";
import { PushToCart } from "./Home";
import {Link} from "react-router-dom";

export default function ShopingCart () {

    return(
        <>
        <PushToCart.Consumer>{(cartItems) => {
            return (
    

                 <h1> here your {cartItems} </h1>
            )

        }}</PushToCart.Consumer>
          
        </>
    );
}