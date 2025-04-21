// components/BrandCarousel.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from '../../assets/slide1.png';
import slide2 from '../../assets/slide2.png';
import slide3 from '../../assets/slide3.png';
import slide4 from '../../assets/slide4.png';
import slide5 from '../../assets/slide5.png';
import slide6 from '../../assets/slide6.png';
import slide7 from '../../assets/slide7.png';
import slide8 from '../../assets/slide8.png';

const brands = [
  { src: slide1, alt: "slide1" },
  { src: slide2, alt: "slide2" },
  { src: slide3, alt: "slide3" },
  { src: slide4, alt: "slide4" },
  { src: slide5, alt: "slide5" },
  { src: slide6, alt: "slide6" },
  { src: slide7, alt: "slide7" },
  { src: slide8, alt: "slide8" },
];


const BrandCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <Slider {...settings}>
          {brands.map((brand, index) => (
            <div key={index} className="px-4">
              <div className="bg-white shadow-md rounded-lg flex items-center justify-center h-40">
                <img
                  src={brand.src}
                  alt={brand.alt}
                  className="h-24 object-contain"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BrandCarousel;
