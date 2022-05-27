import React  from "react";
import Navbar from "./Component/Navbar"
import Home_section from "./Component/Home_section";
import Dishes from "./Component/Dishes";
import Dishes_heading from "./Component/Dishes_heading";
import About from "./Component/About";
import Menu_heading from "./Component/Menu_heading";
import Menu from "./Component/Menu";
import Review from "./Component/Review";
import Review_heading from "./Component/Review_heading";
import Order from "./Component/Order";
import Footer from "./Component/Footer";
import Search from "./Component/Search";
import TodoL from "./Component/TodoL";
import Dishimg from "./ImgComponents/DishImg";
import Menuimg from "./ImgComponents/MenuImg";






const dishes ={
  display : 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap'
}

function dishpart(val){
  return(
    <Dishes imgsrc= {val.imgurl} />
  );

}
function menupart(val){
  return(<Menu imgsrc= {val.imgurl}/>);
}




  export default function App() { 
  return (
  <>
  <Navbar />
  <Home_section />
  <Search />
  <Dishes_heading />
  <div style={{display : 'flex' ,justifyContent: 'space-around',flexWrap: 'wrap'}}>
  {Dishimg.map(dishpart)};
  </div>
  <About />
  <Menu_heading />
  <div style={{display : 'flex' ,justifyContent: 'space-around',flexWrap: 'wrap'}}>
  {Menuimg.map(menupart)};
  </div>
  <Review_heading />
  <TodoL />
  <Review imgsrc="../Images/EHAAB.jpeg" name="EHAB"  />
  <Review imgsrc="../Images/EIFA.jpeg" name="EIFA" />
  <Review imgsrc="../Images/DAWOOD.jpeg" name="DAWOOD"  />
  <Order />
  <Footer />
 

   </>
  );
}


