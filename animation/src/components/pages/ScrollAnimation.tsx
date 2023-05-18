import { useScroll, motion } from "framer-motion";
import React from "react";
import { Lorem } from "./Lorem";
import Card from "./Card";
import Scroll from "./Scroll";

const ScrollAnimation = () => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <h1>
        <code>useScroll</code> demo
      </h1>
      <Card />
      <Scroll />
      
    </>
  );
};

export default ScrollAnimation;
