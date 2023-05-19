import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import HeroSection from "./components/pages/HeroSection";
import Scroll from "./components/pages/Scroll";
import ScrollAnimation from "./components/pages/ScrollAnimation";
import PhotoShop from "./components/pages/PhotoShop";
import AnimationScroll from "./components/pages/AnimationScroll";

const Layout = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/page2" element={<HeroSection />} />
        <Route path="/page3" element={<Scroll />} />
        <Route path="/page4" element={<ScrollAnimation />} />
        <Route path="/page5" element={<PhotoShop />} />
        <Route path="/page6" element={<AnimationScroll />} />
      </Routes>
    </div>
  );
};

export default Layout;
