import React  from "react";
import "./login.css"
import { Link } from "react-router-dom";


function logFunction(){
    var username = document.getElementById("userName").value;
    var Password = document.getElementById("userPwd").value;
if (username=="mudassir" && Password=="user"){

    alert(`"welcome" ${username}`)
   ;

}
else{
    alert("login fail");
}


}
var bRadios = 
{ borderRadius: "30px",
width: "85%",
padding:" 10px 30px",
cursor:" pointer",
display:" block",
margin:" auto",
background:"#27ae60 ",
border:" 0",
outline:" none",
}

export default function Login () {

var x = document.getElementById("login")
var y = document.getElementById("register")
var z = document.getElementById("butn")
function register(){
    x.style.left="-400px";
    y.style.left="50px";
    z.style.left="110px";
}
function login(){
    x.style.left="50px";
    y.style.left="450px";
    z.style.left="0px";
}


    return(

        <>
        <header>
        <div>
        <Link to="/"  className="logo"><i className="fas fa-utensils"></i>Stiller's</Link>
        <img className="logo-img" src="images/images-removebg-preview1.png" alt="" />
      </div>
        </header>
        <div className="login-page">
    <div className="login-form">
    <div className="login-metrial">
        <div id="butn">
        </div>
        <button type="button" className="toggle-butn" onClick={login}>Log in</button>
        <button type="button" className="toggle-butn" onClick={register}>Register</button>
    </div>
     <form id="login" className="input-group" action="/">
        <input type="text" className="input-field" id="userName" placeholder="User Id" required />
        <input type="text" className="input-field" id="userPwd" placeholder="Enter Password" required />
        <input type="checkbox" className="check-box" /><span className="log-span">Remember Password</span>
        <button type="submit" className="submit-butn" style= {bRadios} onClick={logFunction}>Log in</button>
        
    </form>
    <form id="register" className="input-group">
            <input type="text" className="input-field" placeholder="User Id" required />
            <input type="email" className="input-field" placeholder="Email Id" required />
            <input type="text" className="input-field" placeholder="Enter Password" required />
            <input type="text" className="input-field" placeholder="Confrim Password" required />
            <input type="checkbox" className="check-box" /><span className="log-span register-form">I agree to the terms & conditions</span>
            <button type="submit" className="submit-butn" style= {bRadios}>Register</button>
    </form>
</div>
</div>
        </>
    );

}