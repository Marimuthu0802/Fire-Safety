import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import fire1 from '../../assets/fire1.jpg';
import fire2 from '../../assets/fire2.jpg';
import fire3 from '../../assets/fire3.jpg';
import fire4 from '../../assets/fire4.jpg';


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
  <img src={fire1} alt="slide1" className="w-full h-full object-cover" />
</SwiperSlide>
<SwiperSlide>
  <img src={fire2} alt="slide2" className="w-full h-full object-cover" />
</SwiperSlide>
<SwiperSlide>
  <img src={fire3} alt="slide3" className="w-full h-full object-cover" />
</SwiperSlide>
<SwiperSlide>
  <img src={fire4} alt="slide4" className="w-full h-full object-cover" />
</SwiperSlide>
      </Swiper>
    </div>
  );
}
