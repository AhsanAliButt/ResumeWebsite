import AnimatedText from "@/components/animatedText/AnimatedText";
import Layout from "@/components/layout/Layout";
import Head from "next/head";
import Image from "next/image";
import ProfilePic from "../../public/images/profile/My_Profile_Pic.jpg";
import { useEffect, useRef } from "react";
import { useMotionValue, useSpring, useInView, motion } from "framer-motion";
import Skills from "@/components/Skills";
const circles = [
  { diameter: 100, text: "Mercury", position: 10 },
  { diameter: 150, text: "Venus", position: 25 },
  { diameter: 200, text: "Earth", position: 40 },
  { diameter: 250, text: "Mars", position: 60 },
  { diameter: 300, text: "Jupiter", position: 75 },
  { diameter: 350, text: "Saturn", position: 90 },
  { diameter: 400, text: "Uranus", position: 10 },
  { diameter: 450, text: "Neptune", position: 25 },
];

import Experience from "@/components/experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";

const MovingCircle = () => {
  return (
    <motion.div
      className="circle"
      animate={{ x: 100, y: 100, rotate: 180 }}
      transition={{ duration: 2 }}
    >
      <p>Some text</p>
      <p>Some more text</p>
    </motion.div>
  );
};

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);
  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}> </span>;
};
const About = () => {
  return (
    <div>
      <Head>
        <title>AhsanNegative || About Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Passion fuels Purpose!"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8 ">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>

              <p className="sm:mb-2">
                Hi, I&apos;m Ahsan Ali, a web developer and UI/UX designer with
                a passion for creating beautiful, functional, and user-centered
                digital experiences. With 1.5 year of experience in the field. I
                am always looking for new and innovative ways to bring my
                clients visions to life.
              </p>
              <p className="sm:mb-2">
                - I believe that design is about more than just making things
                look pretty – it&apos;s about solving problems and creating
                intuitive, enjoyable experiences for users.
              </p>
              <p>
                - Whether I&apos;m working on a website, mobile app, or other
                digital product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 flex justify-center dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8 ">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-2xl bg-dark dark:bg-light " />
              <Image
                src={ProfilePic}
                alt="AhsanNegative"
                className="w-10/12 h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              {/* <div>
                    <span>
50+
                    </span>
                    <h2> Satisfied Clients</h2>
                </div> */}
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={10} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 sm:text-sm sm:font-bold">
                  {" "}
                  Projects Completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={2} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 sm:text-sm sm:font-bold">
                  Years of Exeperience
                </h2>
              </div>
            </div>
            {/* <SolarSystem /> */}
          </div>
          <Skills />
          {/* <MovingCircle /> */}

          <Experience />
          <Education />
        </Layout>
      </main>
    </div>
  );
};

export default About;
