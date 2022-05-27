import React from "react";

 export default function Navbar(){
     const menuTogle = () => {
    let menu = document.querySelector('#menu-bars');
    let navbar = document.querySelector('.navbar');
    menu.onclick = () =>{
        menu.classList.toggle('fa-times');
        navbar.classList.toggle('active');
    }
}

const searchToggle = () =>{

    let menu

    window.onscroll =() =>{
        menu.classList.remove('fa-times');
        menu.classList.remove('active');
        
      }
      
      document.querySelector('#search-icon') .onclick =() => {
        document.querySelector('#search-form').classList.toggle('active');
      }
      document.querySelector('#close').onclick = () => {
        document.querySelector('#search-form').classList.remove('active');
      }
}
  
    return(
        
     <header>
      <div>
          <a className="logo" href="#"><i className="fas fa-utensils"></i>Stiller's</a>
          <img className="logo-img" src="images/images-removebg-preview1.png" alt="" />
     </div>

     <div>
      <nav className="navbar">
        <a href="#home">home</a>
        <a href="#dishes">dishes</a>
        <a href="#about">about</a>
        <a href="#menu">menu</a>
        <a href="#review">review</a>
        <a href="#order">order</a>
        </nav>
     </div>
      
     <div className="icons">
        <i className="fas fa-bars" id="menu-bars" onClick={menuTogle}></i>
        <i className="fas fa-search" id="search-icon" onClick={searchToggle}></i>
        <a href="#" className=" fas fa-heart"></a>
        <a href="#" className=" fas fa-shopping-cart"></a>
        <a className="fas fa-user" id="login-icon" href="#loginForm" onClick={loginToggle} ></a>
     </div>

    
  </header>
    
    )
     
}