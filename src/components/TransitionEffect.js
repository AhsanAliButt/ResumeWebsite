import React from "react";
import { motion } from "framer-motion";
const TransitionEffect = () => {
  return (
    <>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-primary"
        initial={{
          x: "100%",
          y: "100%",
        }}
        animatte={{
          x: "0%",
          y: "0%",
        }}
        exit={{
          x: ["0%", "100%"],
          width: ["0%", "100%"],
        }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-light"
        initial={{
          x: "100%",
          y: "100%",
        }}
        animatte={{
          x: "0%",
          y: "0%",
        }}
        transition={{
          delay: 0.2,
          duration: 0.8,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-dark"
        initial={{
          x: "100%",
          y: "100%",
        }}
        animatte={{
          x: "0%",
          y: "0%",
        }}
        transition={{
          delay: 0.4,
          duration: 0.8,
          ease: "easeInOut",
        }}
      />
    </>
  );
};

export default TransitionEffect;
