import React from "react";
import { IoMdSearch } from "react-icons/io";

export default function Nav() {
  return (
    <>
      <div className="container mx-auto my-4 flex items-center justify-between">
        <div className="font-bold text-xl">
          <span className="p-1 rounded-md bg-logo font text-white ">
            Blog's
          </span>{" "}
          spot
        </div>
        <div>
          <form action="" className="flex items-center gap-4">
            <input type="text" className="border border-black rounded-md" />
            <button>
              <IoMdSearch className="text-2xl" />
            </button>
          </form>
        </div>
        <div>
          <ul className="flex gap-3 text-lg">
            <li>popular</li>
            <li>latest</li>
            <li>latest 2</li>
          </ul>
        </div>
        <div className="flex gap-4 text-xl font">
          <button className="p-1 bg-primary font-bold rounded-md">
            Sign In
          </button>
          <button className="p-1 bg-primary font-bold rounded-md">
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
}
