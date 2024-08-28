import React from "react";
import heroBg from "../assets/hero.jpg";

export default function Hero() {
  const categories = ["All", "Anime", "Business", "Agriculture"];

  return (
    <>
      <div
        className="container mx-auto h-[65vh] mb-8 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="text-center text-white gap-4 flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold w-1/2 md:text-3xl md:w-">
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
    </>
  );
}
