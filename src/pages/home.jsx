import React from "react";
import bg from "../img/bg-coffee.png";
import Wall from "../img/unihub.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <div className="home" id="home">
      <div className="container">
        <div className="left-container">
          <div className="heading">
            <h1>
              Kà cho hôm nay 	&#10024;
            </h1>
          </div>

          <div className="content-container">
            <div className="wall-image-container">
              <img src={Wall} alt="" />

            </div>

            <div className="name-container">
              <h2>
                UniHub 
              </h2>
              
            </div>

            <div className="badges-container">
            

              <div className="border">
          


                <div className="badge">
                  <span className="badge-text top-text">Top Kà</span>
                  <span className="badge-text bottom-text">của tuần</span>
                </div>
              </div>
              



            </div>


            

            

            <div className="rate-container">
              <div className="ratings">
                <span className="score"> 4.8
                </span>

                <span className="star">
                    <FontAwesomeIcon icon={faStar} />
                  </span>
              </div>

              <div className="categories">
                <span>Học tập</span>
                <span>Trò chuyện</span>
              </div>


            </div>




          </div>





        </div>

        <div className="right-container">

          <div className="heading">
            <h1>
              Nay muốn tìm quán...
            </h1>
          </div>



          <form action="" className="form-container">

            <div className="upper-container">
              <select name="purpose" id="">
                <option value="someOption">Làm gì?</option>
              </select>


              <select name="purpose" id="">
                <option value="someOption">Giá cả?</option>
              </select>

            </div>

            <div className="middle-container">

              <select name="purpose" id="">
                <option value="someOption">Chỗ trống?</option>
              </select>


              <select name="purpose" id="">
                <option value="someOption">Vị trí?</option>
              </select>
            </div>


            <div className="lower-container">
              <input type="text" placeholder="Hay tìm tên luôn..." />

              <button type="submit">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>



          </form>

        </div>
      </div>

      <div className="img-container">
        <img src={bg} alt="" />

      </div>
    </div>
  );
}

export default Home;