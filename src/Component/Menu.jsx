import React from "react"
import Stars from "./Stars"



export default function Menu(props){

  
    return(<>
        <section className="menu" id="menu">
   <div className="box-container">
     <div className="box">
       <div className="image">
         <img src={props.imgsrc} alt="dish img"/>
         <a href="#" className="fas fa-heart"></a>
       </div>
       <div className="menu-content">
         <Stars/>
         <h3>tasty & healthy fresh food</h3>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, voluptates!</p>
         <a href="#" className="butn">add to cart</a>
         <span className="price">9.99 pkr</span>
       </div>
     </div>
     </div>
     </section>
    </>)
}