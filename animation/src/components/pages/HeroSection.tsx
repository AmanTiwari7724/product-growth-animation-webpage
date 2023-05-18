import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import AnimationText from "./AnimationText";
import Scroll from "./Scroll";
import { useInView } from "react-intersection-observer";

const HeroSection = () => {
  const [text, setText] = useState("");
  const [text1, setText1] = useState("");
  const [count, setCount] = useState(0);
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
        duration: 0.1,
        yoyo: Infinity,
        ease: "easeInOut",
      },
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
    let inCounter: any;

    const startCounter = () => {
      inCounter = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount >= 5000) {
            clearInterval(inCounter);
            return 5000;
          }
          return prevCount + 5;
        });
      }, 5);
    };

    const stopCounter = () => {
      clearInterval(inCounter);
    };

    const handleIntersection = (entries: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setCount(0); // Reset count when component becomes visible
          startCounter();
        } else {
          setIsVisible(false);
          stopCounter();
        }
      });
    };

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      clearInterval(inCounter);
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);
  return (
    <div className="bg-black py-24 m-24 h-screen">
      <div className="text-white">
        <div className="ml-48 text-white text-4xl text-bold">
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
        <div className="ml-48">
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
        <div className="flex items-center justify-around gap-8 text-white pt-24">
          <div className="flex flex-col gap-4 items-center">
            <div className="border border-gray-400 rounded-full p-2">
              <motion.div
                initial={{ x: 0, y: 0, opacity: -2 }}
                whileInView={{ x: 0, y: 0, opacity: 1 }}
                transition={{ duration: 4 }}
              >
                Company
              </motion.div>
            </div>
            <div className="text-5xl text-pink-200" ref={componentRef}>
              <motion.div
                initial={{ opacity: 0, y: 0, x: 0 }}
                animate={{ y: 0, x: 0, opacity: 1 }}
              >
                {count} K
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: -3, y: 0, x: 0 }}
              animate={{ y: 0, x: 0, opacity: 1 }}
              transition={{ duration: 8 }}
            >
              <div>track and analyze ur product</div>
            </motion.div>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <div className="border border-gray-400 rounded-full p-2">
              <motion.div
                initial={{ x: 0, y: 0, opacity: -2 }}
                whileInView={{ x: 0, y: 0, opacity: 1 }}
                transition={{ duration: 2 }}
              >
                Company
              </motion.div>
            </div>
            <div className="text-5xl text-pink-200">
              <div className="text-5xl text-pink-200">
                <motion.div
                  initial={{ opacity: 0, y: 0, x: 0 }}
                  animate={{ y: 0, x: 0, opacity: 1 }}
                >
                  {count} %
                </motion.div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: -3, y: 0, x: 0 }}
              animate={{ y: 0, x: 0, opacity: 1 }}
              transition={{ duration: 8 }}
            >
              <div>track and analyze ur product</div>
            </motion.div>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <div className="border  border-gray-400 rounded-full p-2">
              <motion.div
                initial={{ x: 0, y: 0, opacity: -2 }}
                whileInView={{ x: 0, y: 0, opacity: 1 }}
                transition={{ duration: 2 }}
              >
                Company
              </motion.div>
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
            <motion.div
              initial={{ opacity: -2, y: 0, x: 0 }}
              animate={{ y: 0, x: 0, opacity: 1 }}
              transition={{ duration: 6 }}
            >
              <div>track and analyze ur product</div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
