import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import cf from "../img/cf.png";
import cf4 from "../img/cf4.png";
import cf5 from "../img/cf5.png";
import cf6 from "../img/cf6.png";

function List() {
  return (
    <div className="list">
      <div className="container">

        <div className="left-container">
            <div className="article-container">
                <h2>
                    KÀ TÀI TRỢ
                </h2>

                <span>
                    <FontAwesomeIcon icon={faStar} />
                </span>
                
                

            </div>


            <div className="img-container">
                <img src={cf} alt="" />

            </div>
        </div>

        <div className="right-container">

            <div className="cfs-container">
                <div className="img-container">
                    <img src={cf4} alt="" />
                </div>

                <div className="name-container">
                    <h4>Highlands Coffee-CMT8</h4>
                </div>

                <div className="address-container">
                    <h6>601 Đ. Cách Mạng Tháng 8, Phường 15, Quận 10, Hồ Chí Minh</h6>
                </div>

                <div className="categories-container">
                    <span>Làm việc</span>
                    <span>Trò chuyện</span>
                </div>
            </div>



            <div className="cfs-container">
                <div className="img-container">
                    <img src={cf5} alt="" />
                </div>

                <div className="name-container">
                    <h4>Room44</h4>
                </div>

                <div className="address-container">
                    <h6>226/36 Đ. Lê Văn Sỹ, Phường 1, Tân Bình, Hồ Chí Minh</h6>
                </div>

                <div className="categories-container">
                    <span>Học bài</span>
                    <span>Chụp hình</span>
                </div>
            </div>




            <div className="cfs-container">
                <div className="img-container">
                    <img src={cf6} alt="" />
                </div>

                <div className="name-container">
                    <h4>KAI Coffee - Vạn Kiếp</h4>
                </div>

                <div className="address-container">
                    <h6>288 Đ. Vạn Kiếp, Phường 03, Bình Thạnh, Hồ Chí Minh</h6>
                </div>

                <div className="categories-container">
                    <span>Làm việc</span>
                    <span>Trò chuyện</span>
                </div>
            </div>

            


        </div>


      </div>
    </div>
  );
}

export default List;