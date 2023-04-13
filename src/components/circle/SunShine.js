import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Web = () => {
  return (
    <motion.div
      className="web"
      animate={{
        rotate: 360,
        transition: {
          duration: 6,
          repeat: Infinity,
          ease: "linear",
        },
      }}
      style={{
        height: "100px",
        width: "100px",
        backgroundColor: "yellow",
        borderRadius: "50%",
        position: "absolute",
        top: "calc(50% - 50px)",
        left: "calc(50% - 50px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "2rem",
        fontWeight: "bold",
        zIndex: 1,
      }}
    >
      Web
    </motion.div>
  );
};

const Skill = ({ name, level, experience, color }) => {
  const [orbitAngle, setOrbitAngle] = useState(0);
  const radius = level * 5;
  const orbitSize = radius * 2 + level * 2;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setOrbitAngle((prevAngle) => prevAngle + 1);
    }, (experience / 360) * 100);
    return () => clearInterval(intervalId);
  }, [experience]);

  return (
    <motion.div
      className={`skill ${name.toLowerCase()}`}
      style={{
        backgroundColor: color,
        height: level * 2,
        width: level * 2,
        borderRadius: "50%",
        position: "absolute",
        top: `calc(50% - ${radius}px)`,
        left: `calc(50% - ${radius}px)`,
        transform: `rotate(${orbitAngle}deg) translate(${radius}rem) rotate(-${orbitAngle}deg)`,
        zIndex: 2,
      }}
    >
      <motion.div
        className="orbit"
        style={{
          height: orbitSize,
          width: orbitSize,
          borderRadius: "50%",
          position: "absolute",
          top: `calc(50% - ${radius + level}px)`,
          left: `calc(50% - ${radius + level}px)`,
          border: "1px dashed white",
          zIndex: 1,
        }}
        animate={{
          rotate: 360,
          transition: {
            duration: experience / 10,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      />
    </motion.div>
  );
};

const SolarSystem = () => {
  return (
    <div className="solar-system">
      <Web />
      <Skill name="React" level={5} experience={270} color="cyan" />
      <Skill name="JavaScript" level={4} experience={180} color="orange" />
      <Skill name="Node.js" level={3} experience={90} color="green" />
      <Skill name="CSS" level={2} experience={45} color="purple" />
    </div>
  );
};

export default SolarSystem;
