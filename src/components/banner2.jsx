import React from "react";
import LittleBean from "../img/littlebean.png";

function Banner() {
  return (
    <div className="banner">
        <div className="container">
            <div className="img-container">
                <img src={LittleBean} alt="" />
            </div>
            
            <div className="categories">
                <span>Làm việc</span>
                <span>Tụ tập</span>
            </div>


            <div className="name-container">
                <h2>
                The Little Bean.
                </h2>

                

            </div>

            <div className="address-container">
                <span>75 Đ. Cao Thắng, Phường 3, Quận 3, Hồ Chí Minh</span>
            </div>
            

            
        </div>
    </div>
  );
}

export default Banner;