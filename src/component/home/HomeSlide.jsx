import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';

export default function HomeSlide() {
  return (
    <div className="w-full h-full bg-gray-100 text-black font-sans">
      <Swiper
        navigation={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]}
        className="w-full h-full"
      >
        <SwiperSlide>
          <img
            src="./src/assets/fire1.jpg"
            alt="slide1"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./src/assets/fire2.jpg"
            alt="slide2"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./src/assets/fire3.jpg"
            alt="slide3"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./src/assets/fire4.jpg"
            alt="slide4"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
