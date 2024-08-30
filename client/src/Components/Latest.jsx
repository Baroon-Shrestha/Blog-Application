import React from "react";
import latestImg from "../assets/latest.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const data = [
  {
    image: latestImg,
    category: "Technology",
    title: "The Rise of AI in Modern Technology",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis consectetur aliquid placeat eius odio rerum, veritatis mollitia totam explicabo unde.",
  },
  {
    image: latestImg,
    category: "Health",
    title: "Health Benefits of a Balanced Diet",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis consectetur aliquid placeat eius odio rerum, veritatis mollitia totam explicabo unde.",
  },
  {
    image: latestImg,
    category: "Agriculture",
    title: "Benefits of Agriculture",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero omnis ad obcaecati similique dignissimos magnam! Laudantium cumque cupiditate voluptas porro!",
  },
];

export default function LatestBlogs() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto">
      <div className="text-2xl font-bold text-center mb-8">Latest Blogs</div>
      <Slider {...settings}>
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center shadow-lg rounded-lg p-4"
          >
            <div className="overflow-hidden w-full">
              <img
                src={item.image}
                alt={item.title}
                className="object-cover w-full h-48 md:h-64"
              />
            </div>
            <div className="mt-4 text-center">
              <h1 className="font-bold text-lg">{item.category}</h1>
              <h2 className="text-xl">{item.title}</h2>
              <p className="mt-2 text-gray-700">{item.paragraph}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
