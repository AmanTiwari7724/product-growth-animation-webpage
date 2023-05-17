import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import HeroSection from "./components/pages/HeroSection";
import Scroll from "./components/pages/Scroll";



const Layout = () => {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/page2" element={<HeroSection /> } />
        <Route path="/page3" element={<Scroll /> } />
      </Routes>
      
       
     
    </div>
  );
}; 

export default Layout;
