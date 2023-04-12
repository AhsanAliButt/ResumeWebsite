import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { YellowBulb } from "./icons/Icons";

const ColoringBulb = () => {
  const [color, setColor] = useState("#FCD34D"); // set initial color
  const changeColor = () => {
    const newColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`; // generate a random color
    setColor(newColor);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      changeColor();
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return <YellowBulb color={color} />;
};

export default ColoringBulb;
