import React from "react";
import Slider from "react-slick";
import heroBg from "../assets/hero.jpg";
import heroBg2 from "../assets/hero2.jpg";
import heroBg3 from "../assets/hero3.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Parallax } from "react-scroll-parallax";

export default function Hero() {
  const categories = ["All", "Anime", "Business", "Agriculture"];

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="relative container mx-auto h-[65vh] mb-8">
      {/* Carousel Component */}
      <Slider {...settings} className="absolute inset-0">
        <div className="h-full">
          <img
            src={heroBg}
            alt="Slide 1"
            className="object-cover w-full h-[65vh]"
          />
        </div>
        <div className="h-full">
          <img
            src={heroBg2}
            alt="Slide 2"
            className="object-cover w-full h-[65vh]"
          />
        </div>
        <div className="h-full">
          <img
            src={heroBg3}
            alt="Slide 3"
            className="object-cover w-full h-[65vh]"
          />
        </div>
      </Slider>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white gap-4">
        <h1 className="text-2xl font-bold w-1/2 md:text-3xl">
          Lorem ipsum, dolor sit amet consectetur. quas.
        </h1>
        <p className="md:w-1/2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
          nihil aliquid cumque voluptas cupiditate expedita impedit tempora.
        </p>
        <div className="flex items-center flex-wrap gap-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className="px-6 py-2 rounded-3xl bg-gray-100 text-black hover:bg-green-500 hover:text-white"
            >
              {category}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
