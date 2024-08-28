import React from "react";
import latestImg from "../assets/latest.jpg";

export default function Latest() {
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
    // Add more blog entries here
  ];

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-8">Latest Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col md:flex-row w-full">
            <div className="overflow-hidden rounded-lg shadow-lg md:w-1/2">
              <img
                src={item.image}
                alt="Latest Blog"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex flex-col justify-center py-4 px-8 border-t-2 md:border-l-2 md:border-t-0">
              <h2 className="text-lg font-semibold mb-4 text-gray-500">
                {item.category}
              </h2>
              <h1 className="font-bold text-xl mb-2">{item.title}</h1>
              <p className="text-gray-700">{item.paragraph}</p>
              <button className="mt-4 py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
