import React from "react";

export default function About(){
    return(<>
    <section className="about" id="about">
    <h3 className="sub-heading"> about us</h3>
    <h1 className="heading">why choose us?</h1>
    <div className="row">
    <div className="image">
    <img className="about-img" src={process.env.PUBLIC_URL + "/Images/gallery1.png"} alt="about img" />
    </div>
    <div className="about-content">
        <h3> best food in countery</h3>
        <p> The founder of the stiller's system was a chef family  who introduced a new kind of dessert treats , fast food and, in the process, developed the foundation of the franchising industry. The history of the steller system is a story of a unique product that created an industry.</p>
        <p>Award Winning Cakes, Cupcakes, Cake Pops, Cookies, and More!<br/>
           The Stiller's is an award winning bakery that specializes in custom desserts for any occasion including cakes, cupcakes, cake pops, cookies, macarons and more.
           We are in our 17th year of business and have a talented group of artistic staff who are ready to help you with your special event. </p>
        <p>The stiller's offers custom made unique cakes for special occasions such as birthdays, anniversaries and other special events.We book up quickly for special events.</p>
      
  
    <div className="icons-container">
    <div className="icons">
      <i className="fas fa-shipping-fast"></i>
      <span>free delevery</span>
    </div>
  
    <div className="icons">
      <i className="fas fa-dollar-sign"></i>
      <span>easy payment</span>
    </div>
  
    <div className="icons">
      <i className="fas fa-headset"></i>
      <span>24/7 avalbel</span>
    </div>
  </div>
  <a href="#" className="butn">learn more</a>
  
      
      </div>
    </div>
  </section></>)
}