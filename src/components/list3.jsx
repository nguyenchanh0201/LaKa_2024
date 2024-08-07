import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUpLong} from "@fortawesome/free-solid-svg-icons";
import cf from "../img/cf.png";
import cf7 from "../img/cf7.png";
import cf8 from "../img/cf8.png";
import cf9 from "../img/cf9.png";


function List() {
  return (
    <div className="list">
      <div className="container">

        <div className="left-container">
            <div className="article-container">
                <h2>
                    KÀ MỚI NHÚ
                </h2>

                <span>
                    <FontAwesomeIcon icon={faUpLong} />
                </span>
                
                

            </div>


            <div className="img-container">
                <img src={cf} alt="" />

            </div>
        </div>

        <div className="right-container">

            <div className="cfs-container">
                <div className="img-container">
                    <img src={cf7} alt="" />
                </div>

                <div className="name-container">
                    <h4>Hannie Coffee</h4>
                </div>

                <div className="address-container">
                    <h6>227 Đường Lê Niệm, Phú Thạnh, Tân Phú, Hồ Chí Minh</h6>
                </div>

                <div className="categories-container">
                    <span>Học bài</span>
                    <span>Làm việc</span>
                </div>
            </div>



            <div className="cfs-container">
                <div className="img-container">
                    <img src={cf8} alt="" />
                </div>

                <div className="name-container">
                    <h4>Trốn Cà Phê</h4>
                </div>

                <div className="address-container">
                    <h6>87 Đ. Ng. Tất Tố, Phường 21, Bình Thạnh, Hồ Chí Minh</h6>
                </div>

                <div className="categories-container">
                    <span>Chụp hình</span>
                    <span>Trò chuyện</span>
                </div>
            </div>




            <div className="cfs-container">
                <div className="img-container">
                    <img src={cf9} alt="" />
                </div>

                <div className="name-container">
                    <h4>Củi Rooftop - Cộng Hòa</h4>
                </div>

                <div className="address-container">
                    <h6>7 Đ. Cộng Hòa, Phường 4, Tân Bình, Hồ Chí Minh</h6>
                </div>

                <div className="categories-container">
                    <span>Rooftop</span>
                    <span>Tụ tập</span>
                </div>
            </div>

            


        </div>


      </div>
    </div>
  );
}

export default List;