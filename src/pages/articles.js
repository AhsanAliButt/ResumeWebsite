import AnimatedText from "@/components/animatedText/AnimatedText";
import Layout from "@/components/layout/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import article1 from "../../public/images/articles/pagination component in reactjs.jpg";
import article2 from "../../public/images/articles/create loading screen in react js.jpg";
import { motion, useMotionValue } from "framer-motion";
const FramerImage = motion(Image);
const FeaturedArticles = ({ img, title, time, summary, link = "/" }) => {
  return (
    <>
      <li className="col-span-1 w-full p-4 bg-light border border-solid border-dark relative rounded-2xl dark:bg-dark dark:border-light">
        <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[102%] rounded-[1.5rem] bg-dark " />
        <Link
          href={"/"}
          target="_blank"
          className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
        >
          <FramerImage
            src={img}
            alt={title}
            className="w-full h-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            priority
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
          />
        </Link>
        <Link href={"/"} target="_blank">
          <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline">
            {title}
          </h2>
        </Link>
        <p className="text-sm mb-2">{summary}</p>
        <span className="text-primary font-semibold">{time}</span>
      </li>
    </>
  );
};

const MovingImg = ({ img, title, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);
  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }
  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }
  return (
    <>
      <Link
        href={link}
        target="_blank"
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
      >
        <h2
          className={
            "capitalize text-xl font-semibold hover:underline dark:text-light"
          }
        >
          {title}
        </h2>
        <FramerImage
          style={{ x: x, y: y }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
          ref={imgRef}
          src={img}
          alt={title}
          className="w-96 h-auto hidden absolute rounded-lg"
        />
      </Link>
    </>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{
        y: 0,
        transition: {
          duration: 1,
          ease: "easeInOut",
        },
      }}
      viewport={{ once: true }}
      className="dark:bg-dark border-r-4 border-b-4 relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark dark:border-light "
    >
      <MovingImg img={img} title={title} link={link} />
      <span className="text-primary font-semibold pl-4 dark:text-primaryDark">
        {date}
      </span>
    </motion.li>
  );
};

const Articles = () => {
  return (
    <div>
      <Head>
        <title> Ahsan Ali | Projects Page </title>
        <meta name="description" content="any description" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16">
          <AnimatedText text="Words Can Change The World! " className="mb-16" />
          <ul className="grid grid-cols-2 gap-16">
            <FeaturedArticles
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              summary="Learn how to build a custom pagination component in ReactJS from scratch. 
            Follow this step-by-step guide to integrate Pagination component in your ReactJS project.
            "
              time="9 min read"
              img={article1}
              link={"/"}
            />
            <FeaturedArticles
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              summary="Learn how to build a custom pagination component in ReactJS from scratch. 
            Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              time="9 min read"
              img={article2}
              link={"/"}
            />
          </ul>
          <h2 className="font-bold text-4xl w0full text-center my-16 mt-32">
            {" "}
            All Articles
          </h2>
          <ul>
            <Article
              title="Form Validation"
              img={article2}
              date="10-04-2923"
              link={"/"}
            />
            <Article
              title="Form Validation"
              img={article2}
              date="10-04-2923"
              link={"/"}
            />
            <Article
              title="Form Validation"
              img={article2}
              date="10-04-2923"
              link={"/"}
            />
            <Article
              title="Form Validation"
              img={article2}
              date="10-04-2923"
              link={"/"}
            />
            <Article
              title="Form Validation"
              img={article2}
              date="10-04-2923"
              link={"/"}
            />
            <Article
              title="Form Validation"
              img={article2}
              date="10-04-2923"
              link={"/"}
            />
            <Article
              title="Form Validation"
              img={article2}
              date="10-04-2923"
              link={"/"}
            />
            <Article
              title="Form Validation"
              img={article2}
              date="10-04-2923"
              link={"/"}
            />
          </ul>
        </Layout>
      </main>
    </div>
  );
};

export default Articles;
