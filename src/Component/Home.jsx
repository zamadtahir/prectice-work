import React ,  { createContext } from "react"
import Dishimg from "../ImgComponents/DishImg";
import Menuimg from "../ImgComponents/MenuImg";
import About from "./About";
import Dishes from "./Dishes";
import DisheshHeading from "./DishesHeading";
import Footer from "./Footer";
import Menu from "./Menu";
import MenuHeading from "./MenuHeading";
import Order from "./Order";
import Review_heading from "./Review_heading";
import Search from "./Search";
import Revew from "./Revew";
import Review from "./Review";
import Navbar from "./Navbar";


const PushToCart = createContext();


const dishes = {
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap'
}

function dishpart(val) {
  return (
    <Dishes imgsrc={val.imgurl} />
  );

}
function menupart(val) {
  return (
  <Menu imgsrc={val.imgurl} />);
}
 export default function Home() {
     return(
<>
<section className="home home-bg" id="home" >

   <div className="home container">
     <div className="col-3">
       <h1>Today's Special</h1> <br />
       <h3>cooked with love</h3><br />
       <p> We source our quality ingredients from local suppliers and the world's most trusted brands.
        Food Safety Keeping our food and guests safe</p>

       <a href="#order"> <button className="btn" >order now</button> </a>
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
 <Navbar />
 <Search />
 <DisheshHeading />
 <PushToCart.Provider value= {"cartItems"}>
      <div style={dishes}>
        {Dishimg.map(dishpart)} ;
      </div>
  </PushToCart.Provider>
  <About />
  <MenuHeading />
      <div style={dishes}>
        {Menuimg.map(menupart)};
      </div>
  <Review_heading />
  <Revew />
  <Review imgsrc="../Images/EHAAB.jpeg" name="EHAB" />
  <Review imgsrc="../Images/EIFA.jpeg" name="EIFA" />
  <Review imgsrc="../Images/DAWOOD.jpeg" name="DAWOOD" />
  <Order />
  <Footer />
</>





     )



 }

 export {PushToCart} ;


