import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import "./Carousel.scss";
import { Navigation } from 'swiper/modules';
import slide1 from "../../assets/img/slide-1.jpg";
import slide2 from "../../assets/img/slide-2.jpg";
import slide3 from "../../assets/img/slide-3.jpg";

export default function Carousel() {
  return (
    <div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <img className="h-90" src={slide1} alt="a" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-90" src={slide2} alt="b" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-90" src={slide3} alt="c" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
