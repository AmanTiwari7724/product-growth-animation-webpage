import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import image from "../../assets/image.svg";
import { useInView } from "react-intersection-observer";

const Scroll = () => {
  const [text, setText] = useState("");
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const componentRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const message = "Stages of the user";
  const message1 = "Journey.";
  const [ref, inView] = useInView({
    // triggerOnce: true,
    threshold: 1,
  });

  const typingAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        yoyo: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const typingAnimation1 = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  useEffect(() => {
    if (inView) {
      // Start the animation when the component is in view

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
    }
  }, [inView]);

  useEffect(() => {
    const message2 =
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur earum nisi impedit quidem odio veritatis qui amet in beatae fuga !!!";
    let i = 0;
    let timeoutId: any;

    const animateText = () => {
      timeoutId = setInterval(() => {
        setText2(message2.substring(0, i));
        i++;
        if (i > message2.length) {
          clearInterval(timeoutId);
        }
      }, 100);
    };

    if (inView) {
      animateText();
    }

    return () => {
      clearInterval(timeoutId);
    };
  }, [inView]);

  return (
    <div>
      <div className="mt-20 flex  ">
        <div className="w-[50%] ml-28">
          <motion.span
            ref={ref}
            variants={typingAnimation}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {text.split("").map((char, index) => (
              <span className="text-7xl font-bold" key={index}>
                {char}
              </span>
            ))}
          </motion.span>
        </div>
        <div className="w-[50%] flex gap-4 ">
          <motion.div
            whileInView={{ rotate: 360 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            <div className="border border-black rounded-full p-4 h-20 w-20 flex justify-center items-center bg-pink-300">
              hello
            </div>
          </motion.div>
          <motion.span
            ref={ref}
            variants={typingAnimation1}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {text2.split("").map((char, index) => (
              <span className="text-2xl text-gray-600" key={index}>
                {char}
              </span>
            ))}
          </motion.span>
        </div>
      </div>
      <div className="ml-28  ">
        {text.length === message.length && (
          <motion.span
            ref={ref}
            variants={typingAnimation}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {text1.split("").map((char, index) => (
              <span className="text-7xl font-bold" key={index}>
                {char}
              </span>
            ))}
          </motion.span>
        )}
      </div>
      <div className="flex justify-end"></div>
      <div className="mt-[250px] flex">
        <motion.div
          initial={{ x: 1200, y: -100, skewX: 30 }}
          whileInView={{ x: 1000, y: 0 }}
          transition={{ duration: 0.9 }}
          // style={{ marginRight: "20px" }}
        >
          <img src={image} alt="" />
        </motion.div>
        <motion.div
          initial={{ x: 900, y: -100, skewX: 30 }}
          whileInView={{ x: 450, y: -70, rotate: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={image} alt="" />
        </motion.div>
        <motion.div
          initial={{ x: 800, y: -100, skewX: 30 }}
          whileInView={{ x: -100, y: -140, rotate: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={image} alt="" />
        </motion.div>
      </div>
    </div>
  );
};

export default Scroll;
