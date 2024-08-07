import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faThumbsUp} from "@fortawesome/free-solid-svg-icons";
import cf from "../img/cf.png";
import cf1 from "../img/cf1.png";
import cf2 from "../img/cf2.png";
import cf3 from "../img/cf3.png";

function List() {
  return (
    <div className="list">
      <div className="container">

        <div className="left-container">
            <div className="article-container">
                <h2>
                    KÀ TOP HÔM NAY
                </h2>

                <span>
                    <FontAwesomeIcon icon={faThumbsUp} />
                </span>
                
                

            </div>


            <div className="img-container">
                <img src={cf} alt="" />

            </div>
        </div>

        <div className="right-container">

            <div className="cfs-container">
                <div className="img-container">
                    <img src={cf1} alt="" />
                </div>

                <div className="name-container">
                    <h4>Cư Xá Trà Và Bánh</h4>
                </div>

                <div className="address-container">
                    <h6>M8D Đ. Hương Giang, Phường 15, Quận 10, Hồ Chí Minh</h6>
                </div>

                <div className="categories-container">
                    <span>Chụp hình</span>
                    <span>Hẹn hò</span>
                </div>
            </div>



            <div className="cfs-container">
                <div className="img-container">
                    <img src={cf2} alt="" />
                </div>

                <div className="name-container">
                    <h4>Cà Rề Cafe</h4>
                </div>

                <div className="address-container">
                    <h6>35 Nguyễn Văn Tráng, Phường Phạm Ngũ Lão, Quận 1, Hồ Chí Minh</h6>
                </div>

                <div className="categories-container">
                    <span>Làm việc</span>
                    <span>Trò chuyện</span>
                </div>
            </div>




            <div className="cfs-container">
                <div className="img-container">
                    <img src={cf3} alt="" />
                </div>

                <div className="name-container">
                    <h4>Okkio Caffe - Tự Do</h4>
                </div>

                <div className="address-container">
                    <h6>151 Đ. Đồng Khởi, Bến Nghé, Quận 1,  Hồ Chí Minh</h6>
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