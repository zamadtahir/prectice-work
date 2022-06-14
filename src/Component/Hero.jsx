import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Hero(){
    return(
        <>
            <section className="home home-bg" id="home" >

<div className="home container">
  <div className="col-3">
    <h1>Today's Special</h1> <br />
    <h3>cooked with love</h3><br />
    <p> We source our quality ingredients from local suppliers and the world's most trusted brands.
     Food Safety Keeping our food and guests safe</p>

    <a href="#order"> <button className="butn" >order now</button> </a>
  </div>

    
<div className="col-7">
<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
<div className="carousel-inner">
 <div className="carousel-item swiper-slide active">
   <img src="images/menu7.jpg" className="d-block w-100" alt="today speacile dish" />
 </div>
 <div className="carousel-item swiper-slide">
   <img src="images/image2.jpeg" className="d-block w-100" alt="today speacile dish" />
 </div>
 <div className="carousel-item swiper-slide">
   <img src="images/menu9.jpg" className="d-block w-100" alt="today speacile dish"  />
 </div>
</div>
<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
 <span className="carousel-control-prev-icon" aria-hidden="true"></span>
 <span className="visually-hidden">Previous</span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
 <span className="carousel-control-next-icon" aria-hidden="true"></span>
 <span className="visually-hidden">Next</span>
</button>
</div>
</div>
<div className="col-2"></div>
</div>
</section>
        </>
    )
}