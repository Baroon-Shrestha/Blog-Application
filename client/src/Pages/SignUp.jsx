import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Alert, TextInput } from "flowbite-react";

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null); // For setting and showing error messages
  const navigate = useNavigate();

  console.log(formData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const submitFrom = async (e) => {
    e.preventDefault();

    // Check for missing form fields
    if (!formData.username || !formData.email || !formData.password) {
      return setError("You cannot leave any of these empty");
    }

    try {
      const response = await axios.post("/blogspot/signup", formData, {
        headers: { "Content-Type": "application/json" },
      });

      const data = response.data;
      console.log(data);

      // Incorrect variable reference here: "message" should be "data.message"
      if (data.success === false) {
        return setError(data.message); // Show the error message returned from the server
      }
      navigate("/login");
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-4">
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
        <div className="flex-1">
          <form action="" className="flex flex-col gap-5" onSubmit={submitFrom}>
            <div>
              <label htmlFor="Username">Your Username</label>
              <TextInput
                type="text"
                placeholder="Username.."
                id="username"
                onChange={handleChange}
              />
            </div>
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
          {/* Show error message if form validation fails or signup encounters an issue */}
          {error && (
            <Alert className="mt-5" color="failure">
              {error}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}
