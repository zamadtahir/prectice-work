import React from "react";
import Stars from "./Stars";

export default function Revies(props){
    return(<>
        <section className="review" id="review">
   <div className=" swiper-container review-slider">
    <div className="swiper-wrapper">
      <div className="swiper-slide slide">
        <div className="coustmer">
          <img src={props.imgsrc} alt="customers img" />
          <div className="coustmer-info">
          <h3>{props.name}</h3>
              <Stars />
          </div>
        </div>
        <p> lorem ispm dollar sit amit aalo kachalo miyan sab theek thaak gajar b theek moli b fit bhindi nakhreli.</p>
      </div>
      
      </div>
      </div>
      </section>
    </> 
    )
}