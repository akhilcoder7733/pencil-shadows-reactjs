import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import "aos/dist/aos.css";
import AOS from "aos";
import About from "./Pages/About";
import Gallery from "./Pages/Gallery";

AOS.init({
  duration: 800,
  once: false,
  mirror: false,
});

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pencil-shadows-reactjs" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
}

export default App;
