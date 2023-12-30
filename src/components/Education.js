import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Lilcon from "./Lilcon";

const Details = ({ info, time, type, place }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <Lilcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className=" capitalize font-bold text-2xl sm:text-xl xs:text-lg ">
          {type}
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} || {place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64 sm:my-12">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Education
      </h2>
      <div
        // style={{ scaleY: scrollYProgress }}
        ref={ref}
        className="w-[75%] mx-auto relative lg:w-[90%] md:w-full"
      >
        <motion.div
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
          style={{
            scaleY: scrollYProgress,
          }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 mb-8 xs:ml-2">
          <Details
            type={"I.COM"}
            time="2005-2007"
            place="Shibble College of Computer Science and Commerce"
            info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
Intelligence."
          />
          <Details
            type={"B.COM"}
            time="2009-2011"
            place="Punjab University Lahore"
            info="Completed my bachelors from Punjab university lahore as a private student currently enrolled in shibble college."
          />
          <Details
            type={"Advance Webdevelopment and App Development"}
            time="2020-2022"
            place="SMIT"
            info="Relevant courses included Mern Stack technology and mobile applications development using the reactive programming framework"
          />
          <Details
            type={
              "WEB 3.0 Advance Web Development BlockChain and Artificial intelligence(Continue ...)"
            }
            time="2005-2007"
            place="PIAIC(Currently in roll)"
            info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
Intelligence."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
