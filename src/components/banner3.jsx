import React from "react";
import Giang from "../img/giang.png";

function Banner() {
  return (
    <div className="banner">
        <div className="container">
            <div className="img-container">
                <img src={Giang} alt="" />
            </div>
            
            <div className="categories">
                <span>Làm việc</span>
                <span>Chụp hình</span>
            </div>


            <div className="name-container">
                <h2>
                Giang Cafe.
                </h2>

                

            </div>

            <div className="address-container">
                <span>Y12 Hồng Lĩnh, phường 15, Quận 10, Hồ Chí Minh</span>
            </div>
            

            
        </div>
    </div>
  );
}

export default Banner;