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
          <a class="logo" href="#"><i class="fas fa-utensils"></i>Stiller's</a>
          <img class="logo-img" src="images/images-removebg-preview1.png" alt="" />
     </div>

     <div>
      <nav class="navbar">
        <a href="#home">home</a>
        <a href="#dishes">dishes</a>
        <a href="#about">about</a>
        <a href="#menu">menu</a>
        <a href="#review">review</a>
        <a href="#order">order</a>
        </nav>
     </div>
      
     <div class="icons">
        <i class="fas fa-bars" id="menu-bars" onClick={menuTogle}></i>
        <i class="fas fa-search" id="search-icon" onClick={searchToggle}></i>
        <a href="#" class=" fas fa-heart"></a>
        <a href="#" class=" fas fa-shopping-cart"></a>
        <a class="fas fa-user" href="login.html"></a>
     </div>

    
  </header>
    
    )
     
}