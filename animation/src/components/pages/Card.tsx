import React from "react";
import { motion } from "framer-motion";

const style: any = {
  width: "300px",
  height: "300px",
  position: "absolute",
  left: "2000px",
  top: "-100px",
};

const Card = () => {
  return (
    <>
      <div className="w-full bg-gray-500 gap-4 pt-8 ">
        <div className="relative flex gap-4 mx-auto">
          <motion.div
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 2, delay: 2 }}
            className="border rounded-full p-4 w-24 text-center"
          >
            <motion.div
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              transition={{ duration: 2, delay: 4 }}
            >
              <p>hello</p>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ x: -280 }}
            animate={{ x: 0 }}
            transition={{ duration: 2, delay: 2 }}
            className="border rounded-full p-4 w-24 text-center"
          >
            <p>hello</p>
          </motion.div>
          <motion.div
            initial={{ x: -380 }}
            animate={{ x: 0 }}
            transition={{ duration: 2, delay: 2 }}
            className="border rounded-full p-4 w-24 text-center"
          >
            <p>hello</p>
          </motion.div>
        </div>
        <div className="flex mt-28 gap-2">
          <motion.div
            initial={{ x: 2000, y: -100, width: "100px", height: "100px" }}
            animate={{ y: -100, x: 0, width: "300px", height: "300px" }}
            transition={{ duration: 4 }}
          >
            <div className="w-full p-6 rounded-xl drop-shadow-lg bg-white h-full">
              <img src="https://picsum.photos/400" alt="" />
            </div>
            <p className="text-center">Hello world</p>
          </motion.div>

          <motion.div
            initial={{ x: 2010, y: -100, height: "100px" }}
            animate={{ y: -100, x: 0, width: "200px", height: "200px" }}
            transition={{ duration: 4 }}
          >
            <div className="w-full p-6 rounded-xl drop-shadow-lg bg-white h-full">
              <img src="https://picsum.photos/150" alt="" />
            </div>
            <p className="text-center">Hello world</p>
          </motion.div>

          <motion.div
            initial={{ x: 2020, y: -100, height: "100px" }}
            animate={{ y: -100, x: 0, width: "200px", height: "200px" }}
            transition={{ duration: 4 }}
          >
            <div className="w-full p-6 rounded-xl drop-shadow-lg bg-white h-full">
              <img src="https://picsum.photos/150" alt="" />
            </div>
            <p className="text-center">Hello world</p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Card;
