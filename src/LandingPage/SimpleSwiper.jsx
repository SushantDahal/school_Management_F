import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const SimpleSwiper = () => (
  <Swiper spaceBetween={50} slidesPerView={3}>
    <SwiperSlide>Slide 1</SwiperSlide>
    <SwiperSlide>Slide 2</SwiperSlide>
    <SwiperSlide>Slide 3</SwiperSlide>
    <SwiperSlide>Slide 4</SwiperSlide>
  </Swiper>
);

export default SimpleSwiper;
