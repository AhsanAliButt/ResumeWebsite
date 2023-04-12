import { motion } from "framer-motion";

export const CircleWithText = ({ radius, text, speed, offset }) => {
  return (
    <motion.div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        width: radius * 2,
        height: radius * 2,
        borderRadius: "50%",
        border: "1px solid black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transform: `translate(-50%, -50%) rotate(${offset}deg)`,
      }}
      animate={{ rotate: `+=${speed}` }}
      transition={{ loop: Infinity, duration: 1 }}
    >
      <motion.span
        style={{ position: "absolute", left: "50%", top: "50%" }}
        animate={{ rotate: `+=${-offset}deg` }}
        transition={{ loop: Infinity, duration: 1 }}
      >
        {text}
      </motion.span>
    </motion.div>
  );
};
