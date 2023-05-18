import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AnimationText from "./AnimationText";
import { useInView } from "react-intersection-observer";

const CharacterAnimation = () => {
  const [text, setText] = useState("");
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const message = "Stages of the user";
  const message1 = "Journey.";
  const [ref, inView] = useInView({
    // triggerOnce: true,
    threshold: 1,
  });
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

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

  useEffect(() => {
    const message2 = "When The Morning Dawns ";
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

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
    });

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: -100 },
  };

  return (
    <>
      <div className="w-full mt-20 bg-gray-200 h-screen">
        <div className="flex justify-around pt-28">
          <div className="flex flex-col">
            <motion.span
              variants={typingAnimation}
              initial="hidden"
              whileInView="visible"
              ref={ref}
            >
              {text.split("").map((char, index) => (
                <span className="text-7xl font-bold" key={index}>
                  {char}
                </span>
              ))}
            </motion.span>
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
          <div>
            <motion.span
              variants={typingAnimation}
              initial="hidden"
              whileInView="visible"
              ref={ref}
            >
              {text2.split("").map((char, index) => (
                <span className="text-2xl text-gray-600" key={index}>
                  {char}
                </span>
              ))}
            </motion.span>
          </div>
        </div>
        <div ref={componentRef}>
          {componentRef.current && (
            <motion.p
              key="text"
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              exit="hidden"
              variants={variants}
              transition={{ duration: 1 }}
              color="white"
              style={{
                bottom: 0,
                left: 0,
                right: 0,
                paddingTop: "200px",
                paddingRight: "40px",
                paddingLeft: "40px",
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
        </div>
        <div className="mx-8 flex justify-between">
          {componentRef.current && (
            <motion.div initial={{ opacity: -8 }} whileInView={{ opacity: 1 }} transition={{duration:4}}>
              <div className="flex gap-16 items-center ">
                <div className="h-18 w-18 border p-2 " ref={componentRef}>
                  <img
                    className="rounded-full"
                    src="https://picsum.photos/50"
                    alt=""
                  />
                </div>
                <div className="text-center text-lg">Aman tiwari</div>
              </div>
            </motion.div>
          )}

          <div>
            <p className="flex items-center">Boot camps in progress</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CharacterAnimation;
