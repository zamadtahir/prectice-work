import React from "react";

export default function Order(){
    return(<>
        <section className="order" id="order"> 
    <h3 className="sub-heading">order now</h3>
    <h1 className="heading"> free and fast</h1>
    <form action=""> 
    <div className="inputbox">
      <div className="input">
         <span>your name</span>
         <input type="text" placeholder="enter your name" />
      </div>
      <div className="input">
        <span>your number</span>
        <input type="number" placeholder="your number" />
      </div>
    </div>
    
        <div className="inputbox">
           <div className="input">
            <span>your order</span>
            <input type="text" placeholder="enter food name" />
          </div>
          <div className="input">
            <span>want to add sam moor ?</span>
            <input type="text" placeholder="extra with food" />
          </div>
                <div className="input">
                  <span>how much</span>
                  <input type="text" placeholder="how many orders" />
                </div>
                <div className="input">
                  <span>date and time</span>
                  <input type="datetime-local" />
                </div>
          <div className="input">
            <span>your adress</span>
            <textarea type="text" placeholder="enter your adress" id="" cols="30" rows="10">
            </textarea>
          </div>
          <div className="input">
            <span>your massage</span>
             <textarea type="text" placeholder="enter your massage" id="" cols="30" rows="10">
             </textarea>
          </div>
        </div>
        <input type="submit" value="order now" className="btn" />
  </form> 
</section>
    </>)
}