import { motion } from "framer-motion";
import { CircleWithText } from "./CircleWithText";

const CircleText = ({ circleCount }) => {
  const circles = Array.from(Array(circleCount).keys());

  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
      {circles.map((index) => (
        <CircleWithText
          key={index}
          radius={100 + index * 30}
          text={`Planet ${index + 1}`}
          speed={index + 1}
          offset={index * (360 / circleCount)}
        />
      ))}
    </div>
  );
};

export default CircleText;
