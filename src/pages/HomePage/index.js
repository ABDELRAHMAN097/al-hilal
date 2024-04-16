import React from "react";
import Emergency from "../../Components/Emergency/Emergency";
import ph1 from '../../assets/img/slide-1.jpg'
import ph2 from '../../assets/img/slide-2.jpg'
import ph3 from '../../assets/img/slide-3.jpg'

import { Swiper, SwiperSlide } from 'swiper/react';
import "./index.scss";
import 'swiper/css';
export default function HomePage() {
  return (
    <div className="home">
     
      <Swiper 
      slidesPerView={"auto"} loop
      >
        <SwiperSlide className="cont"> 
        
          <div className="text-box">
              <h1>Welcome to Al Hilal Hospital</h1>
              <p>Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel.</p>
              <button>READ MORE</button>
          </div>

         <img className="" src={ph1} alt=""/> 
        </SwiperSlide>
        <SwiperSlide className="cont">  
        
        <div className="text-box">
              <h1>Welcome to Al Hilal Hospital</h1>
              <p>Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel.</p>
              <button>READ MORE</button>
          </div>

        <img className="" src={ph2} alt=""/> 
        
       </SwiperSlide>
        <SwiperSlide className="cont">
        <div className="text-box">
              <h1>Welcome to Al Hilal Hospital</h1>
              <p>Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel.</p>
              <button>READ MORE</button>
          </div>

           <img className="" src={ph3} alt=""/> 
            </SwiperSlide>

      </Swiper>

       <div>
        <img src='../../assets/img/slide-3.jpg' alt=""/>
      </div> 
      <Emergency />
  
    </div>
  );
}

