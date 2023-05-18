import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import HeroSection from "./components/pages/HeroSection";
import Scroll from "./components/pages/Scroll";
import ScrollAnimation from "./components/pages/ScrollAnimation";



const Layout = () => {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/page2" element={<HeroSection /> } />
        <Route path="/page3" element={<Scroll /> } />
        <Route path="/page4" element={<ScrollAnimation /> } />
      </Routes>
      
       
     
    </div>
  );
}; 

export default Layout;
