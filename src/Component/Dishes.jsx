import React from "react";
import Stars from "./Stars";


export default function Dishes(props )
{

    return(
        <>
        <section className="dishes" >
        <div className="box-container">
        <div className="box">
                 <a href="#" className="fas fa-heart"></a>
                 <a href="#" className="fas fa-eye"></a>
                 <img className="dish-img" src={props.imgsrc}  alt="dish-img" />
                 <h3> cookd with love</h3>
              <Stars />
                 <span className="price">$9.99</span>
                 <a href="#" className="btn menu-dish-btn" > add to cart</a>
       </div>
       </div>
       </section> </>
     
    )
}