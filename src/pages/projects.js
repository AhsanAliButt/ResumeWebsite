import React from "react";
import AnimatedText from "@/components/animatedText/AnimatedText";
import Layout from "@/components/layout/Layout";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Project1 from "../../public/images/AhsanNegative.png";
import { GitHubIcon } from "@/components/icons/Icons";
import { motion } from "framer-motion";
const FramerImage = motion(Image);
const Projects = () => {
  return (
    <>
      <Head>
        <title> Ahsan Ali | Projects Page </title>
        <meta name="description" content="any description" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="My 2 years Journey in WebDevelopment"
            className="mb-16"
          />{" "}
          <div className="grid grid-cols-12 gap-24 gap-y-32">
            <div className="col-span-12">
              <FeaturedProject
                title="Admin Dashboard"
                summary="Created This Mern Stack Project with React Js,Redux Toolkit , Redux Querry Toolkit, Material Ui , Nivo Graphs in Front End and Node Js, Express Js and Mongodb as Backend specially focused on backend sorting "
                link="/"
                type="Featured Project"
                github="https://github.com/AhsanAliButt/MernAdminDashBoard"
              />
            </div>
            <div className="col-span-6">
              {" "}
              <Project
                title="Admin Dashboard"
                summary="Created This Mern Stack Project with React Js,Redux Toolkit , Redux Querry Toolkit, Material Ui , Nivo Graphs in Front End and Node Js, Express Js and Mongodb as Backend specially focused on backend sorting "
                link="/"
                github="https://github.com/AhsanAliButt/MernAdminDashBoard"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Admin Dashboard"
                summary="Created This Mern Stack Project with React Js,Redux Toolkit , Redux Querry Toolkit, Material Ui , Nivo Graphs in Front End and Node Js, Express Js and Mongodb as Backend specially focused on backend sorting "
                link="/"
                github="https://github.com/AhsanAliButt/MernAdminDashBoard"
              />
            </div>
            <div className="col-span-12">
              {" "}
              <FeaturedProject
                title="Admin Dashboard"
                summary="Created This Mern Stack Project with React Js,Redux Toolkit , Redux Querry Toolkit, Material Ui , Nivo Graphs in Front End and Node Js, Express Js and Mongodb as Backend specially focused on backend sorting "
                link="/"
                type="Featured Project"
                github="https://github.com/AhsanAliButt/MernAdminDashBoard"
              />
            </div>
            <div className="col-span-6">
              {" "}
              <Project
                title="Admin Dashboard"
                summary="Created This Mern Stack Project with React Js,Redux Toolkit , Redux Querry Toolkit, Material Ui , Nivo Graphs in Front End and Node Js, Express Js and Mongodb as Backend specially focused on backend sorting "
                link="/"
                github="https://github.com/AhsanAliButt/MernAdminDashBoard"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Admin Dashboard"
                summary="Created This Mern Stack Project with React Js,Redux Toolkit , Redux Querry Toolkit, Material Ui , Nivo Graphs in Front End and Node Js, Express Js and Mongodb as Backend specially focused on backend sorting "
                link="/"
                github="https://github.com/AhsanAliButt/MernAdminDashBoard"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Projects;

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid relative border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light dark:text-light">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark " />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={Project1}
          alt="AhsanNegative"
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-primaryDark">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GitHubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark"
          >
            {" "}
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center relative justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light dark:text-light">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[102%] rounded-[1.5rem] bg-dark dark:bg-light " />
      <Link
        href={link}
        target="_blank"
        className="cursor-pointer inline-block overflow-hidden rounded-lg"
      >
        <FramerImage
          src={Project1}
          alt="AhsanNegative"
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
        />
      </Link>
      <div className=" flex flex-col items-start justify-between mt-2">
        {/* <span className="text-primary font-medium text-xl dark:text-primaryDark">
          {type}
        </span> */}
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-primaryDark">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link href={github} target="_blank" className="w-8">
            <GitHubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="underline rounded-lg text-dark p-2 px-6 text-lg font-semibold dark:text-primaryDark"
          >
            {" "}
            Visit
          </Link>
        </div>
      </div>
    </article>
  );
};
