import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AnimationText() {
  const [isVisible, setIsVisible] = useState(false);

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: "100%" },
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div>
      <div className="text-center ">
        <AnimatePresence>
          {isVisible && (
            <motion.p
              key="text"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={variants}
              transition={{ duration: 6 }}
              color="white"
              style={{
                // position: "fixed",
                bottom: 0,
                left: 0,
                right: 0,
                // backgroundColor: "black",
                padding: "200px",
                fontWeight: "bold",
                fontSize: "40px",
              }}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
              cumque id quos animi numquam voluptatibus quam commodi laudantium,
              suscipit eligendi exercitationem culpa odit provident in
              recusandae tempora impedit?
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
