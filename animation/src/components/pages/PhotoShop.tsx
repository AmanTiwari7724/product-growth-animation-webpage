import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const PhotoShop = () => {
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

  return (
    <div className="w-full h-screen bg-gray-200 z-100 ">
      <div className="flex p-20">
        <div className="w-[30%] z-50  bg-black text-white py-16 ">
          <div className="text-left text-5xl flex flex-col gap-12 mx-20">
            {isVisible && (
              <motion.div
                ref={ref}
                initial={{ y: 20, opacity: -1 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 2 }}
                className="animated-text"
              >
                <p>Boost Secondary Feature</p>
              </motion.div>
            )}
            <motion.div
              ref={ref}
              initial={{ y: 20, opacity: -1 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2 }}
              className="animated-text"
            >
              <p>Increase Product</p>
            </motion.div>
            <motion.div
              ref={ref}
              initial={{ y: 20, opacity: -1 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2 }}
              className="animated-text"
            >
              <p>Growth And Upsell</p>
            </motion.div>
            <motion.div
              ref={ref}
              initial={{ y: 20, opacity: -1 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2 }}
              className="animated-text"
            >
              <p>The Stage That You Need</p>
            </motion.div>
          </div>
        </div>
        <div className="w-[70%]  bg-white pt-24 z-10 flex gap-2 ">
          {isVisible && (
            <motion.div
              initial={{ x: 0, y: 0 }}
              animate={{ x: -500, y: 0 }}
              transition={{ duration: 5 }}
              ref={ref}
            >
              <div className="w-[400px] h-[450px]  drop-shadow-xl bg-black m-4 rounded-lg">
                <div className="flex justify-center items-center py-8">
                  <img src="https://picsum.photos/200" alt="" />
                </div>
                <p className="text-center text-white px-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  mollitia totam rerum cupiditate nesciunt quaerat illum
                  incidunt eveniet vero iure.
                </p>
                <div className="flex items-center justify-center pt-4">
                  <button className="bg-black border text-white px-4 rounded py-1">
                    Start
                  </button>
                </div>
              </div>
            </motion.div>
          )}
          {isVisible && (
            <motion.div
              initial={{ x: 0, y: 0 }}
              animate={{ x: -600, y: 0 }}
              transition={{ duration: 6 }}
              ref={ref}
            >
              <div className="w-[400px] h-[450px]  drop-shadow-xl bg-white m-4 rounded-lg">
                <div className="flex justify-center items-center py-8">
                  <img src="https://picsum.photos/200" alt="" />
                </div>
                <p className="text-center px-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  mollitia totam rerum cupiditate nesciunt quaerat illum
                  incidunt eveniet vero iure.
                </p>
                <div className="flex items-center justify-center pt-4">
                  <button className="bg-black border text-white px-4 rounded py-1">
                    Start
                  </button>
                </div>
              </div>
            </motion.div>
          )}
          {isVisible && (
            <motion.div
              initial={{ x: 0, y: 0 }}
              animate={{ x: -600, y: 0 }}
              transition={{ duration: 6 }}
              ref={ref}
            >
              <div className="w-[400px] h-[450px]  drop-shadow-xl bg-black m-4 rounded-lg">
                <div className="flex justify-center items-center py-8">
                  <img src="https://picsum.photos/200" alt="" />
                </div>
                <p className="text-center text-white px-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  mollitia totam rerum cupiditate nesciunt quaerat illum
                  incidunt eveniet vero iure.
                </p>
                <div className="flex items-center justify-center pt-4">
                  <button className="bg-black border text-white px-4 rounded py-1">
                    Start
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PhotoShop;
