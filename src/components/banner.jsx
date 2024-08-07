import React from "react";
import Unihub2 from "../img/unihub2.jpg";

function Banner() {
  return (
    <div className="banner">
        <div className="container">
            <div className="img-container">
                <img src={Unihub2} alt="" />
            </div>
            
            <div className="categories">
                <span>Học tập</span>
                <span>Trò chuyện</span>
            </div>


            <div className="name-container">
                <h2>
                    UniHub.
                </h2>

                

            </div>

            <div className="address-container">
                <span>130 Đ. Nguyễn Thị Minh Khai, Phường Võ Thị Sáu, Quận 3, Hồ Chí Minh</span>
            </div>
            

            
        </div>
    </div>
  );
}

export default Banner;