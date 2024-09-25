import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, Navigate } from "react-router-dom";
import { FaRegMoon } from "react-icons/fa";

export default function Nav() {
  const [active, setActive] = useState(false);

  const toggleMenu = () => {
    setActive(!active);
  };

  return (
    <>
      <div>
        <div className="container my-8 mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link to="/">
              <div className="font-bold text-xl">
                <span className="p-1 rounded-md bg-green-500 text-white">
                  Blog's
                </span>{" "}
                spot
              </div>
            </Link>
            <div className="hidden md:flex gap-3">
              <ul className="flex gap-3">
                <li>Latest</li>
                <li>Popular</li>
                <li>Categories</li>
              </ul>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div>
              <FaRegMoon />
            </div>
            <div className="hidden md:flex items-center gap-3">
              <div>
                <Link to="/login">Login</Link>
              </div>
              <div>
                <Link to="/signup">Sign up</Link>
              </div>
            </div>
            <div className="md:hidden">
              <GiHamburgerMenu onClick={toggleMenu} />
            </div>
          </div>
        </div>
      </div>
      {active && (
        <div className="md:hidden flex flex-col text-center bg-white shadow-lg p-4">
          <ul className="flex flex-col gap-2">
            <li>Latest</li>
            <li>Popular</li>
            <li>Categories</li>
          </ul>
          <hr />
          <div className="flex flex-col gap-2 mt-4">
            <div>
              <Link to="/login">Login</Link>
            </div>
            <div>
              <Link to="/signup">Sign up</Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
