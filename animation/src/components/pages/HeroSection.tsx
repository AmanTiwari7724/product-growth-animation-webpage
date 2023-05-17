import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AnimationText from "./AnimationText";

const HeroSection = () => {
  const [text, setText] = useState("");
  const [text1, setText1] = useState("");
  const [count, setCount] = useState(0);

  const typingAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.1,
        yoyo: Infinity,
        ease: "easeInOut",
      },
    },
  };

  useEffect(() => {
    const message = "What They Say";
    const message1 = "About Us.";
    let i = 0;
    const timeoutId = setInterval(() => {
      if (i <= message.length) {
        setText(message.substring(0, i));
      } else {
        setText1(message1.substring(0, i - message.length));
      }
      i++;
      if (i > message.length + message1.length) {
        clearInterval(timeoutId);
      }
    }, 200);
    return () => clearInterval(timeoutId);
  }, []);

  useEffect(() => {
    const inCounter = setInterval(() => {
      if (count >= 5000) {
        setCount(count);
      } else {
        setCount(count + 5);
        clearInterval(inCounter);
      }
    }, 5);
  }, [count]);

  return (
    <div className="bg-black py-24 m-24">
      <div className="text-white">
        <div className="ml-48 text-white text-4xl text-bold">
          <motion.span
            variants={typingAnimation}
            initial="hidden"
            animate="visible"
          >
            {text.split("").map((char, index) => (
              <span className="text-4xl font-bold" key={index}>
                {char}
              </span>
            ))}
          </motion.span>
        </div>
        <div className="ml-48">
          <motion.span
            variants={typingAnimation}
            initial="hidden"
            animate="visible"
          >
            {text1.split("").map((char, index) => (
              <span className="text-4xl font-bold" key={index}>
                {char}
              </span>
            ))}
          </motion.span>
        </div>
        <div className="flex items-center justify-around gap-8 text-white pt-24">
          <div className="flex flex-col gap-4 items-center">
            <div className="border border-gray-400 rounded-full p-2">
              companies
            </div>
            <div className="text-5xl text-pink-200">
              <motion.div
                initial={{ opacity: 0, y: 0, x: 0 }}
                animate={{ y: 0, x: 0, opacity: 1 }}
              >
                {count}
              </motion.div>
            </div>
            <div>track and analyze ur product</div>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <div className="border border-gray-400 rounded-full p-2">
              companies
            </div>
            <div className="text-5xl text-pink-200">
              <div className="text-5xl text-pink-200">
                <motion.div
                  initial={{ opacity: 0, y: 0, x: 0 }}
                  animate={{ y: 0, x: 0, opacity: 1 }}
                >
                  {count}
                </motion.div>
              </div>
            </div>
            <div>track and analyze ur product</div>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <div className="border  border-gray-400 rounded-full p-2">
              companies
            </div>
            <div className="text-5xl text-pink-200">
              <div className="text-5xl text-pink-200">
                <motion.div
                  initial={{ opacity: 0, y: 0, x: 0 }}
                  animate={{ y: 0, x: 0, opacity: 1 }}
                >
                  {count}+
                </motion.div>
              </div>
            </div>
            <div>track and analyze ur product</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
