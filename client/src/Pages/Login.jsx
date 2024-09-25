import React, { useState } from "react";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { TextInput } from "flowbite-react";

export default function Login() {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const submitForm = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      return console.log("please fill all the required fields");
    }

    try {
      const response = await axios.post("/blogspot/login", formData, {
        headers: { "Content-Type": "application/json" },
      });
      const data = response.data;

      if (data.success == false) {
        console.log(data.message);
      }
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-4">
        {/* left */}
        <div className="flex-1">
          <div className="font-bold text-xl">
            <span className="p-1 rounded-md bg-[#AFAFDA] text-white">
              Blog's
            </span>{" "}
            spot
          </div>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ipsam
            itaque eligendi
          </p>
        </div>
        {/* right */}
        <div className="flex-1">
          <form action="" className="flex flex-col gap-5" onSubmit={submitForm}>
            <div>
              <label htmlFor="Email">Your Email</label>
              <TextInput
                type="text"
                placeholder="Email.."
                id="email"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="Password">Your Password</label>
              <TextInput
                type="password"
                placeholder="Password.."
                id="password"
                onChange={handleChange}
              />
            </div>
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
}
