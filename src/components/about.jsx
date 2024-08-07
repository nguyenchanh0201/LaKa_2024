// import React from "react";
// import about from "../img/about.png";


// function About() {
//   return (
//     <div className="about" id="about">
//       <div className="img-container">
//           <img src={about} alt="" />
//         </div>
//       <div className="title-container">

        

//         <div className="heading">
//             <h1>Về La Kà</h1>
//         </div>

//         <div className="small-heading">
//             <h4>“Chúng tôi mong muốn làm cho mọi khoảnh khắc uống cà phê trở nên đặc biệt.”</h4>
//         </div>

//       </div>

//         <div className="content-container">
//             <div className="container">
//                 <div className="title">
//                     <h4>Nhiệm vụ</h4>
//                 </div>

//                 <div className="content">
//                     <h6>Cung cấp gợi ý quán cà phê cá nhân hóa, cập nhật thời gian thực và kết nối những người yêu cà phê trên khắp Việt Nam.</h6>
//                 </div>
//             </div>

//             <div className="container">
//                 <div className="title">
//                   <h4>Tầm nhìn</h4>
//                 </div>

//                 <div className="content">
//                   <h6>Kết nối người dùng với những quán cà phê hoàn hảo phù hợp với phong cách, nhu cầu và sở thích của họ. Chúng tôi tin vào niềm vui của những buổi tụ tập và sức mạnh của cộng đồng.</h6>
//                 </div>
//             </div>

//             <div className="container">
//                     <div className="title">
//                     <h4>Đội ngũ</h4>
//                 </div>

//                 <div className="content">
//                     <h6>Chúng tôi là những bạn trẻ nhiệt huyết, đam mê xây dựng một nền tảng xã hội với mong muốn giúp bạn tìm kiếm quán cà phê lý tưởng.</h6>
//                 </div>
//             </div>
//         </div>
//     </div>
//   );
// }

// export default About;



import React from "react";
import about from "../img/about.png";

function About() {
  return (
    <div className="about" id="about">
      <div className="img-container">
        <img src={about} alt="About" />
        <div className="text-overlay">
          <div className="heading">
            <h1>Về La Kà</h1>
          </div>
          <div className="small-heading">
            <h4>“Chúng tôi mong muốn làm cho mọi khoảnh khắc uống cà phê trở nên đặc biệt.”</h4>
          </div>
        </div>
      </div>

      <div className="content-container">
        <div className="container">
          <div className="title">
            <h4>Nhiệm vụ</h4>
          </div>
          <div className="content">
            <h6>Cung cấp gợi ý quán cà phê cá nhân hóa, cập nhật thời gian thực và kết nối những người yêu cà phê trên khắp Việt Nam.</h6>
          </div>
        </div>

        <div className="container">
          <div className="title">
            <h4>Tầm nhìn</h4>
          </div>
          <div className="content">
            <h6>Kết nối người dùng với những quán cà phê hoàn hảo phù hợp với phong cách, nhu cầu và sở thích của họ. Chúng tôi tin vào niềm vui của những buổi tụ tập và sức mạnh của cộng đồng.</h6>
          </div>
        </div>

        <div className="container">
          <div className="title">
            <h4>Đội ngũ</h4>
          </div>
          <div className="content">
            <h6>Chúng tôi là những bạn trẻ nhiệt huyết, đam mê xây dựng một nền tảng xã hội với mong muốn giúp bạn tìm kiếm quán cà phê lý tưởng.</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

    




