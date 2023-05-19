import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

const AnimationScroll = () => {
  const { scrollY } = useViewportScroll();
  const yRange = [0, window.innerHeight];
  const xRange = [0, window.innerWidth - window.innerHeight];
  const x = useTransform(scrollY, yRange, [0, -2000]);
  const y = useTransform(scrollY, yRange, [0, 1000]);

  return (
    <div className="w-screen h-screen overflow-y-scroll">
      <motion.div
        className="h-[500px] w-[40px] bg-red-200 m-20"
        style={{
          x,
          y,
        }}
      />
    </div>
  );
};

export default AnimationScroll;
