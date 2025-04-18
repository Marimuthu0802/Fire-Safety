// components/BrandCarousel.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const brands = [
  { src:"./src/assets/slide1.png", alt: "slide1" },
  { src:"./src/assets/slide2.png", alt: "slide2" },
  { src:"./src/assets/slide3.png", alt: "slide3" },
  { src:"./src/assets/slide4.png", alt: "slide4" },
  { src:"./src/assets/slide5.png", alt: "slide5" },
  { src:"./src/assets/slide6.png", alt: "slide6" },
  { src:"./src/assets/slide7.png", alt: "slide7" },
  { src:"./src/assets/slide8.png", alt: "slide8" },
  
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
