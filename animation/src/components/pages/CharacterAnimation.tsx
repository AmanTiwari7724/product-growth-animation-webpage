import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AnimationText from "./AnimationText";

const CharacterAnimation = () => {
  const [text, setText] = useState("");
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");

  const typingAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
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
    const message2 = "Aman tiwari";
    let i = 0;
    const timeoutId = setInterval(() => {
      setText2(message2.substring(0, i));
      i++;
      if (i > message2.length) {
        clearInterval(timeoutId);
      }
    }, 100);
    return () => clearInterval(timeoutId);
  }, []);

  return (
    <div className="flex justify-around">
      <div>
        <div className="ml-8">
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
        <div className="ml-8">
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
      </div>
      <div>
        <div className="mt-4">
          <motion.span
            variants={typingAnimation}
            initial="hidden"
            animate="visible"
          >
            {text2.split("").map((char, index) => (
              <span className="text-2xl text-gray-600" key={index}>
                {char}
              </span>
            ))}
          </motion.span>
          
        </div>
        <AnimationText />
      </div>
    </div>
  );
};

export default CharacterAnimation;
