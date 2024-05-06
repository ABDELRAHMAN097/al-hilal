import React from "react";
import Emergency from "../../Components/Emergency/Emergency";
import ph1 from '../../assets/img/slide-1.jpg'
import ph2 from '../../assets/img/slide-2.jpg'
import ph3 from '../../assets/img/slide-3.jpg'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./index.scss";
import 'swiper/css';
import { Link } from "react-router-dom";
export default function HomePage() {
  return (
    <div className="home">
     
      <Swiper 
      slidesPerView={"auto"} loop
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide className="cont"> 
        
          <div className="text-box">
              <h1>Welcome to Al Hilal Hospital</h1>
              <p>Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat. Similique ea volup.</p>
              <Link className="button-read-moor" to={"/about"}>READ MORE</Link>
          </div>

         <img className="w-100" src={ph1} alt=""/> 
        </SwiperSlide>
        <SwiperSlide className="cont">  
        
        <div className="text-box">
              <h1>Welcome to Al Hilal Hospital</h1>
              <p>Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat. Similique ea volup.</p>
              <Link className="button-read-moor" to={"/about"}>READ MORE</Link>
          </div>

        <img className="w-100" src={ph2} alt=""/> 
        
       </SwiperSlide>
        <SwiperSlide className="cont">
        <div className="text-box">
              <h1>Welcome to Al Hilal Hospital</h1>
              <p>Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat. Similique ea volup.</p>
              <Link className="button-read-moor" to={"/about"}>READ MORE</Link>
          </div>

           <img className="w-100" src={ph3} alt=""/> 
            </SwiperSlide>

      </Swiper>

       <div>
        <img src='../../assets/img/slide-3.jpg' alt=""/>
      </div> 

      <Emergency />
  
    </div>
  );
}






