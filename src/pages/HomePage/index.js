import React from "react";
import Emergency from "../../Components/Emergency/Emergency";
import salma from '../../assets/img/slide-1.jpg'
import salam11 from '../../assets/img/slide-2.jpg'
import salma111 from '../../assets/img/slide-3.jpg'

import { Swiper, SwiperSlide } from 'swiper/react';
import "./index.scss";
import 'swiper/css';
import axios from "axios";
export default function HomePage() {
  return (
    <div className="home">
     
      <Swiper 
      slidesPerView={1} loop
      >
        <SwiperSlide className="cont"> 
        
          <div className="text-box">
              <h1>Welcome to Al Hilal Hospital</h1>
              <p>Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel.</p>
              <button>READ MORE</button>
          </div>

         <img src={salma} alt=""/> 
        </SwiperSlide>
        <SwiperSlide className="cont">  
        
        <div className="text-box">
              <h1>Welcome to Al Hilal Hospital</h1>
              <p>Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel.</p>
              <button>READ MORE</button>
          </div>

        <img src={salam11} alt=""/> 
        
       </SwiperSlide>
        <SwiperSlide className="cont">
        <div className="text-box">
              <h1>Welcome to Al Hilal Hospital</h1>
              <p>Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel.</p>
              <button>READ MORE</button>
          </div>

           <img src={salma111} alt=""/> 
            </SwiperSlide>

      </Swiper>


       <div>
        <img src='../../assets/img/slide-3.jpg' alt=""/>
      </div> 
      <Emergency />
  
    </div>
  );
}

// axios.post("http://localhost:3004/users", {name: "morgan" , adress: "fesha" , salarry: "1500"})
// .then((data) => console.log(data.data))

// axios("http://localhost:3004/users/1").then((data) => console.log(data.data))
// axios("http://localhost:3004/users/2").then((data) => console.log(data.data))
// axios("http://localhost:3004/users/?adress=sheben&age=26").then((data) => console.log(data.data))
// axios("http://localhost:3004/users/?_sort=name&_order=asc").then((data) => console.log(data.data))


// axios("http://localhost:3004/users").then((data) => console.log(data.data))

// axios("http://localhost:3004/users").then((data) => console.log(data.data))

// axios.post("http://localhost:3004/users", {name : "roqaya" , salarry : "6500" , adress : "shanawan"}).then((data) => console.log(data.data))
// axios("http://localhost:3004/users/?adress=shanawan").then((data) => console.log(data.data))