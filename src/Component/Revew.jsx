
import React , { useState } from "react";


const Revew = () => {

const [review, newreview] = useState("")
const [reviewcontent, setreview] = useState([
    
]);


const userreview = (event) =>{
    newreview(event.target.value);
};
const listofreview = () => {
    setreview((oldreview) =>{
        return[...oldreview, review];
    })

};
    return(
        <>
<div className="review--section">
            <h1 className="review-heading" >your review</h1>
            <br />
            <input className="review--input" id="review-box" type="text" placeholder="your opinion " onChange={userreview} />
            <br />
            <button className="butn review--btn" onClick={listofreview}> post review</button>
            <ol>
               
               { reviewcontent.map((reviews) =>{
                    return  <li className="coustmer-rew">{reviews}</li>
                })}
            </ol>
</div>
        </>
    )

}
export default Revew;