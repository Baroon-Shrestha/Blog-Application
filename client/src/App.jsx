import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Nav from "./Components/Nav";
import FlowNav from "./Components/FlowNav";
import "flowbite/dist/flowbite.css";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        {/* <FlowNav /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
