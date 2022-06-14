import React ,  { useState } from "react"
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
import Hero from "./Hero";
import DishesOne from "./DishesOne";




const dishes = {
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap'
}

// function dishpart(val) {
//   return (
//     <Dishes key={val.id} imgsrc={val.imgurl} />
//   );

// }
function menupart(val) {
  return (
  <Menu key={val.id} imgsrc={val.imgurl} />);
}
 

  export default function Home(){
    const [cart , setCart] = useState ([]);

    const handleClick = (item) =>{

       cart.push(item);
       console.log(cart);
       const handleClick = (item) => {
        setCart([...cart,item]);
       }
    };
     return(
<>
<Hero />
 <Navbar />
 <Search /> 
  <DisheshHeading />
      {/* <div style={dishes}>
        {Dishimg.map(dishpart)} ;
      </div> */}
      <DishesOne handleClick={handleClick} />
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



