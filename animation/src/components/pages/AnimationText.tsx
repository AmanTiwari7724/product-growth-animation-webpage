import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AnimationText() {
  const [isVisible, setIsVisible] = useState(true);

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 },
  };

  return (
    <div>
      <AnimatePresence>
        {isVisible && (
          <motion.p
            key="text"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={variants}
            transition={{ duration: 0.5 }}
            color="white"
          >
            Animated text
          </motion.p>
        )}
      </AnimatePresence>

      <button onClick={() => setIsVisible(!isVisible)}>Toggle text</button>
    </div>
  );
}
