import React from "react";
export default function Footer(){
    return(<>
        <section className="footer">
     <div className="box-container">
    <div className="box">  
      <h3> location</h3>
      <a className="fas fa-map-marker-alt" href="https://www.google.com/maps/place/Shah+Faisal+Masjid/@33.7295198,73.0349649,17z/data=!3m1!4b1!4m5!3m4!1s0x38dfbefce01e6917:0x3e66e0de3e2598c0!8m2!3d33.7295198!4d73.0371536"><span className="loc"> islamabad</span></a>
      <a className="fas fa-map-marker-alt" href="#"><span className="loc">karachi</span></a>
      <a className="fas fa-map-marker-alt" href="#"><span className="loc">lahore</span></a>
      <a className="fas fa-map-marker-alt" href="#"><span className="loc">peshawer</span></a>
      <a className="fas fa-map-marker-alt" href="#"><span className="loc">queta</span></a>
    </div>
    <div className="box">
      <h3> qick links</h3>
      <a href="#home">home</a>
      <a href="#dishes">dishes</a>
      <a href="#about">about</a>
      <a href="#menu">menu</a>
      <a href="#review">review</a>
      <a href="#order">order</a>
    </div>

    <div className="box">
      <h3>contect us</h3>
      <a href="#">+923339004604</a>
      <a href="#">+923006784608</a>
      <a href="#">mudassirrehman1989@gmail.com</a>
      <a href="#">abudllahmuhammad10@yahoo.com</a>
      <a href="#">rahim yar khan punjab pakistan</a>
      </div>
      <div className="box">
        <h3>follow us</h3>
        <a href="#">facebook</a>
        <a href="#">twitter</a>
        <a href="#">instagram</a>
        <a href="#">linkedink</a>
      </div>
  </div>
</section>
    </>)
}