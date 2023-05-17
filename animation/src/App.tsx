import React, { useState, useEffect } from "react";
import Draw from "./components/pages/Draw";

import { motion } from "framer-motion";
import Card from "./components/pages/Card";
import AnimationText from "./components/pages/AnimationText";
import CharacterAnimation from "./components/pages/CharacterAnimation";

function App() {
  const [count, setCount] = useState(0);

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
    <>
      <div className=" w-full ">
        <div>
          <Card />
        </div>

        {/* <Draw /> */}

        <div className="pt-10">
          <motion.div
            initial={{ opacity: 0, y: 200, x: 100 }}
            animate={{ y: -100, x: 0, opacity: 1 }}
            transition={{ duration: 2, type: "spring", stiffness: 200 }}
          >
            <p className="text-white text-4xl">hello world {count}</p>
          </motion.div>
        </div>

        <div>
          <CharacterAnimation />
        </div>
      </div>
    </>
  );
}

export default App;
