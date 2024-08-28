import React from "react";
import image from "../assets/react.svg";
import Hero from "../Components/Hero";
import Latest from "../Components/Latest";

export default function Home() {
  return (
    <>
      {/* <div className="container mx-auto ">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="grid grid-rows-2 gap-4 bg-logo">
            <div className="bg-red-200">
              <img src={image} alt="" />
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div>
                  <img src={image} alt="" />
                </div>
                <div>baroon shrestha</div>
              </div>
              <div>new</div>
            </div>
          </div>
          <div className="bg-primary flex flex-col gap-4">
            <div className="">row</div>
            <div className="">row2</div>
            <div className="">row3</div>
          </div>
        </div>
      </div> */}
      <Hero />
      <Latest />
    </>
  );
}
