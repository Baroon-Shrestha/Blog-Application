import { Navbar } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

export default function FlowNav() {
  return (
    <div>
      <Navbar className="border-b-2">
        <Link
          to="/"
          className="self-center whitespace-nowrap text-lg md:text-2xl font-bold"
        >
          <span className="py-1 px-2 bg-green-500 rounded-xl text-white">
            Blog's{" "}
          </span>
          Spot
        </Link>
      </Navbar>
    </div>
  );
}
