import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const style: any = {
  width: "300px",
  height: "300px",
  position: "absolute",
  left: "2000px",
  top: "-100px",
};

const Card = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1, // Percentage of the component's visibility in the viewport to trigger the callback
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <>
      <div className="w-full bg-gray-500 gap-4 pt-8 h-screen ">
        <div className="relative flex gap-8 mx-auto ml-8">
          {isVisible && (
            <motion.div
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{ duration: 2 }}
              className="border rounded-full p-4  w-44 text-center tracking-[10px]	 "
            >
              <motion.div
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ duration: 2 }}
                className={isVisible ? "fade-in" : ""}
                ref={ref}
              >
                <p className="text">hello</p>
              </motion.div>
            </motion.div>
          )}
          {isVisible && (
            <motion.div
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{ duration: 2 }}
              className="border rounded-full p-4 w-44 text-center tracking-[10px]"
            >
              <motion.div
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ duration: 2 }}
                className={isVisible ? "fade-in" : ""}
                ref={ref}
              >
                <p className="">hello</p>
              </motion.div>
            </motion.div>
          )}

          <motion.div
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 2 }}
            className="border rounded-full p-4 w-44 text-center tracking-[10px]"
          >
            <motion.div
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ duration: 2 }}
              className={isVisible ? "fade-in" : ""}
              ref={ref}
            >
              <p>hello</p>
            </motion.div>
          </motion.div>
        </div>
        <div className="flex mt-28 gap-2 ml-8">
          {isVisible && (
            <motion.div
              ref={ref}
              initial={{ x: 2000, y: -100, width: "100px", height: "100px" }}
              animate={{ y: -100, x: 0, width: "500px", height: "500px" }}
              transition={{ duration: 4 }}
            >
              <div className="w-full p-6 rounded-xl drop-shadow-lg bg-white h-full">
                <img src="https://picsum.photos/500" alt="" />
              </div>
              <p className="text-left mt-4 px-4 text-2xl font-bold">
                Aman Tiwari
              </p>
              <p className="text-left  px-4 text-xl">Software Developer</p>
            </motion.div>
          )}

          {isVisible && (
            <motion.div
              ref={ref}
              initial={{ x: 2010, y: -100, width: "100px", height: "100px" }}
              animate={{ y: -100, x: 0, width: "400px", height: "400px" }}
              transition={{ duration: 4 }}
            >
              <div className="w-full p-6 rounded-xl drop-shadow-lg bg-white h-full">
                <img src="https://picsum.photos/400" alt="" />
              </div>
              <p className="text-left mt-4 px-4 text-2xl font-bold">
                Aman Tiwari
              </p>
              <p className="text-left  px-4 text-xl">Software Developer</p>
            </motion.div>
          )}

          {isVisible && (
            <motion.div
              ref={ref}
              initial={{ x: 2000, y: -100, width: "100px", height: "100px" }}
              animate={{ y: -100, x: 0, width: "400px", height: "400px" }}
              transition={{ duration: 4 }}
            >
              <div className="w-full p-6 rounded-xl drop-shadow-lg bg-white h-full">
                <img src="https://picsum.photos/400" alt="" />
              </div>
              <p className="text-left mt-4 px-4 text-2xl font-bold">
                Aman Tiwari
              </p>
              <p className="text-left  px-4 text-xl">Software Developer</p>
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
};

export default Card;
